<template>
  <component
    v-if="dialogComponent"
    :is="dialogComponent"
    v-bind="dialogBindings"
  />
</template>

<script setup lang="ts">
import { onBeforeUnmount, ref, markRaw } from 'vue'
import { dialogProvider } from './dialog-provider'
import { DIALOG_COMPONENTS } from './components'

const dialogComponent = ref()
const dialogBindings = ref()

function onClose() {
  dialogComponent.value = null
  dialogBindings.value = null
}

const unsubscribe = dialogProvider.subscribe(({ kind, context }) => {
  if (!(kind in DIALOG_COMPONENTS)) {
    throw new Error(`dialog component of kind "${kind}" not found`)
  }
  dialogComponent.value = markRaw(DIALOG_COMPONENTS[kind])
  dialogBindings.value = {
    ...context,
    onClose,
  }
})
onBeforeUnmount(unsubscribe)
</script>
