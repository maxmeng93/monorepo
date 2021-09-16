# monorepo

## 技术栈

- [vue 2.x](https://cn.vuejs.org/v2/guide/)
- [element-ui 2.x](https://element.eleme.cn/#/zh-CN)
- [lerna](https://lerna.js.org/) 用于管理具有多个包的 JavaScript 项目的工具
- [yarn](https://classic.yarnpkg.com/en/docs/workspaces) 默认包管理工具，使用了 workspaces 特性。
- [webpack 5.x](https://webpack.docschina.org/) 文档网站开发、打包工具。

## 开始

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

yarn add -W xxxx # 安装依赖
```

## 角色

- 框架维护者
  负责整体架构开发、维护，代码风格样式及组件微调。
- 组件开发者
  只能修改自己所负责的组件(或方法)目录，不应该修改任何超出自己负责范围的内容，也不应该随意引用自己文件夹以外的资源，所有外部资源必须以 npm 包的形式安装使用。

## 参考

[All in one：项目级 monorepo 策略最佳实践](https://segmentfault.com/a/1190000039157365)
[基于 lerna 和 yarn workspace 的 monorepo 工作流](https://zhuanlan.zhihu.com/p/71385053)

## 测试

verdaccio： 测试 npm 包本地发布
