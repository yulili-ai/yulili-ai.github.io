# YULi Personal Portfolio — V1.1

## 本地运行

- `npm ci`：按锁定版本安装依赖。
- `npm run dev -- --hostname 127.0.0.1`：启动本地预览。
- `npm run build`：生产构建，包含类型与代码检查。构建前先停止开发服务器，避免同时写入 `.next`。
- `npm start -- --hostname 127.0.0.1`：预览生产构建。

## 内容修改入口

- `src/data/profile.ts`：个人介绍、四大能力、经历、邮箱、简历和最终站点域名。
- `src/data/work.ts`：十个项目资产的标题、价值、封面、背景、角色、策略、架构、实现、成果、Demo 和 GitHub。
- `src/data/links.ts`：社交链接和外部文章。空地址显示待补充，不生成可点击假链接。
- `src/app/globals.css`：色彩、留白、字体层级、断点与交互动效的统一设计 Token。
- `public/covers/`：原创 SVG 概念封面，页面明确标注，不能当成真实产品截图。

## 页面

- `/`：Hero、Capabilities、Selected Work、Experience、Notes & Thoughts、Contact。
- `/about`：个人介绍、工作视角和经历。
- `/work`：完整项目列表，支持 Featured / Client Projects / AI Lab 筛选。
- `/work/[slug]`：统一八段式案例详情模板。
- `/projects/[slug]`：旧作者项目路径跳转回新的作品列表；旧组件与素材仍保留在源码中以供参考。

## 动效与性能

复用现有 GSAP 工具、next-transition-router 和 Next Image；当前页面不加载原模板的 Canvas、鼠标跟随、全屏预加载或复杂滚动接管。Hero 分段进入，项目封面遮罩揭示，滚动渐入，项目 Hover，文章区域原生横向滚动和淡入淡出转场。遵循系统 reduced motion 设置，内容默认可见，不依赖动画才能阅读。字体使用本机字体，构建不依赖 Google 字体下载。

## 上线前补充

当前为本地草稿。未确认的履历、成果与链接均标注待补充。配置邮箱前联系区不会生成 mailto；保留的联系 API 在收件地址未配置时返回 503，避免发送给模板作者。文章链接仅在真实 URL 填入后显示。

确认全部资料后，设置 profile.siteUrl，更新 robots.ts 与 layout.tsx 的搜索索引设置。目前 robots 禁止抓取、metadata 设置 noindex，避免草稿内容进入搜索结果。

保留根目录 LICENSE 中原作者的 MIT 版权与许可声明。本工程未推送或部署。

## 本次检查记录

- `npm run build` 成功，包含类型检查与构建内代码检查。
- 首页、About 和五个案例路径 HTTP 200。无效案例路径 HTTP 404；旧项目路径 307 跳转至 `/#work`。
- 浏览器检查：项目卡片进入详情、About 导航、文章区域键盘横向滚动。
- 隔离 iframe 预览检查 390 / 768 / 1440 px 宽度；首页未出现整体水平溢出。该临时检查页已移除。这不替代真实手机设备测试。
- reduced motion 已在 CSS 与 JS 中实现；本次未修改电脑的系统动效设置进行实机验证。
- 当前本地端口 3000 运行的是生产预览（npm run start）。需要编辑热更新时先停止它，再运行 npm run dev。

## V1.1 内容与来源

首页只显示四个精选项目。完整列表保存 10 个项目资产；其中原有个人 AI 实验作为归档入口保留。真实职业时间线、About 成果与技术栈已根据简历更新。来源对应与差异处理见 `docs/CONTENT-AUDIT.md`；本轮文件及验收见 `docs/V1.1-DELIVERY.md`。个人邮箱与电话仍未公开；原始简历未复制到网站资源目录。

## GitHub Pages 发布（2026-11-03）

正式地址：https://yulili-ai.github.io/ 。推送 main 后自动构建发布。
`npm run build` 导出静态文件到 out；`npm start` 使用 Python 3 在 127.0.0.1:3000 预览；开发仍使用 `npm run dev`。
项目筛选在客户端执行。邮件处理代码保留在 src/server/contact-handler.ts，静态托管不提供邮件 API。保留 noindex 草稿设置。
