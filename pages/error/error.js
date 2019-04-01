//logs.js 
let _wx = require("../../utils/_wx.js"),
  a = new(require("../../utils/base.js"))({
    page: 'error'
  })
a.data.navbarData = {
  type: 1,
  title: "授权登录",
  capsule: {
    showBack: !0,
    showHome: !0,
    capsuleColor: "yellow"
  },
  backgroundColor: 'pink',
  textColor: '#000',
},
Page(a);