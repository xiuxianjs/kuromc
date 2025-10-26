import fs, { existsSync, mkdirSync } from 'fs';
import yaml from 'yaml';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @param currentDir
 * @returns
 */
const getProcessRootDir = (currentDir: string) => {
  const packagePath = join(currentDir, 'package.json');

  // 检查 package.json 是否存在
  if (existsSync(packagePath)) {
    return currentDir; // 返回当前目录
  }
  // 获取父目录
  const parentDir = dirname(currentDir);

  // 如果已到达根目录
  if (parentDir === currentDir) {
    return parentDir;
  }

  // 递归检查父目录
  return getProcessRootDir(parentDir);
};

const __cwd = getProcessRootDir(__dirname);

class Util {
  pluginName = 'kuromc-plugin';
  rootPath = process.cwd().replace(/\\/g, '/');
  appFilePath = join(__cwd, 'public');

  /**
   *
   * @param reg
   * @param prefix
   * @returns
   */
  getRuleReg(reg: RegExp, prefix = '(/|#)?kmc') {
    // 获取原正则表达式的字符串表示形式和标志
    let source = reg.source;
    const flags = reg.flags;

    // 如果正则表达式以 ^ 开头，则去掉它，以便在新正则表达式中重新插入
    if (source.startsWith('^')) {
      source = source.substring(1);
    }

    // 如果正则表达式以 $ 结尾，则去掉它，以便在新正则表达式中重新插入
    if (source.endsWith('$')) {
      source = source.substring(0, source.length - 1);
    }

    // 构建新的正则表达式，重新插入 ^ 和 $ 以确保其语义
    return new RegExp(`^(${prefix})?${source}$`, flags);
  }

  /**
   * 读取JSON数据
   * @param filePath
   * @returns
   */
  readJSON(filePath: string): any {
    try {
      const data = fs.readFileSync(filePath, 'utf8');

      return JSON.parse(data);
    } catch (error) {
      logger.error('读取JSON文件失败:', error);

      return null;
    }
  }

  /**
   * 写入JSON数据
   * @param filePath
   * @param jsonData
   */
  writeJSON(filePath: string, jsonData: any): void {
    try {
      const data = JSON.stringify(jsonData, null, 2);

      fs.writeFileSync(filePath, data);
    } catch (error) {
      logger.error('写入JSON文件失败:', error);
    }
  }

  readYAML(filePath: string) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');

      return yaml.parse(data);
    } catch (error) {
      logger.error('读取YAML文件失败:', error);

      return null;
    }
  }

  writeYAML(filePath: string, yamlData: any) {
    try {
      const data = yaml.stringify(yamlData);

      mkdirSync(dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, data);
    } catch (error) {
      logger.error('写入YAML文件失败:', error);
    }
  }

  get version() {
    const pkg = this.readJSON(join(__cwd, 'package.json'));

    return pkg.version;
  }

  isNumber(value: string | number) {
    if (typeof value === 'number') {
      return true;
    }
    if (typeof value === 'string') {
      return !isNaN(Number(value)) && value.trim() !== '';
    }

    return false;
  }

  mapToArray<T = any, K = string>(map: Map<K, T>) {
    const arr: T[] = [];

    for (const iterator of map.values()) {
      arr.push(iterator);
    }

    return arr;
  }

  mkdir(path: string) {
    fs.mkdir(path, { recursive: true }, err => {
      if (err) {
        if (err.code !== 'EEXIST') {
          logger.error('mkdir error', err);
        }
      }
    });
  }

  fileExists(filePath: string) {
    try {
      return fs.existsSync(filePath);
    } catch (error) {
      logger.error('文件存在性检查失败:', error);

      return false;
    }
  }
}

export default new Util();
