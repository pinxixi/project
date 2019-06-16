// pages/user/user.js
Page({

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
      iconPath: "/pages/image/icon-1.gif",
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
      ],
      list2: [
        {
          name: "优惠券",
          pathName: "ticket",
          icon: "/pages/image/icon6.gif"
        }, {
          name: "商品收藏",
          pathName: "favorite",
          icon: "/pages/image/icon7.gif"
        }, {
          name: "历史浏览",
          pathName: "history",
          icon: "/pages/image/icon8.gif"
        }, {
          name: "商品售后",
          pathName: "refund",
          icon: "/pages/image/icon9.gif"
        }
      ]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.map = wx.createMapContext("map");
    wx.getUserInfo({
      success:res=>{
        console.log(res.userInfo)
      }
    })
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
  toPage(e){  
    let path = e.currentTarget.dataset.pathname||"user";
    console.log(path)
    wx.navigateTo({
      url: `/pages/${path}/${path}`,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})