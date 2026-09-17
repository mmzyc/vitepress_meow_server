import { defineConfig } from 'vitepress'
import { nav, sidebar, socialLinks } from './config/main.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  head: [
    ['link', {
      rel: 'icon', href: '/logo.png'
    }]
  ],

  title: "喵际旅人",
  description: "这是喵际旅人服务器的docs文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],
    socialLinks,

    logo: '/logo.png',

    footer: {
      message: 'Docs BY 木锦棉棉'
    },

    // 大纲
    outline: {
      level: 'deep',
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后编辑时间',
      // formatOptions: { dateStyle: 'medium', timeStyle: 'short' }
    },

    editLink: {
      pattern: 'https://github.com/mmzyc/vitepress_meow_server/tree/main/docs/:path',
      text: '在 Github 上编辑此页面'
    }
  },
  cleanUrls: true,

  lastUpdated: true,

  vite: {
    server: {
      allowedHosts: ['my.mjmm.top']
    }
  }
})
