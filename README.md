# 丰橙学院 ESlint 规则

规范基于 AlloyTeam V2 的规则，某些规则可能会调整。
相关文档可查看 [AlloyTeam ESLint 规则](https://github.com/AlloyTeam/eslint-config-alloy)。


## 使用
都以 `.eslintrc.js` 配置文件为例。

### 基础规则

#### 安装
```base
yarn add -D eslint babel-eslint eslint-config-alloy @fcedu/eslint-config-fcedu
```

#### 使用

```javascript
...
    extends: [
        '@fcedu/eslint-config-fcedu',
    ]
...
```


### Vue

#### 安装

```bash
yarn add -D eslint babel-eslint vue-eslint-parser@5.0.0 eslint-plugin-vue eslint-config-alloy @fcedu/eslint-config-fcedu
```

#### 配置

```javascript
 ...
    extends: [
        '@fcedu/eslint-config-fcedu/vue',
    ]
...   
```

### React 

#### 安装

```bash
yarn add -D eslint babel-eslint eslint-plugin-react eslint-config-alloy @fcedu/eslint-config-fcedu
```

#### 配置

```javascript
...
    extends: [
        '@fcedu/eslint-config-fcedu/react',
    ]
...
```

### TypeScript 

#### 安装

```bash
yarn add -D eslint babel-eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy @fcedu/eslint-config-fcedu
```


```javascript
...
    extends: [
        '@fcedu/eslint-config-fcedu/typescript',
    ]
...
```