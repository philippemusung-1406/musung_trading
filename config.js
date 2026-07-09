/* Construit toute la page à partir de l'objet CONFIG.
   Appelée au chargement, puis re-appelée par admin.js à chaque
   modification pour rafraîchir l'aperçu instantanément. */
function renderSite(CONFIG) {

  document.title = CONFIG.nomBoutique;

  // Couleurs -> variables CSS
  const root = document.documentElement.style;
  root.setProperty('--vert', CONFIG.couleurs.vert);
  root.setProperty('--vert-clair', CONFIG.couleurs.vertClair);
  root.setProperty('--or', CONFIG.couleurs.or);
  root.setProperty('--or-pale', CONFIG.couleurs.orPale);
  root.setProperty('--creme', CONFIG.couleurs.creme);
  root.setProperty('--texte', CONFIG.couleurs.texte);

  const produitOptions = CONFIG.produits.map(p => `<option>${p.nom}</option>`).join('\n');

  const produitsHTML = CONFIG.produits.map(p => `
    <div class="product-card">
      <div class="product-thumb">
        <img src="${p.photo}" alt="${p.nom}" loading="lazy" />
      </div>
      <div class="product-info">
        <h3>${p.nom}</h3>
        <p>${p.description}</p>
        <span class="product-tag">${p.tag}</span>
      </div>
    </div>
  `).join('');

  const galerieHTML = CONFIG.galerie.map((url, i) => `
    <div class="galerie-item${i === 0 ? ' grand' : ''}">
      <img src="${url}" alt="Photo boutique ${i + 1}" loading="lazy" />
    </div>
  `).join('');

  const whatsappLien = CONFIG.lienWhatsApp
    ? `<a href="${CONFIG.lienWhatsApp}" target="_blank">${CONFIG.whatsapp}</a>`
    : `<span>${CONFIG.whatsapp}</span>`;

  const sociauxHTML = (CONFIG.lienFacebook || CONFIG.lienWhatsApp) ? `
    <div class="footer-socials">
      ${CONFIG.lienFacebook ? `<a href="${CONFIG.lienFacebook}" target="_blank">📘 Facebook</a>` : ''}
      ${CONFIG.lienWhatsApp ? `<a href="${CONFIG.lienWhatsApp}" target="_blank">📱 WhatsApp</a>` : ''}
      <a href="mailto:${CONFIG.email}">📧 Email</a>
    </div>` : '';

  const site = document.getElementById('site');
  site.innerHTML = `
<nav>
  <div class="nav-logo">🌿 ${CONFIG.nomBoutique}</div>
  <ul class="nav-links">
    <li><a href="#produits">Produits</a></li>
    <li><a href="#galerie">Galerie</a></li>
    <li><a href="#apropos">À propos</a></li>
    <li><a href="#contact">Commande</a></li>
  </ul>
</nav>

<div class="hero">
  <div class="hero-bg" style="background-image:url('${CONFIG.photHero}')"></div>
  <div class="hero-content">
    <span class="hero-badge">✦ ${CONFIG.sloganCourt}</span>
    <h1>${CONFIG.nomBoutique} — <span>produits naturels</span> du terroir</h1>
    <p>${CONFIG.descriptionHero}</p>
    <a href="#contact" class="btn-primary">Passer une commande</a>
  </div>
</div>

<section id="produits">
  <div class="section-label">Notre Sélection</div>
  <h2>Nos Produits</h2>
  <p class="intro-text">Chaque produit est soigneusement sélectionné pour vous offrir le meilleur de la nature et du terroir local.</p>
  <div class="products-grid">${produitsHTML}</div>
</section>

<section id="galerie">
  <div class="section-label">Nos Photos</div>
  <h2>La Vie de Notre Boutique</h2>
  <div class="galerie-grid">${galerieHTML}</div>
</section>

<section id="apropos">
  <div class="apropos-photo">
    <img src="${CONFIG.aproposPhoto}" alt="Notre équipe" />
  </div>
  <div class="apropos-text">
    <div class="section-label">Notre Histoire</div>
    <h2>Un commerce ancré dans la nature</h2>
    <p>${CONFIG.aproposTexte1}</p>
    <p>${CONFIG.aproposTexte2}</p>
    <div class="valeurs">
      <div class="valeur-item"><strong>🌱 Naturel</strong><span>Sans additifs ni produits chimiques</span></div>
      <div class="valeur-item"><strong>🤝 Confiance</strong><span>Transparence sur l'origine</span></div>
      <div class="valeur-item"><strong>💚 Qualité</strong><span>Sélection rigoureuse</span></div>
      <div class="valeur-item"><strong>🚀 Livraison</strong><span>Rapide et soignée</span></div>
    </div>
  </div>
</section>

<section id="contact">
  <div class="section-label">Commandes & Questions</div>
  <h2>Contactez-Nous</h2>
  <div class="contact-grid">
    <div class="contact-info">
      <p>Remplissez le formulaire pour passer une commande ou poser une question. Nous vous répondrons dans les 24 heures.</p>
      <div class="contact-item">
        <div class="contact-icon">📧</div>
        <div><strong>Email</strong><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">📱</div>
        <div><strong>WhatsApp / Téléphone</strong>${whatsappLien}</div>
      </div>
      <div class="contact-item">
        <div class="contact-icon">📍</div>
        <div><strong>Localisation</strong><span>${CONFIG.ville}</span></div>
      </div>
    </div>

    <div class="form-card">
      <h3>Formulaire de Commande</h3>
      <div class="form-row">
        <div class="form-group"><label for="prenom">Prénom *</label><input type="text" id="prenom" placeholder="Votre prénom" /></div>
        <div class="form-group"><label for="nom">Nom *</label><input type="text" id="nom" placeholder="Votre nom" /></div>
      </div>
      <div class="form-group"><label for="email">Adresse email *</label><input type="email" id="email" placeholder="votremail@exemple.com" /></div>
      <div class="form-group"><label for="telephone">Téléphone / WhatsApp</label><input type="tel" id="telephone" placeholder="+XXX XX XX XX XX" /></div>
      <div class="form-group">
        <label for="produit">Produit souhaité *</label>
        <select id="produit"><option value="">-- Choisir un produit --</option>${produitOptions}<option>Plusieurs produits</option></select>
      </div>
      <div class="form-group"><label for="message">Détails de la commande *</label><textarea id="message" placeholder="Décrivez votre commande : quantité, taille (pour vêtements), questions..."></textarea></div>
      <button class="btn-submit" onclick="envoyerCommande()">📩 Envoyer ma Commande</button>
      <div class="success-msg" id="successMsg">✅ Merci ! Votre commande a bien été reçue. Nous vous contactons très bientôt.</div>
    </div>
  </div>
</section>

<footer>
  <p><strong>🌿 ${CONFIG.nomBoutique}</strong> &nbsp;|&nbsp; ${CONFIG.sloganCourt}</p>
  <p style="margin-top:.5rem;">📧 <a href="mailto:${CONFIG.email}">${CONFIG.email}</a> &nbsp;|&nbsp; 📱 ${CONFIG.whatsapp}</p>
  ${sociauxHTML}
  <p style="margin-top:1.5rem; font-size:.75rem; opacity:.45;">© 2026 ${CONFIG.nomBoutique} — Tous droits réservés</p>
</footer>
`;
}

function envoyerCommande() {
  const prenom = document.getElementById('prenom').value.trim();
  const nom = document.getElementById('nom').value.trim();
  const email = document.getElementById('email').value.trim();
  const produit = document.getElementById('produit').value;
  const message = document.getElementById('message').value.trim();

  if (!prenom || !nom || !email || !produit || !message) {
    alert("⚠️ Veuillez remplir tous les champs obligatoires (*) avant d'envoyer.");
    return;
  }

  const sujet = encodeURIComponent(`Commande – ${produit} – ${prenom} ${nom}`);
  const corps = encodeURIComponent(
    `Bonjour,\n\nNom : ${prenom} ${nom}\nEmail : ${email}\nProduit : ${produit}\n\nMessage :\n${message}\n\nCordialement,\n${prenom}`
  );

  window.location.href = `mailto:${window.CONFIG.email}?subject=${sujet}&body=${corps}`;

  document.getElementById('successMsg').style.display = 'block';
  ['prenom', 'nom', 'email', 'telephone', 'produit', 'message'].forEach(id => {
    const el = document.getElementById(id);
    if (el.tagName === 'SELECT') el.selectedIndex = 0; else el.value = '';
  });
  setTimeout(() => { document.getElementById('successMsg').style.display = 'none'; }, 8000);
}

document.addEventListener('DOMContentLoaded', () => renderSite(window.CONFIG));
