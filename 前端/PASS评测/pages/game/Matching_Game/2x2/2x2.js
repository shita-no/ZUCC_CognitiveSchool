Page({
  data: {
    class1: 'z1', //默认正面在上面
    class2: 'z2',
    imageUrl: [],
    num: 0
  },

  onLoad: function (options) {
    var Donkey = "https://wx3.sinaimg.cn/small/006avIczly1gliy9d9yprj307x07xaal.jpg"
    var star = "https://wx3.sinaimg.cn/small/006avIczly1glirncq1iaj307x07x74r.jpg"
    var mushroom = "https://wx3.sinaimg.cn/small/006avIczly1glirqdkml3j307x07xmxh.jpg"
    var lizi = "https://wx1.sinaimg.cn/small/006avIczly1glirnzkxoij307x07x3yz.jpg"
    var ghost = "https://wx1.sinaimg.cn/small/006avIczly1glirqiimc2j307x07x3z0.jpg"
    var leaves = "https://wx2.sinaimg.cn/small/006avIczly1glirqnqp4xj307x09f74p.jpg"
    var fish = "https://wx2.sinaimg.cn/small/006avIczly1glirnhstp2j307x07t0ta.jpg"
    var block = "https://wx4.sinaimg.cn/small/006avIczly1glirn7bn04j30dw0eo3yj.jpg"
    var url = [Donkey,star,mushroom,lizi,ghost,leaves,fish,block]
    url.sort(function(){return 0.5 - Math.random()})
    this.setData({
      imageUrl: url
    })

  },

  // onShow: function () {
  //   var date = new Date()
  //   var th_ = this
  //   var timerTem = setTimeout(function () {
  //     console.log(date)
  //     // console.log(th_.data.class1)
  //     var nu = [0,1,2,3,4,5,6,7]
  //     nu.sort(function(){return 0.5 - Math.random()})
  //     if (th_.data.class1 == 'z1' && th_.data.class2 == 'z2') {
  //       th_.run('front', 'back', 'z2', 'z1')
  //     }
  //     else {
  //       th_.run('back','front','z1','z2')
  //     }
  //     th_.setData({
  //       num: nu[0]
  //     })
  //     th_.onShow()
  //   }, 5000)
  // },

  rotateFn: function(e) {
    let data = this.data;
    if (data.class1 == 'z1' && data.class2 == 'z2') {
     this.run('front', 'back', 'z2', 'z1');
    } else {
     this.run('back', 'front', 'z1', 'z2');
    }
  },
  run: function(a, b, c, d) {
    let that = this;
    that.setData({
     class1: a,
     class2: b,
    })
    setTimeout(function() {
     that.setData({
      class1: c,
      class2: d,
      })
    }, 1000);
  },
})