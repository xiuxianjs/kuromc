import axios from 'axios'

export const baseURL = 'https://wiki.kurobbs.com'
export const baseAPIURL = 'https://api.kurobbs.com'

export const apiServer = axios.create({
  baseURL: baseAPIURL,
  timeout: 10000
})

/**
 *  获取wiki配置
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
    method: 'post',
    url
  }).then(res => res.data)
}

/**
 * 获取wiki积分记录
 * @returns
 */
export const apiWikiCoreScoreRecordGetTop10List = async (params: {
  type: 2 | 3 | 4
}) => {
  const url = `/wiki/core/score/record/getTop10List`
  return await apiServer({
    method: 'post',
    url,
    params: params
  }).then(res => res.data)
}

/**
 * 获取wiki目录详情
 * @returns
 */
export const apiWikiCoreCatalogueItemGetPage =
  async (): Promise<ApiResponse> => {
    const url = `/wiki/core/score/record/getTop10List`
    return await apiServer({
      method: 'post',
      url,
      params: {
        catalogueId: 1105,
        page: 1,
        limit: 1000
      },
      data: {
        catalogueId: 1105,
        page: 1,
        limit: 1000
      }
    }).then(res => res.data)
  }

interface ApiResponse {
  code: number
  msg: string
  data: {
    results: {
      records: Array<{
        id: number
        // 用户
        name: string
        sort: number | null
        content: {
          activityDateRange: [string, string]
          textList: Array<{
            content: string
            placeholder: string
          }>
          skillAttr: string
          cornerMark: boolean
          updateAt: number
          showTeaserIcon: boolean
          showRedDot: boolean
          type: string
          // 标题
          title: string
          relateTagIds: Array<string>
          cornerMarkUrl: string
          showLeftTopIcon: boolean
          showTeaserIconNum: number
          teaserDateRange: [string, string]
          customBgUrl: string
          optionalTitle: string
          linkUrl: string
          id: string
          titleMore: string
          star: string
          showVideoBtn: boolean
          multipleFigureTitleType: number
          linkGather: Array<{
            content: string
            isRequest: boolean
            linkConfig: {
              linkType: number
            }
            placeholder: string
          }>
          tags: Array<string | null>
          showActivityDate: boolean
          linkConfig: {
            entryId: string
            linkUrl: string
            linkType: number
            catalogueId: string
          }
          // 图片
          contentUrl: string
          linkId: string
          redDotDateRange: [string, string]
          name: string
          linkType: number
          imageList: Array<any> // Adjust the type as needed
          imageNameMap: Record<string, string>
        }
        entryId: number
        invalid: boolean
      }>
    }
  }
}
