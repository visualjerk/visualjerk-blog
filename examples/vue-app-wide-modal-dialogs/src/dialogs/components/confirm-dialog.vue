<template>
  <AppDialog @close="handleCancel">
    <template #title>
      {{ title }}
    </template>
    <template #actions>
      <AppButton @click="handleCancel">Cancel</AppButton>
      <AppButton @click="handleConfirm" variant="primary">Confirm</AppButton>
    </template>
  </AppDialog>
</template>

<script setup lang="ts">
import AppDialog from '../../components/app-dialog.vue'
import AppButton from '../../components/app-button.vue'

defineProps<{
  title: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()

function handleCancel() {
  emit('cancel')
  emit('close')
}

function handleConfirm() {
  emit('confirm')
  emit('close')
}
</script>
