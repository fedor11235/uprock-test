import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { worker } from '@/mocks/browser'

worker.start()

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
