<template>
  <div class="wc-container">
    <div class="predefined-container">
      <!-- éléments prédéfinis = si on sélectionne une checkbox, alors les éléments se remplissent automatiquement dans éléments personnalisés-->
      <h3>éléments prédéfinis</h3>
      <div v-for="category in predifinedCategories" :key="category.id" class="checkbox-item">
        <input
          type="checkbox"
          :id="`category-${category.id}`"
          :checked="selectedCategory === category.id"
          @change="handleCategorySelection(category.id)"
        />
        <label :for="`category-${category.id}`">{{ category.name }}</label>
      </div>
    </div>

    <div class="custom-container">
      <h3>éléments personnalisés</h3>
      <ul>
        <li v-for="item in customItems" :key="item.id">
          {{ item.name }}
          <button @click="removeItem(item.id)" class="remove-btn">×</button>
        </li>
      </ul>
      <div class="input-container">
        <input
          type="text"
          v-model="newItemInput"
          placeholder="Ajouter un élément..."
          @keyup.enter="addCustomItem"
        />
        <button @click="addCustomItem" class="add-btn"><SquarePlus /></button>
      </div>
    </div>
    <button @click="launchWheel" class="launch-btn" >
      Lancer la roue
    </button>
  </div>
</template>

<script setup>
// Imports
import { SquarePlus } from 'lucide-vue-next';
import categoriesData from '@/data/categories.json'
import { onMounted, ref, computed } from 'vue'

// 📌 ÉTAPE 1: DÉCLARER TOUTES LES REFS D'ABORD
const colors = ref([])
const styles = ref([])
const packs = ref([])

// Éléments personnalisés
const customItems = ref([])
const newItemInput = ref('')

// Gestion des checkboxes
const selectedCategory = ref(null)

// Résultat de la roue
const wheelResult = ref('')
const isSpinning = ref(false)

// 📌 ÉTAPE 2: COMPUTED POUR LES CATÉGORIES PRÉDÉFINIES
// Utilise computed() pour que les catégories se mettent à jour quand les données sont chargées
const predifinedCategories = computed(() => [
  { id: 1, name: 'Couleurs', items: colors.value },
  { id: 2, name: 'Styles', items: styles.value },
  { id: 3, name: 'Mondes', items: mondes.value },
])

// 📌 ÉTAPE 3: FONCTIONS
const handleCategorySelection = (categoryId) => {
  if (selectedCategory.value === categoryId) {
    // Si déjà sélectionnée, on désélectionne
    selectedCategory.value = null
    customItems.value = []
  } else {
    // Sinon on sélectionne cette catégorie
    selectedCategory.value = categoryId
    // Remplir automatiquement les éléments personnalisés avec cette catégorie
    const category = predifinedCategories.value.find((cat) => cat.id === categoryId)
    if (category && category.items) {
      // Transformer les items en objets avec id si ce ne sont que des strings
      customItems.value = category.items.map((item, index) => ({
        id: Date.now() + index,
        name: typeof item === 'string' ? item : item.name,
      }))
    }
  }
}

const addCustomItem = () => {
  if (newItemInput.value.trim()) {
    customItems.value.push({
      id: Date.now(),
      name: newItemInput.value.trim(),
    })
    newItemInput.value = ''
  }
}

const removeItem = (itemId) => {
  customItems.value = customItems.value.filter((item) => item.id !== itemId)
}

// 📌 ÉTAPE 4: ÉMISSIONS VERS LE PARENT
const emit = defineEmits(['launch-wheel'])

const launchWheel = () => {
  if (customItems.value.length > 0) {
    emit('launch-wheel', customItems.value)
  } else {
    alert('Ajoute au moins un élément à la roue !')
  }
}

// 📌 ÉTAPE 5: CHARGEMENT DES DONNÉES
onMounted(() => {
  // Assure-toi que la structure de tes JSON correspond
  colors.value = categoriesData.colors || []
  styles.value = categoriesData.styles || []
  packs.value = packsData || []

  // Debug pour vérifier la structure des données
  console.log('Colors:', colors.value)
  console.log('Styles:', styles.value)
  console.log('Packs:', packs.value)
})
</script>

<style scoped>
.wc-container {
  padding: 1em;
  margin: 0 1em;
}

.predefined-container,
.custom-container {
  background: var(--White);
  padding: 0.5em;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1em;
}

.checkbox-item {
  display: flex;
  align-items: center;
}

.input-container input {
  padding: 0.5em;
  border-radius: 8px;
  border: 1px solid;
  margin-right: 2em;
  width: 85%;
}

.add-btn {
  font-size: 15px;
  border-radius: none;
}
.remove-btn {
  background: #ff4444;
  padding: 2px 6px;
  font-size: 12px;
}

.launch-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

input[type='checkbox'] {
  accent-color: var(--GreenPlumbob);
}
</style>
