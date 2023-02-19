<template>
  <div class="app-dialog">
    <div class="app-dialog__window">
      <h2><slot name="title" /></h2>
      <div><slot /></div>
    </div>
  </div>
</template>

<style scoped>
.app-dialog {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-dialog__window {
  max-width: 30rem;
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
}
</style>
