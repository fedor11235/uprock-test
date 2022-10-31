<template>
<input class="base-button" type="submit" :value="value"/>
</template>
<script>
export default {
    name: 'BaseButton',
    props: {
      value: {
          type: String,
          required: true
      }
  },
}
</script>
<style scoped>
.base-button {
    margin: 8px;
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    background-color: var(--primary-color);
    color: var(--text-color);
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    transition: transform 200ms;
}

.base-button:hover {
  background-color: var(--secondary-color);
}
.base-button:active {
  transform: scale(0.975);
}
</style>