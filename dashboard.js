// ══════════════════════════════════════
// DASHBOARD.JS — YOURU Creative Community
// Icons: solid fill (no stroke)
// Animations: GSAP (entrance stagger, counter, hover, progress sweep)
// Card style: no border-left, replaced with gradient top shimmer + glow
// ══════════════════════════════════════

// ── Inject dashboard card styles once ──
(function injectDashStyles() {
  if (document.getElementById('dash-card-styles')) return;
  const s = document.createElement('style');
  s.id = 'dash-card-styles';
  s.textContent = `
    /* ══════════════════════════════════════
       DASHBOARD HERO — override style.css
    ══════════════════════════════════════ */

    /* Override background .about-hero dari style.css */
    #page-dashboard .about-hero {
      background:
        radial-gradient(ellipse 70% 60% at 15% 80%, rgba(45,110,247,0.25) 0%, transparent 60%),
        radial-gradient(ellipse 50% 70% at 85% 20%, rgba(18,64,168,0.20) 0%, transparent 55%),
        radial-gradient(ellipse 80% 80% at 50% 50%, rgba(122,172,255,0.06) 0%, transparent 70%),
        linear-gradient(160deg, var(--navy) 0%, #0c1d50 40%, var(--blue-700) 75%, #1a50c8 100%) !important;
      position: relative !important;
      overflow: hidden !important;
    }

    /* Matikan kanji 間 dari style.css, ganti dengan dot pattern */
    #page-dashboard .about-hero::before {
      content: '' !important;
      left: unset !important; bottom: unset !important;
      font-size: unset !important;
      color: unset !important;
      opacity: 1 !important;
      inset: 0 !important;
      position: absolute !important;
      background-image:
        radial-gradient(circle, rgba(255,255,255,0.20) 1.5px, transparent 1.5px),
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px) !important;
      background-size: 28px 28px, 60px 60px, 60px 60px !important;
      pointer-events: none !important;
      z-index: 0 !important;
    }

    /* ::after — radial vignette gelap ke tepi */
    #page-dashboard .about-hero::after {
      content: '' !important;
      position: absolute !important;
      inset: 0 !important;
      background: radial-gradient(ellipse 85% 85% at 50% 40%,
        transparent 25%,
        rgba(8,16,60,0.40) 70%,
        rgba(6,12,50,0.65) 100%
      ) !important;
      border-radius: unset !important;
      width: unset !important; height: unset !important;
      top: unset !important; right: unset !important; bottom: unset !important; left: unset !important;
      animation: none !important;
      pointer-events: none !important;
      z-index: 0 !important;
    }

    /* Orb biru terang kiri-atas */
    #page-dashboard .about-hero .dash-orb-1 {
      position: absolute;
      top: -60px; left: -40px;
      width: 420px; height: 420px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(80,140,255,0.20) 0%, transparent 65%);
      animation: floatOrb 9s ease-in-out infinite;
      pointer-events: none;
      z-index: 0;
    }

    /* Orb biru muda kanan-bawah */
    #page-dashboard .about-hero .dash-orb-2 {
      position: absolute;
      bottom: -80px; right: -60px;
      width: 500px; height: 500px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(30,80,220,0.18) 0%, transparent 65%);
      animation: floatOrb 12s ease-in-out infinite reverse;
      pointer-events: none;
      z-index: 0;
    }

    /* Shimmer diagonal */
    #page-dashboard .about-hero .dash-accent-line {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        115deg,
        transparent 30%,
        rgba(100,160,255,0.06) 50%,
        transparent 70%
      );
      pointer-events: none;
      z-index: 0;
    }

    /* Fade bawah ke section cards */
    #page-dashboard .about-hero .dash-hero-fade {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 100px;
      background: linear-gradient(to bottom, transparent, rgba(8,16,60,0.55));
      pointer-events: none;
      z-index: 0;
    }

    /* Semua konten teks di atas semua layer dekorasi */
    #page-dashboard .about-hero > *:not(.dash-orb-1):not(.dash-orb-2):not(.dash-accent-line):not(.dash-hero-fade) {
      position: relative;
      z-index: 2;
    }

    /* ── Strip all border-left accents inside dashboard ── */
    #page-dashboard .about-card {
      border-left: none !important;
      position: relative;
      overflow: hidden;
    }

    /* ── Shimmer gradient line across top edge, fades in on hover ── */
    #page-dashboard .about-card::before {
      content: '';
      position: absolute;
      inset: 0 0 auto 0;
      height: 2px;
      background: linear-gradient(90deg,
        transparent 0%,
        rgba(124,58,237,0.6) 20%,
        rgba(45,110,247,0.75) 50%,
        rgba(225,48,108,0.5) 80%,
        transparent 100%
      );
      border-radius: 4px 4px 0 0;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
      z-index: 1;
    }
    #page-dashboard .about-card:hover::before {
      opacity: 1;
    }

    /* ── Ambient glow on hover ── */
    #page-dashboard .about-card {
      transition: box-shadow 0.35s ease;
    }
    #page-dashboard .about-card:hover {
      box-shadow:
        0 8px 32px rgba(45,110,247,0.07),
        0 2px 8px rgba(124,58,237,0.05),
        inset 0 0 0 1px rgba(124,58,237,0.09);
    }

    /* ══════════════════════════════════════
       DARK MODE — glow putih pada TikTok
    ══════════════════════════════════════ */

    /* Glow pada ikon TikTok di summary card */
    [data-theme="dark"] #page-dashboard .dash-card-icon svg,
    [data-theme="dark"] #page-dashboard .dash-card-icon {
      filter: none;
    }
    /* Khusus card TikTok (ikon ke-4, color #374151) */
    [data-theme="dark"] #page-dashboard .dash-summary-card:nth-child(4) .dash-card-icon {
      filter: drop-shadow(0 0 6px rgba(255,255,255,0.70))
              drop-shadow(0 0 14px rgba(255,255,255,0.35));
      color: #ffffff !important;
    }

    /* Glow pada ikon TikTok di activity rows */
    [data-theme="dark"] #page-dashboard .dash-act-row .dash-tiktok-icon {
      filter: drop-shadow(0 0 5px rgba(255,255,255,0.65))
              drop-shadow(0 0 12px rgba(255,255,255,0.30));
      color: #ffffff !important;
    }

    /* Glow pada teks label "TikTok" di activity rows */
    [data-theme="dark"] #page-dashboard .dash-tiktok-label {
      color: #ffffff !important;
      text-shadow:
        0 0 6px rgba(255,255,255,0.70),
        0 0 14px rgba(255,255,255,0.35);
    }

    /* Glow pada ikon TikTok di platform breakdown */
    [data-theme="dark"] #page-dashboard .dash-plat-row:nth-child(2) .icon {
      filter: drop-shadow(0 0 6px rgba(255,255,255,0.65))
              drop-shadow(0 0 14px rgba(255,255,255,0.30));
      color: #ffffff !important;
      background: rgba(255,255,255,0.06) !important;
    }

    /* Glow pada teks "TikTok" di platform breakdown */
    [data-theme="dark"] #page-dashboard .dash-tiktok-plat-label {
      color: #ffffff !important;
      text-shadow:
        0 0 6px rgba(255,255,255,0.70),
        0 0 14px rgba(255,255,255,0.35);
    }

    /* Glow pada ikon TikTok di tabel */
    [data-theme="dark"] #page-dashboard .dash-tiktok-table-icon {
      filter: drop-shadow(0 0 5px rgba(255,255,255,0.65))
              drop-shadow(0 0 12px rgba(255,255,255,0.30));
      color: #ffffff !important;
    }
    [data-theme="dark"] #page-dashboard .dash-tiktok-table-label {
      color: #ffffff !important;
      text-shadow:
        0 0 6px rgba(255,255,255,0.70),
        0 0 14px rgba(255,255,255,0.35);
    }

    /* ── Summary card: small accent dot top-right ── */
    #page-dashboard .dash-summary-card::after {
      content: '';
      position: absolute;
      top: 14px;
      right: 16px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--dash-dot, rgba(124,58,237,0.35));
      box-shadow: 0 0 10px var(--dash-dot, rgba(124,58,237,0.35));
      opacity: 0.8;
      pointer-events: none;
    }

    /* ── Section title icons: gradient pill background, no border ── */
    #page-dashboard .about-card .about-card-title .icon {
      border: none !important;
      background: linear-gradient(135deg,
        rgba(45,110,247,0.09),
        rgba(124,58,237,0.07)
      ) !important;
    }
  `;
  document.head.appendChild(s);
})();

const DEFAULT_DASH_ACTIVITY = [
  { memberId:'YG', memberName:'Kaguya',         platform:'instagram', count:8, period:'Mei 2025', note:'Konsisten upload editorial setiap minggu' },
  { memberId:'BU', memberName:'Yu (Byupsty)',   platform:'instagram', count:6, period:'Mei 2025', note:'Fokus pada typography campaign' },
  { memberId:'HK', memberName:'Yudix',          platform:'tiktok',    count:5, period:'Mei 2025', note:'Video process & timelapse render' },
  { memberId:'CH', memberName:'Cahgo',          platform:'instagram', count:7, period:'Mei 2025', note:'Seri motion design weekly' },
  { memberId:'EC', memberName:'Elan',           platform:'tiktok',    count:4, period:'Mei 2025', note:'Behind-the-scenes GFX' },
  { memberId:'AB', memberName:'Arka',           platform:'instagram', count:5, period:'Mei 2025', note:'High-fashion art direction' },
  { memberId:'RS', memberName:'Rika Setiawan',  platform:'instagram', count:3, period:'Mei 2025', note:'Editorial illustrasi' },
];

function dashGetData(key, def) {
  const raw = localStorage.getItem('youru_' + key);
  return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(def));
}

// ── Solid Fill SVG Icons (no stroke) ──
const ICONS = {
  members: `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
  </svg>`,

  chart: `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
  </svg>`,

  instagram: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>`,

  tiktok: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/>
  </svg>`,

  star: `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
  </svg>`,

  activity: `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clip-rule="evenodd"/>
  </svg>`,

  globe: `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
  </svg>`,

  table: `<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"/>
  </svg>`,
};

// ── GSAP counter helper ──
function animateCounter(el, endVal, duration = 1.2) {
  if (!window.gsap) { el.textContent = endVal; return; }
  const obj = { val: 0 };
  gsap.to(obj, {
    val: endVal,
    duration,
    ease: 'power2.out',
    onUpdate() { el.textContent = Math.round(obj.val); },
  });
}

// ── GSAP progress bar sweep helper ──
function sweepBar(el, targetPct, delay = 0) {
  if (!window.gsap) { el.style.width = targetPct + '%'; return; }
  gsap.fromTo(el,
    { width: '0%' },
    { width: targetPct + '%', duration: 0.9, delay, ease: 'power3.out' }
  );
}

function buildDashboard() {
  // ── Inject hero decoration elements (idempotent) ──
  const heroEl = document.querySelector('#page-dashboard .about-hero');
  if (heroEl && !heroEl.querySelector('.dash-orb-1')) {
    heroEl.insertAdjacentHTML('beforeend', `
      <div class="dash-orb-1"></div>
      <div class="dash-orb-2"></div>
      <div class="dash-accent-line"></div>
      <div class="dash-hero-fade"></div>
    `);
  }

  const actData = dashGetData('dash_activity', DEFAULT_DASH_ACTIVITY);
  const members = dashGetData('members', window.DEFAULT_MEMBERS || []);

  const totalPosts    = actData.reduce((s, a) => s + (a.count || 0), 0);
  const igPosts       = actData.filter(a => a.platform === 'instagram').reduce((s,a)=>s+(a.count||0),0);
  const ttPosts       = actData.filter(a => a.platform === 'tiktok').reduce((s,a)=>s+(a.count||0),0);
  const activeContrib = actData.filter(a => (a.count||0) > 0).length;

  // ══════════════════════════════════
  // 1. SUMMARY CARDS
  // ══════════════════════════════════
  const summaryEl = document.getElementById('dashSummaryCards');
  if (summaryEl) {
    const cards = [
      { icon: ICONS.members,   label:'Total Anggota',           value: members.length, color:'var(--blue-500)',  dot:'rgba(45,110,247,0.4)' },
      { icon: ICONS.chart,     label:'Total Karya Bulan Ini',   value: totalPosts,     color:'#7c3aed',          dot:'rgba(124,58,237,0.4)' },
      { icon: ICONS.instagram, label:'Upload Instagram',         value: igPosts,        color:'#e1306c',          dot:'rgba(225,48,108,0.4)' },
      { icon: ICONS.tiktok,    label:'Upload TikTok',            value: ttPosts,        color:'#374151',          dot:'rgba(55,65,81,0.3)'   },
      { icon: ICONS.star,      label:'Anggota Aktif Kontribusi', value: activeContrib,  color:'#d97706',          dot:'rgba(217,119,6,0.4)'  },
    ];

    summaryEl.innerHTML = cards.map((c, i) => `
      <div class="dash-summary-card about-card reveal"
           data-value="${c.value}"
           style="--dash-dot:${c.dot};padding:22px 24px;display:flex;align-items:center;gap:16px;margin-bottom:0;cursor:default;will-change:transform;">
        <div class="dash-card-icon icon"
             style="width:38px;height:38px;flex-shrink:0;color:${c.color};background:transparent;border:none;">
          ${c.icon}
        </div>
        <div>
          <div class="dash-counter" style="font-size:1.9rem;font-weight:800;color:var(--navy);line-height:1;letter-spacing:-0.03em;">0</div>
          <div style="font-size:0.75rem;color:var(--text-light);margin-top:3px;font-weight:500;letter-spacing:0.02em;">${c.label}</div>
        </div>
      </div>`).join('');

    // Entrance + counter animations
    const cardEls = summaryEl.querySelectorAll('.dash-summary-card');
    if (window.gsap) {
      gsap.fromTo(cardEls,
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.55,
          stagger: 0.09,
          ease: 'power3.out',
          onComplete() {
            // Fire counters after entrance finishes
            cardEls.forEach(el => {
              const endVal = parseInt(el.dataset.value, 10) || 0;
              animateCounter(el.querySelector('.dash-counter'), endVal);
            });
          }
        }
      );

      // Hover: lift + icon scale
      cardEls.forEach(el => {
        const iconEl = el.querySelector('.dash-card-icon');
        el.addEventListener('mouseenter', () => {
          gsap.to(el,     { y: -4, scale: 1.03, duration: 0.25, ease: 'power2.out' });
          gsap.to(iconEl, { scale: 1.18, duration: 0.25, ease: 'back.out(2)' });
        });
        el.addEventListener('mouseleave', () => {
          gsap.to(el,     { y: 0, scale: 1, duration: 0.3, ease: 'power2.inOut' });
          gsap.to(iconEl, { scale: 1, duration: 0.25, ease: 'power2.inOut' });
        });
        // Click: elastic pulse
        el.addEventListener('click', () => {
          gsap.fromTo(el, { scale: 1 }, { scale: 0.93, duration: 0.12, ease: 'power2.in',
            onComplete() { gsap.to(el, { scale: 1.05, duration: 0.2, ease: 'back.out(3)',
              onComplete() { gsap.to(el, { scale: 1, duration: 0.18 }); }
            }); }
          });
        });
      });
    } else {
      // Fallback: just set values
      cardEls.forEach(el => {
        el.querySelector('.dash-counter').textContent = el.dataset.value;
      });
    }
  }

  // ══════════════════════════════════
  // 2. ACTIVITY FEED
  // ══════════════════════════════════
  const actEl = document.getElementById('dashActivityList');
  if (actEl) {
    if (actData.length === 0) {
      actEl.innerHTML = `
        <p style="text-align:center;padding:32px 0;color:var(--text-light);font-size:0.88rem;font-family:var(--font-desc);">
          Belum ada data aktivitas.
        </p>`;
    } else {
      const sorted   = [...actData].sort((a,b) => (b.count||0) - (a.count||0));
      const maxCount = sorted[0]?.count || 1;

      actEl.innerHTML = sorted.map(a => {
        const pct           = Math.round(((a.count||0) / maxCount) * 100);
        const isIg          = a.platform === 'instagram';
        const platformColor = isIg ? '#e1306c' : '#111827';
        const platformLabel = isIg ? 'Instagram' : 'TikTok';
        const platformIcon  = isIg ? ICONS.instagram : ICONS.tiktok;

        return `
        <div class="dash-act-row"
             style="padding:16px 0;border-bottom:1px solid var(--glass-border);will-change:transform;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:10px;">
            <div style="display:flex;align-items:center;gap:12px;">
              <div class="dash-act-avatar"
                   style="width:34px;height:34px;border-radius:8px;background:linear-gradient(135deg,rgba(45,110,247,0.10),rgba(18,64,168,0.06));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.7rem;color:var(--blue-500);flex-shrink:0;border:1px solid rgba(45,110,247,0.15);">
                ${a.memberId}
              </div>
              <div>
                <div style="font-weight:700;font-size:0.9rem;color:var(--navy);letter-spacing:-0.01em;">${a.memberName}</div>
                <div style="display:flex;align-items:center;gap:5px;margin-top:2px;font-size:0.72rem;color:${platformColor};">
                  <span style="display:inline-flex;align-items:center;" ${!isIg ? 'class="dash-tiktok-icon"' : ''}>${platformIcon}</span>
                  <span style="font-weight:600;" ${!isIg ? 'class="dash-tiktok-label"' : ''}>${platformLabel}</span>
                  ${a.period ? `<span style="color:var(--text-light);font-weight:400;">· ${a.period}</span>` : ''}
                </div>
              </div>
            </div>
            <div style="text-align:right;flex-shrink:0;">
              <div style="font-size:1.4rem;font-weight:800;color:var(--navy);line-height:1;letter-spacing:-0.03em;">${a.count||0}</div>
              <div style="font-size:0.68rem;color:var(--text-light);font-weight:500;">karya</div>
            </div>
          </div>
          <div style="height:4px;background:var(--glass-border);border-radius:999px;overflow:hidden;">
            <div class="dash-act-bar"
                 data-pct="${pct}"
                 style="height:100%;width:0%;background:linear-gradient(90deg,${platformColor},${isIg ? '#f472b6' : '#6b7280'});border-radius:999px;opacity:0.85;"></div>
          </div>
          ${a.note ? `<div style="margin-top:6px;font-size:0.72rem;color:var(--text-light);font-style:italic;font-family:var(--font-desc);">${a.note}</div>` : ''}
        </div>`;
      }).join('');

      // GSAP entrance
      if (window.gsap) {
        const rows    = actEl.querySelectorAll('.dash-act-row');
        const barEls  = actEl.querySelectorAll('.dash-act-bar');

        gsap.fromTo(rows,
          { x: -24, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power3.out',
            onComplete() {
              barEls.forEach((bar, i) => {
                sweepBar(bar, parseInt(bar.dataset.pct, 10), i * 0.05);
              });
            }
          }
        );

        // Hover: slide right + avatar scale
        rows.forEach(row => {
          const av = row.querySelector('.dash-act-avatar');
          row.addEventListener('mouseenter', () => {
            gsap.to(row, { x: 5, duration: 0.2, ease: 'power2.out' });
            if (av) gsap.to(av, { scale: 1.12, duration: 0.2, ease: 'back.out(2)' });
          });
          row.addEventListener('mouseleave', () => {
            gsap.to(row, { x: 0, duration: 0.25, ease: 'power2.inOut' });
            if (av) gsap.to(av, { scale: 1, duration: 0.2 });
          });
        });
      } else {
        actEl.querySelectorAll('.dash-act-bar').forEach(bar => {
          bar.style.width = bar.dataset.pct + '%';
        });
      }
    }
  }

  // ══════════════════════════════════
  // 3. PLATFORM BREAKDOWN
  // ══════════════════════════════════
  const platEl = document.getElementById('dashPlatformBreakdown');
  if (platEl) {
    const igCount = actData.filter(a => a.platform === 'instagram').reduce((s,a)=>s+(a.count||0),0);
    const ttCount = actData.filter(a => a.platform === 'tiktok').reduce((s,a)=>s+(a.count||0),0);
    const total   = igCount + ttCount || 1;
    const igPct   = Math.round((igCount / total) * 100);
    const ttPct   = 100 - igPct;

    platEl.innerHTML = `
      <div style="display:flex;flex-direction:column;gap:14px;padding:4px 0;">
        <!-- Instagram row -->
        <div class="dash-plat-row" style="display:flex;align-items:center;gap:14px;will-change:transform;">
          <div class="icon" style="width:34px;height:34px;flex-shrink:0;color:#e1306c;background:rgba(225,48,108,0.08);border:none !important;">
            ${ICONS.instagram}
          </div>
          <div style="flex:1;min-width:0;">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
              <span style="font-size:0.82rem;font-weight:700;color:var(--navy);">Instagram</span>
              <span style="font-size:0.82rem;font-weight:800;color:#e1306c;">${igCount} <span style="font-weight:400;color:var(--text-light);font-size:0.72rem;">karya · ${igPct}%</span></span>
            </div>
            <div style="height:5px;background:var(--glass-border);border-radius:999px;overflow:hidden;">
              <div class="dash-plat-bar" data-pct="${igPct}" style="height:100%;width:0%;background:linear-gradient(90deg,#e1306c,#f472b6);border-radius:999px;opacity:0.85;"></div>
            </div>
          </div>
        </div>
        <!-- TikTok row -->
        <div class="dash-plat-row" style="display:flex;align-items:center;gap:14px;will-change:transform;">
          <div class="icon" style="width:34px;height:34px;flex-shrink:0;color:#374151;background:rgba(0,0,0,0.05);border:none !important;">
            ${ICONS.tiktok}
          </div>
          <div style="flex:1;min-width:0;">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
              <span class="dash-tiktok-plat-label" style="font-size:0.82rem;font-weight:700;color:var(--navy);">TikTok</span>
              <span style="font-size:0.82rem;font-weight:800;color:var(--navy);">${ttCount} <span style="font-weight:400;color:var(--text-light);font-size:0.72rem;">karya · ${ttPct}%</span></span>
            </div>
            <div style="height:5px;background:var(--glass-border);border-radius:999px;overflow:hidden;">
              <div class="dash-plat-bar" data-pct="${ttPct}" style="height:100%;width:0%;background:linear-gradient(90deg,#374151,#6b7280);border-radius:999px;opacity:0.75;"></div>
            </div>
          </div>
        </div>
      </div>`;

    if (window.gsap) {
      const platRows = platEl.querySelectorAll('.dash-plat-row');
      const platBars = platEl.querySelectorAll('.dash-plat-bar');

      gsap.fromTo(platRows,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'power3.out',
          onComplete() {
            platBars.forEach((bar, i) => sweepBar(bar, parseInt(bar.dataset.pct, 10), i * 0.15));
          }
        }
      );
    } else {
      platEl.querySelectorAll('.dash-plat-bar').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    }
  }

  // ══════════════════════════════════
  // 4. MEMBER TABLE
  // ══════════════════════════════════
  const tableEl = document.getElementById('dashMemberTable');
  if (tableEl) {
    const sorted = [...actData].sort((a,b) => (b.count||0)-(a.count||0));

    tableEl.innerHTML = `
      <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
        <thead>
          <tr style="border-bottom:1px solid var(--glass-border);">
            <th style="text-align:left;padding:10px 8px;color:var(--text-light);font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;">#</th>
            <th style="text-align:left;padding:10px 8px;color:var(--text-light);font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;">Anggota</th>
            <th style="text-align:left;padding:10px 8px;color:var(--text-light);font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;">Platform</th>
            <th style="text-align:left;padding:10px 8px;color:var(--text-light);font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;">Periode</th>
            <th style="text-align:right;padding:10px 8px;color:var(--text-light);font-size:0.68rem;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;">Karya</th>
          </tr>
        </thead>
        <tbody id="dashTableBody">
          ${sorted.map((a, i) => {
            const medal  = i===0 ? '🥇' : i===1 ? '🥈' : i===2 ? '🥉'
              : `<span class="dash-rank-badge" style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:6px;background:var(--glass-border);font-size:0.72rem;color:var(--text-light);font-weight:700;">${i+1}</span>`;
            const isIg   = a.platform === 'instagram';
            const pColor = isIg ? '#e1306c' : '#111827';
            const pLabel = isIg ? 'Instagram' : 'TikTok';
            const pIcon  = isIg ? ICONS.instagram : ICONS.tiktok;
            return `
            <tr class="dash-table-row"
                style="border-bottom:1px solid var(--glass-border);will-change:transform;">
              <td style="padding:13px 8px;font-size:0.9rem;">${medal}</td>
              <td style="padding:13px 8px;">
                <div style="font-weight:700;color:var(--navy);font-size:0.88rem;">${a.memberName}</div>
                ${a.note ? `<div style="font-size:0.7rem;color:var(--text-light);font-style:italic;margin-top:2px;font-family:var(--font-desc);">${a.note}</div>` : ''}
              </td>
              <td style="padding:13px 8px;">
                <span style="display:inline-flex;align-items:center;gap:5px;color:${pColor};font-weight:600;font-size:0.78rem;">
                  <span style="display:inline-flex;" ${!isIg ? 'class="dash-tiktok-table-icon"' : ''}>${pIcon}</span>
                  <span ${!isIg ? 'class="dash-tiktok-table-label"' : ''}>${pLabel}</span>
                </span>
              </td>
              <td style="padding:13px 8px;color:var(--text-light);font-size:0.78rem;">${a.period||'—'}</td>
              <td style="padding:13px 8px;text-align:right;font-size:1.15rem;font-weight:800;color:var(--navy);letter-spacing:-0.03em;">${a.count||0}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>`;

    if (window.gsap) {
      const tRows = tableEl.querySelectorAll('.dash-table-row');
      gsap.fromTo(tRows,
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: 'power3.out' }
      );

      tRows.forEach(row => {
        const badge = row.querySelector('.dash-rank-badge');
        row.addEventListener('mouseenter', () => {
          gsap.to(row, { backgroundColor: 'rgba(45,110,247,0.04)', duration: 0.18 });
          if (badge) gsap.to(badge, { scale: 1.25, duration: 0.2, ease: 'back.out(2)' });
        });
        row.addEventListener('mouseleave', () => {
          gsap.to(row, { backgroundColor: 'transparent', duration: 0.22 });
          if (badge) gsap.to(badge, { scale: 1, duration: 0.18 });
        });
      });
    }
  }

  // ══════════════════════════════════
  // 5. MONTHLY MONITORING
  // ══════════════════════════════════
  const aboutContent = document.querySelector('#page-dashboard .about-content');
  if (aboutContent && !document.getElementById('dashMonthlySection')) {
    buildMonthlyMonitor(aboutContent);
  }
}


// ══════════════════════════════════════════════════════════
// MONTHLY MONITORING — Data per bulan dalam satu tahun
// ══════════════════════════════════════════════════════════

const BULAN = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
const BULAN_FULL = ['Januari','Februari','Maret','April','Mei','Juni',
                    'Juli','Agustus','September','Oktober','November','Desember'];

// Default monthly data template: 12 bulan × tahun ini
function defaultMonthlyData(year) {
  return BULAN_FULL.map((name, i) => ({
    year, month: i + 1, label: name,
    instagram: 0, tiktok: 0, members: 0, events: 0,
  }));
}

function getMonthlyData(year) {
  const key = `youru_monthly_${year}`;
  const raw = localStorage.getItem(key);
  if (raw) return JSON.parse(raw);
  // Auto-populate from existing actData period field
  const actData = dashGetData('dash_activity', DEFAULT_DASH_ACTIVITY);
  const data    = defaultMonthlyData(year);
  actData.forEach(a => {
    if (!a.period) return;
    const parts = a.period.split(' ');          // e.g. "Mei 2025"
    if (parts.length < 2) return;
    const mIdx = BULAN_FULL.findIndex(b => b.toLowerCase() === parts[0].toLowerCase());
    const yr   = parseInt(parts[1], 10);
    if (mIdx < 0 || yr !== year) return;
    if (a.platform === 'instagram') data[mIdx].instagram += (a.count || 0);
    if (a.platform === 'tiktok')    data[mIdx].tiktok    += (a.count || 0);
  });
  return data;
}

function saveMonthlyData(year, data) {
  localStorage.setItem(`youru_monthly_${year}`, JSON.stringify(data));
}

// ── Inject monthly section styles ──
(function injectMonthlyStyles() {
  if (document.getElementById('dash-monthly-styles')) return;
  const s = document.createElement('style');
  s.id = 'dash-monthly-styles';
  s.textContent = `
    /* ═══════════════════════════════
       MONTHLY MONITOR SECTION
    ═══════════════════════════════ */
    #dashMonthlySection {
      max-width: 820px;
      margin: 0 auto;
      padding: 0 48px 72px;
    }
    .dash-monthly-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 24px;
    }
    .dash-monthly-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1rem;
      color: var(--navy);
    }
    .dash-monthly-title .icon {
      width: 34px; height: 34px;
      border-radius: 10px;
      background: linear-gradient(135deg,rgba(45,110,247,0.09),rgba(124,58,237,0.07));
      display: flex; align-items: center; justify-content: center;
      color: var(--blue-500);
      border: none !important;
      flex-shrink: 0;
    }
    .dash-year-tabs {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }
    .dash-year-btn {
      padding: 5px 14px;
      border-radius: 20px;
      border: 1px solid var(--glass-border-strong);
      background: transparent;
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--text-mid);
      cursor: pointer;
      transition: all 0.18s ease;
      font-family: var(--font-display);
    }
    .dash-year-btn:hover  { border-color: var(--blue-500); color: var(--blue-500); }
    .dash-year-btn.active { background: var(--blue-500); border-color: var(--blue-500); color: #fff; }

    /* Chart area */
    .dash-monthly-chart-wrap {
      position: relative;
      padding: 20px 0 0;
    }
    .dash-chart-bars {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: flex-end;
      gap: 8px;
      height: 160px;
    }
    .dash-chart-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0;
      height: 100%;
      position: relative;
      cursor: pointer;
    }
    .dash-chart-col-bars {
      display: flex;
      align-items: flex-end;
      gap: 2px;
      flex: 1;
      width: 100%;
      justify-content: center;
    }
    .dash-bar-ig, .dash-bar-tt {
      width: 44%;
      border-radius: 4px 4px 0 0;
      min-height: 3px;
      transition: opacity 0.2s;
    }
    .dash-bar-ig { background: linear-gradient(to top, #e1306c, #f472b6); }
    .dash-bar-tt { background: linear-gradient(to top, #374151, #6b7280); }
    .dash-chart-col:hover .dash-bar-ig,
    .dash-chart-col:hover .dash-bar-tt { opacity: 0.75; }
    .dash-chart-col.selected .dash-bar-ig,
    .dash-chart-col.selected .dash-bar-tt { opacity: 1; box-shadow: 0 0 0 2px rgba(45,110,247,0.4); }

    .dash-chart-label {
      font-size: 0.6rem;
      font-weight: 600;
      color: var(--text-light);
      margin-top: 6px;
      text-align: center;
      font-family: var(--font-display);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .dash-chart-col.selected .dash-chart-label { color: var(--blue-500); }

    /* Tooltip */
    .dash-chart-tooltip {
      position: absolute;
      top: -40px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--navy);
      color: #fff;
      font-size: 0.65rem;
      font-weight: 700;
      padding: 4px 8px;
      border-radius: 6px;
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.15s ease;
      z-index: 10;
    }
    .dash-chart-col:hover .dash-chart-tooltip { opacity: 1; }

    /* Baseline */
    .dash-chart-baseline {
      height: 1px;
      background: var(--glass-border);
      margin: 0;
    }

    /* Legend */
    .dash-chart-legend {
      display: flex;
      gap: 16px;
      margin-top: 12px;
      flex-wrap: wrap;
    }
    .dash-legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.72rem;
      font-weight: 600;
      color: var(--text-mid);
      font-family: var(--font-display);
    }
    .dash-legend-dot {
      width: 10px; height: 10px;
      border-radius: 3px;
    }

    /* Monthly detail panel */
    .dash-monthly-detail {
      margin-top: 20px;
      padding: 18px 20px;
      border-radius: 14px;
      background: rgba(45,110,247,0.04);
      border: 1px solid rgba(45,110,247,0.10);
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }
    .dash-detail-stat {
      text-align: center;
    }
    .dash-detail-val {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--navy);
      letter-spacing: -0.03em;
      line-height: 1;
    }
    .dash-detail-lbl {
      font-size: 0.65rem;
      color: var(--text-light);
      font-weight: 500;
      margin-top: 4px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-family: var(--font-desc);
    }
    .dash-detail-trend {
      font-size: 0.68rem;
      font-weight: 700;
      margin-top: 3px;
    }
    .dash-detail-trend.up   { color: #16a34a; }
    .dash-detail-trend.down { color: #dc2626; }
    .dash-detail-trend.flat { color: var(--text-light); }

    /* Year summary strip */
    .dash-year-summary {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-top: 16px;
    }
    .dash-year-stat-card {
      padding: 14px 16px;
      border-radius: 12px;
      background: rgba(255,255,255,0.60);
      border: 1px solid var(--glass-border-strong);
      backdrop-filter: var(--glass-blur-sm);
    }
    .dash-year-stat-val {
      font-size: 1.6rem;
      font-weight: 800;
      color: var(--navy);
      letter-spacing: -0.03em;
      line-height: 1;
    }
    .dash-year-stat-lbl {
      font-size: 0.68rem;
      color: var(--text-light);
      font-weight: 500;
      margin-top: 4px;
      letter-spacing: 0.03em;
      font-family: var(--font-desc);
    }
    .dash-year-stat-bar {
      height: 3px;
      border-radius: 99px;
      margin-top: 10px;
      background: var(--glass-border);
      overflow: hidden;
    }
    .dash-year-stat-bar-fill {
      height: 100%;
      border-radius: 99px;
      width: 0%;
    }

    [data-theme="dark"] .dash-year-btn {
      border-color: rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.55);
    }
    [data-theme="dark"] .dash-year-btn.active { color: #fff; }
    [data-theme="dark"] .dash-chart-tooltip { background: rgba(20,30,70,0.98); }
    [data-theme="dark"] .dash-monthly-detail {
      background: rgba(45,110,247,0.06);
      border-color: rgba(45,110,247,0.15);
    }
    [data-theme="dark"] .dash-year-stat-card {
      background: var(--glass-bg-card);
      border-color: var(--glass-border);
    }
    @media (max-width: 640px) {
      #dashMonthlySection { padding: 0 18px 48px; }
      .dash-chart-bars    { gap: 4px; height: 120px; }
      .dash-chart-label   { font-size: 0.52rem; }
      .dash-monthly-detail { grid-template-columns: repeat(2, 1fr); }
      .dash-year-summary   { grid-template-columns: repeat(2, 1fr); }
    }
  `;
  document.head.appendChild(s);
})();

// ── Build monthly section ──
function buildMonthlyMonitor(container) {
  const currentYear = new Date().getFullYear();
  const years       = [currentYear - 1, currentYear];
  let   activeYear  = currentYear;
  let   activeMonth = new Date().getMonth(); // 0-based

  // Create wrapper
  const section = document.createElement('div');
  section.id = 'dashMonthlySection';
  section.innerHTML = `
    <div class="about-card reveal" style="padding:24px 28px;">
      <!-- Header -->
      <div class="dash-monthly-header">
        <div class="dash-monthly-title">
          <div class="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
            </svg>
          </div>
          Monitoring Bulanan
        </div>
        <div class="dash-year-tabs" id="dashYearTabs"></div>
      </div>

      <!-- Bar Chart -->
      <div class="dash-monthly-chart-wrap">
        <div class="dash-chart-bars" id="dashChartBars"></div>
        <div class="dash-chart-baseline"></div>
        <div class="dash-chart-legend">
          <div class="dash-legend-item">
            <div class="dash-legend-dot" style="background:linear-gradient(90deg,#e1306c,#f472b6);"></div>
            Instagram
          </div>
          <div class="dash-legend-item">
            <div class="dash-legend-dot" style="background:linear-gradient(90deg,#374151,#6b7280);"></div>
            TikTok
          </div>
        </div>
      </div>

      <!-- Monthly Detail -->
      <div class="dash-monthly-detail" id="dashMonthDetail"></div>

      <!-- Year Summary -->
      <div style="margin-top:20px;">
        <div style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-light);margin-bottom:10px;font-family:var(--font-display);">Ringkasan Tahun</div>
        <div class="dash-year-summary" id="dashYearSummary"></div>
      </div>
    </div>`;

  container.appendChild(section);

  const tabsEl    = section.querySelector('#dashYearTabs');
  const barsEl    = section.querySelector('#dashChartBars');
  const detailEl  = section.querySelector('#dashMonthDetail');
  const summaryEl = section.querySelector('#dashYearSummary');

  // ── Render year tabs ──
  function renderTabs() {
    tabsEl.innerHTML = years.map(y => `
      <button class="dash-year-btn${y === activeYear ? ' active' : ''}"
              onclick="dashSetYear(${y})">${y}</button>
    `).join('');
  }

  // ── Render bar chart ──
  function renderChart(data) {
    const totals  = data.map(m => (m.instagram || 0) + (m.tiktok || 0));
    const maxTotal = Math.max(...totals, 1);

    barsEl.innerHTML = data.map((m, i) => {
      const igH  = Math.round(((m.instagram || 0) / maxTotal) * 100);
      const ttH  = Math.round(((m.tiktok    || 0) / maxTotal) * 100);
      const tot  = (m.instagram || 0) + (m.tiktok || 0);
      return `
        <div class="dash-chart-col${i === activeMonth ? ' selected' : ''}"
             onclick="dashSelectMonth(${i})" title="${BULAN_FULL[i]}">
          <div class="dash-chart-tooltip">${tot} karya</div>
          <div class="dash-chart-col-bars">
            <div class="dash-bar-ig"
                 data-h="${igH}"
                 style="height:0%;"></div>
            <div class="dash-bar-tt"
                 data-h="${ttH}"
                 style="height:0%;"></div>
          </div>
          <div class="dash-chart-label">${BULAN[i]}</div>
        </div>`;
    }).join('');

    // Animate bars in with GSAP
    if (window.gsap) {
      const cols = barsEl.querySelectorAll('.dash-chart-col');
      gsap.fromTo(cols,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.035, ease: 'power2.out',
          onComplete() {
            cols.forEach(col => {
              const igBar = col.querySelector('.dash-bar-ig');
              const ttBar = col.querySelector('.dash-bar-tt');
              if (igBar) gsap.to(igBar, { height: igBar.dataset.h + '%', duration: 0.6, ease: 'power3.out', delay: 0.05 });
              if (ttBar) gsap.to(ttBar, { height: ttBar.dataset.h + '%', duration: 0.6, ease: 'power3.out', delay: 0.1  });
            });
          }
        }
      );
    } else {
      barsEl.querySelectorAll('.dash-bar-ig').forEach(b => b.style.height = b.dataset.h + '%');
      barsEl.querySelectorAll('.dash-bar-tt').forEach(b => b.style.height = b.dataset.h + '%');
    }
  }

  // ── Render monthly detail panel ──
  function renderDetail(data) {
    const m    = data[activeMonth];
    const prev = activeMonth > 0 ? data[activeMonth - 1] : null;
    const tot  = (m.instagram || 0) + (m.tiktok || 0);
    const prevTot = prev ? (prev.instagram || 0) + (prev.tiktok || 0) : null;

    function trend(cur, prv) {
      if (prv === null) return '<span class="dash-detail-trend flat">—</span>';
      const diff = cur - prv;
      if (diff > 0)  return `<span class="dash-detail-trend up">▲ +${diff} dari bulan lalu</span>`;
      if (diff < 0)  return `<span class="dash-detail-trend down">▼ ${diff} dari bulan lalu</span>`;
      return '<span class="dash-detail-trend flat">— sama</span>';
    }

    detailEl.innerHTML = `
      <div class="dash-detail-stat">
        <div class="dash-detail-val dash-month-counter-tot">${tot}</div>
        <div class="dash-detail-lbl">${BULAN_FULL[activeMonth]} · Total</div>
        ${trend(tot, prevTot)}
      </div>
      <div class="dash-detail-stat">
        <div class="dash-detail-val dash-month-counter-ig" style="color:#e1306c;">${m.instagram||0}</div>
        <div class="dash-detail-lbl">Instagram</div>
        ${trend(m.instagram||0, prev?.instagram||null)}
      </div>
      <div class="dash-detail-stat">
        <div class="dash-detail-val dash-month-counter-tt">${m.tiktok||0}</div>
        <div class="dash-detail-lbl">TikTok</div>
        ${trend(m.tiktok||0, prev?.tiktok||null)}
      </div>
      <div class="dash-detail-stat">
        <div class="dash-detail-val dash-month-counter-ev" style="color:var(--blue-500);">${m.events||0}</div>
        <div class="dash-detail-lbl">Events</div>
        ${trend(m.events||0, prev?.events||null)}
      </div>`;

    if (window.gsap) {
      gsap.fromTo(detailEl, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
      ['.dash-month-counter-tot','.dash-month-counter-ig',
       '.dash-month-counter-tt','.dash-month-counter-ev'].forEach(sel => {
        const el = detailEl.querySelector(sel);
        if (el) animateCounter(el, parseInt(el.textContent, 10) || 0, 0.6);
      });
    }
  }

  // ── Render year summary ──
  function renderYearSummary(data) {
    const totIG  = data.reduce((s, m) => s + (m.instagram || 0), 0);
    const totTT  = data.reduce((s, m) => s + (m.tiktok    || 0), 0);
    const totAll = totIG + totTT;
    const peak   = data.reduce((best, m, i) => {
      const t = (m.instagram||0) + (m.tiktok||0);
      return t > best.val ? { val: t, idx: i } : best;
    }, { val: 0, idx: 0 });

    const igPct = totAll ? Math.round((totIG / totAll) * 100) : 0;
    const ttPct = 100 - igPct;

    summaryEl.innerHTML = `
      <div class="dash-year-stat-card">
        <div class="dash-year-stat-val dash-yr-counter-all">${totAll}</div>
        <div class="dash-year-stat-lbl">Total Karya Tahun ${activeYear}</div>
        <div class="dash-year-stat-bar">
          <div class="dash-year-stat-bar-fill" data-pct="100"
               style="background:linear-gradient(90deg,var(--blue-500),#7c3aed);"></div>
        </div>
      </div>
      <div class="dash-year-stat-card">
        <div style="display:flex;gap:12px;">
          <div>
            <div class="dash-year-stat-val" style="color:#e1306c;">${igPct}%</div>
            <div class="dash-year-stat-lbl">Instagram · ${totIG} karya</div>
            <div class="dash-year-stat-bar" style="margin-top:8px;">
              <div class="dash-year-stat-bar-fill" data-pct="${igPct}"
                   style="background:linear-gradient(90deg,#e1306c,#f472b6);"></div>
            </div>
          </div>
          <div>
            <div class="dash-year-stat-val">${ttPct}%</div>
            <div class="dash-year-stat-lbl">TikTok · ${totTT} karya</div>
            <div class="dash-year-stat-bar" style="margin-top:8px;">
              <div class="dash-year-stat-bar-fill" data-pct="${ttPct}"
                   style="background:linear-gradient(90deg,#374151,#6b7280);"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="dash-year-stat-card">
        <div class="dash-year-stat-val" style="color:var(--blue-500);">${BULAN[peak.idx]}</div>
        <div class="dash-year-stat-lbl">Bulan Terbaik · ${peak.val} karya</div>
        <div class="dash-year-stat-bar">
          <div class="dash-year-stat-bar-fill" data-pct="${totAll ? Math.round((peak.val/totAll)*100) : 0}"
               style="background:linear-gradient(90deg,var(--blue-400),var(--blue-300));"></div>
        </div>
      </div>`;

    if (window.gsap) {
      const cards = summaryEl.querySelectorAll('.dash-year-stat-card');
      gsap.fromTo(cards,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: 'power3.out',
          onComplete() {
            summaryEl.querySelectorAll('.dash-year-stat-bar-fill').forEach(b =>
              sweepBar(b, parseInt(b.dataset.pct, 10), 0));
          }
        }
      );
      const totEl = summaryEl.querySelector('.dash-yr-counter-all');
      if (totEl) animateCounter(totEl, totAll, 0.9);
    } else {
      summaryEl.querySelectorAll('.dash-year-stat-bar-fill').forEach(b =>
        b.style.width = b.dataset.pct + '%');
    }
  }

  // ── Main render ──
  function render() {
    const data = getMonthlyData(activeYear);
    renderTabs();
    renderChart(data);
    renderDetail(data);
    renderYearSummary(data);
  }

  // ── Global callbacks for inline onclick ──
  window.dashSetYear = function(y) {
    activeYear = y;
    render();
  };
  window.dashSelectMonth = function(i) {
    activeMonth = i;
    const data  = getMonthlyData(activeYear);
    // Update selected bar
    barsEl.querySelectorAll('.dash-chart-col').forEach((col, idx) =>
      col.classList.toggle('selected', idx === i));
    renderDetail(data);
  };

  render();

  // GSAP entrance for the whole section card
  if (window.gsap) {
    gsap.fromTo(section.querySelector('.about-card'),
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', delay: 0.1 }
    );
  }
}

window.buildDashboard = buildDashboard;
window.buildMonthlyMonitor = buildMonthlyMonitor;