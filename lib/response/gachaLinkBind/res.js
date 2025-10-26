import { useSend, Text, useSubscribe } from 'alemonjs';
import Res from './observer.js';
import util from '../../models/util.js';

var res = OnResponse((event, next) => {
    if (!util.getRuleReg(/(绑定)?(抽卡|唤取|hq)链接/).test(event.MessageText)) {
        next();
        return;
    }
    const Send = useSend(event);
    void Send(Text('请发送完整的抽卡链接，抽卡链接获取请查看抽卡帮助~'));
    const [sub] = useSubscribe(event, ['private.message.create', 'message.create']);
    sub.mount(Res.current, ['UserId']);
}, ['private.message.create', 'message.create']);

export { res as default };
