import { Base } from "../../utils/base.js"

class User extends Base {
  constructor() {
    super()
  }
  getData(id, success) {
    this.request({
      id,
      url: "/www/api/public/index.php",
      data: {
        s: "api/v1/detail/72"
      }, success: res => {
        console.log(res)
        success && success(res)
      }
    })
  }
  getDetail(id, success) {
    this.request({
      id,
      url: "/www/api/public/index.php",
      data: {
        s: "api/v1/detail/72"
      }, success: res => {
        success && success(res)
      }
    })
  }
}
export { User }