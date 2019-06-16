// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        orderType: "achieve",
        orderCode: 9876543211025666,
        goods:[
          {
            name: "NeoDPillo印尼邓禄普官方正品原装进口天然乳胶枕头波浪颈椎枕",
            goodInfo: "天然乳胶",
            goodNum: 2,
            price: "299.00"
          }, {
            name: "NeoDPillo印尼邓禄普官方正品原装进口天然乳胶枕头波浪颈椎枕",
            goodInfo: "天然乳胶",
            goodNum: 2,
            price: "299.00"
          }
        ],
        freight: '0.00',
        control:[]
      },
      {
        orderType: "unpaid",
        orderCode: 9876543211025666,
        goods: [
          {
            name: "NeoDPillo印尼邓禄普官方正品原装进口天然乳胶枕头波浪颈椎枕",
            goodInfo: "天然乳胶",
            goodNum: 2,
            price: "299.00"
          }, {
            name: "NeoDPillo印尼邓禄普官方正品原装进口天然乳胶枕头波浪颈椎枕",
            goodInfo: "天然乳胶",
            goodNum: 2,
            price: "299.00"
          }, {
            name: "NeoDPillo印尼邓禄普官方正品原装进口天然乳胶枕头波浪颈椎枕",
            goodInfo: "天然乳胶",
            goodNum: 3,
            price: "299.00"
          }
        ],
        freight: '0.00',
        control: []
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.resetData()
  },
  resetData(){
    let {list} = this.data;
    let price=0;
    let num=0;
    let control=[]
    list.forEach(item=>{
      item.goods.forEach(item=>{
        price+=item.price*item.goodNum
        num+=item.goodNum;
        item.img="/pages/images/shop.jpg"
      })
      item.allPrice=price;
      item.allNum=num
      if (item.orderType == "achieve") {
        control=[
          { type: 'delete', text: "删除" },
          { type: 'speak', text: "评价" }
        ]
      } else if (item.orderType == "unpaid") {
        control = [
          { type: 'delete', text: "取消订单" },
          { type: 'pay', text: "去支付" }
        ]
      } else {
        control = [
          { type: 'delete', text: "取消订单" },
          { type: 'speak', text: "评价" }
        ]
      }
      item.control=control
    })
    this.setData({
      list
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