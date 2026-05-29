// ── DARK MODE ──
(function(){
  const saved = localStorage.getItem('youru_theme');
  if(saved === 'dark') document.documentElement.setAttribute('data-theme','dark');
})();

function toggleDarkMode(){
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  if(isDark === 'dark'){
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('youru_theme','light');
  } else {
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('youru_theme','dark');
  }
  updateDarkBtn();
}

function updateDarkBtn(){
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const btn = document.getElementById('darkModeBtn');
  if(!btn) return;
  btn.innerHTML = isDark
    ? `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" style="margin-right:6px;vertical-align:-2px"><path d="M8 1v1M8 14v1M1 8h1M14 8h1M3.05 3.05l.71.71M12.24 12.24l.71.71M3.05 12.95l.71-.71M12.24 3.76l.71-.71" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.4"/></svg> Mode Terang`
    : `<svg width="14" height="14" viewBox="0 0 16 16" fill="none" style="margin-right:6px;vertical-align:-2px"><path d="M13.5 10.5A6 6 0 015.5 2.5a6 6 0 108 8z" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg> Mode Malam`;
}

// Ensure toggle function and buttons bind cleanly on load
document.addEventListener('DOMContentLoaded', updateDarkBtn);

window.onload = function () {
  updateDarkBtn();
  const loginScreen = document.getElementById('loginScreen');
  const adminPanel  = document.getElementById('adminPanel');
  if(sessionStorage.getItem('youru_logged')){
    if(loginScreen) loginScreen.style.display = 'none';
    if(adminPanel) adminPanel.style.display  = 'block';
    initPanel();
  }
};

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
const DEFAULT_ADMINS = [{username:'admin', password:'youru2024'}];

// ══════════════════════════════════════
// IMAGE PREVIEW
// ══════════════════════════════════════
function previewImg(input, previewId, dataId){
  const file = input.files[0];
  if(!file) return;
  if(file.size > 3 * 1024 * 1024){
    showToast('File terlalu besar (max 3MB)','error');
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e){
    document.getElementById(previewId).src = e.target.result;
    document.getElementById(dataId).value  = e.target.result;
  };
  reader.readAsDataURL(file);
}

// ══════════════════════════════════════
// MODAL HELPERS
// ══════════════════════════════════════
let _modalCallback = null;

function openConfirm(title, msg, onConfirm){
  document.getElementById('modalTitle').textContent  = title;
  document.getElementById('modalMsg').textContent    = msg;
  const btn = document.getElementById('modalConfirmBtn');
  btn.onclick = function(){
    closeModal();
    if(onConfirm) onConfirm();
  };
  document.getElementById('confirmModal').classList.add('show');
}

function closeModal(){
  document.getElementById('confirmModal').classList.remove('show');
}

// Close modal on ESC and clicks
document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });
document.addEventListener('DOMContentLoaded', ()=>{
  const m = document.getElementById('confirmModal');
  if(m) {
    m.addEventListener('click', function(e){
      if(e.target === this) closeModal();
    });
  }
});

// ══════════════════════════════════════
// STORAGE
// ══════════════════════════════════════
function getData(key, def){
  const raw = localStorage.getItem('youru_' + key);
  return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(def));
}
function saveData(key,val){
  localStorage.setItem('youru_' + key, JSON.stringify(val));
}

// ══════════════════════════════════════
// ADMINS STORAGE MANAGEMENT
// ══════════════════════════════════════
function getAdmins(){
  const raw = localStorage.getItem('youru_admins');
  return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULT_ADMINS));
}
function saveAdmins(arr){
  localStorage.setItem('youru_admins', JSON.stringify(arr));
}

// ══════════════════════════════════════
// TOAST NOTIFICATIONS (multi-instance, progress bar)
// ══════════════════════════════════════
const TOAST_ICONS = {
  success: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  error:   '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
  info:    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><line x1="8" y1="7" x2="8" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="8" cy="4.5" r="1" fill="currentColor"/></svg>'
};
const TOAST_TITLES = {
  success: 'Berhasil',
  error:   'Gagal',
  info:    'Informasi'
};

function showToast(msg, type='success', duration=3500){
  const container = document.getElementById('toastContainer');
  if(!container) return;
  const item = document.createElement('div');
  item.className = `toast-item ${type}`;
  item.style.setProperty('--duration', duration+'ms');
  item.innerHTML = `
    <div class="toast-icon-wrap">${TOAST_ICONS[type]||'ℹ'}</div>
    <div class="toast-body">
      <div class="toast-title">${TOAST_TITLES[type]||'Info'}</div>
      <div class="toast-msg">${msg}</div>
    </div>
    <button class="toast-close" onclick="this.parentElement.style.display='none'"><svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
    <div class="toast-progress"></div>
  `;
  container.appendChild(item);

  // trigger enter animation
  requestAnimationFrame(()=>{ requestAnimationFrame(()=>{ item.classList.add('show'); }); });

  // auto dismiss
  const timer = setTimeout(()=> dismissToast(item), duration);
  item._timer = timer;
}

function dismissToast(el){
  if(!el || !el.parentElement) return;
  clearTimeout(el._timer);
  el.classList.remove('show');
  el.classList.add('hide');
  setTimeout(()=>{ if(el.parentElement) el.parentElement.removeChild(el); }, 350);
}

// ══════════════════════════════════════
// LOGIN
// ══════════════════════════════════════
function doLogin(){
  const loginScreen = document.getElementById('loginScreen');
  const adminPanel  = document.getElementById('adminPanel');
  const loginError  = document.getElementById('loginError');
  const u = document.getElementById('loginUser').value.trim();
  const p = document.getElementById('loginPass').value.trim();

  const data = getAdmins();
  const cek = data.find(x => x.username==u && x.password==p);

  if(cek){
    sessionStorage.setItem('youru_logged', u);
    if(loginScreen) loginScreen.style.display = 'none';
    if(adminPanel) adminPanel.style.display  = 'block';
    initPanel();
    showToast('Login berhasil');
  } else {
    if(loginError) loginError.style.display = 'flex';
  }
}

function doLogout(){
  sessionStorage.removeItem('youru_logged');
  location.reload();
}

// ══════════════════════════════════════
// SIDEBAR / TAB NAVIGATION
// ══════════════════════════════════════
function switchTab(tab){
  document.querySelectorAll('.tab-content').forEach(x=>{
    x.classList.remove('active');
  });

  document.querySelectorAll('.sidebar-item').forEach(x=>{
    x.classList.remove('active');
  });

  const contentEl = document.getElementById('content-' + tab);
  const tabEl = document.getElementById('tab-' + tab);
  if(contentEl) contentEl.classList.add('active');
  if(tabEl) tabEl.classList.add('active');

  renderTab(tab);

  if(window.innerWidth < 680){
    toggleSidebar(false);
  }
}

function renderTab(tab){
  if(tab=='overview') renderOverview();
  if(tab=='members') renderMembers();
  if(tab=='spotlight') renderSpotlight();
  if(tab=='events') renderEvents();
  if(tab=='instagram') renderInsta();
  if(tab=='pengurus') renderPengurus();
  if(tab=='dashboard') renderDashActivity();
  if(tab=='merch') renderMerch();
  if(tab=='settings') renderSettings();
}

function toggleSidebar(force=null){
  const sb = document.querySelector('.sidebar');
  const ov = document.getElementById('sidebarOverlay');
  if(!sb || !ov) return;

  if(force===false){
    sb.classList.remove('mobile-open');
    ov.classList.remove('show');
    return;
  }

  sb.classList.toggle('mobile-open');
  ov.classList.toggle('show');
}

// ══════════════════════════════════════
// OVERVIEW (Upgraded 14-days expiration window filter)
// ══════════════════════════════════════
const DEFAULT_HERO_STATS = {
  members: { value: '120+', label: 'Member Aktif' },
  karya:   { value: '48',   label: 'Karya Bulan Ini' },
  event:   { value: '12',   label: 'Event Tahunan' },
};

function getHeroStats(){
  const raw = localStorage.getItem('youru_hero_stats');
  return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULT_HERO_STATS));
}

function renderOverview(){
  // Upgraded: 14 days expiration logic (14 * 24 * 60 * 60 * 1000)
  const WEEK = 14 * 24 * 60 * 60 * 1000;
  const now  = Date.now();
  const activePosts = getData('insta', DEFAULT_INSTA).filter(d => !d.addedAt || (now - d.addedAt) < WEEK);

  const mEl = document.getElementById('statMembers');
  const sEl = document.getElementById('statSpotlight');
  const eEl = document.getElementById('statEvents');
  const pEl = document.getElementById('statPosts');

  if(mEl) mEl.innerText = getData('members', DEFAULT_MEMBERS).length;
  if(sEl) sEl.innerText = getData('spotlight', DEFAULT_SPOTLIGHT).length;
  if(eEl) eEl.innerText = getData('events', DEFAULT_EVENTS).length;
  if(pEl) pEl.innerText = activePosts.length;

  const hs = getHeroStats();
  const keys = ['members','karya','event'];
  keys.forEach((k, i) => {
    const valEl = document.getElementById('hsVal' + i);
    const lblEl = document.getElementById('hsLbl' + i);
    if(valEl) valEl.value = hs[k].value;
    if(lblEl) lblEl.value = hs[k].label;
    updateStatPreview(i);
  });
}

function updateStatPreview(i){
  const val = document.getElementById('hsVal' + i);
  const lbl = document.getElementById('hsLbl' + i);
  const prev = document.getElementById('prev' + i);
  const prevL = document.getElementById('prevL' + i);
  if(val && prev)  prev.textContent  = val.value  || '—';
  if(lbl && prevL) prevL.textContent = lbl.value  || '—';
}

document.addEventListener('DOMContentLoaded', ()=>{
  [0,1,2].forEach(i => {
    const v = document.getElementById('hsVal' + i);
    const l = document.getElementById('hsLbl' + i);
    if(v) v.addEventListener('input', () => updateStatPreview(i));
    if(l) l.addEventListener('input', () => updateStatPreview(i));
  });
});

function saveHeroStats(){
  const keys = ['members','karya','event'];
  const stats = {};
  keys.forEach((k, i) => {
    const val = (document.getElementById('hsVal' + i).value.trim()) || DEFAULT_HERO_STATS[k].value;
    const lbl = (document.getElementById('hsLbl' + i).value.trim()) || DEFAULT_HERO_STATS[k].label;
    stats[k] = { value: val, label: lbl };
  });
  localStorage.setItem('youru_hero_stats', JSON.stringify(stats));
  showToast('Statistik hero berhasil disimpan!');
}

function resetHeroStats(){
  openConfirm('Reset Statistik', 'Kembalikan angka statistik ke nilai default?', ()=>{
    localStorage.removeItem('youru_hero_stats');
    renderOverview();
    showToast('Statistik direset ke default', 'info');
  });
}

// ══════════════════════════════════════
// MEMBERS MANAGEMENT
// ══════════════════════════════════════
function addMember(){
  const id   = document.getElementById('mId').value.trim().toUpperCase();
  const name = document.getElementById('mName').value.trim();
  const role = document.getElementById('mRole').value.trim();
  const tag  = document.getElementById('mTag').value;
  const ig   = document.getElementById('mIg').value.trim();
  const tt   = document.getElementById('mTt').value.trim();
  const avatarBase64 = document.getElementById('mAvatarData').value || '';
  const avatarUrl = document.getElementById('mAvatarUrl').value.trim() || '';

  if(!id || !name || !role){
    showToast('Lengkapi data anggota','error');
    return;
  }

  let data = getData('members', DEFAULT_MEMBERS);
  if(data.find(x=>x.id==id)){
    showToast('ID sudah ada','error');
    return;
  }

  data.push({ id, name, role, tag, ig, tiktok: tt, avatarBase64, avatarUrl, avatar:'' });
  saveData('members', data);

  document.getElementById('mId').value='';
  document.getElementById('mName').value='';
  document.getElementById('mRole').value='';
  document.getElementById('mIg').value='';
  document.getElementById('mTt').value='';
  document.getElementById('mAvatarData').value='';
  document.getElementById('mAvatarFile').value='';
  document.getElementById('mAvatarUrl').value='';
  document.getElementById('mAvatarPreview').src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='40' fill='%23eef4ff'/%3E%3Ccircle cx='40' cy='30' r='14' fill='%237ab0ff'/%3E%3Cellipse cx='40' cy='65' rx='22' ry='16' fill='%237ab0ff'/%3E%3C/svg%3E";

  renderMembers();
  renderOverview();
  showToast('Anggota ditambahkan');
}

function deleteMember(i){
  openConfirm('Hapus Anggota', 'Yakin ingin menghapus anggota ini?', ()=>{
    let data = getData('members', DEFAULT_MEMBERS);
    data.splice(i,1);
    saveData('members', data);
    renderMembers();
    renderOverview();
    showToast('Anggota berhasil dihapus');
  });
}

function renderMembers(){
  let data = getData('members', DEFAULT_MEMBERS);
  const el = document.getElementById('memberList');
  if(!el) return;
  if(data.length==0){
    el.innerHTML='<div class="empty-state">Belum ada anggota</div>';
    return;
  }
  el.innerHTML = data.map((d,i)=>{
    const src = d.avatarUrl || d.avatarBase64 || (d.avatar ? `asset/${d.avatar}` : '');
    const av  = src ? `<img src="${src}" onerror="this.parentElement.textContent='${d.id}'" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : d.id;
    const igLink  = d.ig   ? `<a href="https://instagram.com/${d.ig.replace('@','')}" target="_blank" style="font-size:0.68rem;color:#e1306c;font-weight:700;text-decoration:none;"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg> ${d.ig}</a>` : '';
    const ttLink  = d.tiktok ? `<a href="https://tiktok.com/@${d.tiktok.replace('@','')}" target="_blank" style="font-size:0.68rem;color:#000;font-weight:700;text-decoration:none;"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg> ${d.tiktok}</a>` : '';
    return `
    <div class="data-item">
      <div class="data-item-avatar">${av}</div>
      <div class="data-item-info">
        <div class="data-item-name">${d.name}</div>
        <div class="data-item-sub">${d.role} · <span style="color:var(--blue-600)">${d.tag}</span></div>
        <div style="display:flex;gap:8px;margin-top:4px;flex-wrap:wrap;">${igLink}${ttLink}</div>
      </div>
      <button class="btn-delete" onclick="deleteMember(${i})">Hapus</button>
    </div>`;
  }).join('');
}

// ══════════════════════════════════════
// SPOTLIGHT MANAGEMENT
// ══════════════════════════════════════
function renderSpotlight(){
  let data = getData('spotlight', DEFAULT_SPOTLIGHT);
  const el = document.getElementById('spotlightList');
  if(!el) return;
  if(data.length==0){
    el.innerHTML='<div class="empty-state">Belum ada spotlight</div>';
    return;
  }
  el.innerHTML = data.map((d,i)=>{
    const src = d.avatarUrl || d.avatarBase64 || (d.avatar ? `asset/${d.avatar}` : '');
    const av  = src ? `<img src="${src}" onerror="this.parentElement.textContent='${d.id}'" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : d.id;
    return `
    <div class="data-item">
      <div class="data-item-avatar">${av}</div>
      <div class="data-item-info">
        <div class="data-item-name">${d.name}</div>
        <div class="data-item-sub">${d.type}</div>
      </div>
      <button class="btn-delete" onclick="deleteSpotlight(${i})">Hapus</button>
    </div>
  `}).join('');
}

function addSpotlight(){
  const id    = document.getElementById('sId').value.trim().toUpperCase();
  const name  = document.getElementById('sName').value.trim();
  const type  = document.getElementById('sType').value.trim();
  const title = document.getElementById('sTitle').value.trim();
  const desc  = document.getElementById('sDesc').value.trim();
  const tags  = document.getElementById('sTags').value.trim();
  const link  = document.getElementById('sLink').value.trim();
  const avatarBase64 = document.getElementById('sAvatarData').value || '';
  const bgBase64     = document.getElementById('sBgData').value || '';
  const avatarUrl    = document.getElementById('sAvatarUrl').value.trim() || '';
  const bgUrl        = document.getElementById('sBgUrl').value.trim() || '';

  if(!id || !name || !type){
    showToast('ID, nama, dan tipe wajib diisi','error');
    return;
  }

  let data = getData('spotlight', DEFAULT_SPOTLIGHT);
  data.push({
    id, name, type, title, desc,
    tags: tags ? tags.split(',').map(t=>t.trim()) : [],
    link,
    avatarBase64,
    bgBase64,
    avatarUrl,
    bgUrl
  });
  saveData('spotlight', data);

  document.getElementById('sId').value='';
  document.getElementById('sName').value='';
  document.getElementById('sType').value='';
  document.getElementById('sTitle').value='';
  document.getElementById('sDesc').value='';
  document.getElementById('sTags').value='';
  document.getElementById('sLink').value='';
  document.getElementById('sAvatarData').value='';
  document.getElementById('sBgData').value='';
  document.getElementById('sAvatarUrl').value='';
  document.getElementById('sBgUrl').value='';

  renderSpotlight();
  renderOverview();
  showToast('Spotlight ditambahkan');
}

function deleteSpotlight(i){
  openConfirm('Hapus Spotlight', 'Yakin ingin menghapus spotlight ini?', ()=>{
    let data = getData('spotlight', DEFAULT_SPOTLIGHT);
    data.splice(i,1);
    saveData('spotlight', data);
    renderSpotlight();
    renderOverview();
    showToast('Spotlight berhasil dihapus');
  });
}

// ══════════════════════════════════════
// EVENTS MANAGEMENT
// ══════════════════════════════════════
function renderEvents(){
  const data = getData('events', DEFAULT_EVENTS);
  const el   = document.getElementById('eventList');
  if(!el) return;
  if(data.length === 0){
    el.innerHTML = '<div class="empty-state">Belum ada event</div>';
    return;
  }
  const now = Date.now();
  el.innerHTML = data.map((d, i) => {
    const av = d.bannerUrl
      ? `<img src="${d.bannerUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;">`
      : `${d.day}<br><span style="font-size:0.55rem;">${d.month}</span>`;

    // Deadline badge
    let deadlineBadge = '';
    if (d.deadline) {
      const dl      = new Date(d.deadline).getTime();
      const expired = dl <= now;
      const daysLeft= Math.ceil((dl - now) / 86400000);
      if (expired) {
        deadlineBadge = `<span style="background:#fee2e2;color:#dc2626;font-size:0.62rem;font-weight:700;padding:2px 8px;border-radius:99px;margin-left:6px;">Berakhir</span>`;
      } else if (daysLeft <= 3) {
        deadlineBadge = `<span style="background:#fff7ed;color:#ea580c;font-size:0.62rem;font-weight:700;padding:2px 8px;border-radius:99px;margin-left:6px;">⚠ ${daysLeft}h lagi</span>`;
      } else {
        deadlineBadge = `<span style="background:#eff6ff;color:#2563eb;font-size:0.62rem;font-weight:600;padding:2px 8px;border-radius:99px;margin-left:6px;">${daysLeft} hari</span>`;
      }
    }

    return `
    <div class="data-item" style="${d.deadline && new Date(d.deadline).getTime() <= now ? 'opacity:0.5;' : ''}">
      <div class="data-item-avatar" style="border-radius:10px;font-size:1rem;font-weight:800;overflow:hidden;">${av}</div>
      <div class="data-item-info">
        <div class="data-item-name">${d.title} ${deadlineBadge}</div>
        <div class="data-item-sub">${d.type} · ${d.time||''} · ${d.location||''}</div>
        ${d.deadline ? `<div style="font-size:0.68rem;color:var(--text-light);margin-top:2px;">Deadline: ${d.deadline}</div>` : ''}
      </div>
      <button class="btn-delete" onclick="deleteEvent(${i})">Hapus</button>
    </div>
  `;
  }).join('');
}

function addEvent(){
  const title    = document.getElementById('eTitle').value.trim();
  const type     = document.getElementById('eType').value;
  const day      = document.getElementById('eDay').value.trim();
  const month    = document.getElementById('eMonth').value.trim();
  const time     = document.getElementById('eTime').value.trim();
  const desc     = document.getElementById('eDesc').value.trim();
  const loc      = document.getElementById('eLocation').value.trim();
  const slot     = document.getElementById('eSlot').value.trim();
  const bannerUrl= document.getElementById('eBannerUrl').value.trim() || '';
  const deadline = document.getElementById('eDeadline').value || '';

  if(!title || !day || !month){
    showToast('Nama event, tanggal, dan bulan wajib diisi','error');
    return;
  }

  let data = getData('events', DEFAULT_EVENTS);
  data.push({title, type, day, month, time, desc, location:loc, slot, bannerUrl, deadline});
  saveData('events', data);

  document.getElementById('eTitle').value='';
  document.getElementById('eDay').value='';
  document.getElementById('eMonth').value='';
  document.getElementById('eTime').value='';
  document.getElementById('eDesc').value='';
  document.getElementById('eLocation').value='';
  document.getElementById('eSlot').value='';
  document.getElementById('eBannerUrl').value='';
  document.getElementById('eDeadline').value='';

  renderEvents();
  renderOverview();
  showToast('Event ditambahkan');
}

function deleteEvent(i){
  openConfirm('Hapus Event', 'Yakin ingin menghapus event ini?', ()=>{
    let data = getData('events', DEFAULT_EVENTS);
    data.splice(i,1);
    saveData('events', data);
    renderEvents();
    renderOverview();
    showToast('Event berhasil dihapus');
  });
}

// ══════════════════════════════════════
// INSTAGRAM FEED (Upgraded 14-days expiration logic)
// ══════════════════════════════════════
function adminRelTime(ts){
  if(!ts) return 'Baru saja';
  const d = Date.now() - ts;
  const m = Math.floor(d / 60000);
  const h = Math.floor(d / 3600000);
  const dy = Math.floor(d / 86400000);
  if(m < 1)  return 'Baru saja';
  if(m < 60) return m + ' menit lalu';
  if(h < 24) return h + ' jam lalu';
  return dy + ' hari lalu';
}

function adminCountdown(ts){
  // Upgraded: 14 days dynamic countdown timer
  if(!ts) return { label: '14 hari tersisa', urgent: false };
  const msLeft  = (14 * 86400000) - (Date.now() - ts);
  if(msLeft <= 0) return { label: 'Kedaluwarsa', urgent: true };
  const h  = Math.floor(msLeft / 3600000);
  const dy = Math.floor(msLeft / 86400000);
  const urgent = h < 48; // Less than 2 days
  const label  = dy >= 1 ? dy + ' hari tersisa' : (h > 0 ? h + ' jam tersisa' : 'Segera kedaluwarsa');
  return { label, urgent };
}

let _adminTicker = null;
function startAdminRealtimeTicker(){
  if(_adminTicker) return;
  _adminTicker = setInterval(function(){
    // Update relative timestamps
    document.querySelectorAll('[data-admin-ts]').forEach(el => {
      el.textContent = adminRelTime(+el.getAttribute('data-admin-ts'));
    });
    // Update countdown badges
    document.querySelectorAll('[data-admin-expire]').forEach(el => {
      const { label, urgent } = adminCountdown(+el.getAttribute('data-admin-expire'));
      el.textContent = (urgent ? '⚠ ' : '') + label;
      el.style.background = urgent ? '#fff0f0' : 'var(--green-light,#f0fff4)';
      el.style.color       = urgent ? '#e53e3e' : 'var(--green,#276749)';
      el.style.border      = urgent
        ? '1px solid rgba(229,62,62,0.2)'
        : '1px solid rgba(56,161,105,0.2)';
    });

    // Auto-prune: clear expired posts (older than 14 days)
    const WEEK = 14 * 24 * 60 * 60 * 1000;
    const data  = getData('insta', DEFAULT_INSTA);
    const alive = data.filter(d => !d.addedAt || (Date.now() - d.addedAt) < WEEK);
    if(alive.length !== data.length){
      saveData('insta', alive);
      renderInsta();
      renderOverview();
      showToast((data.length - alive.length) + ' postingan kedaluwarsa dibersihkan otomatis', 'info');
    }
  }, 60000);
}

function renderInsta(){
  // Upgraded check to 14 days expiration
  const WEEK = 14 * 24 * 60 * 60 * 1000;
  const now  = Date.now();

  let data = getData('insta', DEFAULT_INSTA);
  const active = data.filter(d => !d.addedAt || (now - d.addedAt) < WEEK);
  if(active.length !== data.length){
    saveData('insta', active);
    data = active;
  }

  const el = document.getElementById('instaList');
  if(!el) return;

  if(data.length === 0){
    el.innerHTML = '<div class="empty-state">Belum ada postingan aktif</div>';
    return;
  }

  const clockSVG = `<svg width="10" height="10" viewBox="0 0 16 16" fill="none" style="margin-right:3px;vertical-align:-1px;flex-shrink:0;"><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.4"/><path d="M8 4.5v4l2.5 2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`;

  el.innerHTML = data.map((d, i) => {
    const { label, urgent } = adminCountdown(d.addedAt);
    const badgeStyle = urgent
      ? 'background:#fff0f0;color:#e53e3e;border:1px solid rgba(229,62,62,0.2);'
      : 'background:var(--green-light,#f0fff4);color:var(--green,#276749);border:1px solid rgba(56,161,105,0.2);';

    // Upgraded progress bar tracking to 14-days total
    const msLeft   = d.addedAt ? Math.max(0, (14 * 86400000) - (now - d.addedAt)) : 14 * 86400000;
    const pct      = Math.round((msLeft / (14 * 86400000)) * 100);
    const barColor = urgent ? '#e53e3e' : '#38a169';

    return `
    <div class="data-item" style="flex-direction:column;align-items:stretch;gap:10px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <div class="data-item-avatar" style="flex-shrink:0;background:linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366);color:white;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>
        </div>
        <div class="data-item-info" style="flex:1;min-width:0;">
          <div class="data-item-name">${d.name} <span style="font-size:0.7rem;color:var(--text-light);">(${d.id})</span></div>
          <div class="data-item-sub">
            ${d.type||''}
            ${d.addedAt ? `· <span data-admin-ts="${d.addedAt}">${adminRelTime(d.addedAt)}</span>` : ''}
          </div>
          <div class="data-item-sub" style="word-break:break-all;color:var(--blue-600);font-size:0.7rem;">${d.embedPermalink}</div>
        </div>
        <button class="btn-delete" style="flex-shrink:0;" onclick="deleteInsta(${i})">Hapus</button>
      </div>
      <div style="padding:0 4px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
          <span style="font-size:0.68rem;color:var(--text-light);">Masa aktif</span>
          <span data-admin-expire="${d.addedAt||''}" style="display:inline-flex;align-items:center;font-size:0.68rem;font-weight:700;padding:2px 8px;border-radius:999px;${badgeStyle}">
            ${clockSVG}${urgent ? '⚠ ' : ''}${label}
          </span>
        </div>
        <div style="width:100%;height:5px;background:var(--blue-50,#eef4ff);border-radius:999px;overflow:hidden;">
          <div style="height:100%;width:${pct}%;background:${barColor};border-radius:999px;transition:width 0.6s ease;"></div>
        </div>
      </div>
    </div>`;
  }).join('');

  startAdminRealtimeTicker();
}

function addInstaPost(){
  const id    = document.getElementById('iId').value.trim().toUpperCase();
  const name  = document.getElementById('iName').value.trim();
  const type  = document.getElementById('iType').value.trim();
  const desc  = document.getElementById('iDesc').value.trim();
  const embed = document.getElementById('iEmbed').value.trim();

  if(!id || !name || !embed){
    showToast('ID, nama, dan embed link wajib diisi','error');
    return;
  }

  let data = getData('insta', DEFAULT_INSTA);
  // Seed with addedAt set to now
  data.push({id, name, type, desc, time:'', addedAt: Date.now(), embedPermalink: embed});
  saveData('insta', data);

  document.getElementById('iId').value='';
  document.getElementById('iName').value='';
  document.getElementById('iType').value='';
  document.getElementById('iDesc').value='';
  document.getElementById('iEmbed').value='';

  renderInsta();
  renderOverview();
  showToast('Postingan ditambahkan');
}

function deleteInsta(i){
  openConfirm('Hapus Postingan', 'Yakin ingin menghapus postingan ini?', ()=>{
    let data = getData('insta', DEFAULT_INSTA);
    data.splice(i,1);
    saveData('insta', data);
    renderInsta();
    renderOverview();
    showToast('Postingan berhasil dihapus');
  });
}

// ══════════════════════════════════════
// TIM PENGURUS (Struktur Pengurus)
// ══════════════════════════════════════
const DEFAULT_PENGURUS = [
  { id:'SS', name:'Surya Santosa', pos:'Ketua Komunitas', ig:'@suryasantosa_', avatarUrl:'' },
  { id:'NH', name:'Nadia Hani', pos:'Wakil Ketua', ig:'@nadiahani', avatarUrl:'' },
  { id:'BR', name:'Bima Raditya', pos:'Sekretaris', ig:'@bima.rad', avatarUrl:'' },
  { id:'LM', name:'Luna Mega', pos:'Bendahara', ig:'@lunamega_', avatarUrl:'' },
  { id:'FA', name:'Farhan Ali', pos:'Koordinator Kreatif', ig:'@farhan.ali', avatarUrl:'' },
  { id:'CW', name:'Citra Wulan', pos:'Koordinator Event', ig:'@citrawulan', avatarUrl:'' },
  { id:'RP', name:'Rafi Putra', pos:'Koordinator Media', ig:'@rafiputra_', avatarUrl:'' },
  { id:'YA', name:'Yosi Ananda', pos:'Koordinator Mentor', ig:'@yosiananda', avatarUrl:'' },
];

function renderPengurus(){
  const data = getData('pengurus', DEFAULT_PENGURUS);
  const el = document.getElementById('pengurusList');
  if(!el) return;
  if(data.length==0){
    el.innerHTML='<div class="empty-state">Belum ada pengurus</div>';
    return;
  }
  el.innerHTML = data.map((d,i)=>{
    const src = d.avatarUrl || d.avatarBase64 || (d.avatar ? `asset/${d.avatar}` : '');
    const av  = src ? `<img src="${src}" onerror="this.parentElement.textContent='${d.id}'" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : d.id;
    const igLink = d.ig     ? `<a href="https://instagram.com/${d.ig.replace('@','')}" target="_blank" style="font-size:0.68rem;color:#e1306c;font-weight:700;text-decoration:none;"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg> ${d.ig}</a>` : '';
    const ttLink = d.tiktok ? `<a href="https://tiktok.com/@${d.tiktok.replace('@','')}" target="_blank" style="font-size:0.68rem;color:#000;font-weight:700;text-decoration:none;"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 0 006.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg> ${d.tiktok}</a>` : '';
    return `
    <div class="data-item">
      <div class="data-item-avatar">${av}</div>
      <div class="data-item-info">
        <div class="data-item-name">${d.name}</div>
        <div class="data-item-sub">${d.pos}</div>
        <div style="display:flex;gap:8px;margin-top:4px;flex-wrap:wrap;">${igLink}${ttLink}</div>
      </div>
      <button class="btn-delete" onclick="deletePengurus(${i})">Hapus</button>
    </div>`;
  }).join('');
}

function addPengurus(){
  const id   = document.getElementById('pgId').value.trim().toUpperCase();
  const name = document.getElementById('pgName').value.trim();
  const pos  = document.getElementById('pgPos').value.trim();
  const ig   = document.getElementById('pgIg').value.trim();
  const tt   = document.getElementById('pgTt').value.trim();
  const avatarBase64 = document.getElementById('pgAvatarData').value || '';
  const avatarUrl    = document.getElementById('pgAvatarUrl').value.trim() || '';

  if(!id || !name || !pos){
    showToast('Lengkapi data pengurus','error');
    return;
  }

  let data = getData('pengurus', DEFAULT_PENGURUS);
  if(data.find(x=>x.id==id)){
    showToast('ID sudah ada','error');
    return;
  }
  data.push({ id, name, pos, ig, tiktok: tt, avatarBase64, avatarUrl, avatar:'' });
  saveData('pengurus', data);

  document.getElementById('pgId').value='';
  document.getElementById('pgName').value='';
  document.getElementById('pgPos').value='';
  document.getElementById('pgIg').value='';
  document.getElementById('pgTt').value='';
  document.getElementById('pgAvatarData').value='';
  document.getElementById('pgAvatarUrl').value='';
  document.getElementById('pgAvatarFile').value='';
  document.getElementById('pgAvatarPreview').src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Ccircle cx='40' cy='40' r='40' fill='%23eef4ff'/%3E%3Ccircle cx='40' cy='30' r='14' fill='%237ab0ff'/%3E%3Cellipse cx='40' cy='65' rx='22' ry='16' fill='%237ab0ff'/%3E%3C/svg%3E";

  renderPengurus();
  showToast('Pengurus ditambahkan');
}

function deletePengurus(i){
  openConfirm('Hapus Pengurus', 'Yakin ingin menghapus pengurus ini dari daftar?', ()=>{
    let data = getData('pengurus', DEFAULT_PENGURUS);
    data.splice(i,1);
    saveData('pengurus', data);
    renderPengurus();
    showToast('Pengurus berhasil dihapus');
  });
}

// ══════════════════════════════════════
// SETTINGS
// ══════════════════════════════════════
function addAdmin(){
  const u = document.getElementById('newUser').value.trim();
  const p = document.getElementById('newPass').value.trim();

  if(!u){
    showToast('Username tidak boleh kosong','error');
    return;
  }
  if(p.length < 6){
    showToast('Password minimal 6 karakter','error');
    return;
  }

  let raw = localStorage.getItem('youru_admins');
  let data = raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULT_ADMINS));

  if(data.find(x => x.username === u)){
    showToast('Username sudah digunakan','error');
    return;
  }

  data.push({ username: u, password: p });
  localStorage.setItem('youru_admins', JSON.stringify(data));

  document.getElementById('newUser').value = '';
  document.getElementById('newPass').value = '';

  renderSettings();
  showToast('Akun admin berhasil ditambahkan');
}

// Upgraded with requirement 7: persistent localStorage write exactly after splice
function deleteAdmin(i){
  let data = getAdmins();
  if(data.length<=1){
    showToast('Minimal 1 admin harus ada','error');
    return;
  }
  openConfirm('Hapus Akun Admin', `Yakin ingin menghapus akun admin "${data[i].username}"?`, ()=>{
    data.splice(i,1);
    // CRITICAL BUGFIX: Persistent Localstorage output write for deleteAdmin sync
    localStorage.setItem('youru_admins', JSON.stringify(data));
    saveAdmins(data);
    renderSettings();
    showToast('Akun admin berhasil dihapus');
  });
}

function renderSettings(){
  const data = getAdmins();
  const el = document.getElementById('adminList');
  if(!el) return;

  el.innerHTML = data.map((d,i) => `
    <div class="data-item">
      <div class="data-item-avatar"><svg width="18" height="18" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5.5" r="3" stroke="currentColor" stroke-width="1.4"/><path d="M2 14c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg></div>
      <div class="data-item-info">
        <div class="data-item-name">${d.username}</div>
        <div class="data-item-sub">••••••••</div>
      </div>
      <button class="btn-delete" onclick="deleteAdmin(${i})">Hapus</button>
    </div>
  `).join('');
}

// ══════════════════════════════════════
// DASHBOARD ACTIVITY MANAGEMENT
// ══════════════════════════════════════
const DEFAULT_DASH_ACTIVITY = [
  { memberId:'YG', memberName:'Kaguya', platform:'instagram', count:8, period:'Mei 2025', note:'Konsisten upload editorial setiap minggu' },
  { memberId:'BU', memberName:'Yu (Byupsty)', platform:'instagram', count:6, period:'Mei 2025', note:'Fokus pada typography campaign' },
  { memberId:'HK', memberName:'Yudix', platform:'tiktok', count:5, period:'Mei 2025', note:'Video process & timelapse render' },
  { memberId:'CH', memberName:'Cahgo', platform:'instagram', count:7, period:'Mei 2025', note:'Seri motion design weekly' },
  { memberId:'EC', memberName:'Elan', platform:'tiktok', count:4, period:'Mei 2025', note:'Behind-the-scenes GFX' },
  { memberId:'AB', memberName:'Arka', platform:'instagram', count:5, period:'Mei 2025', note:'High-fashion art direction' },
  { memberId:'RS', memberName:'Rika Setiawan', platform:'instagram', count:3, period:'Mei 2025', note:'Editorial illustrasi' },
];

function renderDashActivity(){
  const data = getData('dash_activity', DEFAULT_DASH_ACTIVITY);
  const el = document.getElementById('dashActivityAdminList');
  if(!el) return;
  if(data.length === 0){
    el.innerHTML = '<div class="empty-state">Belum ada data aktivitas</div>';
    return;
  }
  const sorted = [...data].sort((a,b) => (b.count||0)-(a.count||0));
  const platformColor = p => p === 'tiktok' ? '#000' : '#e1306c';
  el.innerHTML = sorted.map((d,i)=>{
    const pLabel = d.platform === 'tiktok' ? 'TikTok' : 'Instagram';
    return `
    <div class="data-item">
      <div class="data-item-avatar" style="background:var(--blue-50);color:var(--blue-500);font-weight:800;font-size:0.75rem;">${d.memberId}</div>
      <div class="data-item-info">
        <div class="data-item-name">${d.memberName} <span style="font-size:0.7rem;font-weight:700;color:${platformColor(d.platform)};">· ${pLabel}</span></div>
        <div class="data-item-sub">${d.period||''} ${d.note ? '· ' + d.note : ''}</div>
      </div>
      <div style="font-size:1.4rem;font-weight:800;color:var(--navy);min-width:32px;text-align:center;">${d.count||0}</div>
      <button class="btn-delete" onclick="deleteDashActivity(${data.indexOf(d)})">Hapus</button>
    </div>`;
  }).join('');
}

function addDashActivity(){
  const id     = document.getElementById('daId').value.trim().toUpperCase();
  const name   = document.getElementById('daName').value.trim();
  const plat   = document.getElementById('daPlatform').value;
  const count  = parseInt(document.getElementById('daCount').value) || 0;
  const period = document.getElementById('daPeriod').value.trim();
  const note   = document.getElementById('daNote').value.trim();

  if(!id || !name){
    showToast('ID dan Nama anggota wajib diisi','error');
    return;
  }

  let data = getData('dash_activity', DEFAULT_DASH_ACTIVITY);
  // If same memberId + platform exists, update count
  const existing = data.findIndex(x => x.memberId === id && x.platform === plat);
  if(existing >= 0){
    data[existing] = { memberId:id, memberName:name, platform:plat, count, period, note };
    showToast('Data aktivitas diperbarui');
  } else {
    data.push({ memberId:id, memberName:name, platform:plat, count, period, note });
    showToast('Data aktivitas ditambahkan');
  }
  saveData('dash_activity', data);

  document.getElementById('daId').value = '';
  document.getElementById('daName').value = '';
  document.getElementById('daCount').value = '';
  document.getElementById('daPeriod').value = '';
  document.getElementById('daNote').value = '';

  renderDashActivity();
}

function deleteDashActivity(i){
  openConfirm('Hapus Data Aktivitas', 'Yakin ingin menghapus data aktivitas ini?', ()=>{
    let data = getData('dash_activity', DEFAULT_DASH_ACTIVITY);
    data.splice(i, 1);
    saveData('dash_activity', data);
    renderDashActivity();
    showToast('Data aktivitas dihapus');
  });
}

// ══════════════════════════════════════
// MERCHANDISE MANAGEMENT
// ══════════════════════════════════════
const DEFAULT_MERCH = [
  { id:'M1', name:'YOURU Studio Tee', price:189000, buyLink:'https://tokopedia.com', imageUrl:'', imageBase64:'', sizes:'S, M, L, XL, XXL', desc:'Kaos premium 100% combed cotton 30s dengan grafis eksklusif YOURU Studio. Sablon DTF berkualitas tinggi yang tahan lama.', color:'Hitam / Putih / Navy', stock:'Tersedia' },
  { id:'M2', name:'YOURU Oversized Hoodie', price:359000, buyLink:'https://tokopedia.com', imageUrl:'', imageBase64:'', sizes:'M, L, XL, XXL', desc:'Hoodie oversized fleece tebal 380gsm dengan embroidery logo YOURU di dada kiri.', color:'Charcoal / Cream', stock:'Terbatas' },
  { id:'M3', name:'YOURU Tote Bag', price:95000, buyLink:'https://tokopedia.com', imageUrl:'', imageBase64:'', sizes:'One Size (40×35 cm)', desc:'Canvas tote bag 12oz dengan sablon full-color artwork komunitas. Kuat, ramah lingkungan, dan estetik.', color:'Natural Canvas', stock:'Tersedia' }
];

function renderMerch(){
  const data = getData('merch', DEFAULT_MERCH);
  const el = document.getElementById('merchAdminList');
  if(!el) return;
  if(data.length === 0){
    el.innerHTML = '<div class="empty-state">Belum ada produk merchandise</div>';
    return;
  }
  const stockColor = s => s === 'Habis' ? '#dc2626' : s === 'Terbatas' ? '#d97706' : '#16a34a';
  const stockBg = s => s === 'Habis' ? '#fee2e2' : s === 'Terbatas' ? '#fef3c7' : '#dcfce7';

  el.innerHTML = data.map((d,i)=>{
    const imgSrc = d.imageUrl || d.imageBase64;
    const av = imgSrc
      ? `<img src="${imgSrc}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" onerror="this.parentElement.style.background='var(--blue-50)'">`
      : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--blue-300)" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>`;
    return `
    <div class="data-item" style="align-items:flex-start;">
      <div class="data-item-avatar" style="border-radius:8px;overflow:hidden;background:var(--blue-50);flex-shrink:0;">${av}</div>
      <div class="data-item-info" style="flex:1;">
        <div class="data-item-name">${d.name} <span style="font-size:0.7rem;font-weight:700;padding:2px 7px;border-radius:99px;background:${stockBg(d.stock)};color:${stockColor(d.stock)};">${d.stock||'Tersedia'}</span></div>
        <div class="data-item-sub" style="font-weight:700;color:#7c3aed;">Rp ${Number(d.price).toLocaleString('id-ID')}</div>
        <div class="data-item-sub">Ukuran: ${d.sizes||'—'}</div>
        ${d.buyLink ? `<a href="${d.buyLink}" target="_blank" style="font-size:0.68rem;color:var(--blue-600);text-decoration:none;font-weight:700;">🔗 Link Pembelian</a>` : ''}
      </div>
      <button class="btn-delete" style="flex-shrink:0;" onclick="deleteMerch(${i})">Hapus</button>
    </div>`;
  }).join('');
}

function addMerch(){
  const id        = document.getElementById('mrId').value.trim();
  const name      = document.getElementById('mrName').value.trim();
  const price     = parseInt(document.getElementById('mrPrice').value) || 0;
  const stock     = document.getElementById('mrStock').value;
  const buyLink   = document.getElementById('mrBuyLink').value.trim();
  const sizes     = document.getElementById('mrSizes').value.trim();
  const color     = document.getElementById('mrColor').value.trim();
  const desc      = document.getElementById('mrDesc').value.trim();
  const imageUrl  = document.getElementById('mrImageUrl').value.trim();
  const imageBase64 = document.getElementById('mrImageData').value || '';

  if(!id || !name){
    showToast('ID dan Nama produk wajib diisi','error');
    return;
  }

  let data = getData('merch', DEFAULT_MERCH);
  if(data.find(x => x.id === id)){
    showToast('ID produk sudah ada','error');
    return;
  }

  data.push({ id, name, price, stock, buyLink, sizes, color, desc, imageUrl, imageBase64 });
  saveData('merch', data);

  ['mrId','mrName','mrPrice','mrBuyLink','mrSizes','mrColor','mrDesc','mrImageUrl','mrImageData'].forEach(k => {
    const el = document.getElementById(k);
    if(el) el.value = '';
  });
  const file = document.getElementById('mrImageFile');
  if(file) file.value='';
  document.getElementById('mrImagePreview').src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23eef4ff' rx='8'/%3E%3Cpath d='M20 50l15-20 12 15 8-10 15 15H20z' fill='%237ab0ff' opacity='0.5'/%3E%3C/svg%3E";

  renderMerch();
  showToast('Produk merchandise ditambahkan');
}

function deleteMerch(i){
  openConfirm('Hapus Produk', 'Yakin ingin menghapus produk merchandise ini?', ()=>{
    let data = getData('merch', DEFAULT_MERCH);
    data.splice(i, 1);
    saveData('merch', data);
    renderMerch();
    showToast('Produk berhasil dihapus');
  });
}

// ══════════════════════════════════════
// SECURITY & DATA RESET
// ══════════════════════════════════════
function resetData(){
  openConfirm('Reset Semua Data', 'Semua data yang telah diubah akan dikembalikan ke default. Tindakan ini tidak bisa dibatalkan!', ()=>{
    localStorage.removeItem('youru_members');
    localStorage.removeItem('youru_spotlight');
    localStorage.removeItem('youru_events');
    localStorage.removeItem('youru_insta');
    localStorage.removeItem('youru_pengurus');
    localStorage.removeItem('youru_hero_stats');
    localStorage.removeItem('youru_dash_activity');
    localStorage.removeItem('youru_merch');
    initPanel();
    showToast('Semua data berhasil direset ke default', 'info');
  });
}

// ══════════════════════════════════════
// PANEL INITIALIZATION
// ══════════════════════════════════════
function initPanel(){
  renderOverview();
  renderMembers();
  renderSpotlight();
  renderEvents();
  renderInsta();
  renderPengurus();
  renderDashActivity();
  renderMerch();
  renderSettings();
}


window.toggleDarkMode = toggleDarkMode;
window.previewImg = previewImg;
window.closeModal = closeModal;
window.doLogin = doLogin;
window.doLogout = doLogout;
window.switchTab = switchTab;
window.toggleSidebar = toggleSidebar;
window.saveHeroStats = saveHeroStats;
window.resetHeroStats = resetHeroStats;
window.addMember = addMember;
window.deleteMember = deleteMember;
window.addSpotlight = addSpotlight;
window.deleteSpotlight = deleteSpotlight;
window.addEvent = addEvent;
window.deleteEvent = deleteEvent;
window.addInstaPost = addInstaPost;
window.deleteInsta = deleteInsta;
window.addPengurus = addPengurus;
window.deletePengurus = deletePengurus;
window.addDashActivity = addDashActivity;
window.deleteDashActivity = deleteDashActivity;
window.addMerch = addMerch;
window.deleteMerch = deleteMerch;
window.addAdmin = addAdmin;
window.deleteAdmin = deleteAdmin;
window.resetData = resetData;