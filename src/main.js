import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Router'ı import ettik

createApp(App)
  .use(router)  // Vue Router'ı kullanmaya başladık
  .mount('#app');
