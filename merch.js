// ══════════════════════════════════════
// MERCH.JS — YOURU Creative Community
// ══════════════════════════════════════

const DEFAULT_MERCH = [
  { id:'M1', name:'YOURU Studio Tee', price:189000, buyLink:'https://tokopedia.com', imageUrl:'', sizes:'S, M, L, XL, XXL', desc:'Kaos premium 100% combed cotton 30s dengan grafis eksklusif YOURU Studio. Sablon DTF berkualitas tinggi yang tahan lama.', color:'Hitam / Putih / Navy', stock:'Tersedia' },
  { id:'M2', name:'YOURU Oversized Hoodie', price:359000, buyLink:'https://tokopedia.com', imageUrl:'', sizes:'M, L, XL, XXL', desc:'Hoodie oversized fleece tebal 380gsm dengan embroidery logo YOURU di dada kiri. Cocok untuk cuaca dingin maupun casual harian.', color:'Charcoal / Cream', stock:'Terbatas' },
  { id:'M3', name:'YOURU Tote Bag', price:95000, buyLink:'https://tokopedia.com', imageUrl:'', sizes:'One Size (40×35 cm)', desc:'Canvas tote bag 12oz dengan sablon full-color artwork komunitas. Kuat, ramah lingkungan, dan estetik untuk daily use.', color:'Natural Canvas', stock:'Tersedia' }
];

const defaultMerchImg = `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="1"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`;

function merchGetData(key, def) {
  const raw = localStorage.getItem('youru_' + key);
  return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(def));
}

// ── Inject merch hero styles once ──
(function injectMerchStyles() {
  if (document.getElementById('merch-hero-styles')) return;
  const s = document.createElement('style');
  s.id = 'merch-hero-styles';
  s.textContent = `
    /* ══════════════════════════════════════
       MERCH HERO — visual treatment
       Warna ungu dipertahankan dari HTML inline style
    ══════════════════════════════════════ */

    #page-merch .about-hero {
      position: relative !important;
      overflow: hidden !important;
    }

    /* Matikan kanji 間 dari style.css, ganti dot pattern ungu */
    #page-merch .about-hero::before {
      content: '' !important;
      left: unset !important; bottom: unset !important;
      font-size: unset !important;
      color: unset !important;
      opacity: 1 !important;
      inset: 0 !important;
      position: absolute !important;
      background-image:
        radial-gradient(circle, rgba(216,180,254,0.18) 1.5px, transparent 1.5px),
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px) !important;
      background-size: 28px 28px, 60px 60px, 60px 60px !important;
      pointer-events: none !important;
      z-index: 0 !important;
    }

    /* Radial vignette gelap ke tepi */
    #page-merch .about-hero::after {
      content: '' !important;
      position: absolute !important;
      inset: 0 !important;
      width: unset !important; height: unset !important;
      top: unset !important; right: unset !important;
      bottom: unset !important; left: unset !important;
      border-radius: unset !important;
      animation: none !important;
      background: radial-gradient(ellipse 85% 85% at 50% 40%,
        transparent 25%,
        rgba(20,5,50,0.40) 70%,
        rgba(15,3,40,0.65) 100%
      ) !important;
      pointer-events: none !important;
      z-index: 0 !important;
    }

    /* Orb ungu terang kiri-atas */
    #page-merch .about-hero .merch-orb-1 {
      position: absolute;
      top: -60px; left: -40px;
      width: 420px; height: 420px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(167,85,255,0.22) 0%, transparent 65%);
      animation: floatOrb 9s ease-in-out infinite;
      pointer-events: none;
      z-index: 0;
    }

    /* Orb ungu rosy kanan-bawah */
    #page-merch .about-hero .merch-orb-2 {
      position: absolute;
      bottom: -80px; right: -60px;
      width: 500px; height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(124,58,237,0.20) 0%, transparent 65%);
      animation: floatOrb 12s ease-in-out infinite reverse;
      pointer-events: none;
      z-index: 0;
    }

    /* Shimmer diagonal ungu */
    #page-merch .about-hero .merch-accent-line {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        115deg,
        transparent 30%,
        rgba(180,120,255,0.07) 50%,
        transparent 70%
      );
      pointer-events: none;
      z-index: 0;
    }

    /* Fade bawah ke section cards */
    #page-merch .about-hero .merch-hero-fade {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 100px;
      background: linear-gradient(to bottom, transparent, rgba(15,3,40,0.55));
      pointer-events: none;
      z-index: 0;
    }

    /* Semua konten teks di atas semua layer */
    #page-merch .about-hero > *:not(.merch-orb-1):not(.merch-orb-2):not(.merch-accent-line):not(.merch-hero-fade) {
      position: relative;
      z-index: 2;
    }

    /* ── Merch cards: hapus border-left, tambah shimmer top ── */
    #page-merch .about-card {
      border-left: none !important;
      position: relative;
      overflow: hidden;
    }
    #page-merch .about-card::before {
      content: '';
      position: absolute;
      inset: 0 0 auto 0;
      height: 2px;
      background: linear-gradient(90deg,
        transparent 0%,
        rgba(167,85,255,0.6) 20%,
        rgba(124,58,237,0.75) 50%,
        rgba(216,180,254,0.45) 80%,
        transparent 100%
      );
      border-radius: 4px 4px 0 0;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
      z-index: 1;
    }
    #page-merch .about-card:hover::before {
      opacity: 1;
    }
    #page-merch .about-card {
      transition: box-shadow 0.35s ease;
    }
    #page-merch .about-card:hover {
      box-shadow:
        0 8px 32px rgba(124,58,237,0.10),
        0 2px 8px rgba(167,85,255,0.07),
        inset 0 0 0 1px rgba(167,85,255,0.10);
    }
  `;
  document.head.appendChild(s);
})();

function buildMerch() {
  // ── Inject hero decoration elements (idempotent) ──
  const heroEl = document.querySelector('#page-merch .about-hero');
  if (heroEl && !heroEl.querySelector('.merch-orb-1')) {
    heroEl.insertAdjacentHTML('beforeend', `
      <div class="merch-orb-1"></div>
      <div class="merch-orb-2"></div>
      <div class="merch-accent-line"></div>
      <div class="merch-hero-fade"></div>
    `);
  }

  const merch = merchGetData('merch', DEFAULT_MERCH);
  const grid  = document.getElementById('merchGrid');
  const empty = document.getElementById('merchEmpty');
  if (!grid) return;

  if (merch.length === 0) {
    grid.style.display = 'none';
    if (empty) empty.style.display = 'block';
    return;
  }
  grid.style.display = 'grid';
  if (empty) empty.style.display = 'none';

  grid.innerHTML = merch.map(m => {
    const stockColor = m.stock === 'Habis' ? '#dc2626' : m.stock === 'Terbatas' ? '#d97706' : '#16a34a';
    const stockBg    = m.stock === 'Habis' ? '#fee2e2' : m.stock === 'Terbatas' ? '#fef3c7' : '#dcfce7';
    const imgHTML    = m.imageUrl
      ? `<img src="${m.imageUrl}" alt="${m.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;" onerror="this.parentElement.innerHTML=defaultMerchImg">`
      : defaultMerchImg;

    return `
    <div class="about-card reveal" style="padding:0;overflow:hidden;display:flex;flex-direction:column;">
      <div style="height:260px;background:linear-gradient(135deg,#1e1b4b,#312e81);border-radius:var(--radius-lg) var(--radius-lg) 0 0;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;">
        ${imgHTML}
        <div style="position:absolute;top:12px;right:12px;">
          <span style="background:${stockBg};color:${stockColor};font-size:0.7rem;font-weight:700;padding:3px 10px;border-radius:999px;">${m.stock||'Tersedia'}</span>
        </div>
      </div>
      <div style="padding:20px;display:flex;flex-direction:column;gap:10px;flex:1;">
        <div>
          <h3 style="font-size:1.05rem;font-weight:800;color:var(--navy);margin:0 0 4px;">${m.name}</h3>
          <div style="font-size:1.35rem;font-weight:800;color:#7c3aed;">Rp ${Number(m.price).toLocaleString('id-ID')}</div>
        </div>
        <p style="font-size:0.82rem;color:var(--text-mid);line-height:1.6;margin:0;font-family:var(--font-desc);font-weight:300;">${m.desc||''}</p>
        <div style="font-size:0.78rem;color:var(--text-light);">
          <div><strong style="color:var(--navy);">Ukuran:</strong> ${m.sizes||'—'}</div>
          ${m.color ? `<div style="margin-top:3px;"><strong style="color:var(--navy);">Warna:</strong> ${m.color}</div>` : ''}
        </div>
        ${m.buyLink ? `
        <a href="${m.buyLink}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;justify-content:center;gap:6px;margin-top:auto;padding:11px 18px;background:#7c3aed;color:#fff;border-radius:10px;font-weight:700;font-size:0.85rem;text-decoration:none;transition:background 0.2s;" onmouseover="this.style.background='#6d28d9'" onmouseout="this.style.background='#7c3aed'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          Beli Sekarang
        </a>` : ''}
      </div>
    </div>`;
  }).join('');
}

window.buildMerch = buildMerch;