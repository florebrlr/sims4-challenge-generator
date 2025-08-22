<template>
  <div class="wc-container">
    <div>
      <h3>éléments prédéfinis</h3>
      <input type="checkbox" v-model="isChecked" /> <br>
      <input type="checkbox" v-model="isChecked" /> <br>
      <input type="checkbox" v-model="isChecked" /> <br>
      <input type="checkbox" v-model="isChecked" /> <br>
    </div>
    <div>
      <h3>éléments personnalisés</h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <button>Lancer la roue</button>
  </div>
</template>

<script>
export default {
  name: 'WheelChallengeChoices',
}
</script>

<style scoped>

</style>
