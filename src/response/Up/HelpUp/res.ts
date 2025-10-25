import { picRender } from '@src/component/image';
import util from '@src/models/util';
import { Image, useSend } from 'alemonjs';
export default OnResponse(
  async (event, next) => {
    if (!util.getRuleReg(/(抽卡|唤取|hq)帮助/).test(event.MessageText)) {
      next();

      return;
    }
    const img = await picRender('Gacha', {});
    const Send = useSend(event);

    if (typeof img !== 'boolean') {
      Send(Image(img));
    }
  },
  ['private.message.create', 'message.create']
);
