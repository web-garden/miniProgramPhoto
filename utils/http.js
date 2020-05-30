const baseUrl = "http://www.miqimeishu.com";
class HTTP {
  constructor(options) {
      console.log(options)
      this.options = this.initalsParams(options);
      console.log(1);
      console.log(this.options)
      
  }
  request(opitons){
    this.options = this.initalsParams(options);
    return new Promise((resolve, reject) => {
      this._request(this.options,resolve, reject)
    })
  }
  initalsParams(options) {
      let defaultParms = {
          url: this.baseUrl,
          data: '',
          header: '',
          method: "GET" 
      }
      console.log(2)
      for(let key in options){
          console.log(key)
      }
      console.log(Object.assign(defaultParms, options))
      return Object.assign(defaultParms, options);
  }
  _request(options,resolve, reject) {
      let { url, header, data, method} = options;
      wx.request({
          url: url,
          header: header,
          data: data,
          method: method,
          success: (res) => {
              //=> 如果调取接口成功，状态码200，如果读取失败404，400，500等，也在走这里面
              // console.log(res);
              let data = res.data;
              if (parseInt(data.code) === 0 && data.contextCode === "ok") {
                  resolve(data.data);
              } else {
                reject();
                  wx.showModal({
                      title: "温馨提示",
                      content: "接口出错了~",
                      confirmColor: 'red',
                      success: (res) => {
                          if (res.confirm) {
                              console.log('用户点击了成功~')
                          } else if (res.cancel) {
                              console.log('用户点击了取消')
                          }
                      }
                  })
              }
          },
          fail: (err) => {
              reject(err);
              //=> 没有网络请求，导致请求失败
              // console.log('fail:' + err)
              wx.showToast({
                  title: '接口出错了~',
                  icon: "none",
                  duration: 1500
              })
          },
          complete: (res) => {
              console.log('complete:' + res)
          }
      })
  }
}
module.exports = {
    HTTP:HTTP
}
 
// let http = new Http({ data: '111', header: 'a', url: "http://google.com" });
 