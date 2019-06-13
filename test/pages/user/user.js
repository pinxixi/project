// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    map: null,
    mapData:{},
    data:{
      controls: [{
        id: 1,
        iconPath: '/pages/image/icon4.gif',
        position: {
          left: 0,
          top: 300 - 50,
          width: 35,
          height: 30
        },
        clickable: true
      }],
      markers:[]
    },
    newMarker: {
      iconPath: "/pages/image/icon8.gif",
      id: 0,
      latitude: 0,
      longitude: 0,
      width: 20,
      height: 15
    },
    listData:{
      list1:[
        {
          name: "待付款",
          icon: "/pages/image/icon1.gif",
          num: "3"
        }, {
          name: "待分享",
          icon: "/pages/image/icon2.gif",
          num: "0"
        }, {
          name: "待发货",
          icon: "/pages/image/icon3.gif",
          num: "0"
        }, {
          name: "待收货",
          icon: "/pages/image/icon4.gif",
          num: "0"
        }, {
          name: "待评价",
          icon: "/pages/image/icon5.gif",
          num: "0"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.map = wx.createMapContext("map");
    this.setData({
      map: this.data.map
    })
  },
  getuserinfo(e){
    console.log(e)
  },
  getLocation(){
    wx.getLocation({
      type: 'wgs84',
      success: res=> {
        // console.log(res)
        let { latitude, longitude} = res;
        // console.log(latitude,longitude)
        this.data.mapData={latitude,longitude}
        this.setData({
          mapData: this.data.mapData
        })
        let { map,data,newMarker } = this.data;
        console.log(map)
        newMarker.id= 0
        newMarker.latitude = latitude
        newMarker.longitude = longitude
        data.markers.push(newMarker)
        this.setData({
          data
        })
        console.log(this.data.data)
      }
      
    })
    
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