<script setup lang="ts">
import { ref } from 'vue'
import { DialogWrapper, dialogProvider } from './dialogs'
import AppButton from './components/app-button.vue'

const confirmed = ref(false)

function handleSeriousAction() {
  dialogProvider.open('confirm', {
    title: 'Do you really want to delete this?',
    onConfirm: () => {
      confirmed.value = true
    },
    onCancel: () => {
      confirmed.value = false
    },
  })
}
</script>

<template>
  <div>
    <h2>{{ confirmed ? 'Action Confirmed' : 'Unconfirmed' }}</h2>
    <AppButton @click="handleSeriousAction" variant="danger">
      Do Something Serious
    </AppButton>
  </div>
  <DialogWrapper />
</template>
