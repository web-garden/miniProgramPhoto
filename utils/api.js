import {
  http
} from './serverPromise'
var url = {
    userLogin: "/user/login", 
    getUserPhone: "/user/phone", 
    userCardReceive: "/card/receive",
    swiperList:'/json/banner.js'
}
module.exports = {
  swiperListApi(params){
    return http({
      url:url.swiperList,
      method:'GET'
    })
  },
  userLogin(code) {
    return http({      
      url: url.userLogin,
      data: { code: code},
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
  },
  getUserPhone(params) {
    return http({
      url: url.getUserPhone,
      data: params
    })
  },
  userCardReceive() {
    return http({
        url: url.userCardReceive,
        method:"GET"
      })
    },
}