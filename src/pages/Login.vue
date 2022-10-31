<template>
<div class="login">
  <div class="card">
    <BaseInput :value="form.email" @my-input="email => form.email = email" label="email" />
    <BaseInput :value="form.password" @my-input="password => form.password = password" label="password" />

    <BaseButton @click.prevent="handleLogin"/>
  </div>
</div>
</template>
  
<script>
import authService from "@/services/auth.service";
import BaseInput from "@/components/BaseInput";
import BaseButton from "@/components/BaseButton";
  
export default {
  name: "Login",
  components: {
    BaseInput,
    BaseButton
    },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleLogin() {
      authService.login(this.form)
    },
  },
};
</script>
  
<style scoped>
.login {
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

.auth-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>