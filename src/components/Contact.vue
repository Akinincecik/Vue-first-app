<template>
    <div class="contact-container">
      <h1>İletişim</h1>
      <p>Bize ulaşmak için aşağıdaki formu doldurun.</p>
  
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Adınız:</label>
          <input type="text" id="name" v-model="name" placeholder="Adınızı girin" required />
        </div>
  
        <div>
          <label for="email">E-posta:</label>
          <input type="email" id="email" v-model="email" placeholder="E-postanızı girin" required />
        </div>
  
        <div>
          <label for="message">Mesaj:</label>
          <textarea id="message" v-model="message" placeholder="Mesajınızı yazın" required></textarea>
        </div>
  
        <button type="submit">Gönder</button>
      </form>
  
      <p v-if="submitted">Mesajınız başarıyla gönderildi!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        name: '',
        email: '',
        message: '',
        submitted: false
      };
    },
    methods: {
      handleSubmit() {
        // Burada mesajı işleme veya API'ye gönderme işlemi yapılabilir.
        this.submitted = true;
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .contact-container {
    max-width: 600px;
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
    margin-top: 10px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
  }
  
  label {
    font-weight: bold;
    text-align: left;
  }
  
  input,
  textarea {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
  }
  
  button {
    background-color: #42b983;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  button:hover {
    background-color: #36a074;
  }
  
  p {
    margin-top: 20px;
    color: green;
  }
  </style>
  