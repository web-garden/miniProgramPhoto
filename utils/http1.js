const baseUrl = "http://www.miqimeishu.com";
class HTTP {
  request(options){
    let params = {
        url:'',
        header:{"Content-Type": "application/x-www-form-urlencoded"},
        data:{},
        method:'get'
    }
    options = Object.assign(params,options);
    return new Promise((resolve, reject) => {
      this._request(options, resolve, reject)
    })
  }
  _request(options,resolve, reject) {
      let {url, header, data, method} = options;
      wx.request({
          url: baseUrl + url,
          header: header,
          data: data,
          method: method,
          success: (res) => {
              //=> 如果调取接口成功，状态码200，如果读取失败404，400，500等，也在走这里面
              // console.log(res);
              let data = res.data;
            //   if (parseInt(data.code) === 0 && data.contextCode === "ok") {
                if (parseInt(data.code) === 0) {
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
 