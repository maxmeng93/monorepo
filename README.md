# monorepo

此 monorepo 架构基于 [thuborepo](https://turborepo.org/)、[pnpm](https://pnpm.io/)、[changesets](https://github.com/changesets/changesets)。

## What's inside?

这个项目使用 [pnpm](https://pnpm.io) 作为包管理工具。

### 管理依赖

要管理 monorepo 中工作空间内的依赖关系，您需要运行仅管理每个工作空间而不是整个 monorepo 的依赖关系的命令。

- 安装
```bash
pnpm add <package> --filter <workspace>

# eg:
pnpm add react --filter docs
```

- 卸载
```bash
pnpm uninstall <package> --filter <workspace>

# eg:
pnpm uninstall react --filter web
```

- 更新
```bash
pnpm up <package> --filter <workspace>

# eg:
pnpm up react --filter web
```

### 应用程序和npm包

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### 公共依赖

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## 开始使用

### 构建

构建所有的应用程序和npm包

```
cd my-turborepo
pnpm run build
```

### 开发

开发所有的应用程序和npm包

```
cd my-turborepo
pnpm run dev
```

## 其他

学习 Turborepo 更多的使用方法：

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
