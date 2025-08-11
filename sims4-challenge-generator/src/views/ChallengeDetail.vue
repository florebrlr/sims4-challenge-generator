<template>
  <div class="challenge-detail">
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

<style scoped>
.challenge-detail {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1.5rem 2rem;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  color: #222;
  font-family: 'Inter', sans-serif;
}

.challenge-detail h2 {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #005fcc;
  border-bottom: 3px solid #005fcc;
  padding-bottom: 0.3rem;
}

.section {
  margin-bottom: 1.5rem;
}

.section h3 {
  font-weight: 600;
  font-size: 1.15rem;
  color: #004499;
  margin-bottom: 0.4rem;
  border-left: 4px solid #005fcc;
  padding-left: 0.6rem;
}

.section p, .section ul {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

.section ul {
  list-style-type: disc;
  margin-left: 1.5rem;
}

.section ul li {
  margin-bottom: 0.4rem;
}

.router-link-active, router-link {
  display: inline-block;
  margin-top: 1.5rem;
  color: #005fcc;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.router-link-active:hover, router-link:hover {
  color: #003d99;
  text-decoration: underline;
}

p {
  font-size: 1rem;
  color: #555;
}
</style>

