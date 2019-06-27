//index.js
//获取应用实例
// const app = getApp()
import {Config} from "../../utils/config.js";
console.log(Config.restUrl)
Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrl: [], //轮播图
    ranking:[],   //排行榜
    guessgoods:[],  //猜你喜欢
    recommend: [],  //推荐
    list:[]
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  onLoad: function () {
    this.getData();
  },
  
  getData() {
    let ourl = Config.restUrl;
    console.log(ourl)
    wx.request({
      url: `${ourl}index`,
      method: 'get',
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log(res.data.data)
        this.setData({
          // list: res.data.data
          imgUrl: res.data.data.carousel,
          ranking: res.data.data.ranking,
          guessgoods: res.data.data.guessgoods,
          recommend: res.data.data.recommend
        })
      }
    })

  },
  goDetail(e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/detail/detail?id=e.currentTarget.dataset.id',
    })
  }

})
