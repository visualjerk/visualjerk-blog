import type { Component } from 'vue'
import { defineAsyncComponent } from 'vue'

export const DIALOG_COMPONENTS: Record<string, Component> = {
  confirm: defineAsyncComponent(() => import('./confirm-dialog.vue')),
}
