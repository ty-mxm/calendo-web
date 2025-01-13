<template>
    <div v-if="visible" class="modal-overlay">
      <div class="modal-content">
        <!-- Bouton pour fermer -->
        <button class="close-button" @click="$emit('close')">&times;</button>
        
        <!-- Titre de la modale -->
        <h2>{{ title }}</h2>
        
        <!-- Contenu dynamique -->
        <div v-html="content"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Overlay de la modale */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  /* Contenu de la modale */
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 90%;
    max-width: 600px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
    position: relative;
  }
  
  /* Bouton pour fermer la modale */
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    color: #333;
    transition: color 0.2s ease;
  }
  
  .close-button:hover {
    color: #ff7f50;
  }
  
  /* Titre */
  h2 {
    margin-bottom: 15px;
    font-size: 1.8rem;
    color: #333;
    text-align: center;
  }
  
  /* Contenu dynamique */
  div[v-html] {
    line-height: 1.6;
    color: #555;
  }
  </style>
  