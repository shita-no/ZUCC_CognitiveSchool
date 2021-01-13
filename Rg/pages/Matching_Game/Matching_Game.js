import Toast from '../../dist/toast/toast';
var app = getApp()
Page({
  data: {
  	animationMaingoal: null,
    animationBackgoal: null,
    show: null,
    show1: null,
    show2: null,
    imageUrl: [],
    showImage: [],
    level3Image: [],
    goalImage: "",
    block: "https://wx1.sinaimg.cn/mw690/006avIczly1glirn7bn04j30dw0eo3yj.jpg",
    level: 1,
    failedCount: 0,
    level3FailedCount: 0,
    score: 100,
    level1Count: 1,
    level2Count: 1,
    level3Answer: 0,
    level2Answer: 0,
    flag: false,
    one: "one",
    closeType: "one",
    maxScore: 0,
    Done: null,
  },

  onLoad: function() {
    var th = this
    th.setData({
      show2: true
    })
    // console.log(app.globalData.Schulte_Grid_Time)
    // console.log(app.globalData.Schulte_Grid_failedCount)
    var Donkey = "https://wx3.sinaimg.cn/mw690/006avIczly1gliy9d9yprj307x07xaal.jpg"
    var star = "https://wx1.sinaimg.cn/mw690/006avIczly1glirncq1iaj307x07x74r.jpg"
    var fish = "https://wx1.sinaimg.cn/mw690/006avIczly1glirnhstp2j307x07t0ta.jpg"
    var mushroom = "https://wx2.sinaimg.cn/mw690/006avIczly1glirqdkml3j307x07xmxh.jpg"
    var ghost = "https://wx2.sinaimg.cn/mw690/006avIczly1glirqiimc2j307x07x3z0.jpg"
    var leaf = "https://wx2.sinaimg.cn/mw690/006avIczly1glirqnqp4xj307x09f74p.jpg"
    var chestnut = "https://wx2.sinaimg.cn/mw690/006avIczly1glirnzkxoij307x07x3yz.jpg"
    var deer = "https://wx1.sinaimg.cn/mw690/006avIczly1gm2n2h2sy9j302m02m3ye.jpg"
    var gift = "https://wx4.sinaimg.cn/mw690/006avIczly1gm2n7nhsjjj305k05ka9y.jpg"
    var complete = "https://wx3.sinaimg.cn/mw690/006avIczly1gm5z95gyudj301o01oa9x.jpg"
    var cat = "https://wx1.sinaimg.cn/mw690/006avIczly1gm5z98pvw5j303k03kwed.jpg"
    var foot = "https://wx3.sinaimg.cn/mw690/006avIczly1gm67lmydujj305j05jdfz.jpg"
    var icon = "https://wx2.sinaimg.cn/mw690/006avIczly1gm5z9cdcrjj3090090jso.jpg"
    var url = [Donkey,star,fish,mushroom,ghost,leaf,chestnut,deer,gift,complete,cat,foot,icon]
    url.sort(function(){return 0.5 - Math.random()})
    var level3url = []
    var n = 0
    for(let i = 0;i < url.length;i++)
      level3url[i] = url[i]
    for(let i = url.length;i < url.length + 7;i++) {
      level3url[i] = url[n]
      n = n + 1
    }
    th.setData({
      imageUrl: url,
      level3Image: level3url
    })
    // console.log(this.data.level3Image)
    th.initGame(th.data.level)
    th.shiningClose(1)
    wx.getStorage({
      key: 'tongshi',
      success(res) {
        th.setData({
          maxScore: res.data,
          Done: true,
          show2: false,
          show: true
        })
        th.waitStart()
      }
    })
    // if(th.data.Done == true) 
    //   th.setData({
    //     show2: false
    //   })
  },

  waitStart: function() {
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
        this.Start()
        clearInterval(timer);
        Toast.clear();
      }
    }, 1000);
  },

  close() {
    var th = this
    th.setData({
      show2: false,
      show: true
    })
    th.Start()
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

  Start: function() {
    var th = this
    if(th.data.level == 1) {
      var randomFlip = [1,2,3]
      randomFlip.sort(function(){return 0.5 - Math.random()})
      console.log('randomFlip is ' + randomFlip[0])
      if(randomFlip[0] == 1) {
        setTimeout(() => {
          th.sampleDisplayImage(0)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(0)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(1)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(1)
        }, 5000);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 5500);
        // setTimeout(() => {
        //   th.sampleDisplayImage(6)
        // }, 1000);
        // setTimeout(() => {
        //   th.sampleCoverImage(6)
        // }, 2500);
        // setTimeout(() => {
        //   th.GoalImage('goal')
        // }, 3000);
      }
      if(randomFlip[0] == 2) {
        setTimeout(() => {
          th.sampleDisplayImage(2)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(2)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(3)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(3)
        }, 5000);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 5500);
        // setTimeout(() => {
        //   th.sampleDisplayImage(6)
        // }, 1000);
        // setTimeout(() => {
        //   th.sampleCoverImage(6)
        // }, 2500);
        // setTimeout(() => {
        //   th.GoalImage('goal')
        // }, 3000);
      }
      if(randomFlip[0] == 3) {
        setTimeout(() => {
          th.sampleDisplayImage(4)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(4)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(5)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(5)
        }, 5000);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 5500);
        // setTimeout(() => {
        //   th.sampleDisplayImage(6)
        // }, 1000);
        // setTimeout(() => {
        //   th.sampleCoverImage(6)
        // }, 2500);
        // setTimeout(() => {
        //   th.GoalImage('goal')
        // }, 3000);
      }
    }
    if(th.data.level == 2) {
      var randomFlip = [1,2,3,4]
      randomFlip.sort(function(){return 0.5 - Math.random()})
      console.log('randomFlip is ' + randomFlip[0])
      if(randomFlip[0] == 1) {
        setTimeout(() => {
          th.sampleDisplayImage(0)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(0)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(1)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(1)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(2)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(2)
        }, 7500);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 8000);
        // setTimeout(() => {
        //   th.sampleDisplayImage(12)
        // }, 8500);
        // setTimeout(() => {
        //   th.sampleCoverImage(12)
        // }, 10000);
        // setTimeout(() => {
        //   th.GoalImage('goal')
        // }, 10500);
      }
      if(randomFlip[0] == 2) {
        setTimeout(() => {
          th.sampleDisplayImage(3)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(3)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(4)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(4)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(5)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(5)
        }, 7500);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 8000);
        // setTimeout(() => {
        //   th.sampleDisplayImage(12)
        // }, 8500);
        // setTimeout(() => {
        //   th.sampleCoverImage(12)
        // }, 10000);
        // setTimeout(() => {
        //   th.GoalImage('goal')
        // }, 10500);
      }
      if(randomFlip[0] == 3) {
        setTimeout(() => {
          th.sampleDisplayImage(6)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(6)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(7)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(7)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(8)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(8)
        }, 7500);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 8000);
        // setTimeout(() => {
        //   th.sampleDisplayImage(12)
        // }, 8500);
        // setTimeout(() => {
        //   th.sampleCoverImage(12)
        // }, 10000);
        // setTimeout(() => {
        //   th.GoalImage('goal')
        // }, 10500);
      }
      if(randomFlip[0] == 4) {
        setTimeout(() => {
          th.sampleDisplayImage(9)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(9)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(10)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(10)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(11)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(11)
        }, 7500);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 8000);
        // setTimeout(() => {
        //   th.sampleDisplayImage(12)
        // }, 8500);
        // setTimeout(() => {
        //   th.sampleCoverImage(12)
        // }, 10000);
        // setTimeout(() => {
        //   th.GoalImage('goal')
        // }, 10500);
      }
    }
    if(th.data.level == 3) {
      var randomFlip = [1,2,3,4,5,6] //测试中
      randomFlip.sort(function(){return 0.5 - Math.random()})
      console.log('randomFlip is ' + randomFlip[0])
      if(randomFlip[0] == 1) {
        setTimeout(() => {
          th.sampleDisplayImage(0)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(0)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(1)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(1)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(2)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(2)
        }, 7500);
        setTimeout(() => {
          th.sampleDisplayImage(3)
        }, 8500);
        setTimeout(() => {
          th.sampleCoverImage(3)
        }, 10000);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 10500);
      }
      if(randomFlip[0] == 2) {
        setTimeout(() => {
          th.sampleDisplayImage(4)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(4)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(5)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(5)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(6)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(6)
        }, 7500);
        setTimeout(() => {
          th.sampleDisplayImage(7)
        }, 8500);
        setTimeout(() => {
          th.sampleCoverImage(7)
        }, 10000);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 10500);
      }
      if(randomFlip[0] == 3) {
        setTimeout(() => {
          th.sampleDisplayImage(8)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(8)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(9)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(9)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(10)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(10)
        }, 7500);
        setTimeout(() => {
          th.sampleDisplayImage(11)
        }, 8500);
        setTimeout(() => {
          th.sampleCoverImage(11)
        }, 10000);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 10500);
      }
      if(randomFlip[0] == 4) {
        setTimeout(() => {
          th.sampleDisplayImage(12)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(12)
        }, 2500);
        setTimeout(() => {
          th.sampleDisplayImage(13)
        }, 3500);
        setTimeout(() => {
          th.sampleCoverImage(13)
        }, 5000);
        setTimeout(() => {
          th.sampleDisplayImage(14)
        }, 6000);
        setTimeout(() => {
          th.sampleCoverImage(14)
        }, 7500);
        setTimeout(() => {
          th.sampleDisplayImage(15)
        }, 8500);
        setTimeout(() => {
          th.sampleCoverImage(15)
        }, 10000);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 10500);
      }
      if(randomFlip[0] == 5) {
        setTimeout(() => {
          th.sampleDisplayImage(16)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(16)
        }, 3500);
        setTimeout(() => {
          th.sampleDisplayImage(17)
        }, 4000);
        setTimeout(() => {
          th.sampleCoverImage(17)
        }, 6500);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 7000);
      }
      if(randomFlip[0] == 6) {
        setTimeout(() => {
          th.sampleDisplayImage(18)
        }, 1000);
        setTimeout(() => {
          th.sampleCoverImage(18)
        }, 3500);
        setTimeout(() => {
          th.sampleDisplayImage(19)
        }, 4000);
        setTimeout(() => {
          th.sampleCoverImage(19)
        }, 6500);
        setTimeout(() => {
          th.GoalImage('goal')
        }, 7000);
      }
    }
  },

  initGame: function(level) {
    var th = this
    var originalImage = th.data.imageUrl
    if(level == 3)
      originalImage = th.data.level3Image.sort(function(){return 0.5 - Math.random()})
    // if(level == 2) {
    //   for(let i = 0;i < 4;i++)
    //     originalImage[i] = th.data.imageUrl[i]
    //   for(let i = 0;i < 5;i++)
    //     originalImage[i + 4] = th.data.imageUrl[i]
    // }
    var image = []
    var goal = parseInt(Math.random() * ((level + 1) ** 2))
    // for(let i = 0;i < (level + 1) ** 2;i++)
    //   image[i] = originalImage[i]
    image = originalImage.sort(function(){return 0.5 - Math.random()})
    var setImage = []
    var n = 0
    var level3count = 0
    for(let i = 0;i < level + 1;i++) {
      let tmp = []
      for(let j = 0;j < level + 1;j++) {
        tmp[j] = [image[n],"animationMain","animationBack",n]
        if(image[n] == image[goal])
          level3count += 1
        n = n + 1
      }
      setImage[i] = tmp
    }
    th.setData({
      showImage: setImage,
      goalImage: image[goal],
      level3Answer: level3count,
      show: true
    })
    if(level == 3)
      console.log('level3 need check num ' + th.data.level3Answer)
  },

  sampleDisplayImage: function(id) {
    var th = this
    th.animation_main = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear'
    })
    th.animation_back = wx.createAnimation({
      duration:400,
      timingFunction:'linear'
    })
    if(th.data.level == 1) {
      if(id == 0) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 1) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 2) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 3) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 4) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 5) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 6) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        for(let i = 0;i < th.data.level + 1;i++)
          for(let j = 0;j < th.data.level + 1;j++) {
            showimage[i][j][1] = th.animation_main.export() 
            showimage[i][j][2] = th.animation_back.export()
          }
        th.setData({
          showImage: showimage
        })
      }
    }
    if(th.data.level == 2) {
      if(id == 0) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 1) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 2) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 3) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 4) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 5) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 6) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 7) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 8) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 9) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 10) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 11) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 12) {
        var showimage = th.data.showImage
        for(let i = 0;i < th.data.level + 1;i++)
          for(let j = 0;j < th.data.level + 1;j++) {
            th.animation_main.rotateY(180).step()
            th.animation_back.rotateY(0).step()
            showimage[i][j][1] = th.animation_main.export()
            showimage[i][j][2] = th.animation_back.export()
          }
        th.setData({
          showImage: showimage
        })
      }
    }
    if(th.data.level == 3) {
      if(id == 0) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 1) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 2) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 3) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 4) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 5) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 6) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 7) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 8) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 9) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 10) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 11) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 12) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 13) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 14) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 15) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 16) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 17) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 18) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 19) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.animation_main.rotateY(180).step()
        th.animation_back.rotateY(0).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 20) {
        var showimage = th.data.showImage
        for(let i = 0;i < th.data.level + 1;i++)
          for(let j = 0;j < th.data.level + 1;j++) {
            th.animation_main.rotateY(180).step()
            th.animation_back.rotateY(0).step()
            showimage[i][j][1] = th.animation_main.export()
            showimage[i][j][2] = th.animation_back.export()
          }
        th.setData({
          showImage: showimage
        })
      }
    }
  },

  sampleCoverImage: function(id) {
    var th = this
    th.animation_main = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear'
    })
    th.animation_back = wx.createAnimation({
      duration:400,
      timingFunction:'linear'
    })
    if(th.data.level == 1) {
      if(id == 0) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 1) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 2) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 3) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 4) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 5) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 6) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        for(let i = 0;i < th.data.level + 1;i++)
          for(let j = 0;j < th.data.level + 1;j++) {
            showimage[i][j][1] = th.animation_main.export() 
            showimage[i][j][2] = th.animation_back.export()
          }
        th.setData({
          showImage: showimage
        })
      }
    }
    if(th.data.level == 2) {
      if(id == 0) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 1) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 2) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 3) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 4) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 5) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 6) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 7) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 8) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 9) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 10) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 11) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 12) {
        var showimage = th.data.showImage
        for(let i = 0;i < th.data.level + 1;i++)
          for(let j = 0;j < th.data.level + 1;j++) {
            th.animation_main.rotateY(0).step()
            th.animation_back.rotateY(-180).step()
            showimage[i][j][1] = th.animation_main.export()
            showimage[i][j][2] = th.animation_back.export()
          }
        th.setData({
          showImage: showimage
        })
      }
    }
    if(th.data.level == 3) {
      if(id == 0) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 1) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 2) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 3) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 4) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 5) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 6) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 7) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 8) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 9) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 10) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 11) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 12) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 13) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 14) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 15) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 16) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 17) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 18) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][0][1] = th.animation_main.export()
        showimage[0][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][1][1] = th.animation_main.export()
        showimage[0][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][0][1] = th.animation_main.export()
        showimage[1][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][1][1] = th.animation_main.export()
        showimage[1][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][2][1] = th.animation_main.export()
        showimage[2][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][3][1] = th.animation_main.export()
        showimage[2][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][2][1] = th.animation_main.export()
        showimage[3][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][3][1] = th.animation_main.export()
        showimage[3][3][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 19) {
        var showimage = th.data.showImage
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][2][1] = th.animation_main.export()
        showimage[0][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[0][3][1] = th.animation_main.export()
        showimage[0][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][2][1] = th.animation_main.export()
        showimage[1][2][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[1][3][1] = th.animation_main.export()
        showimage[1][3][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][0][1] = th.animation_main.export()
        showimage[2][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[2][1][1] = th.animation_main.export()
        showimage[2][1][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][0][1] = th.animation_main.export()
        showimage[3][0][2] = th.animation_back.export()
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        showimage[3][1][1] = th.animation_main.export()
        showimage[3][1][2] = th.animation_back.export()
        th.setData({
          showImage: showimage
        })
      }
      if(id == 20) {
        var showimage = th.data.showImage
        for(let i = 0;i < th.data.level + 1;i++)
          for(let j = 0;j < th.data.level + 1;j++) {
            th.animation_main.rotateY(0).step()
            th.animation_back.rotateY(-180).step()
            showimage[i][j][1] = th.animation_main.export()
            showimage[i][j][2] = th.animation_back.export()
          }
        th.setData({
          showImage: showimage
        })
      }
    }
  },

  GoalImage: function(id) {
    var th = this
    th.animation_main = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear'
    })
    th.animation_back = wx.createAnimation({
      duration:400,
      timingFunction:'linear'
    })
    if (id == 'goal') {
      th.animation_main.rotateY(180).step()
      th.animation_back.rotateY(0).step()
      th.setData({
        animationMaingoal: th.animation_main.export(),
        animationBackgoal: th.animation_back.export(),
        show: false
      })
    }
  },

  checkTheAnswer: function(e) {
    console.log(e.currentTarget.dataset.id)
    var id = e.currentTarget.dataset.id
    var th = this
    var image = th.data.showImage
    var a,b
    th.animation_main = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear'
    })
    th.animation_back = wx.createAnimation({
      duration:400,
      timingFunction:'linear'
    })
    th.animation_main.rotateY(180).step()
    th.animation_back.rotateY(0).step()
    // console.log(image)
    for(let i = 0;i < th.data.level + 1;i++)
      for(let j = 0;j < th.data.level + 1;j++)
        if(image[i][j][3] == id) {
          image[i][j][1] = th.animation_main.export()
          image[i][j][2] = th.animation_back.export()
          a = i
          b = j
          break
        }
    th.setData({
      showImage: image
    })
    if(image[a][b][0] == th.data.goalImage) {
      if(th.data.level < 3) {
        Toast.success('答对啦')
        th.animation_main = wx.createAnimation({
          duration: 400,
          timingFunction: 'linear'
        })
        th.animation_back = wx.createAnimation({
          duration:400,
          timingFunction:'linear'
        })
        th.setData({
          show: true
        })
        setTimeout(() => {
          th.animation_main.rotateY(0).step()
          th.animation_back.rotateY(-180).step()
          image[a][b][1] = th.animation_main.export()
          image[a][b][2] = th.animation_back.export()
          th.animation_main.rotateY(0).step()
          th.animation_back.rotateY(-180).step()
          th.setData({
            showImage: image,
            animationMaingoal: th.animation_main.export(),
            animationBackgoal: th.animation_back.export(),
          })
        }, 700);
        if(th.data.level == 1) {
          if(th.data.level1Count != 0)
            setTimeout(() => {
              th.setData({
                level1Count: th.data.level1Count - 1
              })
              th.initGame(th.data.level)
              th.Start()
            }, 1500);
          else
            setTimeout(() => {
              th.setData({
                level: th.data.level + 1,
              })
              th.initGame(th.data.level)
              th.Start()
            }, 1500);
        }
        else if(th.data.level == 2) {
          if(th.data.level2Count != 0)
            setTimeout(() => {
              th.setData({
                level2Count: th.data.level2Count - 1
              })
              th.initGame(th.data.level)
              th.Start()
            }, 1500);
          else
            setTimeout(() => {
              th.setData({
                level: th.data.level + 1,
              })
              th.initGame(th.data.level)
              th.Start()
            }, 1500);
        }
        else {
          setTimeout(() => {
            th.setData({
              level: th.data.level + 1,
            })
            th.initGame(th.data.level)
            th.Start()
          }, 1500);
        }
      }
      else {
        var that=this;
        th.setData({
          level3Answer: th.data.level3Answer - 1
        })
        th.data.score += 2
        if(th.data.level3Answer != 0) 
          Toast.success('还有' + th.data.level3Answer + '个哦')
        else {
          Toast.success('恭喜你完成测试!')
          console.log('最终得分：' + th.data.score)

          if(th.data.maxScore < th.data.score) {
            wx.setStorage({
              data: th.data.score,
              key: 'tongshi',
            })
            app.globalData.tongshi = th.data.score
          }

          setTimeout(() => {
            th.setData({
              show1: true
            })
            th.shiningScore()
          }, 800);
          //等康哥的页面
        }
      }
    }
    else {
      var th = this;
      if(th.data.level == 1)
        th.setData({
          score: th.data.score - 10
        })
      else if(th.data.level == 2)
        th.setData({
          score: th.data.score - 5
        })
      else {
        th.setData({
          score: th.data.score - 1,
          level3FailedCount: th.data.level3FailedCount + 1
        })
      }
      th.setData({
        failedCount: th.data.failedCount + 1,
      })
      if(th.data.level3FailedCount < 3)
        Toast.fail('选错啦')
      else {
        Toast.success('测试结束')
        th.setData({
          show: true,
          score: th.data.score
        })
        if(th.data.maxScore < th.data.score) {
          wx.setStorage({
            data: th.data.score,
            key: 'tongshi',
         })
         app.globalData.tongshi = th.data.score
        }
        
        setTimeout(() => {
          th.setData({
            show1: true
          })
          th.shiningScore()
        }, 800);
      }
      console.log('累计选错次数：' + th.data.failedCount)
      setTimeout(() => {
        th.animation_main.rotateY(0).step()
        th.animation_back.rotateY(-180).step()
        image[a][b][1] = th.animation_main.export()
        image[a][b][2] = th.animation_back.export()
        th.setData({
          showImage: image
        })
      }, 800);
    }
  },

  jumpToMain() {
    wx.switchTab({
      url: '../index/index',
    })
  },

  shiningScore: function() {
    var th = this
    setTimeout(() => {
      if(th.data.flag == false)
        th.setData({
          flag: !th.data.flag,
          one: "two"
        })
      else 
        th.setData({
          flag: !th.data.flag,
          one: "one"
        })
      th.shiningScore()
    }, 75);
  },
})