<template>
  <div>
    <h2>Confirm Dialog</h2>
    <button @click="$emit('close')">Confirm</button>
  </div>
</template>

<script setup lang="ts">
defineEmits(['close'])
</script>
