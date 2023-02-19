<script setup lang="ts">
import AppButton from './components/app-button.vue'
import { DialogWrapper, dialogProvider } from './dialogs'

function handleDelete() {
  dialogProvider.open('confirm', {})
}
</script>

<template>
  <div>
    <AppButton @click="handleDelete" variant="danger">
      Do Something Serious
    </AppButton>
  </div>
  <DialogWrapper />
</template>
