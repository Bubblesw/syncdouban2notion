const request = require("superagent");
const DOUBAN_API_HOST = process.env.DOUBAN_API_HOST || "frodo.douban.com";
const DOUBAN_API_KEY = process.env.DOUBAN_API_KEY;
const userName = process.env.DOUBAN_NAME;
const NOTION_TOKEN = process.env.NOTION_TOKEN;
const MOVIE_DATABASE_ID = process.env.MOVIE_DATABASE_ID;

// 演员只取前 x 个
const ACTOR_COUNT = 3;

if (!DOUBAN_API_KEY) {
  throw new Error("请设置 DOUBAN_API_KEY 环境变量");
}
if (!userName) {
  throw new Error("请设置 DOUBAN_NAME 环境变量");
}
if (!NOTION_TOKEN) {
  throw new Error("请设置 NOTION_TOKEN 环境变量");
}
if (!MOVIE_DATABASE_ID) {
  throw new Error("请设置 MOVIE_DATABASE_ID 环境变量");
}
const Headers = {
  host: DOUBAN_API_HOST,
  "user-agent":
    "User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001023) NetType/WIFI Language/zh_CN",
  referer: "https://servicewechat.com/wx2f9b06c1de1ccfca/84/page-frame.html",
};

async function fetchSubjects(user, type, status) {
  let offset = 0;
  let page = 0;
  const url = `https://${DOUBAN_API_HOST}/api/v2/user/${user}/interests`;
  const results = [];

  while (true) {
    const params = {
      type,
      count: 50,
      status,
      start: offset,
      apiKey: DOUBAN_API_KEY,
    };

    try {
      const response = await request
        .get(url, { ...params })
        .set({ ...Headers })
        .retry(3);

      const respData = response.body;
      const { interests } = respData;

      if (interests.length === 0) {
        break;
      }

      results.push(...interests);
      console.log(`size = ${results.length}`);

      page++;
      offset = page * 50;
    } catch (error) {
      console.error("Error:", error);
      break;
    }
  }

  return results;
}

const { Client } = require("@notionhq/client");

// Initializing a client
const notion = new Client({
  auth: NOTION_TOKEN,
});

// 获取全部导演
const getAllDirector = async (directorDBId) => {
  let start_cursor;
  let hasMore = true;
  const result = [];
  while (hasMore) {
    const response = await notion.databases.query({
      database_id: directorDBId,
      page_size: 100,
      start_cursor,
    });
    const { results } = response;
    start_cursor = response.next_cursor;
    hasMore = response.has_more;
    result.push(...results);
  }
  return result;
};

// 获取全部演员
const getAllActor = async (actorDBId) => {
  let start_cursor;
  let hasMore = true;
  const result = [];
  while (hasMore) {
    const response = await notion.databases.query({
      database_id: actorDBId,
      page_size: 100,
      start_cursor,
    });
    const { results } = response;
    start_cursor = response.next_cursor;
    hasMore = response.has_more;
    result.push(...results);
  }
  return result;
};

// 获取全部类型
const getAllType = async (typeDBId) => {
  let start_cursor;
  let hasMore = true;
  const result = [];
  while (hasMore) {
    const response = await notion.databases.query({
      database_id: typeDBId,
      page_size: 100,
      start_cursor,
    });
    const { results } = response;
    start_cursor = response.next_cursor;
    hasMore = response.has_more;
    result.push(...results);
  }
  return result;
};

// 获取全部电影
const getAllMovie = async (movieDBId) => {
  let start_cursor;
  let hasMore = true;
  const result = [];
  while (hasMore) {
    const response = await notion.databases.query({
      database_id: movieDBId,
      page_size: 100,
      start_cursor,
    });
    const { results } = response;
    start_cursor = response.next_cursor;
    hasMore = response.has_more;
    result.push(...results);
  }
  return result;
};

const bootstrap = async () => {
  console.log("获取豆瓣数据");
  const watchedList = await fetchSubjects(userName, "movie", "done");
  const markList = await fetchSubjects(userName, "movie", "mark");
  const totalList = [...watchedList, ...markList];

  console.log(`获取到${totalList.length}条数据`);
  console.log("开始获取数据库信息");
  const databaseInfo = await notion.databases.retrieve({
    database_id: MOVIE_DATABASE_ID,
  });

  // 获取关联属性表id
  const { 导演, 演员, 分类 } = databaseInfo.properties || {};
  const directorDBId = 导演.relation.database_id;
  const actorDBId = 演员.relation.database_id;
  const typeDBId = 分类.relation.database_id;
  // 获取全部导演
  const directorMap = new Set();
  totalList.forEach((item) => {
    const { directors } = item.subject;
    directors.forEach((director) => {
      directorMap.add(director.name);
    });
  });
  const directorList = Array.from(directorMap);

  console.log("获取导演数据库数据...");
  const rawDirectorList = await getAllDirector(directorDBId);
  console.log("获取导演数据库数据成功");
  const directorIdMap = new Map();
  rawDirectorList.forEach((item) => {
    directorIdMap.set(item.properties.导演.title[0].text.content, item.id);
  });

  console.log("查找需要更新的导演数据");
  const needUpdateDirectorList = directorList.filter(
    (item) => !directorIdMap.has(item)
  );
  console.log("需要更新这些导演：", needUpdateDirectorList);
  for (let i = 0; i < needUpdateDirectorList.length; i++) {
    // Create a new page (post)
    const params = {
      icon: {
        type: "emoji",
        emoji: "🎬",
      },
      parent: {
        type: "database_id",
        database_id: directorDBId,
      },
      properties: {
        导演: {
          title: [
            {
              type: "text",
              text: {
                content: needUpdateDirectorList[i],
                link: null,
              },
            },
          ],
        },
      },
    };
    const response = await notion.pages.create(params);
    directorIdMap.set(needUpdateDirectorList[i], response.id);
    console.log(`添加${needUpdateDirectorList[i]}成功`);
  }

  console.log(`更新导演数据成功！`);

  // 获取全部演员
  const actorMap = new Set();
  totalList.forEach((item) => {
    const { actors } = item.subject;
    actors.slice(0, ACTOR_COUNT).forEach((actor) => {
      actorMap.add(actor.name);
    });
  });
  const actorList = Array.from(actorMap);

  console.log("获取全部演员数据...");
  const rawActorList = await getAllActor(actorDBId);
  console.log("获取全部演员数据成功");

  const actorIdMap = new Map();
  rawActorList.forEach((item) => {
    actorIdMap.set(item.properties.演员.title[0].text.content, item.id);
  });

  console.log("计算需要更新的演员");
  const needUpdateActorList = actorList.filter((item) => !actorIdMap.has(item));
  console.log("需要更新这些演员", needUpdateActorList);

  for (let i = 0; i < needUpdateActorList.length; i++) {
    // Create a new page (post)
    const params = {
      icon: {
        type: "emoji",
        emoji: "🎬",
      },
      parent: {
        type: "database_id",
        database_id: actorDBId,
      },
      properties: {
        演员: {
          title: [
            {
              type: "text",
              text: {
                content: needUpdateActorList[i],
                link: null,
              },
            },
          ],
        },
      },
    };
    const response = await notion.pages.create(params);
    actorIdMap.set(needUpdateActorList[i], response.id);
    console.log(`添加${needUpdateActorList[i]}成功`);
  }

  console.log(`更新演员数据成功！`);

  // 获取全部分类
  const typeMap = new Set();
  totalList.forEach((item) => {
    const { genres } = item.subject;
    genres.forEach((type) => {
      typeMap.add(type);
    });
  });
  const typeList = Array.from(typeMap);

  console.log("获取电影分类数据...");
  const rawTypeList = await getAllType(typeDBId);
  console.log("获取电影分类数据成功");

  const typeIdMap = new Map();
  rawTypeList.forEach((item) => {
    typeIdMap.set(item.properties.标题.title[0].text.content, item.id);
  });

  console.log("计算需要更新的电影分类");
  const needUpdateTypeList = typeList.filter((item) => !typeIdMap.has(item));
  console.log("这些电影分类需要更新", needUpdateTypeList);

  for (let i = 0; i < needUpdateTypeList.length; i++) {
    // Create a new page (post)
    const params = {
      icon: {
        type: "emoji",
        emoji: "🎬",
      },
      parent: {
        type: "database_id",
        database_id: typeDBId,
      },
      properties: {
        标题: {
          title: [
            {
              type: "text",
              text: {
                content: needUpdateTypeList[i],
                link: null,
              },
            },
          ],
        },
      },
    };
    const response = await notion.pages.create(params);
    typeIdMap.set(needUpdateTypeList[i], response.id);
    console.log(`添加${needUpdateTypeList[i]}成功`);
  }

  console.log(`更新电影分类数据成功！`);

  // 获取全部电影
  const movieSet = new Set();
  totalList.forEach((item) => {
    movieSet.add(item.subject.id);
  });
  const movieList = Array.from(movieSet);
  console.log("获取全部电影数据...");

  const rawMovieList = await getAllMovie(MOVIE_DATABASE_ID);
  const movieIdSet = new Set();
  rawMovieList.forEach((item) => {
    movieIdSet.add(item.properties.id.number);
  });

  console.log("计算需要更新的电影");
  const needUpdateMovieList = movieList.filter(
    (item) => !movieIdSet.has(+item)
  );
  console.log("需要更新这些电影", needUpdateMovieList);

  console.log("开始插入电影数据");
  // 开始插入电影数据
  for (let i = 0; i < needUpdateMovieList.length; i++) {
    const targetInfo = totalList.find(
      (item) => item.subject.id === needUpdateMovieList[i]
    );
    // Create a new page (post)
    const params = {
      icon: {
        type: "external",
        external: {
          url: targetInfo.subject.cover_url,
        },
      },
      parent: {
        type: "database_id",
        database_id: MOVIE_DATABASE_ID,
      },
      properties: {
        电影名: {
          title: [
            {
              type: "text",
              text: {
                content: targetInfo.subject.title,
                link: {
                  url: targetInfo.subject.url,
                },
              },
            },
          ],
        },
        id: {
          number: +targetInfo.subject.id,
        },
        短评: {
          rich_text: [
            {
              type: "text",
              text: {
                content: targetInfo.comment,
                link: null,
              },
              annotations: {
                bold: false,
                italic: false,
                strikethrough: false,
                underline: false,
                code: false,
                color: "default",
              },
              plain_text: "There is some ",
              href: null,
            },
          ],
        },
        评分: {
          number: targetInfo.rating ? targetInfo.rating.star_count : null,
        },
        封面: {
          files: [
            {
              name: "cover",
              external: {
                url: targetInfo.subject.cover_url,
              },
            },
          ],
        },
        链接: {
          url: targetInfo.subject.url,
        },
        观看日期: {
          date: {
            start: targetInfo.create_time,
          },
        },
        分类: {
          relation: targetInfo.subject.genres.map((i) => {
            return {
              id: typeIdMap.get(i),
            };
          }),
        },
        导演: {
          relation: targetInfo.subject.directors.map((i) => {
            return {
              id: directorIdMap.get(i.name),
            };
          }),
        },
        演员: {
          relation: targetInfo.subject.actors.slice(0, ACTOR_COUNT).map((i) => {
            return {
              id: actorIdMap.get(i.name),
            };
          }),
        },
        状态: {
          select: {
            name: targetInfo.status === "done" ? "看过" : "想看",
          },
        },
      },
    };
    await notion.pages.create(params);
    console.log(`添加${targetInfo.subject.title}成功`);
  }
};

bootstrap();
