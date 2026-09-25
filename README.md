# 韵盏茗

使用 npm workspaces 管理的全栈 Monorepo。

## 项目结构

```text
apps/
├── miniapp/  # UniApp + Vue 3 + TypeScript 微信小程序
└── api/      # NestJS 后端服务
```

小程序前端按职责拆分：

```text
apps/miniapp/src/
├── components/   # 仅存放全局可复用组件
├── composables/  # 购物车与导航等复用逻辑
├── pages/        # 页面容器
├── services/     # Chance Mock 数据服务
├── styles/       # 全局设计变量与响应式基础样式
└── types/        # 业务类型
```

仅由单个页面使用的业务组件放在对应页面的 `components/` 目录中，避免把页面私有实现注册为全局组件。

当前前端数据由 npm 包 `chance` 生成，后续接入 NestJS API 时只需替换 `services/mock` 数据层。

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
