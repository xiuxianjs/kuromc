import util from '@src/models/util'
import _ from 'lodash'
import GaChaModel from '@src/models/gacha'
import { Text, useObserver, useSend } from 'alemonjs'
import { join } from 'path'
import { updateGachaFunc } from '../updateGachaFunc'
import { RegExpTable } from '@src/RegExpTable'
const jsonPath = join(util.rootPath, 'data', 'kuromc', 'gacha', 'links.json')
const Res = OnResponse(async (event, next) => {
  const url = event.MessageText.match(
    /https:\/\/aki-gm-resources\.aki-game\.com\/aki\/gacha\/index\.html#\/record(?:\?.*)?$/
  )?.[0]
  const Send = useSend(event)
  if (!url) {
    Send(Text('抽卡链接不正确！'))
    next()
    return
  }
  const UserKey = event.UserKey
  const links = util.readJSON(jsonPath) || []
  const link = _.find(links, ['user_id', UserKey])
  if (link) {
    link.url = url
  } else {
    links.push({ user_id: UserKey, url })
  }
  util.writeJSON(jsonPath, links)
  Send(Text('抽卡链接绑定成功！'))
  const kmcModel = new GaChaModel(UserKey)
  await updateGachaFunc(Send, kmcModel)
  return
}, 'private.message.create')

export default OnResponse(async (event, next) => {
  if (!RegExpTable.gachaLinkBind.value.test(event.MessageText)) {
    next()
    return
  }
  const Send = useSend(event)
  Send(Text('请发送完整的抽卡链接，抽卡链接获取请查看抽卡帮助~'))
  const Observer = useObserver(event, 'private.message.create')
  Observer(Res.current, ['UserId'])
}, 'private.message.create')
