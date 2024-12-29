import { picImage } from '@src/component'
import { apiWikiCoreCatalogueItemGetPage } from '@src/models/mc'
import util from '@src/models/util'
import { Image, Text, useSend } from 'alemonjs'
export default OnResponse(async (event, next) => {
  if (!util.getRuleReg(/共鸣者/).test(event.MessageText)) {
    next()
    return
  }
  // 创建一个send
  const Send = useSend(event)

  const res = await apiWikiCoreCatalogueItemGetPage()

  if (res.code !== 200) {
    Send(Text(res.msg))
    return
  }

  console.log(res)
  const data = res.data.results.records.map(item => {
    return {
      title: item.name,
      url: item.content.contentUrl
    }
  })
  // pic
  const img = await picImage('Sympathizer', {
    data
  })
  // send
  if (img) {
    Send(Image(img))
  } else {
    Send(Text('图片加载失败'))
  }
}, 'message.create')
