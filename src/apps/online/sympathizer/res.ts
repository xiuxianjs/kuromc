import { picImage } from '@src/component'
import { DB } from '@src/db'
import util from '@src/models/util'
import { Image, Text, useSend } from 'alemonjs'
// tudo: 未完成
export default OnResponse(
  async (event, next) => {
    if (!util.getRuleReg(/共鸣者/).test(event.MessageText)) {
      next()
      return
    }
    // 创建一个send
    const Send = useSend(event)
    const res = await DB.getAympathizer()
    if (!res) {
      Send(Text('数据获取失败'))
      return
    }
    const data = res.data.results.records.map(item => {
      return {
        title: item.name,
        url: item.content.contentUrl
      }
    })
    // pic
    const img = await picImage('Sympathizer', {
      data
    })
    // send
    if (img) {
      Send(Image(img))
    } else {
      Send(Text('图片加载失败'))
    }
  },
  ['private.message.create', 'message.create']
)
