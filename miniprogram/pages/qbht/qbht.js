Page({
  ontouch1: function (event) {
    console.log(event.currentTarget.id)
    wx.navigateTo({
      url: '../huati/huati?id=d' + event.currentTarget.id,

    })
  },

})