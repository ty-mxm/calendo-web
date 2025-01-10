<!-- Page des Conditions d'utilisation -->
<template>
    <div class="legal-page">
      <h1>Conditions d'Utilisation</h1>
      <p>
        En utilisant Calendo, vous acceptez les conditions suivantes. Veuillez lire
        attentivement ces informations avant d'utiliser notre service.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at
        nibh elementum imperdiet. Duis sagittis ipsum.
      </p>
      <a href="/" class="back-link">Retour à l'accueil</a>
    </div>
  </template>
  
  <script>
  export default {
    name: "ConditionsUtilisationPage",
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