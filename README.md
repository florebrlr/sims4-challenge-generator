# sims4-challenge-generator

![Vue.js](https://img.shields.io/badge/Vue.js-3.x-42b883?logo=vue.js&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-En%20développement-orange)
![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?logo=node.js&logoColor=white)
![Contributions](https://img.shields.io/badge/Contributions-Bienvenues-brightgreen)  

## 📑 Sommaire
1. [🎮 Présentation](#-présentation)
2. [⚙️ Fonctionnalités principales](#️-fonctionnalités-principales)
3. [📂 Structure du projet](#-structure-du-projet)
4. [🛠️ Installation et démarrage](#️-installation-et-démarrage)
   - [Prérequis](#prérequis)
   - [Installation](#installation)
5. [🚀 Déploiement](#-déploiement)
6. [🧪 Contribution](#-contribution)
7. [📄 Licence](#-licence)
8. [📞 Contact](#-contact)
9. [🆕 Update](#update)
10. [📝 To Do](#to-do)
## 🎮 Présentation

Le projet **sims4-challenge-generator** est une application web permettant aux joueurs de *The Sims 4* de générer des défis aléatoires pour leurs parties. Cette version 2025 est développée avec Vue.js 3.

## ⚙️ Fonctionnalités principales

- Génération aléatoire de défis uniques.
- Interface utilisateur réactive grâce à Vue.js 3.
- Personnalisation des catégories et règles des défis.

## 📂 Structure du projet

```
sims4-challenge-generator/
├── public/
│   └── index.html                 # Fichier HTML principal
├── src/
│   ├── assets/
│   │   └── style.css              # Styles globaux
│   ├── components/                # Composants Vue.js réutilisables
│   │   ├── ChallengeCard.vue
│   │   └── ChallengeChoices.vue
│   ├── data/                      # Données JSON
│   │   ├── categories.json        # Template des catégories
│   │   └── packs.json             # Liste des packs
│   ├── router/
│   │   └── router.js              # Configuration du routage
│   ├── views/                     # Pages principales
│   │   ├── ChallengeDetail.vue
│   │   └── Home.vue
│   ├── App.vue                    # Composant racine
│   └── main.js                    # Point d'entrée de l'application
├── package.json                   # Dépendances et scripts
├── vite.config.js                 # Configuration Vite
└── README.md                      # Documentation
```

## 🛠️ Installation et démarrage

### Prérequis

- Node.js (v14+)
- npm (v6+)

### Installation

```bash
git clone https://github.com/florebrlr/sims4-challenge-generator.git
cd sims4-challenge-generator
npm install
npm run serve
```

L'application sera accessible sur [http://localhost:8080](http://localhost:8080).

## 🚀 Déploiement

Pour déployer en production :

```bash
npm run build
```

Déployez ensuite le contenu du dossier `dist/` sur votre serveur.

## 🧪 Contribution

1. Créez une branche :

   ```bash
   git checkout -b ma-nouvelle-fonctionnalite
   ```

2. Développez et testez votre fonctionnalité.
3. Soumettez une pull request.

## 📄 Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).

## 📞 Contact

Pour toute question, contactez-moi via GitHub.


## UPDATE
12.08.25 :  
- Création du projet  
- 1ers tests si code fonctionne  

## TO DO  
- Créer un service "randomizerService" => factoriser code
- Refaire CSS  
- Re-roll le challenge  
- Pouvoir enregistrer les challenges en format text  
