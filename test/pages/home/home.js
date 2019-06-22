//index.js
//引入公共的js
import { Config } from '../../utils/config'
//引入index模块的js
import { Index } from './home-module.js'
let home = new Index();
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrl: [],
    recommend: [],
    ranking: [],
    guessGoods: []
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.getGoods();
    // wx.request({
    //   url: Config.restUrl+'goods',
    //   method: 'get',
    //   header: {
    //     'content-type':'application/json'
    //   },
    //   success: (data)=>{
    //     console.log(data);
    //   },
    //   fail: (err)=>{
    //     console.log(err);
    //   }
    // })
  },
  //获取goods中的数据
  getGoods() {
    let id = 1;
    let data = home.getGoods(id, res => {
      console.log(res);
      this.setData({
        imgUrl: res.carousel,
        recommend: res.recommend,
        ranking: res.ranking,
        guessGoods: res.guessgoods
      })
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goDetail(e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id,
    })
  }
})
