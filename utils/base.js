import {
  navigateTo,
  setClipboardData,
  showTip,
  getUserInfo
} from "./_wx.js";
module.exports = function(n) {
  this.data = {
    showLogin: !1,
    showPage: !1,
    navbarData: null,
    options: null,
    currentPage: ''
  }
  this.onLoad = function(e) {
    if (JSON.stringify(e) !== '{}') {
      this.setData({
        options: e
      })
    }
    if (this.afterOnload) this.afterOnload(e);
    if (n.page == 'error') return;
    this.checkLogin();
  }
  // this.onShow = function(e){}
  // this.onReady = function(e) {}
  this.checkLogin = function(e) {
    this.setData({
      currentPage: this.route
    })
    if (wx.getStorageSync('session_id')) {
      this.dataLoad()
    } else {
      getUserInfo()
        .then(res => {
          if (res.status == 0) {
            this.setData({
              showLogin: !0
            })
          } else if (res.status == 1) {
            this.setData({
              showPage: !0,
            })
            if (getApp().globalData.userInfo == null) {
              getApp().globalData.userInfo = res.userInfo
            }
            console.log("用户已经授权", 'session_id:' + wx.getStorageSync('session_id'))
            if (this.dataLoad) {
              this.dataLoad();
            }
          }
        })
    }
  }
  this.navigateTo = function(e) {
    if (e.currentTarget.dataset.url) {
      navigateTo.jump({
        url: e.currentTarget.dataset.url
      })
    } else {
      console.log("%c缺少路由data-url参数", "color:yellow");
    }
  }
  this.copy = function(e) {
    if (e.currentTarget.dataset.str) {
      setClipboardData({
        data: e.currentTarget.dataset.str,
        success: res => {
          showTip({
            title: '复制成功'
          })
        }
      })
    } else {
      console.log("%c缺少copy data-str参数", "color:yellow");
    }
  }
  this.beforeLogin = function(e) {
    console.log('beforeLogin');
    getApp().login({
      success: res => {
        this.setData({
          showLogin: !1,
          showPage: !0,
        })
        console.log("afterLogin Success")
        if (this.dataLoad) {
          this.dataLoad();
        }
      },
      fail: res => {
        console.log("Login Fail")
      }
    })
  }
};