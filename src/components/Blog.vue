<template>
    <div class="blog-container">
      <h1>Blog</h1>
  
      <!-- Form Alanı -->
      <div class="form-container">
        <input
          v-model="newPost.title"
          class="input-field"
          placeholder="Başlık girin"
        />
        <textarea
          v-model="newPost.content"
          class="input-field"
          placeholder="İçeriği girin"
        ></textarea>
        <button class="add-button" @click="addPost">Ekle</button>
      </div>
  
      <!-- Blog Listesi -->
      <BlogList :posts="posts" @delete-post="deletePost" />
    </div>
  </template>
  
  <script>
  import BlogList from './BlogList.vue';
  
  export default {
    name: 'BlogPage',
    components: {
      BlogList
    },
    data() {
      return {
        newPost: {
          title: '',
          content: ''
        },
        posts: [
          {
            title: 'Vue.js ile Blog Yapmak',
            content: 'Vue.js, tek sayfalık uygulamalar (SPA) için harika bir JavaScript frameworküdür.',
            date: '2025-03-18'
          },
          {
            title: 'JavaScript ve ES6 Özellikleri',
            content: 'ES6, JavaScript dilini modernleştirerek daha verimli yazılım geliştirme imkanı sunar.',
            date: '2025-03-17'
          }
        ]
      };
    },
    methods: {
      addPost() {
        if (this.newPost.title && this.newPost.content) {
          // Yeni post'u posts dizisine ekliyoruz
          this.posts.push({
            title: this.newPost.title,
            content: this.newPost.content,
            date: new Date().toLocaleDateString()
          });
          // Formu sıfırlıyoruz
          this.newPost.title = '';
          this.newPost.content = '';
        }
      },
      deletePost(index) {
        this.posts.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .blog-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f7f7f7;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    color: #42b983;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .form-container {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
  
  .input-field {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 16px;
  }
  
  .input-field:focus {
    outline: none;
    border-color: #42b983;
  }
  
  .add-button {
    width: 100%;
    padding: 12px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .add-button:hover {
    background-color: #36a074;
  }
  
  .blog-list {
    margin-top: 30px;
  }
  
  button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 4px;
  }
  
  button:hover {
    background-color: darkred;
  }
  
  @media (max-width: 600px) {
    .blog-container {
      padding: 10px;
    }
  
    .form-container {
      padding: 10px;
    }
  
    .input-field, .add-button {
      font-size: 14px;
    }
  }
  </style>
  