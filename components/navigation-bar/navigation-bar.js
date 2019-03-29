const app = getApp()
Component({
  properties: {
    navbarData: {
      type: Object,
      value: {},
      observer: function (newVal, oldVal) { }
    }
  },
  data: {
    height: '',
  },
  attached: function () {
    let _this = this;
    wx.getSystemInfo({
      success: (res) => {
        _this.setData({
          height: res.statusBarHeight,
        })
      }
    })
  },
  methods: {
    _navback() {
      wx.navigateBack()
    },
    _backhome() {
      wx.navigateBack()
    }
  }
})