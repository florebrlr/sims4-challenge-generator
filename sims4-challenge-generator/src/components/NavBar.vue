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

<style scoped></style>
