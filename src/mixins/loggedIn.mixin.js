export default {
  computed: {
    loggedIn() {
      return this.$store.state.profile.status.loggedIn;
    }
  }
}