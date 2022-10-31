<template>
<BaseCard>
  <BaseInput :value="form.email" @my-input="email => form.email = email" label="email" />
  <BaseInput :value="form.password" @my-input="password => form.password = password" label="password" />

  <BaseButton @click.prevent="handleLogin" value="send"/>

  <BaseInfo />
</BaseCard>
</template>
  
<script>
import BaseInput from "@/components/BaseInput";
import BaseButton from "@/components/BaseButton";
import BaseCard from "@/components/BaseCard";
import BaseInfo from "@/components/BaseInfo";
import loggedInMixin from '@/mixins/loggedIn.mixin.js'
  
export default {
  name: "PageLogin",
  mixins: [loggedInMixin],
  components: {
    BaseInput,
    BaseButton,
    BaseCard,
    BaseInfo
    },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      emailExample: process.env.VUE_APP_USER_EMAIL,
      passwordExample: process.env.VUE_APP_USER_PASSWORD,
    };
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    async handleLogin() {
      const result = await this.$store.dispatch('profile/login', this.form)
      if(result) {
        this.$router.push("/profile");
      }
    },
  },
};
</script>