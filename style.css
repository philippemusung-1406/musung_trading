*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --vert: #2D5016;
  --vert-clair: #4A7C2A;
  --or: #C8922A;
  --or-pale: #F5E6C8;
  --creme: #FAF7F0;
  --texte: #1C1C1C;
  --terre: #8B4513;
  --gris: #6B6B6B;
  --blanc: #FFFFFF;
}
html { scroll-behavior: smooth; }
body { font-family: 'Inter', sans-serif; background: var(--creme); color: var(--texte); line-height: 1.6; }

/* NAV */
nav { position: sticky; top: 0; z-index: 100; background: var(--vert); display: flex; justify-content: space-between; align-items: center; padding: 0 6vw; height: 64px; }
.nav-logo { font-family: 'Playfair Display', serif; font-size: 1.25rem; color: var(--or-pale); letter-spacing: 1px; }
.nav-links { display: flex; gap: 2rem; list-style: none; }
.nav-links a { color: var(--or-pale); text-decoration: none; font-size: .9rem; font-weight: 500; opacity: .85; transition: opacity .2s; }
.nav-links a:hover { opacity: 1; }

/* HERO */
.hero { position: relative; min-height: 560px; display: flex; align-items: center; overflow: hidden; }
.hero-bg { position: absolute; inset: 0; background-size: cover; background-position: center; filter: brightness(.42); }
.hero-content { position: relative; z-index: 1; padding: 80px 6vw; max-width: 660px; }
.hero-badge { display: inline-block; background: var(--or); color: #fff; font-size: .75rem; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; padding: 5px 14px; border-radius: 2px; margin-bottom: 1.2rem; }
.hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2.2rem, 5vw, 3.8rem); color: #fff; line-height: 1.15; margin-bottom: 1.2rem; }
.hero h1 span { color: var(--or-pale); }
.hero p { color: rgba(255,255,255,.85); font-size: 1.05rem; margin-bottom: 2rem; }
.btn-primary { display: inline-block; background: var(--or); color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 3px; font-weight: 600; font-size: .95rem; transition: background .2s, transform .15s; cursor:pointer; border:none; }
.btn-primary:hover { background: #a87520; transform: translateY(-2px); }

/* SECTIONS */
section { padding: 80px 6vw; }
.section-label { font-size: .75rem; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--or); margin-bottom: .6rem; }
h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.8rem, 3.5vw, 2.8rem); color: var(--vert); line-height: 1.2; margin-bottom: 1rem; }
.intro-text { color: var(--gris); max-width: 580px; margin-bottom: 3rem; }

/* PRODUITS */
#produits { background: var(--blanc); }
.products-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.8rem; }
.product-card { background: var(--creme); border-radius: 10px; overflow: hidden; border: 1px solid #e8e0d0; transition: transform .2s, box-shadow .2s; }
.product-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,.12); }
.product-thumb { height: 200px; overflow: hidden; }
.product-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s ease; }
.product-card:hover .product-thumb img { transform: scale(1.07); }
.product-info { padding: 1.4rem; }
.product-info h3 { font-size: 1.05rem; font-weight: 600; color: var(--vert); margin-bottom: .4rem; }
.product-info p { font-size: .85rem; color: var(--gris); line-height: 1.5; }
.product-tag { display: inline-block; margin-top: .8rem; background: var(--or-pale); color: var(--terre); font-size: .72rem; font-weight: 600; letter-spacing: .8px; padding: 3px 10px; border-radius: 20px; }

/* GALERIE */
#galerie { background: var(--vert); padding: 70px 6vw; }
#galerie .section-label { color: rgba(255,220,150,.7); }
#galerie h2 { color: var(--or-pale); margin-bottom: 2.5rem; }
.galerie-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 240px 240px; gap: 12px; }
.galerie-item { overflow: hidden; border-radius: 8px; }
.galerie-item.grand { grid-row: 1 / 3; }
.galerie-item img { width: 100%; height: 100%; object-fit: cover; transition: transform .4s; display:block; }
.galerie-item:hover img { transform: scale(1.05); }

/* À PROPOS */
#apropos { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; background: var(--creme); }
.apropos-photo { border-radius: 12px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,.15); }
.apropos-photo img { width: 100%; height: 400px; object-fit: cover; display: block; }
.apropos-text p { color: var(--gris); margin-bottom: 1rem; }
.valeurs { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem; }
.valeur-item { background: var(--blanc); border-radius: 6px; padding: 1rem; border-left: 3px solid var(--or); }
.valeur-item strong { display: block; color: var(--vert); font-size: .9rem; margin-bottom: .3rem; }
.valeur-item span { color: var(--gris); font-size: .82rem; }

/* CONTACT */
#contact { background: var(--blanc); }
.contact-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; align-items: start; }
.contact-info > p { color: var(--gris); margin-bottom: 2rem; }
.contact-item { display: flex; align-items: flex-start; gap: .9rem; margin-bottom: 1.4rem; }
.contact-icon { width: 42px; height: 42px; background: var(--vert); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; flex-shrink: 0; }
.contact-item strong { display: block; font-size: .85rem; color: var(--vert); }
.contact-item span { font-size: .85rem; color: var(--gris); }
.contact-item a { font-size: .85rem; color: var(--vert); text-decoration: none; }
.contact-item a:hover { text-decoration: underline; }

/* FORMULAIRE */
.form-card { background: var(--creme); border-radius: 12px; padding: 2.5rem; border: 1px solid #e5ddd0; box-shadow: 0 4px 20px rgba(0,0,0,.06); }
.form-card h3 { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--vert); margin-bottom: 1.5rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-group { margin-bottom: 1.2rem; }
label { display: block; font-size: .82rem; font-weight: 600; color: var(--vert); margin-bottom: .4rem; }
input, select, textarea { width: 100%; padding: 11px 14px; border: 1.5px solid #d8d0c0; border-radius: 5px; font-family: 'Inter', sans-serif; font-size: .9rem; color: var(--texte); background: var(--blanc); transition: border-color .2s; outline: none; }
input:focus, select:focus, textarea:focus { border-color: var(--vert-clair); }
textarea { resize: vertical; min-height: 110px; }
.btn-submit { width: 100%; padding: 14px; background: var(--vert); color: #fff; border: none; border-radius: 5px; font-family: 'Inter', sans-serif; font-size: .95rem; font-weight: 600; cursor: pointer; transition: background .2s; margin-top: .5rem; }
.btn-submit:hover { background: var(--vert-clair); }
.success-msg { display: none; background: #e8f5e0; border: 1px solid #7bc67e; color: #2d5016; padding: 12px 16px; border-radius: 5px; font-size: .9rem; margin-top: 1rem; text-align: center; }

/* FOOTER */
footer { background: #111; color: rgba(255,255,255,.6); padding: 40px 6vw; text-align: center; font-size: .85rem; }
footer strong { color: var(--or); }
footer a { color: rgba(255,255,255,.5); text-decoration: none; }
footer a:hover { color: var(--or); }
.footer-socials { margin-top: 1rem; display: flex; justify-content: center; gap: 1.2rem; }
.footer-socials a { color: rgba(255,255,255,.4); font-size: .8rem; transition: color .2s; }
.footer-socials a:hover { color: var(--or); }

/* RESPONSIVE */
@media (max-width: 900px) {
  .galerie-grid { grid-template-columns: 1fr 1fr; grid-template-rows: auto; }
  .galerie-item.grand { grid-row: auto; }
  #apropos { grid-template-columns: 1fr; gap: 2.5rem; }
  .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
  .form-row { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .nav-links { display: none; }
  .galerie-grid { grid-template-columns: 1fr; }
  .products-grid { grid-template-columns: 1fr; }
  .valeurs { grid-template-columns: 1fr; }
}
