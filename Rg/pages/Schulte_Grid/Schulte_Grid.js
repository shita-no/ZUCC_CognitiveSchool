import Toast from '../../dist/toast/toast';
var app = getApp()
Page({
  data: {
    numbers: [],
    count: 1,
    failedCount: 0,
    time: 10000,
    finish: null,
    level: 1,
    show1: null,
    show: null,
    score: 100,
    showTime: true,
    closeType: "one",
    scoreType: "one",
    maxScore: 0,
    show5: null,
  },

  onLoad: function () {
    var th = this
    th.setData({
      show: true
    })
    th.initGame(th.data.level)
    th.shiningClose(1)
    wx.getStorage({
      key: 'jihua',
      success(res) {
        th.setData({
          maxScore: res.data
        })
      }
    })
  },

  teachHide() {
    this.setData({
      show: false
    })
  },

  onShow: function() {
    var th = this
    setTimeout(function() {
      if(th.data.time != 0 && th.data.finish != true) {
        var time = th.data.time
        time = time - 1
        th.setData({
          time: time
        })
        th.onShow()
      }
      else {
        console.log('游戏结束')
        console.log('错误点击次数: ' + th.data.failedCount)
      }
    }, 1000);
  },

  shiningClose: function(id) {
    var th = this
    if(th.data.show == true)
      if(id == 1)
        setTimeout(() => {
          th.setData({
            closeType: "two"
         })
          th.shiningClose(2)
        }, 100);
      else
        setTimeout(() => {
          th.setData({
            closeType: "one"
          })
          th.shiningClose(1)
        }, 100);
  },

  shingScore: function(id) {
    var th = this
    if(id == 1)
      setTimeout(() => {
        th.setData({
          scoreType: "two"
        })
        th.shingScore(2)
      }, 100);
    else
      setTimeout(() => {
        th.setData({
          scoreType: "one"
        })
        th.shingScore(1)
      }, 100);
  },

  initGame: function(level) {
    var th = this
    var degree = (level + 1) ** 2
    var num = []
    for(let i = 1;i <= degree;i++)
      num[i] = i
    num.sort(function(){return 0.5 - Math.random()})
    var num2 = []
    var n = 0
    for(let x = 0;x < level + 1;x++) {
      let number = []
      for(let i = 0;i < level + 1;i++) {
        number[i] = num[n]
        n = n + 1
      }
      num2[x] = number
    }
    th.setData({
      numbers: num2,
      count: 1
    })
    console.log(th.data.numbers)
  },

  jumpToMain() {
    wx.switchTab({
      url: '../index/index',
    })
  },

  clickBlock: function(e) {
    var th = this
    if(e.currentTarget.id == th.data.count) {
      var num = th.data.numbers
      for(let i = 0;i < num.length;i++)
        for(let j = 0;j < num[i].length;j++)
          if(num[i][j] == e.currentTarget.id)
            num[i][j] = 0
      th.setData({
        numbers: num,
        count: th.data.count + 1
      })
    }
    else if(th.data.level == 4)
      th.setData({
        failedCount: th.data.failedCount + 1
      })
    if(th.data.count == ((th.data.level + 1) ** 2 + 1) && th.data.level != 4) {
      if(th.data.level == 2) {
        // th.setData({
        //   level: th.data.level + 2,
        //   showTime: false,
        //   time: 60,
        // })
        // th.initGame(th.data.level)
        // th.initGame(0)
        th.setData({
          show5: true
        })
        th.StartLevel3()
      }
      else {
        th.setData({
          level: th.data.level + 1
        })
        th.initGame(th.data.level)
      }
    }
    //app.globalData.Schulte_Grid_failedCount = th.data.failedCount
    // app.globalData.Schulte_Grid_Time = 60 - th.data.time
    var time = 60 - th.data.time
    console.log(time)
    var score
    if(time < 20)
      score = 100 - parseInt(time / 2)
    else if(time < 42)
      score = 100 - time
    else
      score = 100 - time * 2
    if(th.data.count == ((th.data.level + 1) ** 2 + 1) && th.data.level == 4) {
      th.setData({
        finish: true,
        score: score
      })
      app.globalData.jihua = score
      setTimeout(() => {
        th.setData({
          show1: true,
        })
      }, 500);
      th.shingScore(1)
      console.log('完成游戏')
      console.log(th.data.maxScore)
      console.log(th.data.score)
      if(th.data.maxScore < th.data.score) {
        wx.setStorage({
          data: th.data.score,
          key: 'jihua',
        })
        app.globalData.jihua = th.data.score
      }
    }
    console.log('当前需点击：' + th.data.count + ' ' + '错误点击次数：' + th.data.failedCount)
  },
  StartLevel3: function() {
    var th = this
    const toast = Toast.loading({
      duration: 0,
      forbidClick: true,
      message: '3',
      selector: '#custom-selector',
    });
    
    let second = 3;
    const timer = setInterval(() => {
      second--;
      if (second) {
        toast.setData({
          message: `${second}`,
        });
      } else {
        th.setData({
          level: th.data.level + 2,
          showTime: false,
          time: 60,
          show5: false,
        })
        th.initGame(th.data.level)
        clearInterval(timer);
        Toast.clear();
      }
    }, 1000);
  }
})