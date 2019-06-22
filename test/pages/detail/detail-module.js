import {Base} from '../../utils/base.js'
class Detail extends Base{
  constructor(){
    super();
  }
  //获取ratings
  getRatings(id, callBack) {
    let parames = {
      url: '/detail/72',
      scallBack: res => {
        callBack && callBack(res.data)
      }
    }
    this.request(parames)
  }
}
export {Detail}