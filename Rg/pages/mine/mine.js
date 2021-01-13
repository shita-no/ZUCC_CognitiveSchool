// pages/user/index.js
var app=getApp();
Page({
  onShareAppMessage: function (res) {
    return {
      title: '使用认知学堂测试认知能力！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    userinfo:{},
    tongshi:0,
    jishi:0,
    jihua:0,
    zhuyi:0,
    old:"6"
  },
  oldInput:function(e)
  {
    this.setData({
      old:e.detail.value
    })
  },
    handleGetUserInfo(e){
        console.log(e);
       const {userInfo}=e.detail;
       wx.setStorageSync("userinfo", userInfo);
       app.globalData.userInfo=e.detail;
        this.onShow();
     },
  onLoad(){
    //this.handleGetUserInfo(button);
  },
  onShow(){
    const userinfo=wx.getStorageSync("userinfo");
    const collect=wx.getStorageSync("collect")||[];
    this.setData({
      tongshi:app.globalData.tongshi,
      jishi:app.globalData.jishi,
      jihua:app.globalData.jihua,
      zhuyi:app.globalData.zhuyi
    });
    this.setData({userinfo,collectNums:collect.length});
      
  }
})