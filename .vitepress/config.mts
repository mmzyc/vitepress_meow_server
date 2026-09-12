import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "测试站点",
  description: "这是一个测试站点",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: 'Main',
        items: [
          { text: '关于', link: '/about' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
          {text: '服务器规则', link: '/rules'}
        ]
      },

      {
        text: '更新日志',
        link: '/',
        base: '/versions/',
        collapsed: true,
        items: [
          {text: '1.0', link: '1.0'}
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    logo: '/logo.png',

    footer: {
      message: 'Docs BY 木锦棉棉'
    },

    // 大纲
    outline: {
      level: 'deep',
      label: '页面导航'
    }
  },
  cleanUrls: true,
  vite: {
    server: {
      allowedHosts: ['my.mjmm.top']
    }
  }
})
