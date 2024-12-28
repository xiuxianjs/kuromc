import util from '@src/models/util'
import OnlineImage from '@src/apps/online/image'
import { Image, Text, useSend } from 'alemonjs'
export default OnResponse(async (event, next) => {
    if (!util.getRuleReg(/版本活动/).test(event.MessageText)) {
        next()
        return
    }
    const onLineImg = new OnlineImage('https://wiki.kurobbs.com/mc/home')
    const img = await onLineImg.createHomeEleImg('.hot-content-side')
    const Send = useSend(event)
    if (typeof img !== 'boolean') {
        Send(Image(img))
    } else {
        Send(Text('[版本活动]图片加载失败...'))
    }
    return true
}, 'message.create')