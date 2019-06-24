# 丰橙学院 ESlint 规则

规范基于 AlloyTeam V2 的规则，某些规则可能会调整。
相关文档可查看 [AlloyTeam ESLint 规则](https://github.com/AlloyTeam/eslint-config-alloy)。


## 使用
都以 `.eslintrc.js` 配置文件为例。

### Vue
```base
 ...
    extends: [
        '@fcedu/eslint-config-fcedu/vue',
    ]
...   
```

### React 
```javascript
...
    extends: [
        '@fcedu/eslint-config-fcedu/react',
    ]
...
```

### TypeScript 
```javascript
...
    extends: [
        '@fcedu/eslint-config-fcedu/typescript',
    ]
...
```