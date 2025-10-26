import util from '../../../models/util.js';
import { picURL } from '../../../pic/index.js';
import { useSend, Image, Text } from 'alemonjs';

// tudo: 未完成
var res = OnResponse(async (event, next) => {
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
        void Send(Image(img));
    }
    else {
        void Send(Text('图片加载失败'));
    }
}, ['private.message.create', 'message.create']);

export { res as default };
