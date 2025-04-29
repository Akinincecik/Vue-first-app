<template>
    <div class="blog-list">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="post-card"
      >
        <h2 class="post-title">{{ post.title }}</h2>
        <p class="post-content">{{ post.content }}</p>
        <small class="post-date">{{ post.date }}</small>
        <button class="delete-button" @click="deletePost(index)">Sil</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogList',
    props: {
      posts: Array
    },
    methods: {
      deletePost(index) {
        this.$emit('delete-post', index);
      }
    }
  };
  </script>
  
  <style scoped>
  .blog-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .post-card {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .post-card:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }
  
  .post-title {
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .post-content {
    font-size: 16px;
    color: #555;
    margin-bottom: 10px;
  }
  
  .post-date {
    font-size: 14px;
    color: #777;
  }
  
  .delete-button {
    background-color: red;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .delete-button:hover {
    background-color: darkred;
  }
  </style>
  