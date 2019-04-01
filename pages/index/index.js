let _wx = require("../../utils/_wx.js"),
  a = new(require("../../utils/base.js"))({
    page: 'index'
  }),
  app = getApp();
a.data.navbarData = {
  type:1,
  title: "微信小程序",
  backgroundColor: '#ffffff',
  textColor: '#000000',
  event:'_navigateTo',
  src:'/pages/error/error'
}
a.login = function(e) {
  this.setData({
    showLogin: !0
  })
}
a.dataLoad = function(e){//数据加载
  console.log("dataLoad");
  console.log(getApp())
}
Page(a);

