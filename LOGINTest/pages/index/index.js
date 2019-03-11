//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    accplaceholder: 'admin',
    pwdplaceholder: 'admin',
    title: '试验管理平台'
  },
  //事件处理函数
  tologin: function() {
    //此处添加身份验证
    wx.navigateTo({
      url: '../homepage/homepage',
    })
  }
})
