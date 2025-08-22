<template>
  <div class="random-challenge-result">
    <h2>Résultats du Challenge</h2>

    <div v-if="challenge">
      <section class="section">
        <h3>Lot :</h3>
        <p>{{ challenge.lot }}</p>
      </section>

      <section class="section">
        <h3>Budget :</h3>
        <p>{{ challenge.budget }}</p>
      </section>

      <section class="section">
        <h3>Style :</h3>
        <p>{{ challenge.style }}</p>
      </section>

      <section class="section">
        <h3>Packs sélectionnés ({{ challenge.packs.length }}) :</h3>
        <ul>
          <li v-for="packId in challenge.packs" :key="packId">
            {{ packNameById(packId) }}
          </li>
        </ul>
      </section>

      <section class="section" v-if="challenge.options && Object.keys(challenge.options).length">
        <h3>Options :</h3>
        <ul>
          <li v-if="challenge.options.colors">
            Couleurs : {{ challenge.options.colors.join(', ') }}
          </li>
          <li v-if="challenge.options.roomCounts !== undefined">
            Nombre de pièces : {{ challenge.options.roomCounts }}
          </li>
          <li v-if="challenge.options.floors !== undefined">
            Nombre d’étages : {{ challenge.options.floors }}
          </li>
          <li v-if="challenge.options.family !== undefined">
            Taille de la famille : {{ challenge.options.family }}
          </li>
          <li v-if="challenge.options.timer !== undefined">
            Timer : {{ challenge.options.timer }} minutes
          </li>
        </ul>
      </section>

      <section class="section" v-if="challenge.restriction">
        <h3>Restriction :</h3>
        <p>{{ challenge.restriction }}</p>
      </section>
    </div>

    <div v-else>
      <p>Aucun challenge trouvé.</p>
    </div>

    <router-link to="/">⬅ Retour à la sélection</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import packsJson from '@/data/packs.json'

const route = useRoute()

//Pour sauvegarder le résultat en format texte :
//Ajouter un bouton "copier dans le presse papier"
//Stocker dans une variable le contenu texte
//Au clic, appeler la fonction navigator.clipboard.writeText(newClip) avec le contenu qu'on a en stock
//Afficher à l'utilisateur une notif ou qqchose pour indiquer que c'est dans le presse-papier (par exemple, mettre à jour le message du bouton "Copier dans le pp" -> "Le texte est copié")


let challenge = null
try {
  challenge = JSON.parse(route.query.challenge || null)
} catch {
  challenge = null
}

// Fonction pour récupérer le nom du pack via son id
function packNameById(id) {
  // Cherche dans toutes les catégories de packs
  const allPacks = [
    ...packsJson.expansionPacks,
    ...packsJson.gamePacks,
    ...packsJson.stuffPacks,
    ...packsJson.kitPacks,
  ]
  const found = allPacks.find(p => p.id === id)
  return found ? found.name : id
}
</script>

<style scoped></style>
