# kuromc

必要环境 `nodejs` 、`redis` 、`chrome`

该扩展推荐使用`alemongo`作为生产环境

https://github.com/lemonade-lab/alemongo

## 安装

### alemongo

- 唤醒

`/kmc帮助`

地址

```sh
https://github.com/xiuxianjs/kuromc.git
```

分支

```sh
release
```

### 本地模板

```sh
git clone --depth=1 -b release  https://github.com/xiuxianjs/kuromc.git ./packages/kuromc
```

### Redis

将以默认配置连接本地redis,

如需调整，请阅读[@alemonjs/db](https://www.npmjs.com/package/@alemonjs/db)配置连接,

如需使用docker请参考[docker-compose.yml](./docker-compose.yml)

```sh
# 启动
docker-compose up -d
```

```sh
# 关闭
docker-compose down
```
