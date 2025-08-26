<template>
  <main>
    <h1 class="simsFont">Sul Sul ! <br> Bienvenue dans le générateur de challenges Sims 4</h1>
    <div class="cards-container">
      <!--DIV random challenge-->
      <div class="card">
        <h2>Random Challenge</h2>
        <p>Choisis des packs et des options, l'application génère un challenge aléatoire pour ta construction. <br>
        Chaque partie est unique et surprenante. </p>
        <img src="" alt="" />
<router-link to="/randomchallenge">
  <button>Créer mon Random Challenge</button>
</router-link>
      </div>
      <!--DIV wheel challenge-->
      <div class="card">
        <h2>Wheel Challenge</h2>
        <p>Crée une liste d’éléments (couleurs, objets, style de construction…),
          <br>fais tourner la roue et découvre sur quel élément elle s’arrête pour décider ton défi.</p>
        <img src="" alt="" />
<router-link to="/wheelchallenge">
  <button>Créer mon Wheel Challenge</button>
</router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
h1 {
  text-align: center;
}
.cards-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--White);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 250px;
}

.card img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 1rem 0;
}
</style>
