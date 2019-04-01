let _wx = require("../../utils/_wx.js"),
  thisPage = new(require("../../utils/base.js"))({
    page: 'index'
  }),
  app = getApp();
thisPage.data.navbarData = {
  title: "微信小程序",
  backgroundColor: '#ffffff',
  textColor: '#000000',
}
thisPage.login = function(e) {
  this.setData({
    showLogin: !0
  })
}
thisPage.dataLoad = function(e) { //数据加载
  console.log("dataLoad");
}
Page(thisPage);