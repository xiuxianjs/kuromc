import { Text, Image } from 'alemonjs';
import { picRender } from '../component/image.js';

/**
 *
 * @param Send
 * @param kmcModel
 * @returns
 */
const updateGachaFunc = async (Send, kmcModel) => {
    Send(Text(`正在获取[UID: ${kmcModel.playerId}]的抽卡数据，请稍后...`));
    try {
        const { updateNum } = await kmcModel.updateGacha();
        const img = await picRender('Gacha', {});
        const replys = [`获取[UID: ${kmcModel.playerId}]抽卡数据成功！本次更新了${updateNum}条记录`];
        if (typeof img !== 'boolean') {
            replys.push(Image(img));
        }
        Send(...replys);
        return Promise.resolve(true);
    }
    catch (error) {
        logger.error('更新抽卡数据失败', error);
        void Send(Text(`获取[UID: ${kmcModel.playerId}]抽卡数据失败！请稍后重试`));
        return Promise.resolve(true);
    }
};

export { updateGachaFunc };
