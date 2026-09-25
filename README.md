# 韵盏茶小程序

基于 UniApp、Vue 3、Vite 和 TypeScript 的微信小程序项目。

## 开发

```bash
npm install
npm run dev:mp-weixin
```

开发产物位于 `dist/dev/mp-weixin`，可使用微信开发者工具导入该目录。

## 构建

```bash
npm run type-check
npm run build:mp-weixin
```

生产产物位于 `dist/build/mp-weixin`。

## 小程序配置

在 `src/manifest.json` 的 `mp-weixin.appid` 中填写微信小程序 AppID。
