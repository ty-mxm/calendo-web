<template>
  <header class="header">
    <div class="logo-container">
      <img src="@/assets/logo-calendo-t.png" alt="Logo Calendo" class="logo" />
    </div>
    <div class="title-container">
      <h1>CALENDO</h1>
      <p>Votre assistant d'organisation moderne et intuitif</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
.header {
  background: linear-gradient(135deg, #7f57ff, #4a3aff);
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative; /* Pour positionner les éléments internes */
  min-height: 200px; /* Ajustez la hauteur si nécessaire */
}

/* Logo en haut à gauche */
.logo-container {
  position: absolute;
  top: 5px;
  left: 5px;
}

.logo {
  max-height: 150px; /* Ajustez la hauteur du logo */
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.3));
}

/* Titre et tagline centrés */
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.title-container h1 {
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  margin: 10;
}

.title-container p {
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: #e0dfff;
  margin-top: 10px;
  letter-spacing: 1px;
}
</style>
