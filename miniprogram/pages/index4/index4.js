// pages/index4/index4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  onClickItemName: function(event){
    var self = this
    self.setData({
      ItemName: event.detail.value
    })
  },

  onUploadfile: function(){
    var self = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original','compressed'],
      sourceType: ['album','camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        let filePath = res.tempFilePaths[0];
        const name = Math.random() * 1000000;
        const cloudPath = name + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath, //文件路径
          success: res1 => {
            // get resource ID
            // console.log(res1.fileID)
            self.setData({
              fileID: res1.fileID
            })
          },
          fail: err => {
            // handle error
          }
        })
      }
    })
  },

  onUpdateDB(){
    var self=this
    wx.cloud.CallFunction({
      //要调用的云函数名称
      name: 'addItem',
      //传递给云函数的参数
      data: {
        ItemName: self.data.ItemName,
        ItemDesc: self.data.ItemDesc,
        fileID:self.data.fileID
      },
      success: res =>{
        console.log(res)
      },
      fail: err =>{
        console.log(err)
      }
    })
  }
  
})