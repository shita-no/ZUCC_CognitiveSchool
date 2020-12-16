Page({
  data: {
    numbers: [[],[],[],[],[]],
    count: 1,
    failedCount: 0,
    modalHidden: true,
  },

  onLoad: function (options) {
    var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
    var num2 = [[],[],[],[],[]]
    var count = 0
    count = parseInt(count)
    num.sort(function(){return 0.5 - Math.random()})
    console.log(num)
    for(let i = 0;i < 5;i++)
      for(let j = 0;j < 5;j++){
        num2[i][j] = num[parseInt(count)]
        count = parseInt(count) + 1
      }
    console.log(num2)
    this.setData({
      numbers: num2
    })
  },

  clickBlock:function(e){
    console.log(e.currentTarget.id)
    var a,b
    var num = [[],[],[],[],[]]
    for(let i = 0;i < 5;i++)
      for(let j = 0;j < 5;j++) {
        if(this.data.numbers[i][j] == e.currentTarget.id)
          num[i][j] = 0
        else
          num[i][j] = this.data.numbers[i][j]
      }
    console.log(num)
    if(this.data.count == e.currentTarget.id) {
      this.setData({
        count: parseInt(e.currentTarget.id) + 1,
        numbers: num
      })
      if(this.data.count == 26)
      // wx.redirectTo({
      //   url: '../5x5/5x5'
        this.setData({
          modalHidden: false,
        })
      // })
    }
    else
      this.setData({
        failedCount: (this.data.failedCount + 1)
      })
    console.log(this.data.count)
    console.log('错误点击次数:' + this.data.failedCount)
  },
  modalChange:function() {
    wx.redirectTo({
      url: '../../../index/index',
    })
  }
})