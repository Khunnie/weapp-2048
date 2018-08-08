// pages/loading/loading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   this.loading()
  },
  loading: function () {
    var n = 1;//定义一个数值
    var timer = setInterval(() => {
      if (n == 6) {
        clearInterval(timer);
        wx.redirectTo({
          url: '../index/index'
        })
      }
      this.setData({
        current: this.data.current + 1
      });
      if (this.data.current > 3){
        this.setData({
          current: 0
        });
      }
      n++;//一个定时器400+1，当数值加到6页面跳转
    }, 400);
  }
})