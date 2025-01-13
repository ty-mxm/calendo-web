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
          <li>
            <a href="#" @click.prevent="openModal('Confidentialité', confidentialityContent)">
              Confidentialité
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="openModal('Conditions d\'utilisation', termsContent)">
              Conditions d'utilisation
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="openModal('Cookies', cookiesContent)">
              Cookies
            </a>
          </li>
          <li>
            <a href="#" @click.prevent="openModal('Mentions légales', legalMentionsContent)">
              Mentions légales
            </a>
          </li>
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
          <i class="fas fa-envelope"></i> contact@calendo.com<br />
          <i class="fas fa-phone"></i> 514-572-0000
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p class="copyright">© {{ currentYear }} Calendo. Tous droits réservés.</p>
        <div class="language-selector">
          <select v-model="selectedLanguage" class="language-select">
            <option value="fr">Français</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Legal Modal -->
    <LegalModal :visible="modalVisible" :title="modalTitle" :content="modalContent" @close="closeModal" />
  </footer>
</template>

<script>
import LegalModal from '@/components/LegalModal.vue';

export default {
  name: 'AppFooter',
  components: {
    LegalModal,
  },
  data() {
    return {
      selectedLanguage: 'fr',
      currentYear: new Date().getFullYear(),
      modalVisible: false,
      modalTitle: '',
      modalContent: '',
      // Contenus dynamiques pour les modales
      confidentialityContent: `
        <p>Chez <strong>Calendo</strong>, nous accordons une grande importance à la protection de vos données personnelles.</p>
        <ol>
          <li><strong>Données collectées :</strong>
            <ul>
              <li>Informations personnelles comme votre nom, adresse e-mail et numéro de téléphone.</li>
              <li>Données liées à votre utilisation de notre application.</li>
            </ul>
          </li>
          <li><strong>Utilisation des données :</strong>
            <ul>
              <li>Fournir et améliorer nos services.</li>
              <li>Personnaliser votre expérience sur la plateforme.</li>
            </ul>
          </li>
          <li><strong>Sécurité :</strong>
            <p>Nous utilisons des mesures avancées pour protéger vos données.</p>
          </li>
        </ol>
        <p>Pour toute question, contactez-nous à : <a href="mailto:privacy@calendo.com">privacy@calendo.com</a>.</p>
      `,
      termsContent: `
        <p>Les présentes conditions définissent vos droits et obligations :</p>
        <ol>
          <li><strong>Accès et inscription :</strong>
            <ul>
              <li>Informations exactes requises pour l'inscription.</li>
              <li>Responsabilité de vos identifiants.</li>
            </ul>
          </li>
          <li><strong>Utilisation :</strong>
            <ul>
              <li>Pas d'activités illégales ou nuisibles.</li>
              <li>Respect des conditions d'utilisation.</li>
            </ul>
          </li>
        </ol>
        <p>Pour toute question, contactez-nous à : <a href="mailto:support@calendo.com">support@calendo.com</a>.</p>
      `,
      cookiesContent: `
        <p>Cette politique explique notre utilisation des cookies :</p>
        <ol>
          <li><strong>Types de cookies :</strong>
            <ul>
              <li>Cookies essentiels pour le fonctionnement.</li>
              <li>Cookies analytiques pour améliorer nos services.</li>
            </ul>
          </li>
          <li><strong>Gestion des cookies :</strong>
            <p>Vous pouvez désactiver les cookies dans votre navigateur.</p>
          </li>
        </ol>
        <p>Pour plus d'informations, contactez-nous à : <a href="mailto:cookies@calendo.com">cookies@calendo.com</a>.</p>
      `,
      legalMentionsContent: `
        <p><strong>Éditeur du site :</strong></p>
        <ul>
          <li>Calendo SARL</li>
          <li>123 Rue de l'Innovation, Montreal</li>
          <li><a href="mailto:contact@calendo.com">contact@calendo.com</a></li>
        </ul>
        <p><strong>Hébergeur :</strong></p>
        <ul>
          <li>CloudHosting Pro</li>
          <li>456 Avenue des Serveurs, Montreal</li>
        </ul>
      `,
    };
  },
  methods: {
    openModal(title, content) {
      this.modalTitle = title;
      this.modalContent = content;
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
  },
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
  margin-bottom: 10px;
  margin-left: -15px;
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
