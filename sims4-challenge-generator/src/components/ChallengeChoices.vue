<!-- Template
1. Créer le formulaire avec les checkboxes pour les packs
2. Ajouter la logique "j'ai tous les packs"
3. Grouper par type de pack (extension, jeu, objets, kits)
4. Ajouter les boutons radio pour le nombre de packs
5. Créer les options avec checkboxes
6. Ajouter les restrictions
7. Bouton "Générer mon challenge" -->
<template>

</template>

<!-- Script
1. Importer les données des packs depuis @/data/packs.json
2. Définir les données réactives :
selectedPacks (array)
allPacksSelected (boolean)
packCount (number, default: 1)
options (object avec couleur, pièces, étages, famille, timer)
restrictions (object)

3. Créer les méthodes :
selectAllPacks() - gère "j'ai tous les packs"
selectAllByType(type) - gère "Tout cocher" par catégorie
updatePackSelection() - met à jour les sélections
generateChallenge() - appelle le service et navigue vers /challenge
4. Émettre les événements vers le parent -->
<script setup>

</script>

<style scoped>

</style>
