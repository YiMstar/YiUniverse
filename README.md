# Yi-App

基于 uni-app + Vue 3 + Vite 的跨端应用。

## 技术栈

| 类别 | 选型 |
| --- | --- |
| 框架 | uni-app（Vue 3 + Composition API + `<script setup>`） |
| 构建 | Vite 5.2.8 |
| 语言 | TypeScript 5.8 |
| UI 组件库 | [wot-design-uni](https://wot-ui.cn/)（`@wot-ui/ui`，easycom 自动引入） |
| 自动导入 | `unplugin-auto-import`（`uni-app` 预设） |
| 样式 | Sass（modern-compiler） |
| 代码规范 | ESLint 10 + [@antfu/eslint-config](https://github.com/antfu/eslint-config) |
| 包管理 | pnpm |

## 目标平台

当前脚本面向 **H5** 与 **微信小程序**；依赖中已装齐多端运行时，按需扩展即可。

```bash
# H5
pnpm run dev
pnpm run build

# 微信小程序
pnpm run dev:wx
pnpm run build:wx
```

## 环境要求

- Node.js ≥ 22.12
- pnpm ≥ 10

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动 H5 开发（默认端口 7052）
pnpm run dev

# 启动微信小程序开发
pnpm run dev:wx
# 微信开发者工具导入 dist/dev/mp-weixin
```

## 常用脚本

| 命令 | 说明 |
| --- | --- |
| `pnpm run dev` | H5 开发模式 |
| `pnpm run dev:wx` | 微信小程序开发模式 |
| `pnpm run build` | H5 构建 |
| `pnpm run build:wx` | 微信小程序构建 |
| `pnpm run typecheck` | TypeScript 类型检查 |
| `pnpm run lint` | ESLint 检查 |
| `pnpm run lint:fix` | ESLint 自动修复 |
| `pnpm run preview` | 预览构建产物 |
| `pnpm run uvm` | 更新 uni-app 编译器版本 |

## 项目结构

```
Yi/
├── src/
│   ├── api/                  # 接口封装
│   ├── components/           # 公共组件
│   ├── pages/                # 页面
│   │   └── index/index.vue   # 首页
│   ├── App.vue               # 应用入口
│   ├── main.ts               # 创建应用实例
│   ├── manifest.json         # 应用配置（appid、窗口样式等）
│   └── pages.json            # 页面路由与全局样式
├── index.html                # H5 入口 HTML
├── vite.config.ts            # Vite 配置
├── tsconfig.json             # TypeScript 配置
├── eslint.config.ts          # ESLint 配置
└── package.json
```

## 关键配置

### 路径别名

`@/*` 指向 `src/*`（`tsconfig.json` 已配好）。

### 开发代理

`/api` 代理到 `http://localhost:8080`（`vite.config.ts`）。

### easycom

`pages.json` 中已配置 `wd-*` 组件自动映射到 `@wot-ui/ui`，模板里直接写 `<wd-button>` 等即可，无需手动 import。

### 自动导入

`unplugin-auto-import` 已启用 `uni-app` 预设，生命周期钩子（`onLaunch`、`onLoad`、`onShow` 等）无需手动 import，类型声明见 `auto-imports.d.ts`。

## 发布须知

- 微信小程序需在 `src/manifest.json` 的 `mp-weixin.appid` 填入真实 AppID
- 构建产物在 `dist/build/`，微信小程序产物用微信开发者工具导入 `dist/build/mp-weixin`
- 上传/预览请使用微信开发者工具或 CI，密钥不要提交到仓库

## 代码规范

```bash
pnpm run lint        # 检查
pnpm run lint:fix    # 自动修复
```

风格要点（antfu）：2 空格缩进、单引号、无分号、尾逗号、import 自动排序。建议 IDE 安装 ESLint 插件并在保存时自动修复。
