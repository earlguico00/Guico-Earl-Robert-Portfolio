const WORK_ITEMS = [

  { category: "logos", type: "image", src: "img/sbu-logo.jpg", caption: "SBU College of Accountancy and Business Logo", aspect: "16 / 9" },
  { category: "logos", type: "image", src: "img/adcon-2024.jpg", caption: "Advertising Conference 2024", aspect: "16 / 9" },
  { category: "logos", type: "image", src: "img/past-feature.jpg", caption: "#PastAndFeature", aspect: "16 / 9" },
  { category: "logos", type: "image", src: "img/inflaties-gents.jpg", caption: "Inflaties & Gents Logo", aspect: "16 / 9" },

  { category: "video",   type: "video", src: "video/video/FORGE OUTRO (16_9) (1).mp4", caption: "Social Media Outro", aspect: "16 / 9", subcategory: "organizational" },
  { category: "video",   type: "video", src: "video/video/LAMP 2025 HIGHLIGHTS FINAL.mp4", caption: "LAMP 2025 Event Highlights", aspect: "16 / 9", subcategory: "organizational" },
  { category: "video",   type: "video", src: "video/video/FORGE TERM ENDER d7.mp4", caption: "SBJMA Forge Term Ender", aspect: "16 / 9", subcategory: "organizational" },
  { category: "video",   type: "video", src: "video/video/integration posting.mp4", caption: "Integration Week Entry", aspect: "16 / 9", subcategory: "organizational" },
  { category: "video",   type: "video", src: "video/video/ANIMATION OUTPUT.mp4", caption: "PAST TERM ORGANIZATIONS", aspect: "4 / 5", subcategory: "organizational" },
  { category: "video",   type: "video", src: "video/video/midterm exam goodluck message.mp4", caption: "Midterm Exam Good Luck Post", aspect: "4 / 5", subcategory: "organizational" },
  { category: "video",   type: "video", src: "video/video/TOP ONE Professional Organization.mp4", caption: "Top One Congratulatory Post", aspect: "4 / 5", subcategory: "organizational" },
  { category: "video",   type: "video", src: "video/video/NINOY AQUINO.mp4", caption: "Ninoy Aquino Holiday Pubmat", aspect: "4 / 5", subcategory: "organizational" },
  { category: "video",   type: "video", src: "video/video/GMM 2024 _ Guest Speakers.mp4", caption: "GMM 2024 - Guest Speakers", aspect: "9 / 16", subcategory: "organizational" },
  { category: "video",   type: "video", src: "video/video/SportsFest2026.mp4", caption: "SportsFest 2026 Congratulatory Post", aspect: "9 / 16", subcategory: "organizational" },
  { category: "video",   type: "video", src: "video/video/SCHOOL PROJECT_SVEN PROMO VIDEO.mp4", caption: "SCHOOL PROJECT #1", aspect: "16 / 9", subcategory: "academic" },
  { category: "video",   type: "video", src: "video/video/WHAT IS ADCON D2.mp4", caption: "What is ADCON 2026?", aspect: "16 / 9", subcategory: "academic" },
  { category: "video",   type: "video", src: "video/video/mad marls.mp4", caption: "MAD MARKS PROMOTIONAL", aspect: "9 / 16", subcategory: "academic" },
  
  { category: "poster", type: "image", src: "img/(TOP 1) BEEDAZLE POSTER COMPETITION.png", caption: "Top 1 Poster Competition", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/1.jpg", caption: "SBU @125 University Concert", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/SBU PISTA NG STO NINO 2025 DP.jpg", caption: "Pista ng Sto. Nino 2025 Profile Picture", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/FOR POSTING_IG.jpg", caption: "Event Poster — Adcon", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/mxi.jpeg", caption: "Event Poster — Adcon", aspect: "4 / 5" },
  { category: "poster", type: "image", src: "img/1.png", caption: "NCAA 101 Congratulatory Post", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/SBJMA FORGE COVER.png", caption: "SBJMA Forge Cover Photo", aspect: "2.63 / 1", full: true },
  { category: "poster", type: "image", src: "img/SBJMA FORGE CHIRSTMAS COVER.jpg", caption: "SBJMA Forge Cover Photo - Christmas", aspect: "2.63 / 1", full: true },
  { category: "poster", type: "image", src: "img/2.png", caption: "NCAA 101 Men's Basketball Congratulatory Post", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/3(1).png", caption: "NCAA 101 Red Sea Lions Congratulatory Post", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/red smashers 1.png", caption: "NCAA 101 Red Smashers Congratulatory Post 1", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/5(1).png", caption: "NCAA 101 Red Smashers Congratulatory Post 2", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/6.png", caption: "NCAA 101 Wood Pushers Congratulatory Post", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/1(1).png", caption: "Peso 2023: What's Your Power-Up?", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/2(1).png", caption: "Peso 2023: What's Your Power-Up? (Super Star)", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/3.png", caption: "Peso 2023: What's Your Power-Up? (Mega Mushroom)", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/4 (1).png", caption: "Peso 2023: What's Your Power-Up? (Ice Flower)", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/5.png", caption: "Peso 2023: What's Your Power-Up? (Super Leaf)", aspect: "5 / 5" },
  { category: "poster", type: "image", src: "img/CONGRATULATORY POSTER 1.png", caption: "33rd Agora Youth Awards Congratulatory Poster", aspect: "4 / 5"},
  { category: "poster", type: "image", src: "img/6(1).png", caption: "Peso 2023: What's Your Power-Up? (Double Cherry)", aspect: "5 / 5" },

  { category: "product",  type: "image", src: "img/totebag.png", caption: "SBU @125 University Tote Bag Mockup", aspect: "16 / 9" },
  { category: "product",  type: "image", src: "img/mango jam.png", caption: "Mango Jam Label Design", aspect: "16 / 9" },
  { category: "product",  type: "image", src: "img/calling card mock up.png", caption: "SBJMA Calling Card Mockup", aspect: "16 / 9" },

];

const SECTION_CONFIG = {
  video: [
    { value: "organizational", label: "Organizational" },
    { value: "institutional",       label: "Institutional" },
    { value: "academic",       label: "Academic" },
  ]
};

const galleryEl = document.getElementById('gallery');
const tabsEl = document.getElementById('tabs');

// true for any aspect ratio taller than it is wide (e.g. "9 / 16", "4 / 5")
function isPortrait(aspect){
  if (!aspect) return false;
  const [w, h] = aspect.split('/').map(n => parseFloat(n));
  return h > w;
}

// builds a single gallery card for one WORK_ITEMS entry
function createCard(item, i){
  const card = document.createElement('article');
  card.className = 'card';
  card.style.animationDelay = `${i * 0.06}s`;

  const media = document.createElement('div');
  media.className = 'card-media';

  // per-item aspect ratio (falls back to the CSS default if unset) —
  // applies to both images and videos
  if (item.aspect){
    media.style.aspectRatio = item.aspect;
  }
  // portrait items (9/16, 4/5, etc.) render smaller, 3-per-row —
  // see .card--portrait in CSS
  if (isPortrait(item.aspect)){
    card.classList.add('card--portrait');
  }
  // items flagged `full: true` span the entire row width (e.g. wide banners/cover photos)
  if (item.full){
    card.classList.add('card--full');
  }

  if (item.type === 'video'){
    media.classList.add('card-media--video');

    const video = document.createElement('video');
    video.src = encodeURI(item.src);
    video.muted = true;       // stays muted while sitting idle in the grid
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.addEventListener('error', () => {
      console.error('Video failed to load:', item.src, video.error);
    });

    // autoplay a muted, looping preview in the grid until it's opened fullscreen
    video.addEventListener('loadedmetadata', () => {
      video.play().catch(() => {}); // ignore if the browser blocks autoplay
    });

    // clicking anywhere on the card opens the video fullscreen
    media.addEventListener('click', () => openVideoFullscreen(video, media));

    media.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.caption;
    img.loading = 'lazy';
    media.appendChild(img);
  }

  const caption = document.createElement('p');
  caption.className = 'card-caption';
  caption.textContent = item.caption;

  card.appendChild(media);
  card.appendChild(caption);
  return card;
}

// builds the plain text header placed above a group of cards
function createSectionHeader(label){
  const header = document.createElement('h3');
  header.className = 'section-header';
  header.textContent = label;
  return header;
}

function renderGallery(category){
  galleryEl.innerHTML = '';
  galleryEl.className = `gallery gallery--${category}`;

  const items = WORK_ITEMS.filter(item => item.category === category);
  const sections = SECTION_CONFIG[category];

  if (!sections){
    // no headers configured for this tab -> render as one flat grid
    items.forEach((item, i) => galleryEl.appendChild(createCard(item, i)));
    layoutGalleryMasonry();
    return;
  }

  // grouped rendering: one header + its cards per configured section,
  // in the order given in SECTION_CONFIG
  let cardIndex = 0;
  sections.forEach(({ value, label }) => {
    const groupItems = items.filter(item => item.subcategory === value);
    if (groupItems.length === 0) return; // skip empty sections entirely

    galleryEl.appendChild(createSectionHeader(label));
    groupItems.forEach(item => {
      galleryEl.appendChild(createCard(item, cardIndex));
      cardIndex++;
    });
  });

  // anything missing/unmatched subcategory still shows, ungrouped, at the end
  const leftovers = items.filter(item => !sections.some(s => s.value === item.subcategory));
  if (leftovers.length > 0){
    leftovers.forEach(item => {
      galleryEl.appendChild(createCard(item, cardIndex));
      cardIndex++;
    });
  }

  layoutGalleryMasonry();
}

// ============================================================
// masonry packing for the gallery
// Cards keep their real aspect ratio (set inline as `aspect-ratio`
// in createCard), which means they naturally render at different
// heights — a 9/16 video next to two 4/5 videos, for example. A
// plain CSS grid would size every row to match its tallest card,
// leaving an awkward gap under the shorter ones in that same row.
//
// Fix: .gallery uses very fine implicit rows (`grid-auto-rows: 4px`
// in style.css) and this function measures each card's real height,
// then tells it to span however many of those 4px rows it needs.
// The browser's normal grid auto-placement then packs each column
// independently — a true masonry layout — while every card still
// renders at its own correct aspect ratio.
// ============================================================
const GALLERY_ROW_UNIT = 4; // px — must match `grid-auto-rows` in style.css

// Cards are only given a row-span, never a column — that's left to the
// browser's normal CSS grid auto-placement. That algorithm scans for the
// next free cell in raster order (left-to-right, then down), and once
// cards start spanning different numbers of rows it can walk a *later*
// card into an *earlier* column than a card that comes right before it
// in WORK_ITEMS — e.g. a tall portrait card can get placed into the
// middle column while a shorter card behind it in the array ends up
// skipped ahead into the right column. That's what was putting the
// Agora congratulatory poster into the middle slot instead of the right
// one, out of order with the Double Cherry card next to it.
//
// Fix: do the column assignment ourselves. Walk the cards in source
// order and always drop the next one into whichever column currently
// has the least accumulated height — real masonry balancing, so a
// card's column is decided by measured height, not by how the grid
// engine happens to scan for free cells.
function layoutGalleryMasonry(){
  const cells = galleryEl.querySelectorAll(':scope > .card, :scope > .section-header');

  // resolve however many columns are actually in effect right now
  // (3-up default, 2-up on the Logos tab, auto-fill on mobile, etc.)
  const colCount = getComputedStyle(galleryEl).gridTemplateColumns.split(' ').filter(Boolean).length || 1;
  const colHeights = new Array(colCount).fill(0); // running height per column, in row units

  cells.forEach(cell => {
    const marginBottom = parseFloat(getComputedStyle(cell).marginBottom) || 0;
    const height = cell.getBoundingClientRect().height + marginBottom;
    const rowSpan = Math.ceil(height / GALLERY_ROW_UNIT);

    const isFullWidth = cell.classList.contains('section-header') || cell.classList.contains('card--full');

    if (isFullWidth || colCount <= 1){
      // full-width items (section headers, `full: true` banners) sit
      // below everything placed so far, across every column — reset
      // every column to the same height beneath it so the next card
      // starts flush under the banner instead of tucking in beside it
      cell.style.gridColumn = '';
      cell.style.gridRowEnd = `span ${rowSpan}`;
      const tallest = Math.max(...colHeights);
      colHeights.fill(tallest + rowSpan);
      return;
    }

    let shortestCol = 0;
    for (let c = 1; c < colCount; c++){
      if (colHeights[c] < colHeights[shortestCol]) shortestCol = c;
    }

    cell.style.gridColumn = `${shortestCol + 1}`;
    cell.style.gridRowEnd = `span ${rowSpan}`;
    colHeights[shortestCol] += rowSpan;
  });
}

// re-pack on resize (column widths change -> aspect-ratio boxes change
// height) and once webfonts swap in (captions can reflow by a line)
let masonryResizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(masonryResizeTimer);
  masonryResizeTimer = setTimeout(layoutGalleryMasonry, 120);
});
if (document.fonts && document.fonts.ready){
  document.fonts.ready.then(layoutGalleryMasonry);
}

tabsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('.tab');
  if (!btn) return;

  tabsEl.querySelectorAll('.tab').forEach(t => t.classList.remove('is-active'));
  btn.classList.add('is-active');

  renderGallery(btn.dataset.category);

  // the tabs bar stays visible on Profile too, so clicking a tab from
  // there needs to jump back to Works — otherwise the filter changes
  // behind the scenes with nothing visible happening on screen
  document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
});

// initial paint
renderGallery('logos');

// ============================================================
// scroll cue -> jump to Works
// ============================================================
document.getElementById('scrollCue').addEventListener('click', () => {
  document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
});

// ============================================================
// sticky site nav -> add shadow once scrolled, and keep a
// --nav-height CSS var up to date so the works tabs bar can
// sit flush beneath it regardless of font-load/viewport shifts
// ============================================================
const siteNav = document.getElementById('siteNav');

function setNavHeightVar(){
  // round UP so a fractional-pixel mismatch never leaves a gap that
  // lets the hero video/veil peek through between the sticky nav
  // and the sticky tabs bar underneath it
  const h = Math.ceil(siteNav.getBoundingClientRect().height);
  document.documentElement.style.setProperty('--nav-height', `${h}px`);
}

function updateHeaderShadow(){
  siteNav.classList.toggle('is-scrolled', window.scrollY > 8);
}

window.addEventListener('scroll', updateHeaderShadow, { passive: true });
window.addEventListener('resize', setNavHeightVar);
setNavHeightVar();
updateHeaderShadow();

// keep --nav-height correct any time the nav's real size changes —
// e.g. once the Inter/Fraunces webfonts finish loading and swap in,
// which can shift line-height by a pixel or two after the first
// measurement above
if ('ResizeObserver' in window){
  new ResizeObserver(setNavHeightVar).observe(siteNav);
}
if (document.fonts && document.fonts.ready){
  document.fonts.ready.then(setNavHeightVar);
}

// ============================================================
// scroll-spy -> highlight "Works" or "Profile" in the nav
// depending on which section is currently in view
// ============================================================
const navLinks = document.querySelectorAll('.nav-link');
const spySections = [document.getElementById('works'), document.getElementById('profile')];

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle('is-active', link.dataset.target === entry.target.id);
    });
  });
}, { rootMargin: '-50% 0px -50% 0px' });

spySections.forEach(section => section && sectionObserver.observe(section));

// ============================================================
// footer -> auto-fill the current year in the copyright line
// ============================================================
const footerYearEl = document.getElementById('footerYear');
if (footerYearEl) footerYearEl.textContent = new Date().getFullYear();

// ============================================================
// reveal-on-scroll -> fades/slides in elements (profile copy +
// portrait) the first time they enter the viewport, then stops
// watching them since the reveal only needs to happen once
// ============================================================
const revealEls = document.querySelectorAll('.reveal-on-scroll');

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ============================================================
// fullscreen video player
// A single shared overlay is reused for every video card. Opening
// it moves the real <video> element into the overlay (so playback
// carries over) and minimizing moves it back to its card.
// ============================================================
const videoOverlay = document.createElement('div');
videoOverlay.className = 'video-overlay';
videoOverlay.innerHTML = `
  <div class="video-overlay-stage"></div>
  <button class="minimize-btn" type="button" aria-label="Minimize video">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 3v4a2 2 0 0 1-2 2H3"/>
      <path d="M21 9h-4a2 2 0 0 1-2-2V3"/>
      <path d="M3 15h4a2 2 0 0 1 2 2v4"/>
      <path d="M15 21v-4a2 2 0 0 1 2-2h4"/>
    </svg>
  </button>
`;
document.body.appendChild(videoOverlay);

const overlayStage = videoOverlay.querySelector('.video-overlay-stage');
const minimizeBtn = videoOverlay.querySelector('.minimize-btn');

let activeVideo = null;
let activeHome = null; // the .card-media--video the video came from

function openVideoFullscreen(video, homeMedia){
  activeVideo = video;
  activeHome = homeMedia;

  homeMedia.classList.add('is-playing'); // hides that card's play button while it's away
  overlayStage.appendChild(video);
  video.muted = false;
  video.controls = true;                 // adds play/pause, seek bar, and a volume slider
  video.setAttribute('controlsList', 'nodownload noremoteplayback');
  video.disablePictureInPicture = true;
  video.play();

  videoOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeVideoFullscreen(){
  if (!activeVideo) return;

  activeVideo.controls = false;          // keep the small grid preview clean, no controls
  activeVideo.muted = true;
  activeHome.appendChild(activeVideo);
  activeHome.classList.remove('is-playing');
  activeVideo.play().catch(() => {}); // resume the muted loop preview in the grid

  videoOverlay.classList.remove('is-open');
  document.body.style.overflow = '';

  activeVideo = null;
  activeHome = null;
}

minimizeBtn.addEventListener('click', closeVideoFullscreen);

// click the dark backdrop (outside the video itself) to minimize too
videoOverlay.addEventListener('click', (e) => {
  if (e.target === videoOverlay) closeVideoFullscreen();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeVideoFullscreen();
});