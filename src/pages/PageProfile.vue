<template>
<BaseCard>
  <div v-for="(item, key) in $store.state.profile.user" :key="key" class="user-item">
    {{key}}: {{item}}
  </div>
  <BaseButton @click.prevent="handleLogout" value="log out"/>
</BaseCard>
</template>
  
<script>
import BaseButton from "@/components/BaseButton";
import BaseCard from "@/components/BaseCard";
import loggedInMixin from '@/mixins/loggedIn.mixin.js'

export default {
  name: 'PageProfile',
  mixins: [loggedInMixin],
  components: {
    BaseButton,
    BaseCard
  },
  async created() {
    if (!this.loggedIn) {
      this.$router.push('/login');
    }
    await this.$store.dispatch('profile/setUser')
  },
  methods: {
    async handleLogout() {
      await this.$store.dispatch('profile/logout')
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
.user-item {
  font-size: 18px;
  color: var(--secondary-color);
}
</style>