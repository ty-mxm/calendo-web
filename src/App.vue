<template>
  <div id="app">
    <!-- En-tête -->
    <AppHeader />

    <!-- Contenu principal -->
    <main>
      <!-- Section Accueil -->
      <section id="home" class="section home">
        <div class="content" data-aos="fade-up">
          <h2>Bienvenue sur <span>Calendo</span></h2>
          <p>
            L'application parfaite pour organiser vos événements, collecter des votes,
            et rester synchronisé avec votre équipe en toute simplicité.
          </p>
          <button class="cta-button" @click="scrollTo('features')">Découvrir les fonctionnalités</button>
        </div>
        <div class="image-container" data-aos="fade-left">
          <img src="@/assets/app-google.jpg" alt="Collaboration" />
        </div>
      </section>

      <!-- Section Fonctionnalités -->
      <section id="features" class="section features">
        <h2 data-aos="zoom-in">Fonctionnalités</h2>
        <div class="features-grid">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
            <img src="@/assets/app-mobile.jpg" alt="Planification" />
            <h3>Planification simplifiée</h3>
            <p>Organisez vos événements rapidement grâce à une interface intuitive.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
            <img src="@/assets/app-phone.jpg" alt="Votes" />
            <h3>Collecte de votes</h3>
            <p>Rassemblez les avis de vos participants en un clic.</p>
          </div>
          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <img src="@/assets/apps-phone.jpg" alt="Collaboration" />
            <h3>Collaboration en temps réel</h3>
            <p>Partagez vos idées et restez connectés avec votre équipe.</p>
          </div>
        </div>
      </section>

      <!-- Section Description -->
      <section id="description" class="section description">
        <h2 data-aos="fade-right">À propos de Calendo</h2>
        <p data-aos="fade-left">
          Calendo est une application conçue pour simplifier l'organisation d'événements. Grâce à des fonctionnalités puissantes et une interface moderne, vous pouvez collaborer facilement avec votre équipe et prendre des décisions rapidement.
        </p>
        <div class="image-container" data-aos="zoom-in">
          <img src="@/assets/app-mobile.jpg" alt="Organisation" />
        </div>
      </section>

      <!-- Section Contact -->
      <section id="footer" class="section footer">
        <h2 data-aos="fade-up">Contactez-nous</h2>
       
          Vous avez des questions ou souhaitez en savoir plus sur Calendo ? 
          <a href="mailto:contact@calendo.com">Envoyez-nous un email</a>.
      
        <p>&copy; 2025 Calendo. Tous droits réservés.</p>
      </section>
    </main>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AOS from "aos";
import "aos/dist/aos.css";

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
  mounted() {
    AOS.init({
      duration: 1000,
      once: false, // Permet de réactiver les animations en scrollant
    });
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
  background-color: #1c1e26;
  color: #fff;
  overflow-x: hidden;
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
  padding: 60px 5%;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.section h2 {
  margin-bottom: 20px;
}

/* Accueil Section */
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: linear-gradient(145deg, #7f57ff, #ff7f50);
  color: #fff;
  border-radius: 20px;
  padding: 40px 5%;
  max-width: 1200px;
  margin: 20px auto;
}

.home .content {
  flex: 1;
  text-align: left;
  padding: 20px;
}

.home .content h2 span {
  color: #ff7f50;
}

.home .cta-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.home .cta-button:hover {
  background-color: #222;
  transform: scale(1.05);
}

.home .image-container {
  flex: 1;
  text-align: center;
}

.home .image-container img {
  max-width: 80%;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}


/* Fonctionnalités Section */
.features-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.feature-card {
  background-color: #292d36;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  flex: 1 1 calc(33.333% - 20px); /* Les cartes prennent la même largeur */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  max-width: 300px; /* Largeur maximum */
  height: 350px; /* Hauteur fixe pour toutes les cartes */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Aligner le contenu */
  margin: auto;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-card img {
  max-width: 80px;
  margin: 0 auto 10px auto; /* Centrer l'image */
  filter: brightness(1.2);
}

.feature-card h3 {
  color: #ff7f50;
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin-top: 10px;
}

.feature-card p {
  font-size: 1rem;
  color: #ccc;
}


/* Section Description */
.description .image-container {
  text-align: center;
  margin-top: 20px;
}

.description .image-container img {
  max-width: 90%;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

/* Footer Section */
.footer {
  background-color: #292d36;
  color: white;
  padding: 40px 5%;
  text-align: center;
}

.footer a {
  color: #ff7f50;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
</style>
