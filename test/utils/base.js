import {Config} from "config.js"
class Base extends Config {
  constructor(){
    super()
    this.http = Config.http
  }
  request(params){

    let url=this.http+params.url;
    // console.log(url)
    wx.request({
      url,
      data: params.data,
      method: params.method||'GET',
      header: {"content-type":"application/json"},
      responseType: 'text',
      success: res => {
        console.log(res)
        params.success && params.success(res.data)
      },
      fail: err => {
        console.log(err)
      }
    })
  }
}
export {Base}