// ── DARK MODE ──
(function(){
  const saved = localStorage.getItem('youru_theme');
  if(saved === 'dark') document.documentElement.setAttribute('data-theme','dark');
})();

function toggleDarkMode(){
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if(isDark){
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('youru_theme','light');
  } else {
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('youru_theme','dark');
  }
  updateDarkIcon();
  buildInstaGrid(); // Re-render feed with the correct light/dark instagram embedded wrapper
}

function updateDarkIcon(){
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const btn = document.getElementById('navDarkBtn');
  if(btn) {
    btn.innerHTML = isDark
      ? `<svg width="22" height="22" viewBox="0 0 16 16" fill="none"><path d="M8 1v1M8 14v1M1 8h1M14 8h1M3.05 3.05l.71.71M12.24 12.24l.71.71M3.05 12.95l.71-.71M12.24 3.76l.71-.71" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.5"/></svg>`
      : `<svg width="22" height="22" viewBox="0 0 16 16" fill="none"><path d="M13.5 10.5A6 6 0 015.5 2.5a6 6 0 108 8z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
  }
  const mobileLabel = document.getElementById('darkIconMobileLabel');
  if(mobileLabel) {
    mobileLabel.textContent = isDark ? '☀ Light Mode' : '☾ Dark Mode';
  }
}

document.addEventListener('DOMContentLoaded', updateDarkIcon);

// ── MOBILE MENU ──
function closeMenu() {
  const menu   = document.getElementById('navMenu');
  const burger = document.getElementById('navHamburger');
  const overlay= document.getElementById('menuOverlay');
  if (menu)    menu.classList.remove('show');
  if (burger)  burger.classList.remove('open');
  if (overlay) overlay.classList.remove('show');
}

function toggleMenu(e) {
  if (e) e.stopPropagation(); // prevent document-level click from closing immediately
  const menu   = document.getElementById('navMenu');
  const burger = document.getElementById('navHamburger');
  const overlay= document.getElementById('menuOverlay');
  const isOpen = menu && menu.classList.contains('show');
  if (isOpen) {
    closeMenu();
  } else {
    if (menu)    menu.classList.add('show');
    if (burger)  burger.classList.add('open');
    if (overlay) overlay.classList.add('show');
  }
}

// Auto-close when any link inside the menu is clicked
document.addEventListener('DOMContentLoaded', function () {
  const navMenu = document.getElementById('navMenu');
  if (navMenu) {
    navMenu.addEventListener('click', function (e) {
      const link = e.target.closest('a');
      if (link) setTimeout(closeMenu, 50); // let onclick handler run first, then close
    });
  }
});

// ══════════════════════════════════════
// DEFAULT DATA
// ══════════════════════════════════════
const DEFAULT_MEMBERS = [
  {id:'BU', name:'Yu (Byupsty)', role:'High-Fashion Sculptural Typographer', tag:'Aktif', avatar:'BU.jpg', avatarUrl:'', avatarBase64:'', ig:'@byupsty', tiktok:''},
  {id:'YG', name:'Kaguya', role:'Avant-Garde Visualist & GFX', tag:'Aktif', avatar:'YG.jpeg', avatarUrl:'', avatarBase64:'', ig:'@youthgraph.studio', tiktok:''},
  {id:'HK', name:'Yudix', role:'Cinematic GFX & Architectural Render', tag:'Aktif', avatar:'HK.jpeg', avatarUrl:'', avatarBase64:'', ig:'@hyaku.ne', tiktok:''},
  {id:'CH', name:'Cahgo', role:'Visual Alchemist & Motion Designer', tag:'Aktif', avatar:'CH.jpeg', avatarUrl:'', avatarBase64:'', ig:'@cahgo.mfrs', tiktok:''},
  {id:'RS', name:'Rika Setiawan', role:'Sartorial Editorial Illustrator', tag:'Aktif', avatar:'RS.jpeg', avatarUrl:'', avatarBase64:'', ig:'@ri3ka__', tiktok:''},
  {id:'EC', name:'Elan', role:'Chiaroscuro Motion Director', tag:'Aktif', avatar:'EC.jpeg', avatarUrl:'', avatarBase64:'', ig:'@this.elan_vro', tiktok:''},
  {id:'AB', name:'Arka', role:'High-Fashion GFX Art Director', tag:'Aktif', avatar:'AB.jpeg', avatarUrl:'', avatarBase64:'', ig:'@arkabiyuu', tiktok:''},
];

const DEFAULT_SPOTLIGHT = [
  {
    id:'YG',
    name:'Kaguya (Youthgraph)',
    type:'Avant-Garde Director',
    title:'The sculptural elegance Narrative',
    desc:'Explores the boundaries of digital fashion with sculptural elegance, crafting editorial layouts featuring deep saturated crimson tones and abstract geometric draping.',
    tags:['High-Fashion','Cinematic','Avant-Garde'],
    link:'https://www.instagram.com/youthgraph.studio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    avatar:'YG.jpeg',
    avatarUrl:'',
    bg:'YG-BG.jpg',
    bgUrl:''
  },
  {
    id:'HK',
    name:'Yudix (Hyaku.ne)',
    type:'Cinematic Art Specialist',
    title:'The architectural precision Blueprint',
    desc:'A meticulous visualist focusing on architectural precision, utilizing sharp high-contrast light beams, cinematic shadow play, and refined technical details.',
    tags:['Architectural','Vray','Cinematic'],
    link:'https://www.instagram.com/hyaku.ne?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    avatar:'HK.jpeg',
    avatarUrl:'',
    bg:'HK-BG.jpeg',
    bgUrl:''
  },
  {
    id:'BU',
    name:'Byupsty',
    type:'Scenic Typography Handler',
    title:'Editorial Sartorial Composition',
    desc:'Fusing bold couture graphics with deep saturated crimson silhouettes. Focused on raw high-fashion typography that emphasizes clean editorial asymmetry.',
    tags:['Typography','Editorial','Couture'],
    link:'https://www.instagram.com/byupsty?igsh=MTRjbGp0OWZnZzhtOQ==',
    avatar:'BU.jpg',
    avatarUrl:'',
    bg:'BU-BG.jpg',
    bgUrl:''
  }
];

const DEFAULT_EVENTS = [
  {day:'15', month:'Feb', type:'Workshop', title:'Design Sprint Bootcamp 24', desc:'Workshop intensif 2 hari mempelajari sculptural elegance dan real-world production sprint secara kolaboratif.', time:'09.00 – 17.00 WIB', location:'Zoom & Google Meet', slot:'50 Slot tersisa', bannerUrl:''},
  {day:'22', month:'Feb', type:'Webinar', title:'Digital Couture & Architectural Precision', desc:'Pelajari rahasia komposisi simetris, pencahayaan dramatis, dan presentasi karya adibusana tingkat tinggi.', time:'19.00 – 21.00 WIB', location:'Zoom', slot:'∞ Gratis & Terbuka', bannerUrl:''},
  {day:'08', month:'Mar', type:'Kompetisi', title:'NARA Design Challenge #5', desc:'Tantangan bulanan bertema "Identitas Lokal". Ekspresikan visual inovatif Anda dengan warna deep saturated crimson yang anggun.', time:'Deadline 08 Maret 23.59', location:'Submit via Instagram', slot:'Terbuka untuk umum', bannerUrl:''}
];

const DEFAULT_INSTA = [
  {
    id:'YG',
    name:'Youthgraph Studio',
    type:'Editorial Campaign',
    desc:'A breathtaking study in sculptural elegance featuring raw textures, architectural precision, and an intense gaze set against deep saturated crimson gradients.',
    time:'',
    addedAt: Date.now(),
    embedPermalink:'https://www.instagram.com/p/DXjK07PjxBR/?utm_source=ig_embed&utm_campaign=loading'
  },
  {
    id:'BU',
    name:'Byupsty',
    type:'Sartorial Couture',
    desc:'Exquisite avant-garde silhouette blending architectural precision with flowing silk patterns, showcasing sculptural elegance in every single frame.',
    time:'',
    addedAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    embedPermalink:'https://www.instagram.com/p/DVTSfm-kjvs/?utm_source=ig_embed&utm_campaign=loading'
  }
];

const DEFAULT_BOARD = [
  { id:'SS', name:'Surya Santosa', pos:'Ketua Komunitas', ig:'@suryasantosa_', avatarUrl:'' },
  { id:'NH', name:'Nadia Hani', pos:'Wakil Ketua', ig:'@nadiahani', avatarUrl:'' },
  { id:'BR', name:'Bima Raditya', pos:'Sekretaris', ig:'@bima.rad', avatarUrl:'' },
  { id:'LM', name:'Luna Mega', pos:'Bendahara', ig:'@lunamega_', avatarUrl:'' },
  { id:'FA', name:'Farhan Ali', pos:'Koordinator Kreatif', ig:'@farhan.ali', avatarUrl:'' },
  { id:'CW', name:'Citra Wulan', pos:'Koordinator Event', ig:'@citrawulan', avatarUrl:'' },
  { id:'RP', name:'Rafi Putra', pos:'Koordinator Media', ig:'@rafiputra_', avatarUrl:'' },
  { id:'YA', name:'Yosi Ananda', pos:'Koordinator Mentor', ig:'@yosiananda', avatarUrl:'' },
];

// Helper: Ambil data dari localStorage, fallback ke default
function getData(key, def) {
  const raw = localStorage.getItem('youru_' + key);
  return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(def));
}

// Bind collections
let memberData = getData('members', DEFAULT_MEMBERS);
let spotlightData = getData('spotlight', DEFAULT_SPOTLIGHT);
let eventsData = getData('events', DEFAULT_EVENTS);
let instaData = getData('insta', DEFAULT_INSTA);
let boardData = getData('pengurus', DEFAULT_BOARD);

// ══════════════════════════════════════
// REAL-TIME HELPERS & 14-DAYS DURATION UPGRADE
// ══════════════════════════════════════
function relTime(ts){
  if(!ts) return '';
  const d = Date.now() - ts;
  const m = Math.floor(d / 60000);
  const h = Math.floor(d / 3600000);
  const dy = Math.floor(d / 86400000);
  if(m < 1)  return 'Baru saja';
  if(m < 60) return m + ' menit lalu';
  if(h < 24) return h + ' jam lalu';
  return dy + ' hari lalu';
}

function daysLeftStr(ts){
  if(!ts) return null;
  // Upgraded: 14 days expiration logic (14 * 86400000)
  const msLeft = (14 * 86400000) - (Date.now() - ts);
  if(msLeft <= 0) return null;
  const h  = Math.floor(msLeft / 3600000);
  const dy = Math.floor(msLeft / 86400000);
  if(h < 24) return h + ' jam lagi';
  return dy + ' hari lagi';
}

// Ticker: update semua timestamp & countdown di halaman setiap menit
let _rtTicker = null;
function startRealtimeTicker(){
  if(_rtTicker) return;
  _rtTicker = setInterval(function(){
    // Update relative time di semua elemen [data-ts]
    document.querySelectorAll('[data-ts]').forEach(el => {
      el.textContent = relTime(+el.getAttribute('data-ts'));
    });
    // Update countdown di semua elemen [data-expire-ts]
    document.querySelectorAll('[data-expire-ts]').forEach(el => {
      const ts  = +el.getAttribute('data-expire-ts');
      const str = daysLeftStr(ts);
      if(!str){
        // Expired → cek apakah perlu rebuild grid menggunakan batas 14 hari
        const WEEK = 14 * 24 * 60 * 60 * 1000;
        const allData = getData('insta', DEFAULT_INSTA);
        const active  = allData.filter(d => !d.addedAt || (Date.now() - d.addedAt) < WEEK);
        if(active.length !== allData.length){
          localStorage.setItem('youru_insta', JSON.stringify(active));
          buildInstaGrid();
        }
      } else {
        el.textContent = str;
      }
    });
  }, 60000);
}

// ══════════════════════════════════════
// RENDER COMPONENTS
// ══════════════════════════════════════
function buildInstaGrid() {
  const grid = document.getElementById('karyaGrid');
  if(!grid) return;
  grid.innerHTML = '';

  // Upgraded: 14 days post age limit threshold (14 * 24 * 60 * 60 * 1000)
  const WEEK = 14 * 24 * 60 * 60 * 1000;
  const now  = Date.now();

  const allData = getData('insta', DEFAULT_INSTA);
  instaData = allData.filter(d => !d.addedAt || (now - d.addedAt) < WEEK);

  if(instaData.length !== allData.length){
    localStorage.setItem('youru_insta', JSON.stringify(instaData));
  }

  if(instaData.length === 0){
    grid.innerHTML = `
      <div style="flex:1;text-align:center;padding:48px 20px;color:var(--text-light);font-size:0.9rem;width:100%;">
        Belum ada karya aktif saat ini.
      </div>`;
    return;
  }

  const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

  instaData.forEach((d, index) => {
    const msLeft    = d.addedAt ? (WEEK - (now - d.addedAt)) : WEEK;
    const hoursLeft = Math.floor(msLeft / 3600000);
    const daysLeft  = Math.floor(msLeft / 86400000);
    const urgent    = hoursLeft < 48; // kurang dari 2 hari
    const countdownLabel = daysLeft >= 1
      ? daysLeft + ' hari lagi'
      : (hoursLeft > 0 ? hoursLeft + ' jam lagi' : 'Segera berakhir');

    const badgeColor  = urgent
      ? 'background:rgba(229,62,62,0.1);color:#e53e3e;border:1px solid rgba(229,62,62,0.25);'
      : 'background:rgba(56,161,105,0.1);color:#276749;border:1px solid rgba(56,161,105,0.2);';

    const clockSVG = `<svg width="9" height="9" viewBox="0 0 16 16" fill="none" style="margin-right:3px;vertical-align:-1px;flex-shrink:0;"><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.6"/><path d="M8 4.5v4l2.5 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`;

    const countdownBadge = d.addedAt ? `
      <span data-expire-ts="${d.addedAt}" style="display:inline-flex;align-items:center;font-size:0.65rem;font-weight:700;padding:2px 7px;border-radius:999px;${badgeColor}">
        ${clockSVG}${urgent ? '⚠ ' : ''}${countdownLabel}
      </span>` : '';

    grid.innerHTML += `
      <div class="insta-card reveal" style="padding: 12px; display: flex; flex-direction: column; background: var(--glass-bg-card); border: 1px solid var(--glass-border); border-radius: var(--radius-lg); box-shadow: var(--glass-shadow); transition: transform 0.3s ease, box-shadow 0.3s ease;">
        <div class="insta-media-container" style="position: relative; width: 100%; min-height: 380px; border-radius: var(--radius-md); overflow: hidden; background: rgba(0,0,0,0.02); display: flex; flex-direction: column;">
          <blockquote class="instagram-media"
            data-instgrm-captioned
            data-instgrm-theme="${currentTheme}"
            data-instgrm-permalink="${d.embedPermalink}"
            data-instgrm-version="14"
            style="background: transparent; border:0; border-radius:8px; margin:0; width:100%; max-width:100%; display:block; min-height: 380px;">
          </blockquote>
        </div>
        <div class="insta-meta" style="padding: 12px 4px 4px; display: flex; flex-direction: column; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div class="insta-avatar" style="background: var(--blue-500); color: #FFF; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.7rem; width: 32px; height: 32px; border-radius: 6px;">${d.id}</div>
            <div style="flex: 1; min-width: 0;">
              <div class="insta-name" style="font-size: 0.85rem; font-weight: 700; color: var(--navy); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${d.name}</div>
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-top: 2px;">
                <span class="insta-time" data-ts="${d.addedAt || ''}" style="font-size: 0.7rem; color: var(--text-light);">${relTime(d.addedAt)}</span>
                ${countdownBadge}
              </div>
            </div>
          </div>
          <p class="insta-desc" style="font-size: 0.78rem; color: var(--text-mid); line-height: 1.5; margin: 4px 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${d.desc || ''}</p>
          <div style="text-align: right; margin-top: 4px;">
            <a href="${d.embedPermalink || '#'}" target="_blank" style="font-size: 0.75rem; font-weight: 700; color: var(--blue-500); display: inline-flex; align-items: center; gap: 4px; text-decoration: none;">Buka Instagram <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></a>
          </div>
        </div>
        <!-- Custom Hover Overlay -->
        <div class="insta-hover-overlay">
          <div class="view-label">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/></svg>
            View
          </div>
        </div>
      </div>`;
  });

  // Force clean reload of Instagram Embed script tag and global instance to guarantee successful reprocessing on theme swap
  setTimeout(() => {
    const scriptId = 'instagram-embed-script';
    
    // 1. Remove any existing instagram embed scripts
    const oldScript = document.getElementById(scriptId);
    if (oldScript) oldScript.remove();
    
    document.querySelectorAll('script[src*="instagram.com"]').forEach(s => s.remove());

    // 2. Clear out the global variable in order to force the library code to fully execute from scratch
    if (window.instgrm) {
      try {
        delete window.instgrm;
      } catch (e) {
        window.instgrm = undefined;
      }
    }

    // 3. Append the clean script which will automatically parse newly appended blockquote tags according to the updated data-theme
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, 100);

  startRealtimeTicker();
}

function buildSpotlight() {
  const grid = document.getElementById('spotlightGrid');
  if(!grid) return;
  grid.innerHTML = '';
  spotlightData = getData('spotlight', DEFAULT_SPOTLIGHT);

  const bgs = ['#eef4ff','#d6e6ff','#c8dcff','#bdd6ff'];

  spotlightData.forEach((d, i) => {
    const avatarSrc = d.avatarUrl || d.avatarBase64 || (d.avatar ? `asset/${d.avatar}` : '');
    let avatarContent = avatarSrc
      ? `<img src="${avatarSrc}" class="spotlight-real-avatar" loading="lazy" decoding="async" onerror="this.parentElement.textContent='${d.id}'">`
      : d.id;

    const bgSrc = d.bgUrl || d.bgBase64 || (d.bg ? `asset/${d.bg}` : '');
    let bannerStyle = bgSrc
      ? `background:url('${bgSrc}') center/cover no-repeat;`
      : `background:linear-gradient(135deg,${bgs[i % bgs.length]},var(--blue-300));`;

    grid.innerHTML += `
      <div class="spotlight-card reveal" onclick="openSpotlightModal(${i})" style="cursor: pointer;">
        <div class="spotlight-img" style="${bannerStyle}">
          <div class="spotlight-badge">⭐ Spotlight</div>
        </div>
        <div class="spotlight-body">
          <div class="spotlight-member">
            <div class="spotlight-avatar">${avatarContent}</div>
            <div>
              <div class="spotlight-mname">${d.name}</div>
              <div class="spotlight-mtype">${d.type}</div>
            </div>
          </div>
          <div class="spotlight-title">${d.title}</div>
          <div class="spotlight-desc">${d.desc}</div>
          <div class="spotlight-tags">
            ${(d.tags||[]).map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          ${d.link ? `<a href="${d.link}" target="_blank" class="spotlight-link" onclick="event.stopPropagation()">Visit Instagram ↗</a>` : ''}
        </div>
      </div>
    `;
  });
}

function buildMembers() {
  const grid = document.getElementById('memberGrid');
  if(!grid) return;
  grid.innerHTML = '';
  memberData = getData('members', DEFAULT_MEMBERS);

  const igSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:18px;height:18px;"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>`;
  const ttSVG = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="width:18px;height:18px;"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 0 006.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>`;

  memberData.forEach(d => {
    const imgSrc = d.avatarUrl || d.avatarBase64 || (d.avatar ? `asset/${d.avatar}` : '');
    const avatarContent = imgSrc
      ? `<img src="${imgSrc}" class="member-real-avatar" loading="lazy" decoding="async" onerror="this.parentElement.textContent='${d.id}'">`
      : d.id;
    const igBtn  = d.ig     ? `<a href="https://instagram.com/${d.ig.replace('@','')}" target="_blank" class="member-social ig-link" title="Instagram">${igSVG}</a>` : '';
    const ttBtn  = d.tiktok ? `<a href="https://tiktok.com/@${d.tiktok.replace('@','')}" target="_blank" class="member-social tt-link" title="TikTok">${ttSVG}</a>` : '';
    const socials = (igBtn || ttBtn) ? `<div class="member-socials">${igBtn}${ttBtn}</div>` : '';
    grid.innerHTML += `
      <div class="member-card">
        <div class="member-avatar">${avatarContent}</div>
        <div class="member-name">${d.name}</div>
        <div class="member-role">${d.role}</div>
        <span class="member-tag">${d.tag}</span>
        ${socials}
      </div>
    `;
  });

  // Re-attach our luxurious 3D Mouse Movement hover effects to members
  initMemberCardHoverAnimations();
}

function initMemberCardHoverAnimations() {
  const cards = document.querySelectorAll('.member-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        scale: 1.05,
        duration: 0.35,
        ease: "power2.out"
      });
    });

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // Precision micro tilt rotation
      gsap.to(card, {
        rotationY: (x / rect.width) * 16,
        rotationX: -(y / rect.height) * 16,
        duration: 0.15,
        ease: "power2.out"
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    });
  });
}

function buildBoard(){
  const grid = document.getElementById('boardGrid');
  if(!grid) return;
  grid.innerHTML = '';
  boardData = getData('pengurus', DEFAULT_BOARD);

  const igSVG = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:13px;height:13px;flex-shrink:0;"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>`;
  const ttSVG  = `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="width:13px;height:13px;flex-shrink:0;"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 0 006.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>`;

  const bannerPalettes = [
    ['#2d6ef7','#1240a8'],
    ['#1240a8','#0b2d6e'],
    ['#3b5bdb','#1971c2'],
    ['#2b6cb0','#1a3a6e'],
    ['#364fc7','#1e3a8a'],
  ];

  const bannerDeco = `<svg class="board-banner-deco" viewBox="0 0 260 108" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <circle cx="200" cy="-10" r="80" fill="white"/>
    <circle cx="20"  cy="90"  r="50" fill="white"/>
    <circle cx="130" cy="60"  r="30" fill="white" opacity="0.5"/>
    <rect x="160" y="60" width="40" height="40" rx="8" fill="white" opacity="0.4" transform="rotate(20 180 80)"/>
  </svg>`;

  boardData.forEach((d, i) => {
    const imgSrc = d.avatarUrl || d.avatarBase64 || (d.avatar ? `asset/${d.avatar}` : '');
    const [c1, c2] = bannerPalettes[i % bannerPalettes.length];
    const bannerBg = `background:linear-gradient(135deg,${c1},${c2});`;

    const avatarContent = imgSrc
      ? `<img src="${imgSrc}" alt="${d.name}" loading="lazy" decoding="async" onerror="this.style.display='none';this.parentElement.textContent='${d.id}'">`
      : d.id;

    const igBtn  = d.ig     ? `<a href="https://instagram.com/${d.ig.replace('@','')}" target="_blank" class="board-social ig-link">${igSVG} ${d.ig}</a>` : '';
    const ttBtn  = d.tiktok ? `<a href="https://tiktok.com/@${d.tiktok.replace('@','')}" target="_blank" class="board-social tt-link">${ttSVG} ${d.tiktok}</a>` : '';

    grid.innerHTML += `
      <div class="board-card">
        <div class="board-card-inner">
          <div class="board-banner-img" style="${bannerBg}">
            ${bannerDeco}
          </div>
          <div class="board-avatar-circle">${avatarContent}</div>
        </div>
        <div class="board-info">
          <div class="board-name">${d.name}</div>
          <div class="board-pos">${d.pos}</div>
          <div style="display:flex;flex-direction:column;gap:4px;margin-top:8px;align-items:center;">
            ${igBtn}${ttBtn}
          </div>
        </div>
      </div>`;
  });

  // Attach Epic Sliding and dynamic lock-in ScrollTrigger animation to Board Cards
  initBoardCardScrollAnimations();
}

function initBoardCardScrollAnimations() {
  const cards = document.querySelectorAll('#boardGrid .board-card');
  if(typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && cards.length) {
    gsap.from(cards, {
      x: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: '#boardGrid',
        start: 'top 85%',
        toggleActions: 'play none none none',
      }
    });
  }
}

function buildEvents() {
  const list = document.getElementById('eventsList');
  if(!list) return;
  list.innerHTML='';

  eventsData = getData('events', DEFAULT_EVENTS);

  eventsData.forEach(e=>{
    const bannerImg = e.bannerUrl ? `<img src="${e.bannerUrl}" class="event-banner-img" loading="lazy" decoding="async" style="width:100%; height:160px; object-fit:cover; border-radius:12px; margin-bottom:16px;">` : '';
    list.innerHTML += `
      <div class="event-card reveal">
        ${bannerImg}
        <div style="display:flex; gap:16px;">
          <div class="event-date">
            <div class="event-day">${e.day}</div>
            <div class="event-month">${e.month}</div>
          </div>
          <div class="event-info">
            <div class="event-title">${e.title}</div>
            <div class="event-desc">${e.desc}</div>
            ${e.time     ? `<div class="event-meta-row"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" style="margin-right:4px;vertical-align:-1px;flex-shrink:0;"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>${e.time}</div>` : ''}
            ${e.location ? `<div class="event-meta-row"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" style="margin-right:4px;vertical-align:-1px;flex-shrink:0;"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/></svg>${e.location}</div>` : ''}
            ${e.slot     ? `<div class="event-meta-row"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" style="margin-right:4px;vertical-align:-1px;flex-shrink:0;"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>${e.slot}</div>` : ''}
          </div>
        </div>
      </div>
    `;
  });
}

function buildHeroStats() {
  const DEFAULT_HERO_STATS = {
    members: { value: '120+', label: 'Member Aktif' },
    karya:   { value: '48',   label: 'Karya Bulan Ini' },
    event:   { value: '12',   label: 'Event Tahunan' },
  };
  const saved = localStorage.getItem('youru_hero_stats');
  const stats = saved ? JSON.parse(saved) : DEFAULT_HERO_STATS;

  const msV = document.getElementById('heroStatMembers');
  const msL = document.getElementById('heroLabelMembers');
  const kS = document.getElementById('heroStatKarya');
  const kL = document.getElementById('heroLabelKarya');
  const eS = document.getElementById('heroStatEvent');
  const eL = document.getElementById('heroLabelEvent');

  if(msV) msV.textContent = stats.members.value;
  if(msL) msL.textContent = stats.members.label;
  if(kS) kS.textContent = stats.karya.value;
  if(kL) kL.textContent = stats.karya.label;
  if(eS) eS.textContent = stats.event.value;
  if(eL) eL.textContent = stats.event.label;
}


// ── NAVIGATION & TAB PAGINATION ──
function showPage(page, pushHistory) {
  if (pushHistory === undefined) pushHistory = true;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const targetPage = document.getElementById('page-' + page);
  if(targetPage) targetPage.classList.add('active');

  document.querySelectorAll('#nav-home, #nav-about, #nav-dashboard, #nav-merch').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + page);
  if (navEl) navEl.classList.add('active');

  if (page === 'dashboard') buildDashboard();
  if (page === 'merch') buildMerch();

  window.scrollTo({ top: 0, behavior: 'instant' });
  observeReveal();

  if (pushHistory) {
    history.pushState({ page: page }, '', '?p=' + page);
  }
}

function scrollToSection(id) {
  const homePage = document.getElementById('page-home');
  if (homePage && !homePage.classList.contains('active')) {
    showPage('home');
  }
  setTimeout(function() {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, homePage && homePage.classList.contains('active') ? 0 : 80);
}

// Tangani tombol back/forward browser
window.addEventListener('popstate', function(e) {
  const page = (e.state && e.state.page) ? e.state.page : 'home';
  showPage(page, false);
});

// Set state awal saat halaman pertama dibuka
(function() {
  const params = new URLSearchParams(location.search);
  const p = params.get('p');
  const page = ['about','dashboard','merch'].includes(p) ? p : 'home';
  history.replaceState({ page: page }, '', page === 'home' ? location.pathname : '?p=' + page);
  if (page !== 'home') showPage(page, false);
})();

// ── SCROLL REVEAL ──
function observeReveal() {
  const items = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(el => obs.observe(el));
}

// ── BACKGROUND PARALLAX SCROLL ──
function initBackgroundParallax() {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.to('.parallax-bg-1', {
      y: 120,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });
    
    gsap.to('.parallax-bg-2', {
      y: -120,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
      }
    });
  }
}

// ── CUSTOM MODAL & EMOTIONAL TOASTS ──
function openSpotlightModal(index) {
  const item = spotlightData[index];
  if (!item) return;

  const modal = document.getElementById('spotlightModal');
  const sHero = document.getElementById('smHero');
  const sAvatar = document.getElementById('smAvatar');
  const sName = document.getElementById('smName');
  const sType = document.getElementById('smType');
  const sTitle = document.getElementById('smTitle');
  const sDesc = document.getElementById('smDesc');
  const sTags = document.getElementById('smTags');
  const sLink = document.getElementById('smLink');

  if (!modal) return;

  // Set hero image
  const bgSrc = item.bgUrl || item.bgBase64 || (item.bg ? `asset/${item.bg}` : '');
  if (bgSrc) {
    sHero.style.backgroundImage = `url('${bgSrc}')`;
    sHero.style.display = 'block';
  } else {
    sHero.style.backgroundImage = 'none';
    sHero.style.display = 'none';
  }

  // Set avatar details
  const avatarSrc = item.avatarUrl || item.avatarBase64 || (item.avatar ? `asset/${item.avatar}` : '');
  if (sAvatar) {
    sAvatar.innerHTML = avatarSrc 
      ? `<img src="${avatarSrc}" alt="${item.name}" onerror="this.parentElement.textContent='${item.id}'">`
      : item.id;
  }

  if (sName) sName.textContent = item.name;
  if (sType) sType.textContent = item.type;
  if (sTitle) sTitle.textContent = item.title;
  if (sDesc) sDesc.textContent = item.desc;

  if (sTags) {
    sTags.innerHTML = (item.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
  }

  if (sLink) {
    if (item.link) {
      sLink.href = item.link;
      sLink.style.display = 'inline-flex';
    } else {
      sLink.style.display = 'none';
    }
  }

  modal.classList.add('show');
}

function closeSpotlightModalBox() {
  const modal = document.getElementById('spotlightModal');
  if (modal) modal.classList.remove('show');
}

function closeSpotlightModal(event) {
  if (event.target === event.currentTarget) {
    closeSpotlightModalBox();
  }
}

function showWelcomeToast() {
  const toast = document.getElementById('welcomeToast');
  if (!toast) return;
  toast.classList.add('show');
  
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(toast, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    });
  }
}

function dismissWelcomeToast() {
  const toast = document.getElementById('welcomeToast');
  if (!toast) return;
  
  if (typeof gsap !== 'undefined') {
    gsap.to(toast, {
      y: 50,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        toast.classList.remove('show');
      }
    });
  } else {
    toast.classList.remove('show');
  }
}

// ── INITIALIZATION ──
document.addEventListener('DOMContentLoaded', () => {
  buildHeroStats();
  buildInstaGrid();
  buildSpotlight();
  buildMembers();
  buildBoard();
  buildEvents();
  observeReveal();
  initBackgroundParallax();
  
  // Slide up welcome toast elegantly with slight delay for dramatic entrance
  setTimeout(showWelcomeToast, 1200);
});

// ══════════════════════════════════════
// WINDOW ASSIGNMENTS FOR INLINE ACTION BINDINGS
// ══════════════════════════════════════
window.toggleDarkMode = toggleDarkMode;
window.updateDarkIcon = updateDarkIcon;
window.toggleMenu = toggleMenu;
window.closeMenu  = closeMenu;
window.showPage = showPage;
window.scrollToSection = scrollToSection;
window.openSpotlightModal = openSpotlightModal;
window.closeSpotlightModalBox = closeSpotlightModalBox;
window.closeSpotlightModal = closeSpotlightModal;
window.dismissWelcomeToast = dismissWelcomeToast;
window.showWelcomeToast = showWelcomeToast;