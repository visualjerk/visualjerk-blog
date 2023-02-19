import { defineAsyncComponent } from 'vue'

export const DIALOG_COMPONENTS = {
  confirm: defineAsyncComponent(() => import('./confirm-dialog.vue')),
} as const
