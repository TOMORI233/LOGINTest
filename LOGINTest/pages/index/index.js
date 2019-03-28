//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    namePlaceholder: 'admin',
    pwdPlaceholder: 'admin',
    title: '试验管理平台',
    username: '',
    password: ''
  },
  //事件处理函数
  username: function(e) {
    this.setData({
      username: e.detail.value
    })
  },

  password: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  toLogin: function() {
    //此处添加身份验证
    wx.request({
      url: 'http://127.0.0.1:5000/login',
      data: {
        username: this.data.username,
        password: this.data.password
      },
       header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.data == 'Success') {
          wx.navigateTo({
            url: '../homepage/homepage'
          })
          wx.showToast({
            title: '登陆成功',
            duration: 2000
          })
        }
        else {
          wx.showToast({
            title: '验证失败',
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  }
})
