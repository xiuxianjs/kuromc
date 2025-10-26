import util from '../../models/util.js';
import _ from 'lodash';
import GaChaModel from '../../models/gacha/index.js';
import { useSend, Text } from 'alemonjs';
import { join } from 'path';
import { updateGachaFunc } from '../updateGachaFunc.js';

const jsonPath = join(util.rootPath, 'data', 'kuromc', 'gacha', 'links.json');
var Res = OnResponse(async (event, next) => {
    const url = event.MessageText.match(/https:\/\/aki-gm-resources\.aki-game\.com\/aki\/gacha\/index\.html#\/record(?:\?.*)?$/)?.[0];
    const Send = useSend(event);
    if (!url) {
        void Send(Text('抽卡链接不正确！'));
        next();
        return;
    }
    const UserKey = event.UserKey;
    const links = util.readJSON(jsonPath) || [];
    const link = _.find(links, ['user_id', UserKey]);
    if (link) {
        link.url = url;
    }
    else {
        links.push({ user_id: UserKey, url });
    }
    util.writeJSON(jsonPath, links);
    void Send(Text('抽卡链接绑定成功！'));
    const kmcModel = new GaChaModel(UserKey);
    await updateGachaFunc(Send, kmcModel);
}, 'private.message.create');

export { Res as default };
