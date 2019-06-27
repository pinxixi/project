// pages/detail/detail.js
import { Config } from "../../utils/config.js";
console.log(Config.restUrl)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    imgUrl:'',
    name:'',
    price:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },
  getData() {
    let ourl = Config.restUrl;
    console.log(ourl)
    wx.request({
      url: `${ourl}detail/72`,
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log(res.data.data.goods)
        this.setData({
          // list: res.data.data
          imgUrl: res.data.data.goods.goods_thumb,
          name: res.data.data.goods.goods_name,
          price: res.data.data.goods.shop_price
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  gopay: function (url) {
    wx.navigateTo({
      url: url
    })
  },
  goSize:function(e){
    console.log(e);
    if(e.target.dataset.index==0){
      this.gopay('/pages/cart/cart')
    }
    this.setData({
      show: !this.data.show
    });
    wx.setStorage({
      key: this.data.name,
      data: {
        imgUrl: this.data.imgUrl,
        name: this.data.name,
        text:'',
        price: this.data.price,
        color:'',
        size:''
      },
    })
    wx.getStorage({
      key: this.data.name,
      success(res) {
        console.log(res.data)
      }
    })
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