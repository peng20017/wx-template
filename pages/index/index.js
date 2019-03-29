let _wx = require("../../utils/_wx.js"),
  a = new(require("../../utils/base.js"))({
    page: 'index'
  });
a.data.navbarData = {
  page: "index",
  title: "微信小程序",
  capsule: {
    showCapsule: !0,
    capsuleColor: "#000000"
  },
  backgroundColor: '#ffffff',
  textColor: '#000000',
}
a.onLoad = function(e) {

}
a.login = function(e){
  this.setData({
    showLogin:!0
  })
}
a.getUserInfo = function(e) {
  _wx.getUserInfo()
    .then(res => {
     console.log(res);
    })
}
Page(a);