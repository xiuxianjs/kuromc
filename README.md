# 阿柠檬明朝插件

开发文档 [https://alemonjs.com/](https://alemonjs.com/)

## 使用指南


- 模块化

```sh
yarn add alemonjs-kuromc 
```

- alemon.config.yaml

```yaml
apps:
  - "alemonjs-kuromc"
```

- 手动

```sh
# clone
git clone --depth=1  git@github.com:lemonade-lab/kuromc.git
# build
npm install
npm run build
# link
npm link
```

> 如果你要本地立即启动

```sh
node index.js
```

> 如果要引入成本地模块

```sh
npm link alemonjs-kuromc 
```