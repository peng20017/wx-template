//logs.js 
let _wx = require("../../utils/_wx.js"),
  thisPage = new(require("../../utils/base.js"))({
    page: 'error'
  })
thisPage.data.navbarData = {
  title: "授权登录",
  capsule: {
    showBack: !0,
    showHome: !0,
    capsuleColor: "#12435f"
  },
  backgroundColor: 'pink',
  textColor: '#000',
}
Page(thisPage);