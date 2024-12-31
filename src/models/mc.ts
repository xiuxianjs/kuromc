import { CharacterCatalog } from './typing'

export const baseURL = 'https://wiki.kurobbs.com'
export const baseAPIURL = 'https://api.kurobbs.com'

export const BaseHeaders = {
  Wiki_Type: '9',
  Source: 'h5',
  Origin: 'https://wiki.kurobbs.com',
  Referer: 'https://wiki.kurobbs.com/',
  Devcode: 'f0iBj95EkaOZnpyHbG9WAXaO4V9jj7dI'
}

// https://api.kurobbs.com/wiki/core/homepage/getPage

export const apiServer = (
  options: {
    baseURL: string
    url: string
  } & RequestInit
) => {
  const { baseURL, url, ...reset } = options
  return fetch(`${baseURL}${url}`, {
    headers: {
      ...BaseHeaders
    },
    ...reset
  })
}

/**
 * 获取首页数据
 * @returns
 */
export const apiWikiCoreHomepageGetPage = async () => {
  const url = `/wiki/core/homepage/getPage`
  return await apiServer({
    baseURL: baseAPIURL,
    url,
    method: 'POST'
  }).then(response => response.json())
}

/**
 *  获取wiki配置树
 * @returns
 */
export const apiWikiCoreCatalogueConfigGetTree = async (): Promise<{
  catalogPageVersion: string
  catalogPageVersionOnFlow: null
  catalogPageVersionOnline: string
  checkStatus: null
  children: any[]
}> => {
  const url = `/wiki/core/catalogue/config/getTree`
  return await apiServer({
    baseURL: baseAPIURL,
    url,
    method: 'POST'
  }).then(response => response.json())
}

/**
 * 获取wiki积分记录
 * @returns
 */
export const apiWikiCoreScoreRecordGetTop10List = async (params: {
  type: '2' | '3' | '4'
}) => {
  const url = `/wiki/core/score/record/getTop10List`
  return await apiServer({
    baseURL: baseAPIURL,
    url,
    method: 'POST',
    body: new URLSearchParams(params)
  }).then(response => response.json())
}

/**
 * 全部共鸣者
 * @returns
 */
export const apiWikiCoreCatalogueItemGetPage = async (params?: {
  catalogueId?: string
  page?: string
  limit?: string
}): Promise<CharacterCatalog> => {
  const { catalogueId = '1105' } = params || {}
  const url = `/wiki/core/catalogue/item/getPage`
  return await apiServer({
    baseURL: baseAPIURL,
    url,
    method: 'POST',
    body: new URLSearchParams({
      catalogueId,
      page: '1',
      limit: '1000'
    })
  }).then(response => response.json())
}
