import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { articles } from './articles'

export default withMermaid(
  defineConfig({
    title: 'Visualjerk Blog',
    base: '/visualjerk-blog',
    lastUpdated: true,
    themeConfig: {
      sidebar: [
        {
          text: 'Articles',
          items: articles,
        },
      ],
    },
  })
)
