let _wx = require("../../utils/_wx.js"),
  a = new(require("../../utils/base.js"))({
    page: 'index'
  }),
  app = getApp();
a.data.navbarData = {
  page: "index",
  title: "微信小程序",
  capsule: {
    showback:!1,
    showHome:!1,
    capsuleColor: "#000000"
  },
  backgroundColor: '#ffffff',
  textColor: '#000000',
}
a.onLoad = function(e) {
  this.getUserInfo();
}
a.login = function(e) {
  this.setData({
    showLogin: !0
  })
}
a.getUserInfo = function(e) {
  _wx.getUserInfo()
    .then(res => {
      console.log(res);
      if (res.status == 0) {
        this.setData({
          showLogin: !0
        })
      }
    })
}
a.beforeLogin = function(e) {
  console.log('beforeLogin');
  app.login({
    success: res => {
      console.log("afterLogin Success")
    },
    fail: res => {
      console.log("Login Fail")
    }
  })
}
Page(a);