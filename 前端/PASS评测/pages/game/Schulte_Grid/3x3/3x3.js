Page({
  data: {
    numbers: [[],[],[]],
    count: 1,
    failedCount: 0,
  },

  onLoad: function (options) {
    var num = [1,2,3,4,5,6,7,8,9]
    var num2 = [[],[],[]]
    var count = 0
    count = parseInt(count)
    num.sort(function(){return 0.5 - Math.random()})
    console.log(num)
    for(let i = 0;i < 3;i++)
      for(let j = 0;j < 3;j++){
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
    var num = [[],[],[]]
    for(let i = 0;i < 3;i++)
      for(let j = 0;j < 3;j++) {
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
      if(this.data.count == 10)
      wx.redirectTo({
        url: '../4x4/4x4'
      })
    }
    else
      this.setData({
        failedCount: (this.data.failedCount + 1)
      })
    console.log(this.data.count)
    console.log('错误点击次数:' + this.data.failedCount)
  }
})