<template>
  <div class="wc-container">
    <div>
      <h3>éléments prédéfinis</h3>
      <input type="checkbox" v-model="isChecked" /> <br />
      <input type="checkbox" v-model="isChecked" /> <br />
      <input type="checkbox" v-model="isChecked" /> <br />
      <input type="checkbox" v-model="isChecked" /> <br />
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

//Créer un tableau d'éléments prédéfinis (dans une ref)
//Boucler avec v-for sur tt les éléments
//Afficher une checkbox par élément

//Créer un tableau dynamique d'élément personnalisés (dans une ref)
//Boucler avec v-for sur tt les éléments
//Afficher un li par élément
//Afficher un input relié a une variable (dans une ref)
//Afficher un bouton + a côté de l'input, et au clic, ajouter le nouvel élément dans le tableau
</script>

<style scoped>
input[type="checkbox"]{
  accent-color: var(--GreenPlumbob);
}
</style>
