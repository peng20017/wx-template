//app.js
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
  },
  setSystemInfo() {
    let _t = this;
    wx.getSystemInfo({
      success: res => {
        _t.systemInfo = res;
      }
    })
  }
})