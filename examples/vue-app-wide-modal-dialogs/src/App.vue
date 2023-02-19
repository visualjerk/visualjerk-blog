<script setup lang="ts">
import { DialogWrapper, dialogProvider } from './dialogs'

function handleDelete() {
  dialogProvider.open('confirm', {})
}
</script>

<template>
  <div>
    <button @click="handleDelete">Do Something Serious</button>
  </div>
  <DialogWrapper />
</template>
