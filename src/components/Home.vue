<template>
    <div class="home">
      <h1>Ana Sayfa</h1>
      <!-- Blog bileşenini burada kullanıyoruz -->
      <Blog />
    </div>
  </template>
  
  <script>
  // Blog bileşenini içe aktarıyoruz
  import Blog from './Blog.vue';
  
  export default {
    name: 'HomePage',
    components: {
      Blog, // Blog bileşenini burada tanımlıyoruz
    }
  };
  </script>
  
  <style scoped>
  .home {
    padding: 20px;
  }
  </style>
  