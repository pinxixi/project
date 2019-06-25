// pages/component/jag/jag.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: Number,
      value: 5
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    style:{
      dispaly: "block"
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    resetStyle(){
      let str = '';
      this.data.style.forEach((item,key) => {
        console.log(key+":"+item+";")
      })
    }
  }
})
