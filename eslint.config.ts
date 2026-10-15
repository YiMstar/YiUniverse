import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Vue 3 + TypeScript（uni-app CLI 项目）
    vue: true,
    typescript: true,

    // 关闭 JSX（本项目不用）
    jsx: false,

    // 格式化风格（antfu 默认：单引号 / 无分号 / 尾逗号）
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: false,
    },

    // 忽略生成产物
    ignores: [
      '**/dist/**',
      '**/unpackage/**',
      'auto-imports.d.ts',
    ],
  },

  // uni-app 全局变量
  {
    languageOptions: {
      globals: {
        uni: 'readonly',
        wx: 'readonly',
        plus: 'readonly',
        getCurrentPages: 'readonly',
        getApp: 'readonly',
        UniApp: 'readonly',
        UniHelper: 'readonly',
      },
    },
  },

  // 针对 uni-app 页面/组件的规则微调
  {
    rules: {
      // uni-app 单文件组件常为单词命名（index.vue / detail.vue）
      'vue/multi-word-component-names': 'off',
      // 自动导入（unplugin-auto-import）会让 no-unused-vars 误报
      'no-unused-vars': 'off',
      'ts/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      }],
      // uni-app 开发期常用 console.log
      'no-console': 'off',
      // uni-app 工具链的旧传递依赖与 trustPolicy 冲突
      'pnpm/yaml-enforce-settings': 'off',
    },
  },
)
