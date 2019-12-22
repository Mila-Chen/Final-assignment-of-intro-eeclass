Page({

  ontouch2: function (event) {
    console.log(event.currentTarget.id)
    wx.navigateTo({
      url: '../tiezi/tiezi?id=d' + event.currentTarget.id,

    })
  },

})