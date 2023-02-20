import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { articles } from './articles'

export default withMermaid(
  defineConfig({
    title: 'Visualjerk Blog',
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
