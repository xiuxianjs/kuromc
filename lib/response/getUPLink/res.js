import GaChaModel from '../../models/gacha/index.js';
import { useSend, Text } from 'alemonjs';
import util from '../../models/util.js';

var res = OnResponse((event, next) => {
    if (!util.getRuleReg(/获取(抽卡|唤取|hq)链接/).test(event.MessageText)) {
        next();
        return;
    }
    const Send = useSend(event);
    void Send(Text('请发送完整的抽卡链接，抽卡链接获取请查看抽卡帮助~'));
    const { link } = new GaChaModel(event.UserKey);
    if (link) {
        void Send(Text(link.url));
    }
    else {
        void Send(Text('你还未绑定抽卡链接！绑定方法请查看抽卡帮助~'));
    }
}, ['private.message.create', 'message.create']);

export { res as default };
