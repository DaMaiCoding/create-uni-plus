# ✨ create-uni-plus

![Npm 版本](https://img.shields.io/badge/uniplus-cli_v0.0.8-green)

## 🔗 相关链接

- [📘 uniPlus 使用文档](https://damaicoding.github.io/uni-plus-doc/)
- [💻 create-uni-plus GitHub 仓库](https://github.com/damaicoding/create-uni-plus)
- [🚀 create-uni-plus Gitee 仓库](https://gitee.com/FOM/create-uni-plus)
- [🐛 create-uni-plus 问题反馈](https://github.com/damaicoding/create-uni-plus/issues)

## 🌼 简介

用于快速搭建 `uniapp` 前端项目的命令行工具

## 📋️ 模版

- 快速生成 `Vue3 + TS + Vite + Pinia + ESLint + Prettier + Lint-staged + commitLint` 的模板

## 📦 选择类型

### `uni-plus-base`(基础模板)

所有的衍生项目都基于 `base` 项目，推荐使用 `base` 项目，因为 `base` 项目没有太多功能，只是基础配置。

如果你需要的功能很多，推荐你直接去修改 `demo` 项目

### `uni-plus-demo`(DEMO项目)

这个项目包括了

- `echarts` 图表案例
- `pinia` 状态管理案例
- 权限控制案例
- `Layout` 布局案例
- 请求使用案例（包括分页、下拉更新、上拉加载更多）
- ...

### `uni-plus-mock`(MOCK项目)

这个项目主要是为 `uni-plus-demo` 中请求案例提供 `mock` 数据

你可以直接使用，也可以根据你的需求修改

下载之后，执行 `pnpm i` `pnpm start:dev`（默认运行在 `3000` 端口）

`uni-plus-demo` 中已经配置了默认的 `mock` 请求地址

所以你只需要在也启动 `uni-plus-demo` 即可访问 `mock` 数据

## 🛠️ 使用

```bash
# 直接创建项目，项目名为 my-project
pnpm create uni-plus my-project
# 【注意】如果无法创建项目，可以是有缓存，可以加上 `@latest` 
pnpm create uni-plus@latest my-project

# 查看帮助
pnpm create uni-plus --help

# 设置文件名
pnpm create uni-plus --name my-project
```
