import qs from 'qs';
import axios from 'axios';

var CARD_POOL_TYPE;
(function (CARD_POOL_TYPE) {
    CARD_POOL_TYPE[CARD_POOL_TYPE["\u89D2\u8272\u7CBE\u51C6\u8C03\u8C10"] = 1] = "\u89D2\u8272\u7CBE\u51C6\u8C03\u8C10";
    CARD_POOL_TYPE[CARD_POOL_TYPE["\u6B66\u5668\u7CBE\u51C6\u8C03\u8C10"] = 2] = "\u6B66\u5668\u7CBE\u51C6\u8C03\u8C10";
    CARD_POOL_TYPE[CARD_POOL_TYPE["\u89D2\u8272\u5E38\u9A7B\u8C03\u8C10"] = 3] = "\u89D2\u8272\u5E38\u9A7B\u8C03\u8C10";
    CARD_POOL_TYPE[CARD_POOL_TYPE["\u6B66\u5668\u5E38\u9A7B\u8C03\u8C10"] = 4] = "\u6B66\u5668\u5E38\u9A7B\u8C03\u8C10";
    CARD_POOL_TYPE[CARD_POOL_TYPE["\u65B0\u624B\u8C03\u8C10"] = 5] = "\u65B0\u624B\u8C03\u8C10";
    CARD_POOL_TYPE[CARD_POOL_TYPE["\u65B0\u624B\u81EA\u9009"] = 6] = "\u65B0\u624B\u81EA\u9009";
    CARD_POOL_TYPE[CARD_POOL_TYPE["\u611F\u6069\u81EA\u9009"] = 7] = "\u611F\u6069\u81EA\u9009";
})(CARD_POOL_TYPE || (CARD_POOL_TYPE = {}));
class McKuroApi {
    baseUrl = 'https://gmserver-api.aki-game2.com';
    axios;
    playerId;
    lang;
    recordId;
    resourcesId;
    svrId;
    apis = {
        gacha: '/gacha/record/query'
    };
    /**
     * 初始化Axios实例和从URL中解析参数。
     *
     * @param {string} url - 包含参数的URL字符串。
     */
    constructor(url) {
        // 使用querystring库解析URL中的参数部分
        const params = qs.parse(url.split('?')[1]);
        // 从解析的参数中解构出所需字段
        const { player_id: playerId, lang, record_id: recordId, resources_id: resourcesId, svr_id: svrId } = params;
        // 将解析出的参数赋值给类的属性
        this.playerId = playerId;
        this.lang = lang;
        this.recordId = recordId;
        this.resourcesId = resourcesId;
        this.svrId = svrId;
        // 初始化Axios实例，设置基础URL为类的baseUrl属性
        this.axios = axios.create({
            baseURL: this.baseUrl
        });
    }
    /**
     * 异步函数：进行抽卡操作。
     * @param cardPoolType 抽卡池的类型，默认为1。此参数决定了从哪个卡牌池进行抽取。
     * @returns 返回抽卡结果。如果抽卡成功，返回具体的卡牌信息；如果失败，则返回错误信息。
     */
    async gacha(cardPoolType = CARD_POOL_TYPE.角色精准调谐) {
        // 构建抽卡请求的数据对象，包含玩家信息和抽卡池信息。
        const data = {
            playerId: this.playerId,
            cardPoolId: this.resourcesId,
            cardPoolType,
            serverId: this.svrId,
            languageCode: this.lang,
            recordId: this.recordId
        };
        try {
            // 发送POST请求到指定的API进行抽卡操作。
            const res = await this.axios.post(this.apis.gacha, data);
            // 如果响应代码为0，表示抽卡成功，返回具体的卡牌数据。
            if (res?.data?.code === 0) {
                return res?.data?.data;
            }
            else {
                // 如果响应代码非0，表示抽卡失败，返回错误信息。
                return Promise.reject(res?.data?.message || '未知错误');
            }
        }
        catch (error) {
            // 如果请求过程中发生异常，返回该异常。
            return Promise.reject(error);
        }
    }
}

export { CARD_POOL_TYPE, McKuroApi as default };
