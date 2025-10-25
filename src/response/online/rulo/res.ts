import util from '@src/models/util';
import { picURL } from '@src/pic';
import { Image, Text, useSend } from 'alemonjs';
// tudo: 未完成
export default OnResponse(
  async (event, next) => {
    if (!util.getRuleReg(/rulo/).test(event.MessageText)) {
      next();

      return;
    }
    // 创建一个send
    const Send = useSend(event);
    const baseURL = 'https://wiki.kurobbs.com';
    const config = {
      url: `${baseURL}/mc/item/1312376371368607744`
    };
    // pic
    const img = await picURL(config.url, {
      selector: 'main .module-layout'
    });

    // send
    if (img) {
      Send(Image(img));
    } else {
      Send(Text('图片加载失败'));
    }
  },
  ['private.message.create', 'message.create']
);
