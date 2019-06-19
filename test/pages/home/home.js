// pages/recommend/recommend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: ["../homeImg/222.jpg", "../homeImg/222.jpg", "../homeImg/222.jpg"],
    ranking:[
      {
        imgUrl:"../homeImg/wave.gif",
        name:"泰国乳胶狼牙按摩枕",
        payment:199,
        index:1
      },
      {
        imgUrl: "../homeImg/wave.gif",
        name: "泰国乳胶平面波浪枕",
        payment: 189,
        index:2
      },
      {
        imgUrl: "../homeImg/wave.gif",
        name: "泰国乳胶美容按摩枕",
        payment: 189,
        index:3
      }
    ],
    like: [
      {
        imgUrl: "../homeImg/wave.gif",
        name: "泰国波浪平面枕",
        detail: "泰国天然乳胶原料",
        money:228
      },
      {
        imgUrl: "../homeImg/wave.gif",
        name: "泰国狼牙按摩枕",
        detail: "泰国天然乳胶原料",
        money: 228
      },
      {
        imgUrl: "../homeImg/wave.gif",
        name: "泰国美容波浪枕",
        detail: "泰国天然乳胶原料",
        money: 228
      },
      {
        imgUrl: "../homeImg/wave.gif",
        name: "泰国薄款波浪枕",
        detail: "泰国天然乳胶原料",
        money: 228
      },
      {
        imgUrl: "../homeImg/wave.gif",
        name: "泰国波浪平面枕",
        detail: "泰国天然乳胶原料",
        money: 228
      },
      {
        imgUrl: "../homeImg/wave.gif",
        name: "泰国薄款波浪枕",
        detail: "泰国天然乳胶原料",
        money: 228
      }
    ]
  },
  toDetail(){
    wx.navigateTo({
      url: `/pages/detail/detail`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})