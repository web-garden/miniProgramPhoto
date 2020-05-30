import {
  HTTP
} from './http1'
let http = new HTTP();
var url = {
    swiperList:'/json/banner.js',
    productList:'/json/product.js'
}
module.exports = {
  swiperListApi(params){
    return http.request({
      url:url.swiperList
    })
    // .then(res=>{
    //   console.log(res)
    //   return res
    // })
    //---
    // return http({
    //   url:url.swiperList,
    //   method:'GET'
    // })
  },
  productListApi(params){
    return http.request({
      url:url.productList
    }) 
  }
  // http.request({url:'/json/banner.js',method:"get"}).then(res=>{
  //   console.log(res)
  // })
}