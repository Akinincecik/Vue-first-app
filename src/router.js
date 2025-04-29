// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';  // Ana Sayfa bileşenini import edin
import About from './components/About.vue';  // Hakkında bileşenini import edin
import Contact from './components/Contact.vue';  // İletişim bileşenini import edin

const routes = [
  { path: '/', component: Home },  // Ana sayfa için route
  { path: '/about', component: About },  // Hakkında sayfası için route
  { path: '/contact', component: Contact },  // İletişim sayfası için route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
