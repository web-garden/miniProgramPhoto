//index.js
//获取应用实例
let api = require("../../utils/api1");
const app = getApp();

Page({
  data: {
    motto: 'Hello World',
    swiperList:[],
    indicatorDots:true,
    autoPlay:true,
    productList:[]
  },
  onLoad:function(){
    api.swiperListApi().then(res=>{
      this.setData({
        swiperList:res
      })
      console.log(this.data.swiperList)
    }).catch(err=>{
      console.log(err)
    }),
    api.productListApi().then(res=>{
        this.setData({
          productList:res
        })
        console.log(this.data.productList)
      }).catch(err=>{
        console.log(err)
      })
  }
})
