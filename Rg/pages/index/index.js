//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  jumpg3:function(){
    if(this.showDialog())
    wx.navigateTo({
      url: '../pick_num/pick_num'
    });
  },
  jumpg4:function(){
    if(this.showDialog())
    wx.navigateTo({
      url: '../Color_Block_sort/Color_Block_sort'
    });
  },
  jumpg1:function(){
    if(this.showDialog())
    wx.navigateTo({
      url: '../Schulte_Grid/Schulte_Grid'
    });
  },
  jumpg2:function(){
    if(this.showDialog())
    wx.navigateTo({
      url: '../Matching_Game/Matching_Game'
    });
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showDialog:function(){
     var that=this;
      if(app.globalData.userInfo==null)
      {
        console.log(app.globalData.userInfo),
        wx.showModal({
                title: '您还没有登录哦！',
                content: '登录后才能记录成绩，先去登陆吧！',
                confirmText: '去登录',
                showCancel: false,
                
                success: function (res) {
                  if (res.confirm) {
                    //console.log('用户点击确定');
                    wx.switchTab({
                      url: '../mine/mine'
                    })
                  }
              }});
        return false;
      }
      else
      {
        return true;
      }
    }
   
})
