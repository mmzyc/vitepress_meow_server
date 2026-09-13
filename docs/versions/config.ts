import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    sidebar: {
      '/versions/': [
        {
          text: '更新日志',
          items: [
            {text: '返回主页', link: '/about'},
            {
              text: '版本列表',
              // link: '/',
              base: '/versions/',
              collapsed: false,
              items: [
                // {text: '1.0', link: '1.0'}
                {
                  text: '6.x', 
                  base: '/versions/6.x/',
                  collapsed: true,
                  items: [
                    {text: '6.7', link: '6.7'}
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
})