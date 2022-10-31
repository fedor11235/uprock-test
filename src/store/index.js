import { createStore } from "vuex";
import profile from "./profile.module";

const store = createStore({
  modules: {
    profile,
  },
});

export default store;