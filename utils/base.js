let { navigateTo,setClipboardData} = require("./_wx.js");
module.exports = function(n) {
  this.navigate = !0
  this.navigateInterval = 200
  this.data = {
    showLogin:!1,
    navbarData:{
      page:n.page,
      showBack:false,
    }
  }
  this.onLoad = (e) => {
  }
  this.onShow = (e) => {
  }
  this.navigateTo = (e) => {
    if (e.currentTarget.dataset.url){
      navigateTo.jump({
        url: e.currentTarget.dataset.url
      })
    }else{
      console.log("%c缺少路由data-url参数","color:yellow");
    }
  },
  this.copy=(e)=>{
    if (e.currentTarget.dataset.str){
      setClipboardData({
        data: e.currentTarget.dataset.str
      })
    }else{
      console.log("%c缺少copy data-str参数", "color:yellow");
    }
  }
};