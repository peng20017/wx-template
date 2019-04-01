const app = getApp();
import _config from '../../utils/config.js';
import { navigateTo } from "../../utils/_wx.js";
Component({
  properties: {
    showLogin: {
      type: Boolean,
      value: !1,
      observer(newVal, oldVal, changedPath) { }
    },
    currentPage: {
      type: String,
      value: '',
      observer(newVal, oldVal, changedPath) { }
    }
  },
  data: {
    height: '',
  },
  attached: function () {

  },
  methods: {
    _cancel() {
      console.log(this.data.currentPage)
      this.setData({
        showLogin: !1
      })
      if (this.data.currentPage != _config.errorPage) {
        navigateTo.jump({
          url: '/' + _config.errorPage
        })
      }
    },
    _confirm(e) {
      if (e.detail.userInfo) {
        console.log('获取用户信息成功')
        app.globalData.userInfo = e.detail.userInfo;
        this.triggerEvent('beforeLogin');
      } else {
        console.log('获取用户信息失败')
        if (this.data.currentPage != _config.errorPage) {
          navigateTo.jump({
            url: '/' + _config.errorPage
          })
        }
      }
    }
  }
})