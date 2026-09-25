# 韵盏茗

使用 npm workspaces 管理的全栈 Monorepo。

## 项目结构

```text
apps/
├── miniapp/  # UniApp + Vue 3 + TypeScript 微信小程序
└── api/      # NestJS 后端服务
```

## 环境要求

- Node.js 20.18+
- npm 10+

## 安装依赖

```bash
npm install
```

## 本地开发

微信小程序：

```bash
npm run dev:miniapp
```

使用微信开发者工具导入 `apps/miniapp/dist/dev/mp-weixin`。

后端服务：

```bash
cp apps/api/.env.example apps/api/.env
npm run dev:api
```

默认监听 `http://localhost:3000`，健康检查地址为：

```text
GET http://localhost:3000/api/health
```

## 验证与构建

```bash
npm run type-check
npm test
npm run test:e2e
npm run build
```

格式化代码：

```bash
npm run format
npm run format:check
```

提交代码时，Husky 会自动调用 lint-staged 格式化本次暂存的开发文件。

小程序生产产物位于 `apps/miniapp/dist/build/mp-weixin`，后端产物位于 `apps/api/dist`。

## 配置

- 在 `apps/miniapp/src/manifest.json` 的 `mp-weixin.appid` 中填写微信小程序 AppID。
- 后端支持通过 `PORT` 修改端口。
- `CORS_ORIGIN` 可填写逗号分隔的允许来源；未配置时允许所有来源。
