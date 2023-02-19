<template>
  <AppDialog>
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

const emit = defineEmits(['close', 'cancel', 'confirm'])

function handleCancel() {
  emit('cancel')
  emit('close')
}

function handleConfirm() {
  emit('confirm')
  emit('close')
}
</script>
