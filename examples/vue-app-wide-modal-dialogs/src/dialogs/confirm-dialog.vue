<template>
  <AppDialog>
    <template #title>
      <h2>Confirm Dialog</h2>
    </template>
    <AppButton @click="$emit('close')">Confirm</AppButton>
  </AppDialog>
</template>

<script setup lang="ts">
import AppDialog from '../components/app-dialog.vue'
import AppButton from '../components/app-button.vue'

defineEmits(['close'])
</script>
