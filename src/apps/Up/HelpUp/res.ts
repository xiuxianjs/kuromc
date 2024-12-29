
import { picRender } from '@src/component/image'
import { RegExpTable } from '@src/RegExpTable'
import { Image, useSend } from 'alemonjs'
export default OnResponse(async (event, next) => {
    if (!RegExpTable.HelpUp.value.test(event.MessageText)) {
        next()
        return
    }
    const img = await picRender('Gacha', {})
    const Send = useSend(event)
    if (typeof img !== 'boolean') {
        Send(Image(img))
    }
}, 'message.create')