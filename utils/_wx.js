const _config = require("./config.js");
let _wx = {
  request(t) {
    let _t = this;
    // t.url = `${_config.host}/${t.url}`,
    t = Object.assign({
      method: 'POST',
    }, t);
    return new Promise((resolve, reject) => {
      wx.request({
        url: t.url,
        data: t.data,
        header: {},
        method: t.method,
        dataType: 'json',
        responseType: 'text',
        success: res => {
          if (res.statusCode == 200) {
            if (t.success) t.success(res);
            return resolve(res);
          } else {
            console.log(`%c${JSON.stringify(res)}`, 'color:yellow');
            return reject(res);
          }
        },
        fail: res => {
          wx.showModal({
            title: '提示',
            content: '你的网络开小差了',
            showCancel: false,
            confirmText: '我知道了',
            confirmColor: "#DC143C",
            success: function(res) {},
            fail: function(res) {},
            complete: function(res) {},
          })
          if (t.fail) t.fail(res);
          console.log(`%c${JSON.stringify(res)}`, 'color:yellow');
          return reject(res);
        },
      })
    })
  },
  showModal(t) {
    t = Object.assign({
      title: '提示',
      content: 'content',
      showCancel: false,
      confirmText: '我知道了',
      confirmColor: "#DC143C"
    }, t)
    wx.hideLoading();
    return new Promise((resovle, reject) => {
      wx.showModal({
        title: t.title,
        content: t.content,
        showCancel: t.showCancel,
        confirmText: t.confirmText,
        confirmColor: t.confirmColor,
        success: res => {
          if (t.success) t.success(res);
          return resovle(res);
        },
        fail: res => {
          if (t.fail) t.fail(reject);
          return reject(res);
        }
      })
    })
  },
  showTip(t) {
    t = Object.assign({
      title: '提示',
      icon: 'success',
      duration: 1500,
      mask: true,
    }, t)
    return new Promise((resolve, reject) => {
      wx.showToast(Object.assign({
        title: t.title,
        icon: t.icon,
        duration: t.duration,
        mask: true,
        success: res => {
          if (t.success) t.success(res);
          return resolve(res);
        },
        fail: res => {
          if (t.fail) t.fail(res);
          return reject(res);
        }
      }, t))
    })
  },
  navigateTo: {
    navigate: !0,
    navigateInterval: 200,
    jump(t) {
      let _t = this;
      return new Promise((resolve, reject) => {
        if (_t.navigate) {
          _t.navigate = !1;
          wx.navigateTo({
            url: t.url,
            success: res => {
              setTimeout(() => {
                _t.navigate = !0;
              }, _t.navigateInterval)
              if (t.success) t.success(res);
              return resolve(res);
            },
            fail: res => {
              if (t.fail) t.fail(res);
              return reject(res);
            },
            complete: function(res) {
              setTimeout(() => {
                if (!_t.navigate) _t.navigate = !0;
              }, 2000)
            },
          })
        } else {
          console.log("%c点击太快了，还不能跳转", "color:yellow");
          return reject({
            msg: 'tap too fast'
          });
        }
      })
    }
  },
  setClipboardData(t) {
    console.log(t)
    let _t = this;
    t = Object.assign({
      data: ''
    }, t)
    return new Promise((resolve, reject) => {
      wx.setClipboardData({
        data: t.data,
        success: res => {
          if (t.success) t.success(res);
          return resolve(res);
        },
        fail: res => {
          if (t.fail) t.fail;
          return reject(res);
        },
      })
    })
  },
  getUserInfo(t) {
    t = Object.assign({}, t);
    return new Promise((resolve, reject) => {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: res => {
                if (wx.getStorageSync("session_id")) {
                  res = Object.assign({
                    status: 1
                  }, res);
                  if (t.success) t.success(res);
                } else {
                  res = Object.assign({
                    status: 0,
                    msg: '本地没有session_id缓存'
                  }, res);
                  console.log("%c本地没有session_id缓存", "color:yellow")
                }
                return resolve(res);
              }
            })
          } else {
            const s = {
              status: 0,
              msg: '用户还没有授权登录'
            };
            if (t.fail) t.fail(s);
            console.log("%c用户还没有授权登录", "color:yellow")
            return resolve(s);
          }
        }
      })
    })
  },
  canUseList: [{
      apiname: 'request',
      data: "obj=>{url:'',data:'',heard:'',method:'POST','dataType': 'json','responseType': 'text',success,fail}返回promise对象",
    }, {
      apiname: 'showModal',
      data: "obj=>{'title': '提示','content': 'content','showCancel': 'false','confirmText': '我知道了','confirmColor':'#DC143C',success,fial}返回promise对象"
    }, {
      apiname: 'showTip',
      data: "obj=>{title: '提示','icon': 'success','duration': '1500','mask': true,success,fail}返回promise对象",
    },
    {
      apiname: 'navigateTo.jump',
      data: "obj=>{url:'',success,fail}返回promise对象"
    }, {
      apiname: 'setClipboardData',
      data: "obj=>{data:'',success,fail}返回promise对象"
    }, {
      apiname: 'getUserInfo',
      data: "obj=>{,success,fail}返回promise对象"
    }
  ],
}
_wx.canUseList.forEach((currentValue) => {
  console.log("%c_wx.js： " + currentValue['apiname'] + "参数" + currentValue['data'], "color:skyblue");
})
module.exports = _wx;