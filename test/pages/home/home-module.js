import { Base } from '../../utils/base.js';
class Index extends Base {
  constructor() {
    super()
  }
  //获取goods
  getGoods(id, callBack) {
    let parames = {
      url: '/index',
      scallBack: (res) => {
        callBack && callBack(res.data)
      }
    }
    this.request(parames)
  }
}
export { Index }