<template>
  <div class="overlay">
    <div class="dialog">
      <h2><slot name="title" /></h2>
      <div><slot /></div>
      <div class="actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog {
  max-width: 30rem;
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
