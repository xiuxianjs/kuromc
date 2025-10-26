import { picRender } from '../../../component/image.js';
import util from '../../../models/util.js';
import { useSend, Image } from 'alemonjs';

var res = OnResponse(async (event, next) => {
    if (!util.getRuleReg(/(抽卡|唤取|hq)帮助/).test(event.MessageText)) {
        next();
        return;
    }
    const img = await picRender('Gacha', {});
    const Send = useSend(event);
    if (typeof img !== 'boolean') {
        void Send(Image(img));
    }
}, ['private.message.create', 'message.create']);

export { res as default };
