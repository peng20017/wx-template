//logs.js 
let _wx = require("../../utils/_wx.js"),
  a = new(require("../../utils/base.js"))({
    page: 'logs'
  })
a.data.navbarData = {
  page: "logs",
  title: "logs",
  capsule: {
    showBack: !0,
    showHome: !0,
    capsuleColor: "yellow"
  },
  backgroundColor: 'pink',
  textColor: '#000',
},
Page(a);