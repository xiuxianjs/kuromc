import _ from 'lodash'
import GaChaModel from '@src/models/gacha'
import { Text, useSend } from 'alemonjs'
import { RegExpTable } from '@src/RegExpTable'
export default OnResponse(async (event, next) => {
    if (!RegExpTable.getUPLink.value.test(event.MessageText)) {
        next()
        return
    }
    const Send = useSend(event)
    Send(Text('请发送完整的抽卡链接，抽卡链接获取请查看抽卡帮助~'))
    const { link } = new GaChaModel(event.UserKey)
    if (link) {
        Send(Text(link.url))
    } else {
        Send(Text('你还未绑定抽卡链接！绑定方法请查看抽卡帮助~'))
    }
}, 'private.message.create')