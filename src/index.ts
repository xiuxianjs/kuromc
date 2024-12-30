import { defineChildren } from 'alemonjs'
export default defineChildren(() => ({
  onCreated() {
    logger.info('明朝插件启动')
  }
}))
