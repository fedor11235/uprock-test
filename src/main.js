import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/styles/variables.css';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('@/mocks/browser')
  worker.start()
}

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
