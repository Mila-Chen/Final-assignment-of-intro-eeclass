

var app = getApp()
Page({
  data: {
      
   
      imgUrls: [
        'http://www.isun.org/uploadfile/2018/1220/20181220102609533.png',

        'https://img.k68.cn/k68over2007-01-05/200711716016_01.jpg',
        'http://www.chinadaily.com.cn/dfpd/hlj/attachement/jpg/site1/20110503/0013729e46ae0f29e08d3f.jpg'

      ],



      contentItems: ['', '', '', ''],
      listItems: ['', '', '', '', '', '']
    },


    ontouch1: function (event) {
      console.log(event.currentTarget.id)
      wx.navigateTo({
        url: '../qbht/qbht?id=d' + event.currentTarget.id,

      })
    },
    ontouch2: function (event) {
      console.log(event.currentTarget.id)
      wx.navigateTo({
        url: '../huati/huati?id=d' + event.currentTarget.id,

      })
    },
    ontouch3: function (event) {
      console.log(event.currentTarget.id)
      wx.navigateTo({
        url: '../qbtz/qbtz?id=d' + event.currentTarget.id,

      })
    },
    ontouch4: function (event) {
      console.log(event.currentTarget.id)
      wx.navigateTo({
        url: '../tiezi/tiezi?id=d' + event.currentTarget.id,

      })
    
    },
 
    
  

searchInput: function (event) {
  console.log(event.currentTarget.id)
  wx.navigateTo({
    url: '../search/search?id=d' + event.currentTarget.id,

    })
  },
  onLoad: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }


    var _this = this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'user',
      // 传给云函数的参数
      data: {
        tag: 1
      },
      success: function (res) {
        console.log(res.user)
        _this.setData({
          contents: res.user.data[0].content
        })
      },
      fail: console.error
    })
  },

})

