// Service pour générer des sélections aléatoires simples et multiples

// Import des données
import packsData from '@/data/packs.json'
import categoriesData from '@/data/categories.json'

// ========================================
// FONCTIONS UTILITAIRES DE BASE
// ========================================

/**
 * Sélectionne un élément aléatoire dans un tableau
 * @param {Array} array - Le tableau d'où sélectionner
 * @returns {*} Un élément aléatoire du tableau
 */
export function getRandomItem(array) {
  // TODO: Implémenter avec Math.random() et Math.floor()
  // Astuce: Math.floor(Math.random() * array.length)
}

/**
 * Sélectionne plusieurs éléments aléatoires dans un tableau (sans doublons)
 * @param {Array} array - Le tableau source
 * @param {number} count - Nombre d'éléments à sélectionner
 * @returns {Array} Tableau des éléments sélectionnés
 */
export function getRandomItems(array, count) {
  // TODO:
  // 1. Vérifier que count <= array.length
  // 2. Créer une copie du tableau pour ne pas le modifier
  // 3. Utiliser une boucle pour sélectionner 'count' éléments
  // 4. Enlever chaque élément sélectionné pour éviter les doublons
  // Astuce: [...array] pour copier, array.splice() pour enlever
}

/**
 * Génère un nombre aléatoire entre min et max (inclus)
 * @param {number} min - Valeur minimum
 * @param {number} max - Valeur maximum
 * @returns {number} Nombre aléatoire
 */
export function getRandomNumber(min, max) {
  // TODO: Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Génère un budget aléatoire pour le challenge
 * @returns {number} Budget en Simflouz
 */
export function getRandomBudget() {
  // TODO: Utiliser getRandomNumber() avec 500 et 1000000
}

// ========================================
// FONCTIONS SPÉCIALISÉES POUR LE CHALLENGE
// ========================================

/**
 * Sélectionne des packs aléatoirement selon les critères
 * @param {Array} selectedPackIds - IDs des packs sélectionnés par l'utilisateur
 * @param {number} packCount - Nombre de packs à sélectionner (1, 2 ou 3)
 * @param {boolean} baseGameOnly - Si restriction "jeu de base uniquement" active
 * @returns {Array} Packs sélectionnés pour le challenge
 */
export function selectRandomPacks(selectedPackIds, packCount, baseGameOnly) {
  // TODO:
  // 1. Si baseGameOnly = true, retourner seulement le jeu de base
  // 2. Sinon, filtrer tous les packs disponibles avec les IDs sélectionnés
  // 3. Utiliser getRandomItems() pour sélectionner le bon nombre

  // Astuce pour filtrer tous les packs:
  // const allPacks = [
  //   ...packsData.BaseGame,
  //   ...packsData.expansionPacks,
  //   ...packsData.gamePacks,
  //   ...packsData.stuffPacks,
  //   ...packsData.kitPacks
  // ];
}

/**
 * Génère les options du challenge selon les choix utilisateur
 * @param {Object} options - Options sélectionnées par l'utilisateur
 * @returns {Object} Options générées pour le challenge
 */
export function generateChallengeOptions(options) {
  const result = {};

  // TODO: Pour chaque option, si elle est cochée, générer une valeur aléatoire

  // Couleur(s)
  if (options.couleur.enabled) {
    // TODO: Utiliser getRandomItems() avec categoriesData.colors
    // Le nombre dépend de options.couleur.count (1, 2 ou 3)
  }

  // Nombre de pièces
  if (options.pieces.enabled) {
    // TODO: getRandomNumber() entre categoriesData.roomCounts.min et max
  }

  // Nombre d'étages
  if (options.etages.enabled) {
    // TODO: getRandomNumber() entre categoriesData.Floors.min et max
    // ATTENTION: Si étages > 1, alors pièces minimum = étages
  }

  // Taille famille
  if (options.famille.enabled) {
    // TODO: getRandomNumber() entre categoriesData.Family.min et max
  }

  // Timer
  if (options.timer.enabled) {
    // TODO: getRandomItem() dans categoriesData.timer
  }

  return result;
}

/**
 * Filtre et applique les restrictions du challenge
 * @param {Array} restrictions - Restrictions sélectionnées
 * @returns {Array} Restrictions actives pour le challenge
 */
export function applyRestrictions(restrictions) {
  // TODO: Retourner seulement les restrictions qui sont cochées (true)
  // Astuce: Object.keys(restrictions).filter(key => restrictions[key])
}

// ========================================
// FONCTION PRINCIPALE
// ========================================

/**
 * Génère un challenge complet selon les options utilisateur
 * @param {Object} challengeData - Toutes les données du formulaire
 * @returns {Object} Challenge généé complet
 */
export function generateChallenge(challengeData) {
  // TODO: Utiliser toutes les fonctions ci-dessus pour créer le challenge final

  // Structure attendue du challengeData:
  // {
  //   selectedPacks: ['id1', 'id2', ...],
  //   packCount: 1|2|3,
  //   options: {
  //     couleur: { enabled: true/false, count: 1|2|3 },
  //     pieces: { enabled: true/false },
  //     etages: { enabled: true/false },
  //     famille: { enabled: true/false },
  //     timer: { enabled: true/false }
  //   },
  //   restrictions: {
  //     'jeu-de-base': true/false,
  //     'no-moveobjects': true/false,
  //     'no-debug': true/false,
  //     'pose-cest-pose': true/false,
  //     '1er-swatch': true/false,
  //     'no-tool': true/false,
  //     'camera-sims3': true/false
  //   }
  // }

  const challenge = {
    // Données de base toujours présentes
    lot: getRandomItem(categoriesData.lots),
    budget: getRandomBudget(),
    style: getRandomItem(categoriesData.styles),

    // TODO: Ajouter les autres éléments générés
    // packs: selectRandomPacks(...),
    // options: generateChallengeOptions(...),
    // restrictions: applyRestrictions(...)
  };

  return challenge;
}
