import GaChaModel from '../../../models/gacha/index.js';
import { useSend, Text, Image } from 'alemonjs';
import { picRender } from '../../../component/image.js';
import util from '../../../models/util.js';

var index = OnResponse(async (event, next) => {
    if (!util.getRuleReg(/(抽卡|唤取|hq)(up|UP|常驻)记录/).test(event.MessageText)) {
        next();
        return;
    }
    const { link } = new GaChaModel(event.UserKey);
    const Send = useSend(event);
    if (!link) {
        void Send(Text('请先绑定抽卡链接，绑定方法请查看抽卡帮助！'));
        return true;
    }
    const type = event.MessageText.includes('常驻') ? '常驻' : 'UP';
    const gcm = new GaChaModel(event.UserKey);
    const gachaData = gcm.getGachaData(type);
    const img = await picRender('GachaIndex', {
        roleData: gachaData.role,
        weaponData: gachaData.weapon,
        type
    });
    if (typeof img !== 'boolean') {
        void Send(Image(img));
    }
    else {
        void Send(Text('图片加载失败...'));
    }
}, ['private.message.create', 'message.create']);

export { index as default };
