import { baseURL } from '../../../models/mc.js';
import util from '../../../models/util.js';
import { picURL } from '../../../pic/index.js';
import { useSend, Image, Text } from 'alemonjs';

var res = OnResponse(async (event, next) => {
    if (!util.getRuleReg(/角色唤取活动/).test(event.MessageText)) {
        next();
        return;
    }
    // 创建一个send
    const Send = useSend(event);
    // pic
    const img = await picURL(`${baseURL}/mc/home`, {
        selector: 'div .home-module.events-side'
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
