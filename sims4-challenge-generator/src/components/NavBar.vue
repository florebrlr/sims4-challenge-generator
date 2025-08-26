<template>
  <nav class="navbar">
    <ul>
      <li class="list">
        <router-link class="item" :to="{ name: 'home' }">
          <span class="icon"><House :size="30" /></span>
          <span class="text">Accueil</span>
        </router-link>
      </li>
      <li class="list">
        <router-link class="item" :to="{ name: 'randomChallenge' }">
          <span class="icon"><Dices :size="30" /></span>
          <span class="text">Random Challenge</span>
        </router-link>
      </li>
      <li class="list">
        <router-link class="item" :to="{ name: 'wheelChallenge' }">
          <span class="icon"><LoaderPinwheel :size="30" /></span>
          <span class="text">Wheel Challenge</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { House, Dices, LoaderPinwheel } from 'lucide-vue-next'
</script>

<style scoped>
:root {
  --Clear: #22327;
}
.navbar {
  display: flex;
  justify-content: center;
  list-style: none;
  position: relative;
  margin: 2em 0;
}
.navbar ul {
  display: flex;

  list-style: none;
  gap: 2rem;
  background: var(--White);
  padding: 1em 2em;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.navbar ul li {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.navbar li a {
  text-decoration: none;
  font-weight: bold;
  color: var(--BlueFont);
}

.navbar ul li a .icon {
  position: relative;
  display: block;
  text-align: center;
  transition: 0.5s;
  color: var(--Clear);
}

.text:hover {
  color: var(--GreenPlumbob);
  scale: 1.2;
}

.navbar ul li:hover a .icon {
  transform: translateY(-0.5em);
}
.navigation ul li a .text {
  position: absolute;
}

</style>
