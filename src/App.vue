<template>
<router-view />
</template>

<script>
import loggedInMixin from '@/mixins/loggedIn.mixin.js'
export default {
  name: 'App',
  mixins: [loggedInMixin],
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    } else {
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss">
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
body {
  background-color: $primary-color;
}
</style>