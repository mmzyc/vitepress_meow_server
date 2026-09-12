import type { DefaultTheme } from "vitepress"
// import { versionsSidebar } from '../../docs/versions/config.ts'

export const sidebar: DefaultTheme.Sidebar = {
  '/': [
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
      link: '/versions/'
    }
  ],

  // '/versions/': versionsSidebar
}