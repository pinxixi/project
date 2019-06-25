// pages/ticket/ticket.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    list:[
      {
        modul: "modul1",
        title: "收藏+关注",
        money: 5
      },
      {
        modul: "modul2",
        title: "满199立减",
        money: 20
      }
    ],
    cIndex: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  show(){
    let {isShow} = this.data;
    isShow=!isShow;
    this.setData({
      isShow
    })
  },
  use(e){
    this.show()
    let index = e.currentTarget.dataset.index;
    this.setData({
      cIndex: index
    })
  },
  confirm(){
    this.data.list.splice(this.data.cIndex,1)
    this.setData({
      list: this.data.list
    })
  },
  cancel(){
    // console.log("取消")
  },
  onClose(){
    this.show()
  }
})