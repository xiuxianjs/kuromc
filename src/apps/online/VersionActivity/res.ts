import { baseURL } from '@src/models/mc'
import util from '@src/models/util'
import { picURL } from '@src/pic'
import { Image, Text, useSend } from 'alemonjs'
export default OnResponse(async (event, next) => {
  if (!util.getRuleReg(/版本活动/).test(event.MessageText)) {
    next()
    return
  }
  // 创建一个send
  const Send = useSend(event)
  // pic
  const img = await picURL(`${baseURL}/mc/home`, {
    selector: 'dev .home-module.hot-content-side'
  })
  // send
  if (img) {
    Send(Image(img))
  } else {
    Send(Text('图片加载失败'))
  }
}, 'message.create')
