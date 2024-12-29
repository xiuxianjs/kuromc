import { picRender } from '@src/component/image'
import { RegExpTable } from '@src/RegExpTable'
import { Image, Text, useSend } from 'alemonjs'
export default OnResponse(
  async (event, next) => {
    if (!RegExpTable.HelpApp.value.test(event.MessageText)) {
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
