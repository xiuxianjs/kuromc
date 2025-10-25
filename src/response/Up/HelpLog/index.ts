import _ from 'lodash';
import GaChaModel from '@src/models/gacha';
import { Image, Text, useSend } from 'alemonjs';
import { picRender } from '@src/component/image';
import util from '@src/models/util';
export default OnResponse(
  async (event, next) => {
    if (!util.getRuleReg(/(抽卡|唤取|hq)(up|UP|常驻)记录/).test(event.MessageText)) {
      next();

      return;
    }
    const { link } = new GaChaModel(event.UserKey);
    const Send = useSend(event);

    if (!link) {
      Send(Text('请先绑定抽卡链接，绑定方法请查看抽卡帮助！'));

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
      Send(Image(img));
    } else {
      Send(Text('图片加载失败...'));
    }
  },
  ['private.message.create', 'message.create']
);
