import { defineConfig } from 'vitepress'
import { nav, sidebar } from './config/main.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "喵际旅人",
  description: "这是喵际旅人服务器的docs文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

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
