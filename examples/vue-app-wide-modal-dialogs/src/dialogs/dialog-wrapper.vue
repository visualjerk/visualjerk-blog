<template>
  <component
    v-if="dialogComponent"
    :is="dialogComponent"
    v-bind="dialogBindings"
  />
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { defineAsyncComponent, onBeforeUnmount, ref, markRaw } from 'vue'
import { dialogProvider } from './dialog-provider'

const DIALOG_COMPONENTS: Record<string, Component> = {
  confirm: defineAsyncComponent(() => import('./confirm-dialog.vue')),
}

const dialogComponent = ref()
const dialogBindings = ref()

function onClose() {
  dialogComponent.value = null
  dialogBindings.value = null
}

const unsubscribe = dialogProvider.subscribe(({ kind, context }) => {
  if (!(kind in DIALOG_COMPONENTS)) {
    throw new Error('component not found')
  }
  dialogComponent.value = markRaw(DIALOG_COMPONENTS[kind])
  dialogBindings.value = {
    context,
    onClose,
  }
})
onBeforeUnmount(unsubscribe)
</script>
