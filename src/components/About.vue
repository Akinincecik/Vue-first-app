<template>
    <div class="about-container">
      <h1>Hakkında</h1>
      <p>BlogApp hakkında bilgi.</p>
      <p>BlogApp, blog yazılarınızı kolayca paylaşmanıza olanak tanır. Kendi yazılarınızı ekleyebilir ve diğerlerinin yazılarına göz atabilirsiniz.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  };
  </script>
  
  <style scoped>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    color: #42b983;
    font-size: 36px;
    font-weight: bold;
  }
  
  p {
    font-size: 18px;
    color: #555;
    line-height: 1.6;
    margin-top: 10px;
  }
  </style>
  