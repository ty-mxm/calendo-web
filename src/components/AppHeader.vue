<template>
  <header class="header">
    <div class="logo">
      <span>Calendo</span>
    </div>
    <div class="tagline">
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
  padding: 50px 20px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.logo {
  font-family: "Montserrat", sans-serif;
  font-size: 3rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.tagline p {
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: #e0dfff;
  margin-top: 10px;
  letter-spacing: 1px;
}
</style>
