import { getIoRedis } from 'alemonjs'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { apiWikiCoreCatalogueItemGetPage } from './mc'
import { Redis } from 'ioredis'

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/**
 * 获取项目根目录
 * @param currentDir
 * @returns {string}
 */
const getProcessRootDir = currentDir => {
  const packagePath = join(currentDir, 'package.json')
  if (existsSync(packagePath)) return currentDir

  const parentDir = dirname(currentDir)
  return parentDir === currentDir ? parentDir : getProcessRootDir(parentDir)
}

class Data {
  #rootDir = getProcessRootDir(__dirname)
  #publicDir = join(this.#rootDir, 'public')
  #dataDir = join(this.#publicDir, 'localdata')
  #ioRedis: Redis | null = null
  #status = 'off'

  constructor() {
    mkdirSync(this.#dataDir, { recursive: true })
  }

  /**
   * 连接Redis
   * @returns {string}
   */
  connect = () => {
    if (this.#status !== 'off') return this.#status
    try {
      if (!this.#ioRedis) this.#ioRedis = getIoRedis()
      this.#status = 'success'
    } catch (e) {
      console.error(e)
      this.#status = 'local'
    }
    return this.#status
  }

  /**
   * 处理本地数据
   * @param jsonDir
   * @param fetchData
   * @returns {Promise<any>}
   */
  #localData = async (jsonDir, fetchData) => {
    const dir = join(this.#dataDir, jsonDir)
    if (existsSync(dir)) {
      const data = readFileSync(dir, 'utf-8')
      return JSON.parse(data)
    }
    const data = fetchData
    console.log(data)
    if (data && data.code === 200) {
      writeFileSync(dir, JSON.stringify(data))
      return data
    }
  }

  /**
   * 处理Redis数据
   * @param key
   * @param fetchData
   * @returns {Promise<any>}
   */
  #redisData = async (key, fetchData) => {
    if (!this.#ioRedis) return
    const cacheData = await this.#ioRedis.get(key)
    if (cacheData) return JSON.parse(cacheData)
    const data = fetchData
    if (data && data.code === 200) {
      this.#ioRedis.set(key, JSON.stringify(data), 'EX', 60 * 60 * 24)
      return data
    }
  }

  /**
   * 获取Aympathizer数据
   * @returns {Promise<CharacterCatalog | undefined>}
   */
  getAympathizer = async () => {
    const key = 'kmc:aympathizer'
    const status = this.connect()
    return status === 'local'
      ? this.#localData(
          'aympathizer.json',
          await apiWikiCoreCatalogueItemGetPage()
        )
      : this.#redisData(key, await apiWikiCoreCatalogueItemGetPage())
  }

  /**
   * 获取Weapon数据
   * @returns {Promise<CharacterCatalog | undefined>}
   */
  getWeapon = async () => {
    const key = 'kmc:weapon'
    const status = this.connect()
    return status === 'local'
      ? this.#localData(
          'weapon.json',
          await apiWikiCoreCatalogueItemGetPage({ catalogueId: '1106' })
        )
      : this.#redisData(
          key,
          await apiWikiCoreCatalogueItemGetPage({ catalogueId: '1106' })
        )
  }

  /**
   * 获取Weapon Projection数据
   * @returns {Promise<CharacterCatalog | undefined>}
   */
  getWeaponProjection = async () => {
    const key = 'kmc:weaponProjection'
    const status = this.connect()
    return status === 'local'
      ? this.#localData(
          'weaponProjection.json',
          await apiWikiCoreCatalogueItemGetPage({ catalogueId: '1315' })
        )
      : this.#redisData(
          key,
          await apiWikiCoreCatalogueItemGetPage({ catalogueId: '1315' })
        )
  }
}

export const DB = new Data()
