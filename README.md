# 西汉小英雄 H5 原型

## 技术栈

- `Vite`
- 原生 `ES Modules`
- 纯前端，无后端依赖

## 页面模块

- `main-stage`
  - 左侧故事标题
  - 当前关卡问题
  - 三选一亮色按钮
  - 底部提示区
- `cast-stage`
  - Q 版人物组图
- `sidebar`
  - `world-card` 横向世界关系
  - `graph-card` 人物关系图
  - `timeline-card` 纵向时间轴
- `feedback-modal`
  - `feedback-correct.gif` 正确弹窗
  - `feedback-wrong.gif` 错误弹窗
  - 错误时额外显示答疑文字
- `world-note`
  - 点击“世界小窗口”可展开同时期简短世界史说明

## 当前内容

- `28` 道三选一关卡
- 正确答案位置已打散，不固定在 `A`
- 题后保留正确 / 错误 GIF 弹窗

## 本地运行

```bash
npm install
npm run dev
```

默认开发地址：

```bash
http://127.0.0.1:4173
```

构建命令：

```bash
npm run build
```

## Cloudflare Worker 部署

这个项目也可以按 Cloudflare Worker 的静态资源模式部署。

- 配置文件：`wrangler.jsonc`
- 静态资源目录：`dist`
- SPA 回退：`not_found_handling = "single-page-application"`

本地命令：

```bash
npm run worker:deploy
```
