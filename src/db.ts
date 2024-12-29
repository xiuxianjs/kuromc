import { getIoRedis } from 'alemonjs'
import { Redis } from 'ioredis'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { apiWikiCoreCatalogueItemGetPage } from './models/mc'
import { apiWikiCoreCatalogueItemGetPageData } from './models/typing'

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * @param currentDir
 * @returns
 */
const getProcessRootDir = (currentDir: string) => {
  const packagePath = join(currentDir, 'package.json')
  // 检查 package.json 是否存在
  if (existsSync(packagePath)) {
    return currentDir // 返回当前目录
  }
  // 获取父目录
  const parentDir = dirname(currentDir)
  // 如果已到达根目录
  if (parentDir === currentDir) {
    return parentDir
  }
  // 递归检查父目录
  return getProcessRootDir(parentDir)
}

class Data {
  #rootDir = ''
  #publicDir = join(this.#rootDir, 'public')
  #dataDir = join(this.#publicDir, 'localdata')
  #ioRedis: null | Redis = null
  #ok: 'local' | 'success' | 'off' = 'off'
  constructor() {
    this.#rootDir = getProcessRootDir(__dirname)
    mkdirSync(this.#dataDir, { recursive: true })
  }

  /**
   *
   * @returns
   */
  connnect = () => {
    if (this.#ok === 'local') return
    try {
      if (!this.#ioRedis) this.#ioRedis = getIoRedis()
      this.#ok = 'success'
    } catch (e) {
      console.error(e)
      this.#ok = 'local'
    }
  }

  getAympathizer = async (): Promise<
    apiWikiCoreCatalogueItemGetPageData | undefined
  > => {
    // 尝试使用 redis
    this.connnect()
    const key = 'kmc:sympathizer'
    if (this.#ok === 'local') {
      // 采用本地json
      const dir = join(this.#dataDir, 'sympathizer.json')
      if (existsSync(dir)) {
        const data = readFileSync(dir, 'utf-8')
        return JSON.parse(data)
      }
      try {
        const data = await apiWikiCoreCatalogueItemGetPage()
        if (!data || data.code !== 200) return
        // save
        writeFileSync(dir, JSON.stringify(data))
        return data
      } catch (e) {
        console.error(e)
        return
      }
    } else if (this.#ioRedis) {
      const cacheData = await this.#ioRedis.get(key)
      if (!cacheData) {
        try {
          const data = await apiWikiCoreCatalogueItemGetPage()
          if (!data || data.code !== 200) return
          // set cache 24h
          await this.#ioRedis.set(key, JSON.stringify(data), 'EX', 60 * 60 * 24)
          return data
        } catch (e) {
          console.error(e)
          return
        }
      } else {
        return JSON.parse(cacheData)
      }
    }
  }
}

export const DB = new Data()
