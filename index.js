// const request = require("superagent");
// const DOUBAN_API_HOST = process.env.DOUBAN_API_HOST || "frodo.douban.com";
// const DOUBAN_API_KEY =
//   process.env.DOUBAN_API_KEY || "0ac44ae016490db2204ce0a042db2916";
// const userName = process.env.DOUBAN_NAME || "danyin-v2lab";
// const fs = require("fs");

// const Headers = {
//   host: DOUBAN_API_HOST,
//   "user-agent":
//     "User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 15_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001023) NetType/WIFI Language/zh_CN",
//   referer: "https://servicewechat.com/wx2f9b06c1de1ccfca/84/page-frame.html",
// };

// async function fetchSubjects(user, type, status) {
//   let offset = 0;
//   let page = 0;
//   const url = `https://${DOUBAN_API_HOST}/api/v2/user/${user}/interests`;
//   const results = [];

//   while (true) {
//     const params = {
//       type,
//       count: 50,
//       status,
//       start: offset,
//       apiKey: DOUBAN_API_KEY,
//     };

//     try {
//       const response = await request
//         .get(url, { ...params })
//         .set({ ...Headers })
//         .retry(3);

//       console.log(6666, response.body);
//       const respData = response.body;
//       const { count, start, interests } = respData;

//       if (interests.length === 0) {
//         break;
//       }

//       results.push(...interests);
//       console.log(`size = ${results.length}`);

//       page++;
//       offset = page * 50;
//     } catch (error) {
//       console.error("Error:", error);
//       break;
//     }
//   }

//   return results;
// }

// fetchSubjects(userName, "movie", "done").then((result) => {
//   console.log(1231233, result);
//   fs.writeFileSync("./douban.json", JSON.stringify(result), "utf8");
// });

const mockList = [
  {
    comment: "",
    rating: {
      count: 1,
      max: 5,
      star_count: 5,
      value: 5,
    },
    sharing_text:
      "我的评分：★★★★★ https://movie.douban.com/subject/26816104/ 来自@豆瓣App",
    sharing_url:
      "https://www.douban.com/doubanapp/dispatch?uri=/subject/26816104/interest/4294376730",
    tags: [],
    charts: [],
    platforms: [],
    vote_count: 0,
    create_time: "2024-09-08 14:55:51",
    status: "done",
    id: 4294376730,
    is_private: false,
    subject: {
      rating: {
        count: 150932,
        max: 10,
        star_count: 4,
        value: 7.5,
      },
      controversy_reason: "",
      pubdate: ["2024-08-02(中国大陆)"],
      pic: {
        large:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2911256273.jpg",
        normal:
          "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2911256273.jpg",
      },
      honor_infos: [],
      is_show: false,
      vendor_icons: [],
      year: "2024",
      card_subtitle: "2024 / 中国大陆 / 喜剧 科幻 / 李阳 / 张若昀 钟楚曦",
      id: "26816104",
      genres: ["喜剧", "科幻"],
      title: "从21世纪安全撤离",
      is_released: true,
      actors: [
        {
          name: "张若昀",
        },
        {
          name: "钟楚曦",
        },
        {
          name: "宋洋",
        },
        {
          name: "吴晓亮",
        },
        {
          name: "朱颜曼滋",
        },
        {
          name: "李晨浩",
        },
        {
          name: "温峥嵘",
        },
        {
          name: "石凉",
        },
        {
          name: "陈一辰",
        },
        {
          name: "李卓钊",
        },
        {
          name: "康启轩",
        },
        {
          name: "马凡丁",
        },
      ],
      color_scheme: {
        is_dark: true,
        primary_color_light: "726355",
        _base_color: [
          0.07777777777777779, 0.25423728813559326, 0.23137254901960785,
        ],
        secondary_color: "f9f7f4",
        _avg_color: [
          0.08156028368794326, 0.4311926605504587, 0.42745098039215684,
        ],
        primary_color_dark: "4c4239",
      },
      type: "movie",
      has_linewatch: false,
      vendor_desc: "",
      cover_url:
        "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2911256273.jpg",
      sharing_url: "https://movie.douban.com/subject/26816104/",
      url: "https://movie.douban.com/subject/26816104/",
      release_date: null,
      uri: "douban://douban.com/movie/26816104",
      subtype: "movie",
      directors: [
        {
          name: "李阳",
        },
      ],
      album_no_interact: false,
      article_intros: [],
      null_rating_reason: "",
    },
  },
  {
    comment: "",
    rating: null,
    sharing_text: "https://movie.douban.com/subject/36463483/ 来自@豆瓣App",
    sharing_url:
      "https://www.douban.com/doubanapp/dispatch?uri=/subject/36463483/interest/4269166073",
    tags: [],
    charts: [],
    platforms: [],
    vote_count: 0,
    create_time: "2024-08-11 17:32:13",
    status: "done",
    id: 4269166073,
    is_private: false,
    subject: {
      rating: {
        count: 70702,
        max: 10,
        star_count: 3.5,
        value: 7.1,
      },
      controversy_reason: "",
      pubdate: ["2024-08-10(中国大陆)"],
      pic: {
        large:
          "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2911337432.jpg",
        normal:
          "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2911337432.jpg",
      },
      honor_infos: [],
      is_show: false,
      vendor_icons: [],
      year: "2024",
      card_subtitle:
        "2024 / 中国大陆 / 喜剧 爱情 动画 奇幻 / 陈健喜 李佳锴 / 张喆 杨天翔",
      id: "36463483",
      genres: ["喜剧", "爱情", "动画"],
      title: "白蛇：浮生",
      is_released: true,
      actors: [
        {
          name: "张喆",
        },
        {
          name: "杨天翔",
        },
        {
          name: "唐小喜",
        },
        {
          name: "张赫",
        },
        {
          name: "刘琮",
        },
        {
          name: "郑小璞",
        },
        {
          name: "马程",
        },
        {
          name: "林强",
        },
        {
          name: "李楠",
        },
        {
          name: "李佳锴",
        },
      ],
      color_scheme: {
        is_dark: true,
        primary_color_light: "7897a5",
        _base_color: [
          0.5545454545454546, 0.2709359605911329, 0.796078431372549,
        ],
        secondary_color: "f4f8f9",
        _avg_color: [
          0.5658914728682171, 0.24431818181818177, 0.6901960784313725,
        ],
        primary_color_dark: "5c747f",
      },
      type: "movie",
      has_linewatch: false,
      vendor_desc: "",
      cover_url:
        "https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2911337432.jpg",
      sharing_url: "https://movie.douban.com/subject/36463483/",
      url: "https://movie.douban.com/subject/36463483/",
      release_date: null,
      uri: "douban://douban.com/movie/36463483",
      subtype: "movie",
      directors: [
        {
          name: "陈健喜",
        },
        {
          name: "李佳锴",
        },
      ],
      album_no_interact: false,
      article_intros: [],
      null_rating_reason: "",
    },
  },
  {
    comment: "",
    rating: null,
    sharing_text: "https://movie.douban.com/subject/36401888/ 来自@豆瓣App",
    sharing_url:
      "https://www.douban.com/doubanapp/dispatch?uri=/subject/36401888/interest/4249268623",
    tags: [],
    charts: [],
    platforms: [],
    vote_count: 0,
    create_time: "2024-07-21 13:52:39",
    status: "done",
    id: 4249268623,
    is_private: false,
    subject: {
      rating: {
        count: 104783,
        max: 10,
        star_count: 3.5,
        value: 7.2,
      },
      controversy_reason: "",
      pubdate: ["2024-06-08(中国大陆)"],
      pic: {
        large:
          "https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2908537625.jpg",
        normal:
          "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2908537625.jpg",
      },
      honor_infos: [],
      is_show: false,
      vendor_icons: [
        "https://img9.doubanio.com/f/frodo/fbc90f355fc45d5d2056e0d88c697f9414b56b44/pics/vendors/tencent.png",
        "https://img2.doubanio.com/f/frodo/8286b9b5240f35c7e59e1b1768cd2ccf0467cde5/pics/vendors/migu_video.png",
        "https://img9.doubanio.com/f/frodo/88a62f5e0cf9981c910e60f4421c3e66aac2c9bc/pics/vendors/bilibili.png",
      ],
      year: "2024",
      card_subtitle:
        "2024 / 中国大陆 中国香港 / 剧情 犯罪 / 邱礼涛 / 刘青云 吴镇宇",
      id: "36401888",
      genres: ["剧情", "犯罪"],
      title: "谈判专家",
      is_released: true,
      actors: [
        {
          name: "刘青云",
        },
        {
          name: "吴镇宇",
        },
        {
          name: "刘德华",
        },
        {
          name: "苗侨伟",
        },
        {
          name: "姜皓文",
        },
        {
          name: "彭秀慧",
        },
        {
          name: "周文健",
        },
        {
          name: "颜卓灵",
        },
        {
          name: "杨伟伦",
        },
        {
          name: "郑则仕",
        },
        {
          name: "韦罗莎",
        },
        {
          name: "洪天明",
        },
        {
          name: "黄德斌",
        },
        {
          name: "卢惠光",
        },
        {
          name: "朱柏谦",
        },
        {
          name: "黄又南",
        },
        {
          name: "朱鉴然",
        },
      ],
      color_scheme: {
        is_dark: true,
        primary_color_light: "726053",
        _base_color: [
          0.06830601092896176, 0.26872246696035235, 0.8901960784313725,
        ],
        secondary_color: "f9f6f4",
        _avg_color: [
          0.05729166666666661, 0.32653061224489793, 0.3843137254901961,
        ],
        primary_color_dark: "4c4037",
      },
      type: "movie",
      has_linewatch: true,
      vendor_desc: "",
      cover_url:
        "https://img9.doubanio.com/view/photo/m_ratio_poster/public/p2908537625.jpg",
      sharing_url: "https://movie.douban.com/subject/36401888/",
      url: "https://movie.douban.com/subject/36401888/",
      release_date: null,
      uri: "douban://douban.com/movie/36401888",
      subtype: "movie",
      directors: [
        {
          name: "邱礼涛",
        },
      ],
      album_no_interact: false,
      article_intros: [],
      null_rating_reason: "",
    },
  },
  {
    comment:
      "点映看了，太垃圾了，白瞎了这么好的题材和这么多的好演员，不要浪费自己的生命去看",
    rating: {
      count: 1,
      max: 5,
      star_count: 2,
      value: 2,
    },
    sharing_text:
      "我的评分：★★ 点映看了，太垃圾了，白瞎了这么好的题材和这么多的好演员，不要浪费自己的生命去看 https://movie.douban.com/subject/30413052/ 来自@豆瓣App",
    sharing_url:
      "https://www.douban.com/doubanapp/dispatch?uri=/subject/30413052/interest/1974393777",
    tags: [],
    charts: [],
    platforms: [],
    vote_count: 0,
    create_time: "2019-09-29 12:06:48",
    status: "done",
    id: 1974393777,
    is_private: false,
    subject: {
      rating: {
        count: 325337,
        max: 10,
        star_count: 3,
        value: 6,
      },
      controversy_reason: "",
      pubdate: ["2019-09-30(中国大陆)"],
      pic: {
        large:
          "https://img2.doubanio.com/view/photo/m_ratio_poster/public/p2568577681.jpg",
        normal:
          "https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2568577681.jpg",
      },
      honor_infos: [
        {
          kind: "movie",
          uri: "douban://douban.com/subject_collection/ECC47JPZY?type=rank&category=movie&rank_type=award_movie",
          rank: 5,
          title: "第15届中国长春电影节获奖名单",
        },
      ],
      is_show: false,
      vendor_icons: [
        "https://img2.doubanio.com/f/frodo/8286b9b5240f35c7e59e1b1768cd2ccf0467cde5/pics/vendors/migu_video.png",
        "https://img9.doubanio.com/f/frodo/fbc90f355fc45d5d2056e0d88c697f9414b56b44/pics/vendors/tencent.png",
        "https://img1.doubanio.com/f/frodo/990703f165ee40fa7a023949252882058a2ba57d/pics/vendors/mgtv.png",
      ],
      year: "2019",
      card_subtitle: "2019 / 中国大陆 / 剧情 爱情 冒险 / 李仁港 / 吴京 章子怡",
      id: "30413052",
      genres: ["剧情", "爱情", "冒险"],
      title: "攀登者",
      is_released: true,
      actors: [
        {
          name: "吴京",
        },
        {
          name: "章子怡",
        },
        {
          name: "井柏然",
        },
        {
          name: "张译",
        },
        {
          name: "胡歌",
        },
        {
          name: "成龙",
        },
        {
          name: "陈龙",
        },
        {
          name: "多布杰",
        },
        {
          name: "何琳",
        },
        {
          name: "刘小锋",
        },
        {
          name: "拉旺罗布",
        },
        {
          name: "曲尼次仁",
        },
        {
          name: "王景春",
        },
      ],
      color_scheme: {
        is_dark: true,
        primary_color_light: "72575f",
        _base_color: [
          0.9523809523809523, 0.23728813559322032, 0.23137254901960785,
        ],
        secondary_color: "f9f4f6",
        _avg_color: [0, 0.13999999999999993, 0.39215686274509803],
        primary_color_dark: "4c3a3f",
      },
      type: "movie",
      has_linewatch: true,
      vendor_desc: "",
      cover_url:
        "https://img2.doubanio.com/view/photo/m_ratio_poster/public/p2568577681.jpg",
      sharing_url: "https://movie.douban.com/subject/30413052/",
      url: "https://movie.douban.com/subject/30413052/",
      release_date: null,
      uri: "douban://douban.com/movie/30413052",
      subtype: "movie",
      directors: [
        {
          name: "李仁港",
        },
      ],
      album_no_interact: false,
      article_intros: [],
      null_rating_reason: "",
    },
  },
];

const { Client } = require("@notionhq/client");

const NOTION_TOKEN =
  process.env.NOTION_TOKEN ||
  "secret_rtdlTFXrnky1b8UiUi9fuB0MBhFayc0hgnEURkF2rA6";

const MOVIE_DATABASE_ID =
  process.env.MOVIE_DATABASE_ID || "0c8571b7eca14aadb12816ce6c695520";
// 0c8571b7eca14aadb12816ce6c695520
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
  mockList.forEach((item) => {
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
  mockList.forEach((item) => {
    const { actors } = item.subject;
    actors.forEach((actor) => {
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
  mockList.forEach((item) => {
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
  mockList.forEach((item) => {
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
    const targetInfo = mockList.find(
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
              name: targetInfo.subject.cover_url,
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
          relation: targetInfo.subject.actors.map((i) => {
            return {
              id: actorIdMap.get(i.name),
            };
          }),
        },
      },
    };
    const response = await notion.pages.create(params);
    console.log(`添加${targetInfo.subject.title}成功`);
  }
};

bootstrap();
