<template>
  <dialog ref="dialogEl" @close="$emit('close')">
    <h2><slot name="title" /></h2>
    <div><slot /></div>
    <div class="actions">
      <slot name="actions" />
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, unref } from 'vue'

defineEmits(['close'])

const dialogEl = ref()
onMounted(() => {
  unref(dialogEl).showModal()
})
</script>

<style scoped>
dialog {
  max-width: 30rem;
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.2);
}

.actions {
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
}
</style>
