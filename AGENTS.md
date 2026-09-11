# NTSites

基于 [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) 构建的软件官网合集站点。

包管理器为 **pnpm**。请勿使用 npm/yarn。

## 开发

启动开发服务器时，使用后台模式：

```sh
pnpm astro dev --background
```

通过 `pnpm astro dev stop`、`pnpm astro dev status` 和 `pnpm astro dev logs` 管理后台服务器。

其他命令：

- `pnpm build` — 生产构建，输出到 `dist/`
- `pnpm preview` — 预览生产构建
- `pnpm astro -- --help` — Astro CLI 帮助

## 质量工具

ESLint、Prettier 和 lint-staged 已配置，并通过 Husky `pre-commit` 钩子及 CI
（GitHub Actions：`.github/workflows/ci.yml`）强制执行。改动代码后请务必运行：

- `pnpm lint` — 使用 ESLint 检查（`.astro`、JS 与 TS 文件）
- `pnpm lint:fix` — 自动修复 lint 问题
- `pnpm format` — 使用 Prettier 格式化所有文件
- `pnpm format:check` — 校验格式（CI 中也会运行）

配置文件：`eslint.config.mjs`、`.prettierrc.mjs`、`.prettierignore`。`lint-staged` 配置与 npm
脚本位于 `package.json`。

## 约定

- 使用 pnpm，不要用 npm/yarn。不要手改 `pnpm-lock.yaml`。
- 遵循 Prettier 设定的格式（按 `.editorconfig`，空格、2 空格缩进）。
- 除添加/移除依赖外，不要提交 lockfile 变更。
- 提交前运行 `pnpm lint` 和 `pnpm format`；CI 失败（`format:check`、`lint`、`build`）会阻塞 PR。

## 已知限制

- TypeScript 固定在 `^5.9`：`typescript-eslint` 尚未支持 TypeScript 7。在升级 TypeScript 前，请先确认其已兼容 TS >= 7
  （参考 [typescript-eslint 支持 TS 7 的进展](https://github.com/typescript-eslint/typescript-eslint/issues/10940)）。
- 有一条无害的 peer 警告：`eslint-plugin-jsx-a11y` 的 peer 上限为 eslint 9，本项目使用
  eslint 10；不影响 lint 结果。

## 文档

完整文档：https://docs.astro.build

在开始相关任务前，请查阅以下指南：

- [添加页面、动态路由或中间件](https://docs.astro.build/zh-cn/guides/routing/)
- [使用 Astro 组件](https://docs.astro.build/zh-cn/basics/astro-components/)
- [使用 React、Vue、Svelte 或其他框架组件](https://docs.astro.build/zh-cn/guides/framework-components/)
- [添加或管理内容](https://docs.astro.build/zh-cn/guides/content-collections/)
- [添加样式或使用 Tailwind](https://docs.astro.build/zh-cn/guides/styling/)
- [支持多语言](https://docs.astro.build/zh-cn/guides/internationalization/)

Starlight 专属文档：https://starlight.astro.build/zh-cn/
