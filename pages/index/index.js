const _wx = require("../../utils/_wx.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLogin:!1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let _t = this;
    // 先登录
    _wx.getUserInfo()
    .then(res=>{
      console.log(res)
      console.log(this)
      if (res.status == 0) {
        _t.setData({
          showLogin: !0
        })
      }else{
        // 展示对应的页面
      }
    })
    _wx.request({
        url: 'http://sp5566.top/wx/bczc/get_token.php',
        data: {},
        success: res => {
          console.log(res)
        }
      })
      .then(res => {
        console.log(res)
        
      })
  },
  afterLogin() {
    console.log("afterLogin")
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  navigateTo() {
    console.log(this.route)
    // wx.reLaunch({
    //   url: '/pages/logs/logs',
    // })
    // _wx.navigateTo({
    //   url: '/pages/logs/logs',
    // })

  },
  copy() {
    _wx.setClipboardData({
      data: '11111'
    })
  },
  getUserInfo(e){
    console.log(e)
  },
 
})