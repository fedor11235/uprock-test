<template>
<div class="base-info">
  <div>login details:</div>
  <div>email: {{emailExample}}</div>
  <div>password: {{passwordExample}}</div>
</div>
</template>
  
<script>
export default {
  name: "BaseInfo",
  data() {
    return {
      emailExample: process.env.VUE_APP_USER_EMAIL,
      passwordExample: process.env.VUE_APP_USER_PASSWORD,
    };
  }
};
</script>
  
<style scoped>

.base-info {
  margin: 8px;
  font-size: 18px;
  color: var(--secondary-color);
}
</style>