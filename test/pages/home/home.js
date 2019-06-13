// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    text: ["热门", "女装", "百货", "美妆", "电器", "鞋包", "家纺", "内衣", "食品", "母婴", "男装", "家具", "水果", "手机", "运动", "电脑", "汽车", "家装"]
    ,list:[{
      title:"热门",
      navigate:"../popular/popular"
    },{
        title:"女装",
        navigate:"../dress/dress"
      }, {
        title: "百货",
        navigate: "../store/store"
      }, {
        title: "美妆",
        navigate: "../makeups/makeups"
      }, {
        title: "电器",
        navigate: "../device/device"
      }, {
        title: "鞋包",
        navigate: "../shoeBag/shoeBag"
      }, {
        title: "家纺",
        navigate: "../homeTextile/homeTextile"
      }, {
        title: "内衣",
        navigate: "../underwear/underwear"
      }, {
        title: "食品",
        navigate: "../food/food"
      }, {
        title: "母婴",
        navigate: "../maternalBaby/maternalBaby"
      }, {
        title: "男装",
        navigate: "../mens/mens"
      }, {
        title: "家具",
        navigate: "../furniture/furniture"
      }, {
        title: "水果",
        navigate: "../fruit/fruit"
      }, {
        title: "手机",
        navigate: "../mobilePhone/mobilePhone"
      }, {
        title: "运动",
        navigate: "../motion/motion"
      }, {
        title: "电脑",
        navigate: "../computer/computer"
      }, {
        title: "汽车",
        navigate: "../car/car"
      }, {
        title: "家装",
        navigate: "../homeImprovement/homeImprovement"
      }]
    
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