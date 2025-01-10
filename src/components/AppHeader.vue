<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <nav class="nav-container">
      <div class="brand">
        <img src="@/assets/logo-calendo-t.png" alt="Logo Calendo" class="logo" />
        <div class="brand-text">
          <span class="brand-name">Calendo</span>
        </div>
      </div>

      <div class="nav-links" :class="{ 'nav-active': isMenuOpen }">
        <a href="#home" class="nav-link" @click="closeMenu">Accueil</a>
        <a href="#features" class="nav-link" @click="closeMenu">Fonctionnalités</a>
        <a href="#about" class="nav-link" @click="closeMenu">À propos</a>
        <button class="cta-button">Commencer</button>
      </div>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="hamburger" :class="{ 'active': isMenuOpen }"></span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    },
    closeMenu() {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }
};
</script>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  padding: 20px 5%;
  transition: all 0.3s ease;
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.header-scrolled .nav-link {
  color: var(--dark);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo {
  height: 40px;
  width: auto;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-link {
  color: var(--dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.cta-button {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(127, 87, 255, 0.2);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--dark);
  position: relative;
  transition: all 0.3s ease;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--dark);
  transition: all 0.3s ease;
}

.hamburger::before {
  top: -8px;
}

.hamburger::after {
  bottom: -8px;
}

.hamburger.active {
  background: transparent;
}

.hamburger.active::before {
  transform: rotate(45deg);
  top: 0;
}

.hamburger.active::after {
  transform: rotate(-45deg);
  bottom: 0;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    visibility: hidden;
  }

  .nav-links.nav-active {
    transform: translateX(0);
    visibility: visible;
  }

  .nav-link {
    font-size: 1.5rem;
  }

  .cta-button {
    margin-top: 20px;
  }
}
</style>