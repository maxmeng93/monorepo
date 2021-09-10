# monorepo

## 技术栈

- [lerna](https://lerna.js.org/) 用于管理具有多个包的 JavaScript 项目的工具
- [yarn](https://classic.yarnpkg.com/en/docs/workspaces) 默认包管理工具，使用了 workspaces 特性。
- [webpack 5](https://webpack.docschina.org/) 文档网站开发、打包工具。

## 介绍

```bash
# 下载依赖包或生成本地软连接。等同于 lerna link + yarn install
lerna bootstrap

lerna run

lerna exec

# 发布代码有变动的 package
lerna publish

# 将本地或远程的包作为依赖添加至当前仓库
lerna add

lerna clean
```

## npm 包

verdaccio： npm 包本地发布与测试

## 参考

[All in one：项目级 monorepo 策略最佳实践](https://segmentfault.com/a/1190000039157365)
[基于 lerna 和 yarn workspace 的 monorepo 工作流](https://zhuanlan.zhihu.com/p/71385053)
