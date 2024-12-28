import { defineChildren } from 'alemonjs'
export default defineChildren(() => ({
  onCreated() {
    console.log('明朝插件启动')
  }
}))