<template>
  <div id="app">
    <!-- En-tête -->
    <AppHeader />

    <!-- Contenu principal -->
    <main>
      <!-- Section Accueil -->
      <section id="home" class="section home">
        <div class="content">
          <h2>Bienvenue sur <span>Calendo</span></h2>
          <p>
            L'application parfaite pour organiser vos événements, collecter des votes,
            et rester synchronisé avec votre équipe en toute simplicité.
          </p>
          <button class="cta-button" @click="scrollTo('features')">Découvrir les fonctionnalités</button>
        </div>
        <div class="image-container">
          <img src="@/assets/app-google.jpg" alt="Collaboration" />
        </div>
      </section>

      <!-- Section Fonctionnalités -->
      <section id="features" class="section features">
        <h2>Fonctionnalités</h2>
        <div class="features-grid">
          <div class="feature-card">
            <img src="@/assets/app-mobile.jpg" alt="Planification" />
            <h3>Planification simplifiée</h3>
            <p>Organisez vos événements rapidement grâce à une interface intuitive.</p>
          </div>
          <div class="feature-card">
            <img src="@/assets/app-phone.jpg" alt="Votes" />
            <h3>Collecte de votes</h3>
            <p>Rassemblez les avis de vos participants en un clic.</p>
          </div>
          <div class="feature-card">
            <img src="@/assets/apps-phone.jpg" alt="Collaboration" />
            <h3>Collaboration en temps réel</h3>
            <p>Partagez vos idées et restez connectés avec votre équipe.</p>
          </div>
        </div>
      </section>

      <!-- Section Description -->
      <section id="description" class="section description">
        <h2>À propos de Calendo</h2>
        <p>
          Calendo est une application conçue pour simplifier l'organisation d'événements. Grâce à des fonctionnalités puissantes et une interface moderne, vous pouvez collaborer facilement avec votre équipe et prendre des décisions rapidement.
        </p>
        <img src="@/assets/app-mobile.jpg" alt="Organisation" />
      </section>

      <!-- Section Contact -->
      <section id="footer" class="section footer">
        <h2>Contactez-nous</h2>
        <p>
          Vous avez des questions ou souhaitez en savoir plus sur Calendo ? 
          <a href="mailto:contact@calendo.com">Envoyez-nous un email</a>.
        </p>
        <p>&copy; 2025 Calendo. Tous droits réservés.</p>
      </section>
    </main>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  methods: {
    scrollTo(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
/* Global styles */
body {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  background-color: #f4f4f9;
  color: #333;
}

h2 {
  font-size: 2.5rem;
  color: #7f57ff;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

/* Sections */
.section {
  padding: 80px 20px;
  text-align: center;
}

.section h2 {
  margin-bottom: 20px;
}

/* Accueil Section */
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.home .content {
  flex: 1;
  padding: 20px;
}

.home .content h2 span {
  color: #ff7f50;
}

.home .cta-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #7f57ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.home .cta-button:hover {
  background-color: #6840d7;
}

.home .image-container {
  flex: 1;
  text-align: center;
}

.home .image-container img {
  max-width: 90%;
  height: auto;
}

/* Fonctionnalités Section */
.features {
  background-color: #fff;
}

.features-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.feature-card {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 300px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.feature-card img {
  max-width: 100px;
  margin-bottom: 10px;
}

.feature-card h3 {
  color: #7f57ff;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

/* Description Section */
.description img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}

/* Footer Section */
.footer {
  background-color: #7f57ff;
  color: white;
  padding: 40px 20px;
}

.footer a {
  color: #ff7f50;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
