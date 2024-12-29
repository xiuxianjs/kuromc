import GaChaModel from '@src/models/gacha'
import { Text, useSend } from 'alemonjs'
import { updateGachaFunc } from '@src/apps/updateGachaFunc'
import { RegExpTable } from '@src/RegExpTable'
export default OnResponse(
  async (event, next) => {
    if (!RegExpTable.UpdateUp.value.test(event.MessageText)) {
      next()
      return
    }
    const kmcModel = new GaChaModel(event.UserKey)
    const Send = useSend(event)
    if (!kmcModel.link) {
      Send(Text('请先绑定抽卡链接，绑定方法请查看抽卡帮助！'))
      return true
    }
    await updateGachaFunc(Send, kmcModel)
    return
  },
  ['private.message.create', 'message.create']
)
