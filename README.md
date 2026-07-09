MUSUNG TRADING — Site web
📁 Contenu du projet
index.html — la structure de la page (n'y
touchez pas)
style.css — l'apparence du site (n'y touchez
pas)
render.js — construit la page à partir du
contenu (n'y touchez pas) admin.js — le panneau "✏ Modifier le site" (n'y
touchez pas) config.js — le seul fichier que vous modifierez,
à la main ou via le panneau
✏ Comment modifier le contenu (textes, photos, couleurs)
1.	Ouvrez index.html dans votre navigateur
(double-clic sur le fichier, ou via le site en ligne).
2.	En bas à droite, cliquez sur "✏ Modifier le site".
3.	Mot de passe par défaut : musung2026 (changezle dans admin.js , ligne ADMIN_PASSWORD ).
4.	Modifiez les textes, ajoutez/supprimez des produits, changez des photos (upload direct depuis votre téléphone/ordinateur, ou collez une URL d'image).
5.	Cliquez sur "👁 Appliquer / Aperçu" pour voir le résultat immédiatement.
6.	Quand vous êtes satisfait, cliquez sur "⬇
Télécharger config.js". Un fichier config.js est téléchargé sur votre appareil.
7.	Remplacez l'ancien config.js dans votre dépôt GitHub par ce nouveau fichier (étapes plus bas).
⚠ Important : tant que vous n'avez pas renvoyé le nouveau config.js sur GitHub, seul vous voyez les changements (dans votre navigateur). Les visiteurs de votre site verront la version encore en ligne. C'est normal : un site hébergé gratuitement sur GitHub Pages n'a pas de "base de données" en direct, il affiche simplement les fichiers tels qu'ils sont sur GitHub.
💡 Si vous uploadez beaucoup de photos en haute résolution, config.js peut devenir volumineux (le site se chargera plus lentement). Pensez à compresser vos photos avant (ex. sur tinypng.com) ou à privilégier des URLs d'images déjà hébergées ailleurs.
 
🌍 Mettre le site en ligne gratuitement avec GitHub Pages
Étape 1 — Créer un compte GitHub
1. Allez sur github.com et créez un compte gratuit (si vous n'en avez pas déjà un).
Étape 2 — Créer un dépôt (repository)
1.	Cliquez sur le bouton "+" en haut à droite → "New repository".
2.	Donnez-lui un nom, par exemple : musungtrading .
3.	Cochez "Public" (obligatoire pour la version gratuite de GitHub Pages).
4.	Cliquez sur "Create repository".
Étape 3 — Envoyer vos fichiers sur GitHub Deux méthodes possibles :
Méthode simple (sans ligne de commande) :
1.	Sur la page de votre nouveau dépôt, cliquez sur "Add file" → "Upload files".
2.	Glissez-déposez les 5 fichiers : index.html , style.css , render.js , admin.js , config.js .
3.	Cliquez sur "Commit changes" en bas de page.
Méthode avec Git (si vous êtes à l'aise) :
 
Étape 4 — Activer GitHub Pages
1.	Dans votre dépôt, allez dans "Settings" (Paramètres).
2.	Dans le menu de gauche, cliquez sur "Pages".
3.	Sous "Build and deployment" → "Source", choisissez "Deploy from a branch".
4.	Sous "Branch", choisissez main et le dossier / (root) , puis cliquez "Save".
5.	Attendez 1 à 2 minutes. GitHub affichera un lien du type :
 
6.	Votre site est en ligne et accessible à tout le monde sur internet ! 🎉
Étape 5 — Publier une mise à jour du contenu
Chaque fois que vous voulez changer un texte ou une photo :
1.	Utilisez le panneau "✏ Modifier le site" → téléchargez le nouveau config.js .
2.	Retournez sur votre dépôt GitHub → cliquez sur le fichier config.js existant → cliquez sur l'icône ✏ (crayon) "Edit this file" ou supprimez-le et reuploadez le nouveau via "Add file → Upload files" (cochez "remplacer" si demandé).
3.	Cliquez "Commit changes".
4.	Attendez 1 minute : votre site en ligne est automatiquement mis à jour.
 
🔒 Bon à savoir sur la sécurité
Le mot de passe du panneau d'administration est visible dans le code source ( admin.js ) pour n'importe qui saurait où regarder. Ce n'est pas un vrai système de sécurité — il empêche juste un visiteur normal de modifier le site par erreur ou curiosité. Ne mettez jamais d'informations sensibles (mots de passe de comptes, données bancaires, etc.) dans ce site.
Si un jour vous avez besoin d'un vrai espace privé de gestion de contenu (plusieurs personnes qui gèrent le site, changements en temps réel pour tous sans republier), il faudra passer à un service avec une vraie base de données (ex. un CMS comme Netlify CMS, ou un petit backend). Mais pour un site vitrine avec un seul gestionnaire, la solution actuelle est largement suffisante et 100% gratuite.
