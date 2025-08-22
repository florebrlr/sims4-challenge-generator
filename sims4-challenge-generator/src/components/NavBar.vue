<template>
  <nav class="navbar">
    <ul>
      <li>
        <router-link class="link" :to="{ name: 'home' }">Accueil</router-link>
      </li>
      <li>
        <router-link class="link" :to="{ name: 'randomChallenge' }">Random Challenge</router-link>
      </li>
      <li>
        <router-link class="link" :to="{ name: 'wheelChallenge' }">Wheel Challenge</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 2em 0;
}
.navbar ul {
  display: flex;
  list-style: none;
  gap: 2rem;
  background: var(--White);
  padding: 1em 2em;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.navbar li a {
  text-decoration: none;
  font-weight: 600;
  color: var(--BlueFont);
}
</style>
