<template>
  <nav class="navbar">
    <ul>
      <li><router-link class="link" to="{name: 'home'}">Acceuil</router-link></li>
      <li><router-link class="link" to="{name: 'RandomChallenge'}">Random Challenge</router-link></li>
      <li><router-link class="link" to="{name: 'WheelChallenge'}">Wheel Challenge</router-link></li>
      <Home />

    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
</style>
