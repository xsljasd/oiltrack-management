import { defineConfig, toEscapedSelector as e, presetAttributify, presetMini, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

// 刚使用unocss的朋友，可以借助这个工具： https://to-unocss.netlify.app

export default defineConfig({
  presets: [
    presetUno,
    presetAttributify,
    // 为什么要用到这个插件？
    // 模板使用 viewport 作为移动端适配方案，unocss 默认单位为 rem
    // 所以需要转成 px，然后由 postcss 把 px 转成 vw/vh，完成适配
    presetRemToPx({
      // 这里为什么要设置基础字体大小？看下面这篇文章
      // https://juejin.cn/post/7262975395620618298
      baseFontSize: 4,
    }),
    presetMini(),
  ],
  theme: {
    colors: {
      shinyRed: 'var(--van-danger-color)',
      layout: {
        background: 'var(--default-background-color)',
        navcolor: '#fff',
      },
    },
  },
  rules: [
    [/^shiny-text(-[\w\(\-\)]+?)?(-[\w\(\)\-]+)?$/, (match, { rawSelector, theme }) => {
      const selector = e(rawSelector)
      if (!match[1]) {
        return `${selector} {
          border-style: none;
          background-color: ${theme.colors.layout.background};
          -webkit-background-clip: text;
          background-clip: text;
          font-size: 5vw;
          --un-text-opacity: 1;
          color: rgb(0 0 0 / var(--un-text-opacity));
          filter: drop-shadow(0 0 0.75rem var(--van-blue))
        }`
      }
      else if (!match[2]) {
        return `${selector} {
          border-style: none;
          background-color: ${theme.colors.layout.background};
          -webkit-background-clip: text;
          background-clip: text;
          font-size: 5vw;
          --un-text-opacity: 1;
          color: ${match[1].slice(1)};
          filter: drop-shadow(0 0 0.75rem var(--van-blue))
        }`
      }
      else {
        return `${selector} {
          border-style: none;
          background-color: ${theme.colors.layout.background};
          -webkit-background-clip: text;
          background-clip: text;
          font-size: 5vw;
          --un-text-opacity: 1;
          color: ${match[1].slice(1)};
          filter: drop-shadow(0 0 0.75rem ${match[2].slice(1)})
        }`
      }
    }],
    [/^drop-shadow-([\w\(\-\)]+)$/, match => ({
      filter: `drop-shadow(0 0 0.75rem ${match[1]});`,
    })],
  ],
  shortcuts: [
    // shortcuts to multiple utilities
    ['btn', 'px-6 py-3 rounded-3 border-none inline-block bg-green-400 text-white cursor-pointer !outline-none hover:bg-green-600 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],
})
