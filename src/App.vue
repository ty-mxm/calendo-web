<template>
  <div id="app">
    <AppHeader />

    <main class="overflow-x-hidden">
      <!-- Hero Section -->
      <section id="home" class="section hero">
        <div class="hero-content" data-aos="fade-up">
          <img src="@/assets/logo-calendo-t.png" alt="Logo Calendo" class="logo" />
          <h1 class="hero-title">
            Simplifiez votre organisation avec <span class="gradient-text">Calendo</span>
          </h1>
          <p class="hero-description">
            Transformez la gestion de vos événements avec notre solution intuitive. 
            Planification, votes et collaboration en temps réel, tout en un seul endroit.
          </p>
          <button class="primary-button" @click="scrollTo('features')">
            Explorer Calendo
          </button>
        </div>
        <div class="hero-image" data-aos="fade-left">
          <img src="@/assets/app-google.jpg" alt="Collaboration" />
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="section features">
        <h2 data-aos="fade-up">Fonctionnalités essentielles</h2>
        <div class="features-grid">
          <div class="feature-card" data-aos="fade-up" data-aos-delay="100">
            <div class="card-icon">
              <i class="fas fa-calendar-alt"></i>
            </div>
            <h3>Planification intuitive</h3>
            <p>
              Une interface épurée pour organiser vos événements sans effort, 
              même les plus complexes.
            </p>
          </div>
          
          <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
            <div class="card-icon">
              <i class="fas fa-vote-yea"></i>
            </div>
            <h3>Système de vote</h3>
            <p>
              Prenez des décisions collectives facilement avec notre système 
              de vote en temps réel.
            </p>
          </div>

          <div class="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div class="card-icon">
              <i class="fas fa-users"></i>
            </div>
            <h3>Collaboration</h3>
            <p>
              Travaillez ensemble efficacement grâce à nos outils de 
              collaboration intégrés.
            </p>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="section about">
        <div class="about-content" data-aos="fade-right">
          <h2>Pourquoi Calendo ?</h2>
          <p>
            Calendo repense la gestion d'événements pour l'ère moderne. 
            Notre plateforme combine simplicité et puissance pour vous offrir 
            une expérience exceptionnelle.
          </p>
        </div>
        <div class="about-image" data-aos="fade-left">
          <img src="@/assets/app-mobile.jpg" alt="Application mobile" />
        </div>
      </section>

      <!-- Footer -->
      <AppFooter />
    </main>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  methods: {
    scrollTo(sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    },
  },
  mounted() {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  },
};
</script>

<style>
:root {
  --primary: #7f57ff;
  --secondary: #ff7f50;
  --dark: #292d36;
  --light: #ffffff;
  --gray: #f5f5f5;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: var(--dark);
  background-color: var(--light);
}

.section {
  padding: 80px 5%;
  max-width: 1400px;
  margin: 0 auto;
}

/* Hero Section */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  min-height: 90vh;
}


.hero-content {
  padding-right: 40px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 24px;
}
.logo {
  width: 200px; /* Ajustez cette valeur à votre besoin */
  height: auto; /* Conserve les proportions du logo */
  display: block;
  margin-left: -48px;
}

.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 32px;
}


.hero-image img {
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Features Section */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 60px;
}

.feature-card {
  background: var(--light);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.card-icon {
  width: 64px;
  height: 64px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.card-icon i {
  font-size: 24px;
  color: var(--light);
}

/* Buttons */
.primary-button {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: var(--light);
  padding: 16px 32px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(127, 87, 255, 0.2);
}

/* About Section */
.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  background-color: var(--gray);
  border-radius: 30px;
  padding: 80px 60px;
}

.about-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    padding-right: 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .about {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
