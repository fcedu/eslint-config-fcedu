/**
 * react 规则
 */

module.exports = {
    extends: [
        'eslint-config-alloy/react'
    ],
    rules: {

      // React 在 JSX 中必须导入，但可能不使用
      "react/jsx-uses-react": 0
    }
}