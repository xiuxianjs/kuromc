import _ from 'lodash'
import { Text, useObserver, useSend } from 'alemonjs'
import Res from './observer'
import util from '@src/models/util'
export default OnResponse(
  async (event, next) => {
    if (!util.getRuleReg(/(绑定)?(抽卡|唤取|hq)链接/).test(event.MessageText)) {
      next()
      return
    }
    const Send = useSend(event)
    Send(Text('请发送完整的抽卡链接，抽卡链接获取请查看抽卡帮助~'))
    const Observer = useObserver(event, 'private.message.create')
    Observer(Res.current, ['UserId'])
  },
  ['private.message.create', 'message.create']
)
