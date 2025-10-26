const baseURL = 'https://wiki.kurobbs.com';
const baseAPIURL = 'https://api.kurobbs.com';
const BaseHeaders = {
    Wiki_Type: '9',
    Source: 'h5',
    Origin: 'https://wiki.kurobbs.com',
    Referer: 'https://wiki.kurobbs.com/',
    Devcode: 'f0iBj95EkaOZnpyHbG9WAXaO4V9jj7dI'
};
// https://api.kurobbs.com/wiki/core/homepage/getPage
const apiServer = (options) => {
    const { baseURL, url, ...reset } = options;
    return fetch(`${baseURL}${url}`, {
        headers: {
            ...BaseHeaders
        },
        ...reset
    });
};
/**
 * 获取首页数据
 * @returns
 */
const apiWikiCoreHomepageGetPage = async () => {
    const url = '/wiki/core/homepage/getPage';
    return await apiServer({
        baseURL: baseAPIURL,
        url,
        method: 'POST'
    }).then(response => response.json());
};
/**
 *  获取wiki配置树
 * @returns
 */
const apiWikiCoreCatalogueConfigGetTree = async () => {
    const url = '/wiki/core/catalogue/config/getTree';
    return await apiServer({
        baseURL: baseAPIURL,
        url,
        method: 'POST'
    }).then(response => response.json());
};
/**
 * 获取wiki积分记录
 * @returns
 */
const apiWikiCoreScoreRecordGetTop10List = async (params) => {
    const url = '/wiki/core/score/record/getTop10List';
    return await apiServer({
        baseURL: baseAPIURL,
        url,
        method: 'POST',
        body: new URLSearchParams(params)
    }).then(response => response.json());
};
/**
 * 全部共鸣者
 * @returns
 */
const apiWikiCoreCatalogueItemGetPage = async (params) => {
    const { catalogueId = '1105' } = params || {};
    const url = '/wiki/core/catalogue/item/getPage';
    return await apiServer({
        baseURL: baseAPIURL,
        url,
        method: 'POST',
        body: new URLSearchParams({
            catalogueId,
            page: '1',
            limit: '1000'
        })
    }).then(response => response.json());
};

export { BaseHeaders, apiServer, apiWikiCoreCatalogueConfigGetTree, apiWikiCoreCatalogueItemGetPage, apiWikiCoreHomepageGetPage, apiWikiCoreScoreRecordGetTop10List, baseAPIURL, baseURL };
