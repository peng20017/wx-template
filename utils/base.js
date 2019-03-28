// 公用生命周期
module.exports = function(n) {
  this.data = {},
    this.onLoad = (e) => {
      console.log('onLoad')
    }
  this.onShow =(e)=>{
    console.log('onShow')
  }
};