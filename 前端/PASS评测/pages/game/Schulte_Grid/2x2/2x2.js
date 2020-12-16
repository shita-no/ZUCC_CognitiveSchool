Page({
  data: {
    numbers: [[],[]],
    count: 1,
    failedCount: 0,
  },

  onLoad: function (options) {
    var num = [1,2,3,4]
    var num2 = [[],[]]
    num.sort(function(){return 0.5 - Math.random()})
    console.log(num)
    num2[0][0] = num[0]
    num2[0][1] = num[1]
    num2[1][0] = num[2]
    num2[1][1] = num[3]
    console.log(num2)
    this.setData({
      numbers: num2
    })
  },

  clickBlock:function(e){
    console.log(e.currentTarget.id)
    var a,b
    var num = [[],[]]
    for(let i = 0;i < 2;i++)
      for(let j = 0;j < 2;j++) {
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
      if(this.data.count == 5)
      wx.redirectTo({
        url: '../3x3/3x3'
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