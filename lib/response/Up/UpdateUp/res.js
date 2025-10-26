import GaChaModel from '../../../models/gacha/index.js';
import { useSend, Text } from 'alemonjs';
import { updateGachaFunc } from '../../updateGachaFunc.js';
import util from '../../../models/util.js';

var res = OnResponse(async (event, next) => {
    if (!util.getRuleReg(/((抽卡|唤取|hq)(记录)?更新)|(更新(抽卡|唤取|hq)(记录)?)/).test(event.MessageText)) {
        next();
        return;
    }
    const kmcModel = new GaChaModel(event.UserKey);
    const Send = useSend(event);
    if (!kmcModel.link) {
        void Send(Text('请先绑定抽卡链接，绑定方法请查看抽卡帮助！'));
        return true;
    }
    await updateGachaFunc(Send, kmcModel);
}, ['private.message.create', 'message.create']);

export { res as default };
