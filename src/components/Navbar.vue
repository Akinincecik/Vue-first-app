<template>
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="navbar-logo">
          <span>BlogApp</span>
        </router-link>
        <ul class="navbar-links">
          <li><router-link to="/" class="navbar-link">Ana Sayfa</router-link></li>
          <li><router-link to="/about" class="navbar-link">Hakkında</router-link></li>
          <li><router-link to="/contact" class="navbar-link">İletişim</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavbarTable'
  };
  </script>
  
  <style scoped>
  /* Genel navbar stili */
  .navbar {
    background: linear-gradient(135deg, #42b983, #2d9a7d); /* Gradyan arka plan */
    padding: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    position: fixed; /* Navbar'ı sabitlemek için */
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
  }
  
  /* Navbar container düzeni */
  .navbar-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  
  /* Logo stili */
  .navbar-logo span {
    font-size: 28px;
    color: white;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 2px; /* Harfler arasında biraz boşluk */
    text-transform: uppercase; /* Tüm harfleri büyük yap */
  }
  
  /* Bağlantılar için stil */
  .navbar-links {
    list-style-type: none;
    display: flex;
    gap: 30px; /* Daha geniş boşluk */
  }
  
  /* Navbar linklerinin stili */
  .navbar-link {
    text-decoration: none;
    color: white;
    font-size: 18px; /* Font boyutunu büyüttüm */
    font-weight: 500; /* Orta kalınlıkta yazı */
    padding: 12px 18px; /* Daha büyük tıklama alanı */
    border-radius: 8px; /* Yuvarlatılmış köşeler */
    transition: all 0.3s ease; /* Tüm geçişlere animasyon ekledim */
  }
  
  /* Link hover efekti */
  .navbar-link:hover {
    background-color: #36a074;
    transform: scale(1.05); /* Hover olduğunda biraz büyüme efekti */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15); /* Gölge efekti */
  }
  
  /* Menü öğeleri arasındaki boşlukları artırdım */
  .navbar-links li {
    display: inline-block;
  }
  
  /* Navbar'da daha iyi bir görünüm için sayfa içeriği */
  body {
    margin-top: 70px; /* Sabit navbar'ı sayfa içeriğiyle çakışmaması için biraz boşluk bırak */
  }
  </style>
  