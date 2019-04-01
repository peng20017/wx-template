//app.js
import {request} from './utils/_wx.js';
App({
  onLaunch: function() {
    this.setSystemInfo();
  },
  globalData: {
    userInfo: null,
    systemInfo: null
  },
  login(t) {
    t.success();
    // t.fail(res)
  },
  setSystemInfo() {
    let _t = this;
    wx.getSystemInfo({
      success: res => {
        _t.globalData.systemInfo = res;
      }
    })
  }
})