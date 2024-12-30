import { picRender } from '@src/component/image'
import util from '@src/models/util'
import { Image, Text, useSend } from 'alemonjs'
export default OnResponse(
  async (event, next) => {
    if (!util.getRuleReg(/(帮助|help)/).test(event.MessageText)) {
      next()
      return
    }
    // 创建一个send
    const Send = useSend(event)
    // pic
    const img = await picRender('Help', {})
    // send
    if (typeof img != 'boolean') {
      Send(Image(img))
    } else {
      Send(Text('图片加载失败'))
    }
  },
  ['private.message.create', 'message.create']
)
