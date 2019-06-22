// pages/detail/detail.js
//引入公共的js
import { Config } from '../../utils/config'
//引入index模块的js
import { Detail } from './detail-module.js'
let home = new Detail();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    gallery: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail(options);
  },
  getDetail(options){
    let detail = home.getRatings(options.id,res=>{
      console.log(res);
      this.setData({
        gallery: res.goods
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  goSize:function(){
    this.setData({
      show: !this.data.show
    });
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