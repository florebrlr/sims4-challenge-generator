<template>
  <div class="challenge-choices">
    <div class="packs-section">
      <h3>Sélectionne tes packs</h3>
      <!-- Case "Tous les packs" -->
      <label>
        <input type="checkbox" v-model="allPacksSelected" @change="toggleAllPacks" />
        Tous les packs
      </label>

      <!-- Sélection des packs -->
      <section class="packs-selection">
        <!-- Extensions -->
        <fieldset>
          <legend>
            Extensions
            <label class="select-all">
              <input
                type="checkbox"
                :checked="areAllInCategorySelected('expansionPacks')"
                @change="toggleCategory('expansionPacks', $event.target.checked)"
              />
              Tout cocher
            </label>
          </legend>
          <label v-for="pack in packsJson.expansionPacks" :key="pack.id">
            <input
              type="checkbox"
              v-model="selectedPacks"
              :value="pack.id"
              :disabled="allPacksSelected"
            />
            {{ pack.name }}
          </label>
        </fieldset>

        <!-- Packs de jeu -->
        <fieldset>
          <legend>
            Packs de jeu
            <label class="select-all">
              <input
                type="checkbox"
                :checked="areAllInCategorySelected('gamePacks')"
                @change="toggleCategory('gamePacks', $event.target.checked)"
              />
              Tout cocher
            </label>
          </legend>
          <label v-for="pack in packsJson.gamePacks" :key="pack.id">
            <input
              type="checkbox"
              v-model="selectedPacks"
              :value="pack.id"
              :disabled="allPacksSelected"
            />
            {{ pack.name }}
          </label>
        </fieldset>

        <!-- Kits d’objets -->
        <fieldset>
          <legend>
            Kits d’objets
            <label class="select-all">
              <input
                type="checkbox"
                :checked="areAllInCategorySelected('stuffPacks')"
                @change="toggleCategory('stuffPacks', $event.target.checked)"
              />
              Tout cocher
            </label>
          </legend>
          <label v-for="pack in packsJson.stuffPacks" :key="pack.id">
            <input
              type="checkbox"
              v-model="selectedPacks"
              :value="pack.id"
              :disabled="allPacksSelected"
            />
            {{ pack.name }}
          </label>
        </fieldset>

        <!-- Kits -->
        <fieldset>
          <legend>
            Kits
            <label class="select-all">
              <input
                type="checkbox"
                :checked="areAllInCategorySelected('kitPacks')"
                @change="toggleCategory('kitPacks', $event.target.checked)"
              />
              Tout cocher
            </label>
          </legend>
          <label v-for="pack in packsJson.kitPacks" :key="pack.id">
            <input
              type="checkbox"
              v-model="selectedPacks"
              :value="pack.id"
              :disabled="allPacksSelected"
            />
            {{ pack.name }}
          </label>
        </fieldset>
      </section>
    </div>

    <!-- Choix du nombre de packs à tirer -->
    <section class="pack-count-selection">
      <h3>Nombre de packs aléatoires à sélectionner</h3>
      <label v-for="count in [1, 2, 3]" :key="count">
        <input type="radio" v-model="randomPackCount" :value="count" />
        {{ count }}
      </label>
    </section>

    <!-- Options aléatoires -->
    <section class="random-options">
      <h3>Options (cocher pour inclure dans le challenge aléatoire)</h3>

      <div v-for="option in optionCategories" :key="option.key" class="option-checkbox">
        <label class="option-label">
          <input type="checkbox" v-model="options[option.key]" />
          {{ option.label }}
        </label>
      </div>
    </section>

    <!-- Restriction -->
    <section class="restriction-section">
      <h3>Restriction supplémentaire</h3>
      <label>
        <input type="checkbox" v-model="restrictionSelected" />
        Oui, je veux une restriction aléatoire
      </label>
    </section>

    <!-- Bouton générer -->
    <button class="generate-btn" @click="generateChallenge">Générer mon challenge</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import packsJson from '@/data/packs.json'
import categoriesJson from '@/data/categories.json'

const router = useRouter()

// Packs sélectionnés (IDs)
const selectedPacks = ref([])

// Tous les packs cochés par défaut ?
const allPacksSelected = ref(false)

// Nombre de packs à tirer aléatoirement (1 à 3)
const randomPackCount = ref(1)

// Options (couleurs, pièces, étages, famille, timer)
const options = reactive({
  colors: false,
  roomCounts: false,
  floors: false,
  family: false,
  timer: false,
})

// Case restriction aléatoire
const restrictionSelected = ref(false)

// Catégories d’options affichées
const optionCategories = [
  { key: 'colors', label: 'Couleur' },
  { key: 'roomCounts', label: 'Nombre de pièces' },
  { key: 'floors', label: 'Nombre d’étages' },
  { key: 'family', label: 'Taille de la famille' },
  { key: 'timer', label: 'Timer' },
]

// Cocher/décocher tous les packs
function toggleAllPacks() {
  if (allPacksSelected.value) {
    selectedPacks.value = [
      ...packsJson.expansionPacks.map((p) => p.id),
      ...packsJson.gamePacks.map((p) => p.id),
      ...packsJson.stuffPacks.map((p) => p.id),
      ...packsJson.kitPacks.map((p) => p.id),
    ]
  } else {
    selectedPacks.value = []
  }
}

// Vérifie si tous les packs d’une catégorie sont cochés
function areAllInCategorySelected(category) {
  const packs = packsJson[category].map((p) => p.id)
  return packs.every((id) => selectedPacks.value.includes(id))
}

// Cocher/décocher tous les packs d’une catégorie
function toggleCategory(category, checked) {
  const packs = packsJson[category].map((p) => p.id)
  if (checked) {
    // Ajouter les packs de la catégorie (sans dupliquer)
    selectedPacks.value = Array.from(new Set([...selectedPacks.value, ...packs]))
  } else {
    // Retirer les packs de la catégorie
    selectedPacks.value = selectedPacks.value.filter((id) => !packs.includes(id))
  }
}

// Génération du challenge avec valeurs aléatoires pour options
function generateChallenge() {
  const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)]

  // Tirage base
  const lot = pickRandom(categoriesJson.lots)
  const budgetKeys = Object.keys(categoriesJson.budget)
  const budgetKey = pickRandom(budgetKeys)
  const budget = categoriesJson.budget[budgetKey]
  const style = pickRandom(categoriesJson.styles)

  // Détermine les packs à utiliser
  let packsForChallenge = []
  if (allPacksSelected.value || selectedPacks.value.length === 0) {
    packsForChallenge = [
      ...packsJson.expansionPacks.map((p) => p.id),
      ...packsJson.gamePacks.map((p) => p.id),
      ...packsJson.stuffPacks.map((p) => p.id),
      ...packsJson.kitPacks.map((p) => p.id),
    ]
  } else {
    packsForChallenge = [...selectedPacks.value]
  }

  // Tirage aléatoire des packs selon le nombre choisi
  packsForChallenge = packsForChallenge
    .sort(() => 0.5 - Math.random())
    .slice(0, Math.min(randomPackCount.value, packsForChallenge.length))

  // Restriction
  let restrictionText = ''
  if (restrictionSelected.value) {
    restrictionText = pickRandom(categoriesJson.restriction)
    if (restrictionText.toLowerCase().includes('jeu de base')) {
      packsForChallenge = [packsJson.BaseGame[0].id]
    }
  }

  // Générer valeurs aléatoires pour options cochées
  const challengeOptions = {}

  if (options.colors) {
    const colorsList = ['Rouge', 'Bleu', 'Vert', 'Jaune', 'Rose', 'Orange', 'Violet', 'Turquoise']
    // 3 couleurs distinctes aléatoires
    const shuffledColors = colorsList.sort(() => 0.5 - Math.random())
    challengeOptions.colors = shuffledColors.slice(0, 3)
  }

  if (options.roomCounts) {
    const rooms = [3, 4, 5, 6, 7, 8]
    challengeOptions.roomCounts = pickRandom(rooms)
  }

  if (options.floors) {
    const floors = [1, 2, 3, 4]
    challengeOptions.floors = pickRandom(floors)
  }

  if (options.family) {
    const familySizes = [1, 2, 3, 4, 5, 6]
    challengeOptions.family = pickRandom(familySizes)
  }

  if (options.timer) {
    const timerValues = [5, 10, 15, 30, 45, 60]
    challengeOptions.timer = pickRandom(timerValues)
  }

  // Construire l’objet challenge
  const challenge = {
    lot,
    budget,
    style,
    packs: packsForChallenge,
    options: challengeOptions,
    restriction: restrictionText,
  }

  // Passer à la page détail avec query param
  router.push({
    name: 'ChallengeDetail',
    query: {
      challenge: JSON.stringify(challenge),
    },
  })
}
</script>

<style scoped>
.challenge-choices {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 1em;
}

h3 {
  margin: 0.5em;
}
.packs-section {
  display: flex;
  background-color: pink;
}
fieldset {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background-color: red;
}

.generate-btn {
  
}
</style>
