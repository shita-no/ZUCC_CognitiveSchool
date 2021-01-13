var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var radarChart = null;
var zhuyi=app.globalData.zhuyi;
var tongshi=app.globalData.tongshi;
var jishi=app.globalData.jishi;
var jihua=app.globalData.jihua;

Page({
    data: {
        zhuyid:zhuyi,
        tongshid:tongshi,
        jishid:jishi,
        jihuad:jihua
    },
    touchHandler: function (e) {
        console.log(radarChart.getCurrentDataIndex(e));
    },
    onShow:function(e)
    {
        this.onLoad();
    },
    onLoad:function(e)
    {
        this.setData({
            tongshid:app.globalData.tongshi,
            zhuyid:app.globalData.zhuyi,
            jishid:app.globalData.jishi,
            jihuad:app.globalData.jihua
        })
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }

        radarChart = new wxCharts({
            canvasId: 'radarCanvas',
            type: 'radar',
            categories: ['同时性','继时性', '注意', '计划'],
            series: [{
                name: '能力评估',
                data: [tongshi,jishi,zhuyi, jihua]
            }],
            width: windowWidth,
            height: 400,
            extra: {
                radar: {
                    max: 100
                }
            }
        });
    },
    onReady: function (e) {
        zhuyi=app.globalData.zhuyi;
        tongshi=app.globalData.tongshi;
        jishi=app.globalData.jishi;
        jihua=app.globalData.jihua;
        this.data.jihuad=jihua;
        this.data.tongshid=tongshi;
        this.data.jishid=jishi;
        this.data.zhuyid=zhuyi;
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }

        radarChart = new wxCharts({
            canvasId: 'radarCanvas',
            type: 'radar',
            categories: ['同时性','继时性', '注意', '计划'],
            series: [{
                name: '能力评估',
                data: [tongshi,jishi,zhuyi, jihua]
            }],
            width: windowWidth,
            height: 400,
            extra: {
                radar: {
                    max: 100
                }
            }
        });
    }
});