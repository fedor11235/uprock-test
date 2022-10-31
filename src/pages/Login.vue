<template>
    <div class="login">
      <div class="card">
        <form class="auth-form">
          <input class="auth-form__input" type="text" v-model="form.email" />
          <input class="auth-form__input" type="text" v-model="form.password" />

          <input class="auth-form__submit" type="submit" @click.prevent="handleLogin" />
        </form>
      </div>
    </div>
</template>
  
  <script>
  // import { Form, Field, ErrorMessage } from "vee-validate";
  // import * as yup from "yup";
  import authService from "@/services/auth.service";
  
  export default {
    name: "PageLogin",
    // components: {
    //   Form,
    //   Field,
    //   ErrorMessage,
    // },
    data() {
      // const schema = yup.object().shape({
      //   username: yup.string().required("Username is required!"),
      //   password: yup.string().required("Password is required!"),
      // });
  
      return {
        loading: false,
        // message: "",
        // schema,
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
        this.loading = true;
        authService.login(form)
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
  border-radius: 6px;
  box-shadow: 0 0 10px #f1f1f1;
}

.auth-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>