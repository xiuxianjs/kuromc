import util from '@src/models/util'
import OnlineImage from '@src/apps/image'
import { Image, Text, useSend } from 'alemonjs'
export default OnResponse(async (event, next) => {
  if (!util.getRuleReg(/当期(UP|up)/).test(event.MessageText)) {
    next()
    return
  }
  const onLineImg = new OnlineImage('https://wiki.kurobbs.com/mc/home')
  const img = await onLineImg.createHomeEleImg('.home-module.events-side')
  const Send = useSend(event)
  if (typeof img !== 'boolean') {
    Send(Image(img))
  } else {
    Send(Text('[版本活动]图片加载失败...'))
  }
  return true
}, 'message.create')