// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()

const db = cloud.database()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  try{
    return await db.collection('addItems').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        ItemName: event.ItemName,
        ItemDesc: event.ItemDesc,
        fileID: event.fileID
      }
    })
  } catch (e) {
    console.error(e)
  }
}