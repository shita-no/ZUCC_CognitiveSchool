import Toast from '../../dist/toast/toast';
const app = getApp()
const canvas=wx.createCanvasContext('myCanvas')

Page({
  data: {
    //倒计时
    time:30,
    //游戏是否结束
    over:false,
    //描述
    description:"白色0",
    //要找的数字id
    id_right:['./img/num/hollow/0.png'],
    //结束语句
    over_msg:"恭喜完成测验",
    //当前关卡数
    level:1,
    //方块数组
    content:[['./img/num/hollow/0.png']],
    //图片路径的存储数组
    img_url:[],
    //结算分数
    score:0,
    loading:null,
    //遮罩层是否显示
    hide:true
    },
  onLoad: function(){
    Toast.setDefaultOptions({
      duration:500
    })
    //初始化图片路径
    this.init_img();
    console.log(this.data.content)
   
  },
  //关闭遮罩层
  turn_off:function(){
    this.setData({
      hide:false
    })
     //调用计时器
     this.setData({
      loading:setInterval(this.onShow,1000)
    })
  },
  //初始化下一关
  init_game:function(){
    this.ramdom_block()
  },
  //生成方格内容
  ramdom_block:function (){
    var content_1=[]
    var level=this.data.level/3
    if(level>5){
      level=5
    }
    //生成方格内的内容
    for(var i=0;i<level;i++){
      let content_row=[]
      if(i<=2){
        for(let j=1;j<level+1;j++){
          content_row[j-1]=this.data.img_url[Math.floor(Math.random() * (20))]
        }
      }
      else{
        for(let j=1;j<level+1;j++){
          content_row[j-1]=this.data.img_url[Math.floor(Math.random() * (72))]
        }
      }
      
      content_1[i]=content_row
    }
    //从方格内随机几个要找的值
    var right=[]
    for(let i=0;i<1;i++){
      let i1=0
      let i2=Math.floor(Math.random() * (content_1[i1].length))
      right[i]=content_1[i1][i2]
    }
    //打乱顺序
    content_1.sort(function(){return 0.5 - Math.random()})
    console.log(right[0])
    var index=this.data.img_url.indexOf(right[0])
    var des=""
    if(index<10){
      des="白色"
    }
    else{
      des="黑色"
      index=index-10
    }
    console.log(index)
    des=des+index
    this.setData({
      content:content_1,
      id_right:right,
      description:des
    })
  },
  //点击方块事件
  click_block:function(e){
    console.log(e.currentTarget.id)
    var right_data=this.data.id_right
    for(let i=0;i<right_data.length;i++){
      if(right_data[i]==e.currentTarget.id){
        Toast.success(this.data.level+"关卡完成！")
        console.log("恭喜你通过第"+this.data.level+"关")
      this.setData({
        level:this.data.level+1,
        score:this.data.score+5
      })
      this.init_game()
      }
    }
    this.setData({
      score:this.data.score-1
    })
  },
  
  // 计时器
  onShow: function() {
    if(this.data.over)
      return;
    if(this.data.time>0){
      this.setData({
        time:this.data.time-1   
      })
    }
    else{
      var that=this;
      wx.showModal({
              title: '恭喜你成功完成！',
              content: '您共计通过了'+(that.data.level-1)+"个关卡，太棒了！",
              confirmText: '返回主页',
              success: function (res) {
                if (res.confirm) {
                  //console.log('用户点击确定');
                  if(that.data.level*4>app.globalData.zhuyi)
                  {
                    app.globalData.zhuyi=that.data.level*4;
                    wx.setStorage({
                      data: that.data.level*4,
                      key: 'zhuyi',
                    })
                  }
                    
                  wx.switchTab({
                    url: '../index/index'
                  })
                }
                else  {
                    //console.log('用户点击确定');
                  if(that.data.level*4>app.globalData.zhuyi)
                  {
                    app.globalData.zhuyi=that.data.level*4;
                    wx.setStorage({
                      data: app.globalData.zhuyi,
                      key: 'zhuyi',
                    })
                  }
                 
                    wx.switchTab({
                      url: '../index/index'
                    })
                  }
            }});
      this.setData({
        over:true
      })
    }
  },
  //初始化图片路径数组
  init_img:function(){
    var img=[];
    var id=0;
    //加载空心数字
    for(let i=0;i<10;i++){
      img[id]="./img/num/hollow/"+i+".png"
      console.log(img[id])
      id++;
    }
    //加载实心数字
    for(let i=0;i<10;i++){
      img[id]="./img/num/solid/"+i+".png"
      console.log(img[id])
      id++;
    }
    //加载空心字母
    for(let i=0;i<26;i++){
      img[id]="./img/char/hollow/"+i+".png"
      console.log(img[id])
      id++;
    }
    //加载实心字母
    for(let i=0;i<26;i++){
      img[id]="./img/char/solid/"+i+".png"
      console.log(img[id])
      id++;
    }

    this.setData({
      img_url:img
    })
  },

  onUnload: function() {
    let loading = this.data.loading;
    
    let that = this;
    
    clearInterval(loading)
   }
  
})