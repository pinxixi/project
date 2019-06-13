// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [],               // 购物车列表
    hasList: false,          // 列表是否有数据
    totalPrice: '0.00',           // 总价，初始为0
    selectAllStatus: false,    // 全选状态
    isShow:false,             //删除图片的显示隐藏
  },
  //获取用户信息
  getUser:function (e){
    console.log(e)
    console.log(e.detail.userInfo)
  },
  /**
 * 计算价格
 */
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;  //最终价格
    for (let i = 0; i < carts.length; i++) {       // 循环列表得到每个数据
      if (carts[i].ischecked == true) {            // 判断选中才会计算价格
        total += carts[i].price * carts[i].num;     // 所有价格加起来
      }
    }
    this.setData({                    // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  },


  /**
   * 选择事件
   */
  judge_checked(e) {
    console.log(e.currentTarget.dataset.index)
    let aAllprice = 0;
    let selectAllStatus = this.data.selectAllStatus;
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let carts = this.data.carts;
    const ischecked = carts[index].ischecked;   //获取当前商品的选中状态
    carts[index].ischecked = !ischecked;    // 改变状态
    //得知是否全选
    for (let i = 0; i < carts.length; i++) {
      aAllprice = aAllprice + this.data.carts[i].price * this.data.carts[i].num;
    }

    this.getTotalPrice()  //重新计算总价
    let allmoney = this.data.totalPrice
    if (aAllprice != allmoney) {
      selectAllStatus = false
    } else {
      selectAllStatus = true
    }
    
    let isShow = this.data.isShow = !this.data.isShow //删除的显示隐藏
    this.setData({
      carts: carts,
      selectAllStatus: selectAllStatus,
      isShow:isShow
    });


  },

  /**
   *数量加减功能 
   */
  // 增加数量
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  //全选事件
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;    // 是否全选状态

    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;
    if (!this.data.selectAllStatus) {
      for (let i = 0; i < carts.length; i++) {
        carts[i].ischecked = true
      }
    } else {
      for (let i = 0; i < carts.length; i++) {
        carts[i].ischecked = false
      }
    }
    let isShow = this.data.isShow = !this.data.isShow //删除的显示隐藏
    this.setData({
      selectAllStatus: selectAllStatus,

      carts: carts,
      isShow:isShow
    });
    this.getTotalPrice();                               // 重新获取总价
  },
  //删除商品
  deleteList(e) {
    const index = e.currentTarget.dataset.index;    // 获取data- 传进来的index
    let carts = this.data.carts;
    carts.splice(index, 1);     // 删除购物车列表里这个商品
    this.setData({
      carts: carts
    });
    if (!carts.length) {                  // 如果购物车为空
      this.setData({
        hasList: false              // 修改标识为false，显示购物车为空页面
      });
    } else {
      this.getTotalPrice();  //重新计算价格
    }

    wx.showToast({
      title: '已删除',
      icon: 'success',
    });

  },

  //去结算
  toBuy() {
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
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
    this.setData({
      hasList: true,        // 既然有数据了，那设为true
      carts: [
        { id: 1, title: '卡兰德的魔镜', image: "/pages/images/镜子.jpg", price: 66, ischecked: false, num: 1 },
        { id: 2, title: '卡兰德的魔镜', image: "/pages/images/镜子.jpg", price: 10, ischecked: false, num: 1 },
        { id: 3, title: '卡兰德的魔镜', image: "/pages/images/镜子.jpg", price: 55, ischecked: false, num: 1 },
        { id: 4, title: '卡兰德的魔镜', image: "/pages/images/镜子.jpg", price: 55, ischecked: false, num: 1 }, 
        { id: 5, title: '卡兰德的魔镜', image: "/pages/images/镜子.jpg", price: 55, ischecked: false, num: 1 }, 
        { id: 6, title: '卡兰德的魔镜', image: "/pages/images/镜子.jpg", price: 55, ischecked: false, num: 1 }, 
        { id: 7, title: '卡兰德的魔镜', image: "/pages/images/镜子.jpg", price: 55, ischecked: false, num: 1 },
      ]
    });


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