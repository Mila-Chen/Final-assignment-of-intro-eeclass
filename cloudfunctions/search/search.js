const cloud = require('wx-server-sdk')
cloud.init()


const db = cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
  return db.collection('hello').where({
    tag: event.tag
  }).get()
}