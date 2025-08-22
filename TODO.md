 ## TO DO  
[x] Création du projet    
[x] définition des besoins  
[x] Création des fichiers .json  packs et categories
[x] 1ers tests si code fonctionne (aide IA)   
[x] refaire les étapes pour faire code perso (sans IA)  
[x] Home  
[x] Router  
[ ] coder ! + tests  
[x] Refaire CSS  à ma sauce  (faire des variables pour les couleurs)  
[ ] Faire responsive  
[ ] Ajouter le btn "re-roll le challenge"  
[ ] Pouvoir enregistrer les challenges en format text. png?  


## CAHIER DES CHARGES
### Objectif
- créer une application pour générer des challenges aléatoires (random challenge) pour le jeu Les Sims 4. (= version 2025)  

### Choix des technologies
- **VUE3** : technologie qui est réactive (pour mettre à jour les données rapidement => checkoxs)  
- **NodeJS** : pas très lourd et efficace, fonctionne bien pour les petits projets comme ça.  
- **CSS ou SCSS** : ?  
- **JS** : parce que j'ai envie !  

## STRUCTURE DU PROJET 
### VIEWS
- **Home.vue** : page d'accueil  
- **RandomChallenge.vue** : générer random challenge 
- **RandomChallengeResult.vue** : affichage du random challenge 
- **WheelChallenge.vue** : générer wheel challenge  

### COMPONENTS
- **RandomChallengeChoices.vue** : définit les packs, options et restriction pour générer le challenge via le btn
- **NavBar** : menu  
- **Footer** : pied de page   


### DATA
- **packs.json** : liste des packs  
- **categories.json** : template pour les categories  

### SERVICES
- **randomizerService.js** : service pour faire les random  

### ROUTER
- " **/** " : home page (=menu) + affichage des choix pour faire le challenge
- " **/challenge** " : affichage des résultats du random

## RandomChallengeChoices.vue DETAILS  
- affichage comme suit :    
  
**Sélectionner vos packs :**     
[ ] j'ai tous les packs = si cocher alors tous les packs sont cochés automatiquement. Si je décoche un pack, alors la case doit se décocher.  
  
Packs d'extension (=nom du type de pack) [ ] Tout cocher (=si cochée alors tous les packs de la catégorie sont cochés)   
[ ] nom du pack xxx (à récupérer via le fichier packs.json) => faire boucle  
  
Packs de jeu [ ] Tout cocher    
[ ] nom du pack  xxx (à récupérer via le fichier packs.json) => faire boucle  
  
Packs d'objets [ ] Tout cocher  
[ ] nom du pack  xxx (à récupérer via le fichier packs.json) => faire boucle  
  
Kits [ ] Tout cocher  
[ ] nom du pack  xxx (à récupérer via le fichier packs.json) => faire boucle  
  
(= boucle pour tout le fichier packs.json finalement)  
  
**Nombre de pack :** (.) 1  ( )2 ( )3  (= radios choix possible 1,2 ou 3. si 1 alors random de 1 pack, 2 random sur 2 packs et 3 random sur 3 packs)  
    
**Options pour ce challenge**  
[ ] Couleur : (.) 1  ( )2 ( )3 (même chose que pour le nb pack si cochée)   
[ ] Nombre de pièces  (si cochée random entre 1 et 20)  
[ ] Nombre d'étages (si cochée random entre 1 et 4, si 2 sort alors le nombre de pièces sera minimum de 2 = au minimum nombre de pièces = le nombre d'étage)  
[ ] Taille de la famille (si cochée random entre 1 et 8)  
[ ] Timer (si cochée random entre 5 et 60 = en minutes)  
  
**Restriction supplémentaire**  
[ ] Jeu de base uniquement ! (si ce résultat sort alors le résultat pour le(s) packs choisi(s) sera Jeu de base automatiquement)  
[ ] Pas de bb.moveobjects on !  
[ ] Pas de débogage !  
[ ] Posé c'est posé ! (une fois l'objet placé, pas le droit de le déplacé)  
[ ] 1er swatch uniquement ! (pas le droit de changer la couleur de l'objet)  
[ ] Pas de mod T.O.O.L !  
[ ] Caméra Sims 3 ! (ou Sims 4 selon la caméra que tu utilises habituellement)

**BTN "Générer mon challenge"** (permet de générer le challenge et envoie sur ChallengeResult)

## RandomChallengeResult.vue DETAILS  
- affichage comme suit :  
**Résultats du challenge** (h2)  
- Lot : (random fait avec categories.json)
- Budget : XXX Simflouz(random entre 500 et 1million )
- Style : (random fait avec categories.json)
