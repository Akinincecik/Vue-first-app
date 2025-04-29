<template>
  <div id="app">
    <!-- Navbar'ı burada ekliyoruz -->
    <Navbar />
    <!-- Vue Router ile sayfalar arasında geçiş yapmak için router-view ekliyoruz -->
    <router-view />  <!-- Sayfa içeriği burada dinamik olarak yüklenecek -->
  </div>
</template>

<script>
// Navbar bileşenini içe aktarıyoruz
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,  // Navbar bileşenini burada tanımlıyoruz
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
