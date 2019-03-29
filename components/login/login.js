const app = getApp();
import _wx from "../../utils/_wx.js";
Component({
  properties: {
    showLogin: {
      type: Boolean,
      value: !1,
      observer(newVal, oldVal, changedPath) {}
    }
  },
  data: {
    height: '',
  },
  attached: function() {

  },
  methods: {
    hideLogin(){
      // 取消登陆
      this.setData({
        showLogin:!1
      })
      _wx.navigateTo.jump({
        url: '/pages/logs/logs'
      })
    },
    getuserinfo(e){
      console.log(e)
      if (e.detail.userInfo){
        console.log('登录成功')
        app.login({
          success:res=>{
            console.log('app.login.success')
            this.setData({
              showLogin:!1
            })
            this.triggerEvent('afterLogin');
          }
        });
      }else{
        console.log('登录失败')
        _wx.navigateTo({
          url:'/pages/logs/logs'
        })
      }
    }
  }
})