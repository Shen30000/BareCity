// miniprogram/pages/index2/index2.js
// 引入SDK核心类
var QQMapWX = require('../../qqmap-wx-jssdk1.2/qqmap-wx-jssdk.js');

// 实例化API核心类
var qqmapsdk = new QQMapWX({
  key: 'UFKBZ-74I64-2Y6U3-DVK7L-YN2G6-NCFSY'
});

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mylatitude: '',
    mylongitude: ''
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 事件触发，调用接口
  nearby_search: function () {
    var _this = this;

    // 调用接口
    qqmapsdk.search({
      keyword: '停车场',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
    
    // 调用接口
    qqmapsdk.search({
      keyword: '停车场',  //搜索关键词
      location: 'mylatitude,mylongitude',  //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "/resources/my_marker.png", //图标路径
            width: 20,
            height: 20
          })
        }
        _this.setData({ //设置markers属性，将搜索结果显示在地图中
          markers: mks
        })
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    });
  }
})
