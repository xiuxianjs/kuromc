import _ from 'lodash';
import GaChaModel from '@src/models/gacha';
import { Image, Text } from 'alemonjs';
import { picRender } from '@src/component/image';
export const updateGachaFunc = async (Send: Function, kmcModel: GaChaModel) => {
  Send(Text(`正在获取[UID: ${kmcModel.player_id}]的抽卡数据，请稍后...`));
  try {
    const { updateNum } = await kmcModel.updateGacha();
    const img = await picRender('Gacha', {});
    const replys: any[] = [`获取[UID: ${kmcModel.player_id}]抽卡数据成功！本次更新了${updateNum}条记录`];

    if (typeof img !== 'boolean') {
      replys.push(Image(img));
    }
    Send(...replys);

    return Promise.resolve(true);
  } catch (error) {
    Send(Text(`获取[UID: ${kmcModel.player_id}]抽卡数据失败！请稍后重试`));

    return Promise.resolve(true);
  }
};
