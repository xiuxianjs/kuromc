export interface CharacterCatalog {
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
          // 类型id 星级id
          // [0] [1]
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
