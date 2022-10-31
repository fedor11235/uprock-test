<template>
<div class="profile">
  <div class="card">
    <div v-for="(item, key) in $store.state.auth.user" :key="key" class="card__item">
      {{key}}: {{item}}
    </div>
    <BaseButton @click.prevent="handleLogout" value="log out"/>
  </div>
</div>
</template>
  
<script>
import BaseButton from "@/components/BaseButton";

export default {
  name: 'PageProfile',
  components: {
    BaseButton
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  async created() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
    await this.$store.dispatch('auth/setUser')
  },
  methods: {
    async handleLogout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/login');
    }
  }
};
</script>
<style>
.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 380px;
  background-color: #fdfdfd;
  border-radius: 6px;
  box-shadow: 0 0 10px #7a92ef;
}

.card__item {
  font-size: 18px;
  color: #6d87ee;
}
</style>