<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Logo et description -->
      <div class="footer-brand">
        <img src="@/assets/logo-calendo-t.png" alt="Logo Calendo" class="footer-logo" />
        <p class="brand-description">
          Simplifiez la gestion de vos événements et la collaboration d'équipe avec Calendo.
        </p>
        <div class="social-links">
          <a href="#" class="social-link" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#" class="social-link" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <!-- Navigation rapide -->
      <div class="footer-links">
        <h3>Navigation</h3>
        <ul>
          <li><a href="#features">Fonctionnalités</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <!-- Liens légaux -->
      <div class="footer-links">
        <h3>Légal</h3>
        <ul>
          <li><router-link to="/privacy">Confidentialité</router-link></li>
          <li><router-link to="/terms">Conditions d'utilisation</router-link></li>
          <li><router-link to="/cookies">Cookies</router-link></li>
          <li><router-link to="/mentions">Mentions légales</router-link></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-contact">
        <h3>Contactez-nous</h3>
        <p>Une question ? Besoin d'aide ?</p>
        <a href="mailto:contact@calendo.com" class="contact-button">
          Nous contacter
        </a>
        <p class="contact-info">
          <i class="fas fa-envelope"></i> contact@calendo.com<br>
          <i class="fas fa-phone"></i> 514-572-0000
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p class="copyright">&copy; {{ currentYear }} Calendo. Tous droits réservés.</p>
        <div class="language-selector">
          <select v-model="selectedLanguage" class="language-select">
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      selectedLanguage: 'fr',
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
.footer {
  background-color: var(--gray);
  color: var(--dark);
  padding-top: 80px;
  margin-top: 80px;
  position: relative;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 60px;
  margin-bottom: 60px;
}

.footer-brand {
  max-width: 300px;
}

.footer-logo {
  height: 50px;
  margin-bottom: 20px;
}

.brand-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  transform: translateY(-3px);
}

.footer-links h3,
.footer-contact h3 {
  color: var(--dark);
  font-size: 1.2rem;
  margin-bottom: 24px;
  position: relative;
  font-weight: 600;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links ul li {
  margin-bottom: 12px;
}

.footer-links ul li a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links ul li a:hover {
  color: var(--primary);
}

.contact-button {
  display: inline-block;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  margin: 16px 0;
  transition: transform 0.3s ease;
}

.contact-button:hover {
  transform: translateY(-2px);
}

.contact-info {
  color: #666;
  line-height: 1.8;
}

.contact-info i {
  margin-right: 8px;
  color: var(--secondary);
}

.footer-bottom {
  padding: 24px 5%;
  background-color: white;
}

.footer-bottom-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  color: #666;
}

.language-select {
  background: white;
  color: var(--dark);
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.language-select:hover {
  color: var(--primary);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .footer-brand {
    max-width: 100%;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }

  .footer-links,
  .footer-contact {
    text-align: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
}
</style>
