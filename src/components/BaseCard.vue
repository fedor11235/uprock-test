<template>
<div class="base-card">
  <slot></slot>
</div>
</template>
<script>
export default {
    name: 'BaseCard'
}
</script>
<style scoped>
.base-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 380px;
  background-color: var(--text-color);
  border-radius: 6px;
  box-shadow: 0 0 10px var(--primary-color);
}
</style>