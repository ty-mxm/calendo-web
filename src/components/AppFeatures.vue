<template>
    <div class="features">
      <h2>Fonctionnalités</h2>
      <ul>
        <li>
          <h3>Gestion des événements</h3>
          <p>Planifiez, gérez et organisez vos événements en toute simplicité.</p>
        </li>
        <li>
          <h3>Votes en temps réel</h3>
          <p>Permettez à votre équipe de voter rapidement pour des décisions importantes.</p>
        </li>
        <li>
          <h3>Synchronisation d'équipe</h3>
          <p>Collaborez efficacement grâce à une synchronisation instantanée entre les membres de votre équipe.</p>
        </li>
        <li>
          <h3>Interface intuitive</h3>
          <p>Profitez d'une expérience utilisateur fluide et moderne avec une interface claire.</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "AppFeatures",
  };
  </script>
  
  <style scoped>
  .features {
    text-align: center;
    background-color: #f9f9f9;
    padding: 40px;
    border-radius: 8px;
    margin: 20px auto;
    max-width: 800px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .features h2 {
    font-size: 2.5rem;
    color: #7f57ff;
    margin-bottom: 20px;
  }
  
  .features ul {
    list-style-type: none;
    padding: 0;
    text-align: left;
  }
  
  .features ul li {
    margin-bottom: 20px;
  }
  
  .features ul li h3 {
    font-size: 1.5rem;
    color: #333;
  }
  
  .features ul li p {
    font-size: 1rem;
    color: #666;
    margin: 5px 0 0;
  }
  </style>
  