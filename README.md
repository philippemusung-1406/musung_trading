# MUSUNG TRADING — Site web

## 📁 Contenu du projet
- `index.html` — la structure de la page (n'y touchez pas)
- `style.css` — l'apparence du site (n'y touchez pas)
- `render.js` — construit la page à partir du contenu (n'y touchez pas)
- `config.js` — **le seul fichier que vous modifierez**, directement dans le code
- `images/` — dossier contenant les photos utilisées par le site

## ✏️ Comment modifier le contenu (textes, photos, couleurs)

Le panneau d'édition visuel a été retiré : vous modifiez maintenant `config.js` directement dans votre éditeur de code (VS Code).

1. Ouvrez `config.js` dans VS Code.
2. Modifiez les textes (nom, description, produits, etc.) entre guillemets.
3. Pour changer une photo :
   - Si vous voulez utiliser une image en ligne : collez son URL (ex. `"https://..."`).
   - Si vous voulez utiliser une photo à vous : placez le fichier image dans le dossier `images/` (à côté de `index.html`), puis référencez-le comme ceci : `"images/nom-du-fichier.jpg"`.
4. Pour ajouter un produit, copiez un bloc `{ nom: ..., description: ..., tag: ..., photo: ... }` dans le tableau `produits` et remplissez-le.
5. Enregistrez, puis ouvrez `index.html` dans votre navigateur (ou via Live Server) pour vérifier le résultat.
6. Une fois satisfait, renvoyez les fichiers modifiés (et les nouvelles images) sur GitHub (étapes plus bas) pour publier les changements pour tout le monde.

💡 Si vos photos sont très volumineuses, le site se chargera plus lentement. Pensez à les compresser avant (ex. sur [tinypng.com](https://tinypng.com)).

---

## 🌍 Mettre le site en ligne gratuitement avec GitHub Pages

### Étape 1 — Créer un compte GitHub
1. Allez sur [github.com](https://github.com) et créez un compte gratuit (si vous n'en avez pas déjà un).

### Étape 2 — Créer un dépôt (repository)
1. Cliquez sur le bouton **"+"** en haut à droite → **"New repository"**.
2. Donnez-lui un nom, par exemple : `musung-trading`.
3. Cochez **"Public"** (obligatoire pour la version gratuite de GitHub Pages).
4. Cliquez sur **"Create repository"**.

### Étape 3 — Envoyer vos fichiers sur GitHub
Deux méthodes possibles :

**Méthode simple (sans ligne de commande) :**
1. Sur la page de votre nouveau dépôt, cliquez sur **"Add file" → "Upload files"**.
2. Glissez-déposez les fichiers : `index.html`, `style.css`, `render.js`, `config.js`, ainsi que le dossier `images/` (glissez le dossier entier, GitHub recrée l'arborescence automatiquement).
3. Cliquez sur **"Commit changes"** en bas de page.

**Méthode avec Git (si vous êtes à l'aise) :**
```bash
git init
git add .
git commit -m "Premier envoi du site"
git branch -M main
git remote add origin https://github.com/VOTRE-NOM-UTILISATEUR/musung-trading.git
git push -u origin main
```

### Étape 4 — Activer GitHub Pages
1. Dans votre dépôt, allez dans **"Settings"** (Paramètres).
2. Dans le menu de gauche, cliquez sur **"Pages"**.
3. Sous "Build and deployment" → "Source", choisissez **"Deploy from a branch"**.
4. Sous "Branch", choisissez **`main`** et le dossier **`/ (root)`**, puis cliquez **"Save"**.
5. Attendez 1 à 2 minutes. GitHub affichera un lien du type :
   ```
   https://VOTRE-NOM-UTILISATEUR.github.io/musung-trading/
   ```
6. Votre site est en ligne et accessible à tout le monde sur internet ! 🎉

### Étape 5 — Publier une mise à jour du contenu
Chaque fois que vous voulez changer un texte ou une photo :
1. Modifiez `config.js` dans VS Code (et ajoutez vos nouvelles images dans `images/` si besoin).
2. Retournez sur votre dépôt GitHub → cliquez sur le fichier `config.js` existant → cliquez sur l'icône ✏️ (crayon) "Edit this file" pour coller le nouveau contenu, ou re-uploadez-le via "Add file → Upload files" (cochez "remplacer" si demandé). Pensez aussi à uploader les nouvelles images.
3. Cliquez **"Commit changes"**.
4. Attendez 1 minute : votre site en ligne est automatiquement mis à jour.

