/* ═══════════════════════════════════════════════════════════
   PANNEAU D'ADMINISTRATION
   - Protégé par un mot de passe simple (à changer ci-dessous).
   - ATTENTION : ce n'est PAS une vraie sécurité (le mot de passe
     est visible dans le code source). Ça sert juste à éviter
     qu'un visiteur clique dessus par erreur.
   - Les modifications s'appliquent en aperçu immédiatement.
   - Pour que TOUT LE MONDE voie les changements sur internet,
     il faut cliquer sur "Télécharger config.js" puis renvoyer
     ce fichier sur GitHub (voir le README).
   ═══════════════════════════════════════════════════════════ */

const ADMIN_PASSWORD = "musung2026"; // ✏️ changez ce mot de passe

let workingConfig = null; // copie de travail de CONFIG pendant l'édition

function initAdmin() {
    // Bouton flottant
    const btn = document.createElement('button');
    btn.id = 'admin-toggle-btn';
    btn.innerHTML = '✏️ Modifier le site';
    btn.onclick = openLogin;
    document.body.appendChild(btn);

    // Boîte de connexion
    const loginBox = document.createElement('div');
    loginBox.id = 'admin-login-box';
    loginBox.className = 'hidden';
    loginBox.innerHTML = `
    <div class="admin-login-card">
      <h3 style="font-family:'Playfair Display',serif;color:var(--vert);margin-bottom:.5rem;">Espace propriétaire</h3>
      <p style="font-size:.8rem;color:#666;">Entrez le mot de passe pour modifier le site.</p>
      <input type="password" id="admin-pass-input" placeholder="Mot de passe" />
      <button class="admin-btn admin-btn-apply" id="admin-pass-submit">Entrer</button>
      <button class="admin-btn admin-btn-reset" id="admin-pass-cancel">Annuler</button>
    </div>`;
    document.body.appendChild(loginBox);

    document.getElementById('admin-pass-submit').onclick = tryLogin;
    document.getElementById('admin-pass-cancel').onclick = () => loginBox.classList.add('hidden');
    document.getElementById('admin-pass-input').addEventListener('keydown', e => {
        if (e.key === 'Enter') tryLogin();
    });

    // Panneau d'édition (caché au départ)
    const panel = document.createElement('div');
    panel.id = 'admin-panel';
    document.body.appendChild(panel);
}

function openLogin() {
    document.getElementById('admin-login-box').classList.remove('hidden');
    document.getElementById('admin-pass-input').focus();
}

function tryLogin() {
    const val = document.getElementById('admin-pass-input').value;
    if (val === ADMIN_PASSWORD) {
        document.getElementById('admin-login-box').classList.add('hidden');
        workingConfig = JSON.parse(JSON.stringify(window.CONFIG)); // copie profonde
        buildAdminPanel();
        document.getElementById('admin-panel').classList.add('open');
    } else {
        alert('Mot de passe incorrect.');
    }
}

function fileToDataURL(file, callback) {
    const reader = new FileReader();
    reader.onload = e => callback(e.target.result);
    reader.readAsDataURL(file);
}

function buildAdminPanel() {
    const panel = document.getElementById('admin-panel');
    const c = workingConfig;

    panel.innerHTML = `
    <button class="admin-close" id="admin-close-btn">✕</button>
    <h3>✏️ Modifier le site</h3>

    <h4>Identité</h4>
    <label>Nom de la boutique</label><input type="text" id="f-nomBoutique" value="${escAttr(c.nomBoutique)}" />
    <label>Slogan court</label><input type="text" id="f-sloganCourt" value="${escAttr(c.sloganCourt)}" />
    <label>Description (bandeau d'accueil)</label><textarea id="f-descriptionHero">${c.descriptionHero}</textarea>

    <h4>Contact</h4>
    <label>Email</label><input type="text" id="f-email" value="${escAttr(c.email)}" />
    <label>WhatsApp / Téléphone</label><input type="text" id="f-whatsapp" value="${escAttr(c.whatsapp)}" />
    <label>Ville / Localisation</label><input type="text" id="f-ville" value="${escAttr(c.ville)}" />
    <label>Lien Facebook (optionnel)</label><input type="text" id="f-lienFacebook" value="${escAttr(c.lienFacebook)}" />
    <label>Lien WhatsApp (ex: https://wa.me/243...)</label><input type="text" id="f-lienWhatsApp" value="${escAttr(c.lienWhatsApp)}" />

    <h4>Photo d'accueil (bandeau)</h4>
    <div class="admin-photo-block">
      <img src="${c.photHero}" id="preview-photHero" />
      <div class="admin-file-row">
        <input type="file" accept="image/*" data-target="photHero" class="admin-upload" />
      </div>
      <label>ou coller une URL</label>
      <input type="text" id="f-photHero" value="${escAttr(c.photHero)}" />
    </div>

    <h4>Produits</h4>
    <div id="admin-produits-list"></div>
    <button class="admin-btn admin-btn-add" id="add-produit-btn">+ Ajouter un produit</button>

    <h4>Galerie photos</h4>
    <div id="admin-galerie-list"></div>

    <h4>À propos</h4>
    <label>Texte 1</label><textarea id="f-aproposTexte1">${c.aproposTexte1}</textarea>
    <label>Texte 2</label><textarea id="f-aproposTexte2">${c.aproposTexte2}</textarea>
    <div class="admin-photo-block">
      <img src="${c.aproposPhoto}" id="preview-aproposPhoto" />
      <div class="admin-file-row">
        <input type="file" accept="image/*" data-target="aproposPhoto" class="admin-upload" />
      </div>
      <label>ou coller une URL</label>
      <input type="text" id="f-aproposPhoto" value="${escAttr(c.aproposPhoto)}" />
    </div>

    <h4>Couleurs</h4>
    <label>Vert principal</label><input type="color" id="f-vert" value="${c.couleurs.vert}" />
    <label>Vert clair (survol)</label><input type="color" id="f-vertClair" value="${c.couleurs.vertClair}" />
    <label>Or (accents)</label><input type="color" id="f-or" value="${c.couleurs.or}" />
    <label>Or pâle</label><input type="color" id="f-orPale" value="${c.couleurs.orPale}" />
    <label>Crème (fond)</label><input type="color" id="f-creme" value="${c.couleurs.creme}" />
    <label>Texte</label><input type="color" id="f-texte" value="${c.couleurs.texte}" />

    <button class="admin-btn admin-btn-apply" id="apply-btn">👁️ Appliquer / Aperçu</button>
    <button class="admin-btn admin-btn-download" id="download-btn">⬇️ Télécharger config.js</button>
    <button class="admin-btn admin-btn-reset" id="admin-logout-btn">Fermer sans télécharger</button>

    <p class="admin-note">
      Astuce : après avoir cliqué sur "Appliquer", vérifiez l'aperçu en bas de page.
      Quand tout vous convient, cliquez "Télécharger config.js" puis remplacez ce
      fichier dans votre dépôt GitHub pour publier les changements pour tout le monde.
    </p>
  `;

    renderProduitsAdmin();
    renderGalerieAdmin();

    document.getElementById('admin-close-btn').onclick = closeAdminPanel;
    document.getElementById('admin-logout-btn').onclick = closeAdminPanel;
    document.getElementById('add-produit-btn').onclick = () => {
        workingConfig.produits.push({ nom: 'Nouveau produit', description: 'Description...', tag: 'Catégorie', photo: 'https://via.placeholder.com/400x300?text=Photo' });
        renderProduitsAdmin();
    };
    document.getElementById('apply-btn').onclick = applyChanges;
    document.getElementById('download-btn').onclick = () => { applyChanges();
        downloadConfig(); };

    // upload photHero / aproposPhoto
    panel.querySelectorAll('.admin-upload').forEach(input => {
        input.addEventListener('change', e => {
            const target = e.target.getAttribute('data-target');
            const file = e.target.files[0];
            if (!file) return;
            fileToDataURL(file, dataUrl => {
                workingConfig[target] = dataUrl;
                document.getElementById('preview-' + target).src = dataUrl;
                document.getElementById('f-' + target).value = '(image téléversée)';
            });
        });
    });
}

function renderProduitsAdmin() {
    const list = document.getElementById('admin-produits-list');
    list.innerHTML = workingConfig.produits.map((p, i) => `
    <div class="admin-product-block" data-index="${i}">
      <button class="admin-remove-btn" data-remove-produit="${i}">✕</button>
      <img src="${p.photo}" id="preview-produit-${i}" />
      <div class="admin-file-row"><input type="file" accept="image/*" class="admin-upload-produit" data-index="${i}" /></div>
      <label>Nom</label><input type="text" class="p-nom" data-index="${i}" value="${escAttr(p.nom)}" />
      <label>Description</label><textarea class="p-desc" data-index="${i}">${p.description}</textarea>
      <label>Tag / catégorie</label><input type="text" class="p-tag" data-index="${i}" value="${escAttr(p.tag)}" />
      <label>URL photo (ou utilisez l'upload ci-dessus)</label><input type="text" class="p-photo" data-index="${i}" value="${escAttr(p.photo)}" />
    </div>
  `).join('');

    list.querySelectorAll('[data-remove-produit]').forEach(btn => {
        btn.onclick = () => {
            workingConfig.produits.splice(parseInt(btn.getAttribute('data-remove-produit')), 1);
            renderProduitsAdmin();
        };
    });
    list.querySelectorAll('.admin-upload-produit').forEach(input => {
        input.addEventListener('change', e => {
            const idx = parseInt(e.target.getAttribute('data-index'));
            const file = e.target.files[0];
            if (!file) return;
            fileToDataURL(file, dataUrl => {
                workingConfig.produits[idx].photo = dataUrl;
                document.getElementById('preview-produit-' + idx).src = dataUrl;
                list.querySelector(`.p-photo[data-index="${idx}"]`).value = '(image téléversée)';
            });
        });
    });
}

function renderGalerieAdmin() {
    const list = document.getElementById('admin-galerie-list');
    list.innerHTML = workingConfig.galerie.map((url, i) => `
    <div class="admin-photo-block" data-index="${i}">
      <img src="${url}" id="preview-galerie-${i}" />
      <div class="admin-file-row"><input type="file" accept="image/*" class="admin-upload-galerie" data-index="${i}" /></div>
      <label>ou coller une URL</label>
      <input type="text" class="g-url" data-index="${i}" value="${escAttr(url)}" />
    </div>
  `).join('');

    list.querySelectorAll('.admin-upload-galerie').forEach(input => {
        input.addEventListener('change', e => {
            const idx = parseInt(e.target.getAttribute('data-index'));
            const file = e.target.files[0];
            if (!file) return;
            fileToDataURL(file, dataUrl => {
                workingConfig.galerie[idx] = dataUrl;
                document.getElementById('preview-galerie-' + idx).src = dataUrl;
                list.querySelector(`.g-url[data-index="${idx}"]`).value = '(image téléversée)';
            });
        });
    });
}

function applyChanges() {
    const c = workingConfig;
    c.nomBoutique = document.getElementById('f-nomBoutique').value;
    c.sloganCourt = document.getElementById('f-sloganCourt').value;
    c.descriptionHero = document.getElementById('f-descriptionHero').value;
    c.email = document.getElementById('f-email').value;
    c.whatsapp = document.getElementById('f-whatsapp').value;
    c.ville = document.getElementById('f-ville').value;
    c.lienFacebook = document.getElementById('f-lienFacebook').value;
    c.lienWhatsApp = document.getElementById('f-lienWhatsApp').value;

    const heroUrlField = document.getElementById('f-photHero').value;
    if (heroUrlField && heroUrlField !== '(image téléversée)') c.photHero = heroUrlField;

    const aproposUrlField = document.getElementById('f-aproposPhoto').value;
    if (aproposUrlField && aproposUrlField !== '(image téléversée)') c.aproposPhoto = aproposUrlField;

    c.aproposTexte1 = document.getElementById('f-aproposTexte1').value;
    c.aproposTexte2 = document.getElementById('f-aproposTexte2').value;

    c.couleurs.vert = document.getElementById('f-vert').value;
    c.couleurs.vertClair = document.getElementById('f-vertClair').value;
    c.couleurs.or = document.getElementById('f-or').value;
    c.couleurs.orPale = document.getElementById('f-orPale').value;
    c.couleurs.creme = document.getElementById('f-creme').value;
    c.couleurs.texte = document.getElementById('f-texte').value;

    document.querySelectorAll('#admin-produits-list .admin-product-block').forEach(block => {
        const i = parseInt(block.getAttribute('data-index'));
        c.produits[i].nom = block.querySelector('.p-nom').value;
        c.produits[i].description = block.querySelector('.p-desc').value;
        c.produits[i].tag = block.querySelector('.p-tag').value;
        const urlVal = block.querySelector('.p-photo').value;
        if (urlVal && urlVal !== '(image téléversée)') c.produits[i].photo = urlVal;
    });

    document.querySelectorAll('#admin-galerie-list .admin-photo-block').forEach(block => {
        const i = parseInt(block.getAttribute('data-index'));
        const urlVal = block.querySelector('.g-url').value;
        if (urlVal && urlVal !== '(image téléversée)') c.galerie[i] = urlVal;
    });

    window.CONFIG = c;
    renderSite(window.CONFIG);
    alert('✅ Aperçu mis à jour ! Faites défiler pour voir les changements. Pensez à télécharger config.js pour publier.');
}

function downloadConfig() {
    const jsContent = `/* Fichier généré par le panneau d'administration.\n Remplacez l'ancien config.js de votre dépôt GitHub par celui-ci. */\n\nwindow.CONFIG = ${JSON.stringify(window.CONFIG, null, 2)};\n`;
    const blob = new Blob([jsContent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'config.js';
    a.click();
    URL.revokeObjectURL(url);
}

function closeAdminPanel() {
    document.getElementById('admin-panel').classList.remove('open');
}

function escAttr(str) {
    return (str || '').replace(/"/g, '&quot;');
}

document.addEventListener('DOMContentLoaded', initAdmin);