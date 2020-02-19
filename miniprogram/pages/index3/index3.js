// pages/index3/index3.js
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
  onClickItemName(event){
    var self = this
    var itemName = event.detail.value
    self.setData({
      itemName: itemName
    })
  },
  onClickItemDescription(event) {
    var self = this
    var itemDescription = event.detail.value
    self.setData({
      itemDescription: itemDescription
    })
  }, 
  onUploadPic(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        let filePath = res.tempFilePaths[0];
        const name = Math.random() * 1000000;
        const cloudPath = name + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath, // 文件路径
          success: res1 => {
            // get resource ID
            console.log(res1.fileID)
          },
          fail: err => {
            // handle error
          }
        })
      }
    })
  },
})