const app = getApp();
import { navigateTo } from "../../utils/_wx.js";
Component({
  properties: {
    navbarData: {
      type: Object,
      value: {},
      observer: function(newVal, oldVal) {}
    }
  },
  data: {
    height: '',
  },
  attached: function() {
    let _t = this;
    if (app.globalData.systemInfo.statusBarHeight) {
      _t.setData({
        height: app.globalData.systemInfo.statusBarHeight
      })
    } else {
      wx.getSystemInfo({
        success: (res) => {
          _t.setData({
            height: res.statusBarHeight,
          })
        }
      })
    }
  },
  methods: {
    _navback() {
      wx.navigateBack()
    },
    _backhome() {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    },
    _navigateTo(e){
      navigateTo.jump({
        url: e.currentTarget.dataset.src
      })
    }
  }
})