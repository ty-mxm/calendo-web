<!-- Page de Confidentialité -->
<template>
    <div class="legal-page">
      <h1>Politique de Confidentialité</h1>
      <p>
        Chez Calendo, nous respectons votre vie privée. Cette politique explique comment
        vos données sont collectées, utilisées et protégées.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
        nibh elementum imperdiet. Duis sagittis ipsum.
      </p>
      <router-link :to="{ name: 'Home' }" class="back-link">Retour à l'accueil</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "PrivacyPage",
  };
  </script>
  
  <style scoped>
  .legal-page {
    padding: 40px;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
  }
  
  h1 {
    color: var(--primary, #007bff);
    margin-bottom: 20px;
  }
  
  .back-link {
    display: inline-block;
    margin-top: 20px;
    color: var(--primary, #007bff);
    text-decoration: none;
  }
  
  .back-link:hover {
    text-decoration: underline;
  }
  </style>