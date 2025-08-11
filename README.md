# sims4-challenge-generator

## 🎮 Présentation

Le projet **sims4-challenge-generator** est une application web permettant aux joueurs de *The Sims 4* de générer des défis aléatoires pour leurs parties. Cette version 2025 est développée avec Vue.js 3.

## ⚙️ Fonctionnalités principales

- Génération aléatoire de défis uniques.
- Interface utilisateur réactive grâce à Vue.js 3.
- Personnalisation des catégories et règles des défis.

## 📂 Structure du projet

```
sims4-challenge-generator/
├── src/
│   ├── assets/         # Ressources statiques (images, polices, etc.)
│   ├── components/     # Composants Vue.js
│   ├── views/          # Vues principales de l'application
│   ├── App.vue         # Composant racine de l'application
│   └── main.js         # Point d'entrée de l'application
├── public/
│   └── index.html      # Fichier HTML principal
├── package.json        # Dépendances et scripts du projet
└── README.md           # Documentation du projet
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
-Refaire CSS  
-Re-roll le challenge  
-Pouvoir enregistrer les challenges en format text  