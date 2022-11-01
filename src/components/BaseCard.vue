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
<style lang="scss" scoped>
.base-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 380px;
  background-color: $text-color;
  border-radius: 6px;
  box-shadow: 0 0 10px $primary-color;
}
</style>