import DefaultTheme from 'vitepress/theme'
import CustomLayout from './custom-layout.vue'

export default {
  ...DefaultTheme,
  Layout: CustomLayout,
}
