// pages/ticket/ticket.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShow: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showPopup(){
    let {isShow} = this.data;
    isShow=!isShow;
    console.log(isShow)
    this.setData({
      isShow
    })
  }
})