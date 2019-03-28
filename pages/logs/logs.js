//logs.js 
let a = new(require("../../utils/base.js"))({}),
  _wx = require("../../utils/_wx.js");
Page(Object.assign(a, {
  onShow() {
    console.log('Onshow1')
  }
}))