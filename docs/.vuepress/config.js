const sidebar = require("./sidebar");
module.exports = {
  title: "Ivan",
  description: "记录生活，记录成长",
  base: "/",
  host: "0.0.0.0",
  //mac下port未生效
  port: 8081,

  themeConfig: {
    //gitc 仓库地址
    repo: "WoodyJang/WoodyJang.github.io",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在github上编辑本页",
    //导航栏
    nav: [
      { text: "Home", link: "/" },
      { text: "技术博客", link: "/technical/" },
      { text: "学习", link: "/study/" },
      { text: "个人文章", link: "/article/" }
    ],
    sidebar,
    sidebarDepth: 2,
    //搜索
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated" // string | boolean
  }
};
