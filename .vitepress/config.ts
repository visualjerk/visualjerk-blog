import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { articles } from './articles'

export default withMermaid(
  defineConfig({
    title: 'Visualjerk Blog',
    description:
      'Writing about frontend development with a focus on Vue and DX.',
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
