import { picRender } from '../../component/image.js';
import util from '../../models/util.js';
import { useSend, Image, Text } from 'alemonjs';

var res = OnResponse(async (event, next) => {
    if (!util.getRuleReg(/(帮助|help)/).test(event.MessageText)) {
        next();
        return;
    }
    // 创建一个send
    const Send = useSend(event);
    // pic
    const img = await picRender('Help', {});
    // send
    if (typeof img !== 'boolean') {
        void Send(Image(img));
    }
    else {
        void Send(Text('图片加载失败'));
    }
}, ['private.message.create', 'message.create']);

export { res as default };
