# YULi Personal Portfolio

AI Product Manager / AI Builder · AI 产品战略 × 全链路构建 × 商业化落地。

网站：https://yulili-ai.github.io/

## 本地开发

```sh
npm ci
npm run dev
```

访问 http://localhost:3000 。生产检查：`npm run build`，静态文件生成在 `out/`；`npm start` 使用本机 Python 3 预览。

## 发布

推送到 `main` 后，GitHub Actions 自动构建并部署 GitHub Pages。原网站历史保留在 Git 中。

内容配置位于 `src/data/`。项目事实与待补资料见 `docs/CONTENT-AUDIT.md`。

GitHub Pages 只提供静态内容；当前联系入口使用外部链接。原模板邮件处理代码保存在 `src/server/contact-handler.ts`，没有作为在线 API 部署。保留草稿的搜索引擎 noindex 设置，资料完善后可调整。

## 来源与许可

基于 [aitezazdev/Portfolio](https://github.com/aitezazdev/Portfolio) 的 MIT 许可模板改造，保留原 LICENSE。原模板说明见 `docs/template-readme.md`。
