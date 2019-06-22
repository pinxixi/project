import {Config} from './config.js'
class Base{
  constructor(){
    this.baseRestUrl=Config.restUrl
  }
  request(parames){
    let url=this.baseRestUrl + parames.url;
    if(!parames.type){
      parames.type='get'
    }
    wx.request({
      url: url,
      method: parames.type,
      header: {
        'content-type':'application/json'
      },
      success: res=>{
        if(parames.scallBack){
          parames.scallBack(res.data)
        }
      },
      fail: err=>{
        console.log(err);
      }
    })
  }
}
export {Base}