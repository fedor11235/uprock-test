<template>
<input class="base-button" type="submit" />
</template>
<script>
export default {
    name: 'BaseButton',
}
</script>
<style scoped>
.base-button {
    margin: 8px;
    padding: 6px 12px;
    border: none;
    border-radius: 6px;
    background-color: #7a92ef;
    color: #fdfdfd;
    font-weight: 500;
    font-size: 15px;
    cursor: pointer;
    transition: transform 200ms;
}

.base-button:hover {
    background-color: #6d87ee;
  }
.base-button:active {
transform: scale(0.975);
}
</style>