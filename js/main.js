/* Renders the project cards from js/projects.js and drives the window,
 * parallax, nav, theme and music. No dependencies. */
(function () {
  "use strict";

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ───────── cards ───────── */
  const byId = new Map();
  function render() {
    const grids = {};
    $$("[data-section]").forEach((s) => { grids[s.dataset.section] = $("[data-grid]", s); });
    window.PROJECTS.forEach((p) => {
      byId.set(p.id, p);
      const card = document.createElement("button");
      card.type = "button";
      card.className = "card box";
      card.setAttribute("aria-haspopup", "dialog");
      const media = p.thumb
        ? `<img src="${p.thumb}" width="640" height="400" alt="" loading="lazy" decoding="async">`
        : `<div class="ph" aria-hidden="true"><span>${esc(p.title.charAt(0))}</span></div>`;
      card.innerHTML = `
        <div class="card__media">
          ${media}
          <div class="card__caption" aria-hidden="true">View</div>
          ${p.tag ? `<span class="card__tag">${esc(p.tag)}</span>` : ""}
        </div>
        <span class="card__title">${esc(p.title)}</span>`;
      card.addEventListener("click", () => open(p.id, true));
      (grids[p.section] || grids.web).appendChild(card);
    });
  }

  /* ───────── window ───────── */
  const modal = $("#modal");
  const body = $("#modal-body");
  let lastFocus = null;

  function open(id, push) {
    const p = byId.get(id);
    if (!p) return;
    lastFocus = document.activeElement;

    const intro = p.jam
      ? `${esc(p.intro)} <a href="${p.jamUrl}" target="_blank" rel="noopener">${esc(p.jam)}</a>`
      : esc(p.intro);

    const imgs = p.shots.map((s, i) =>
      `<img src="${s}" alt="${esc(p.title)} screenshot ${i + 1}" loading="${i ? "lazy" : "eager"}" decoding="async">`).join("");
    const gallery = !p.shots.length
      ? `<div class="carousel"><div class="gallery gallery--empty"><div class="ph" aria-hidden="true"><span>${esc(p.title.charAt(0))}</span></div></div></div>`
      : p.shots.length === 1
        ? `<div class="carousel"><div class="gallery gallery--single">${imgs}</div></div>`
        : `<div class="carousel">
            <button class="carousel__btn carousel__btn--prev" type="button" data-step="-1" aria-label="Previous"><span class="cursor"></span></button>
            <div class="gallery" id="gallery">${imgs}</div>
            <button class="carousel__btn carousel__btn--next" type="button" data-step="1" aria-label="Next"><span class="cursor"></span></button>
            <p class="carousel__count" id="gallery-count">1 / ${p.shots.length}</p>
          </div>`;

    const actions = p.links.map((l) => `<a class="btn" href="${l.href}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")
      + `<button class="btn" type="button" data-close>Close Window</button>`;

    body.innerHTML = `
      <h2 class="modal__title" id="modal-title">${esc(p.title)}</h2>
      <div class="divider"></div>
      <p class="modal__intro">${intro}</p>
      ${gallery}
      ${p.text.map((t) => `<p>${esc(t)}</p>`).join("")}
      <p class="modal__meta"><b>Genre:</b> ${esc(p.genre)}<br><b>Role:</b> ${esc(p.role)}</p>
      <div class="modal__actions">${actions}</div>`;

    if (!modal.open) modal.showModal();
    $(".modal__box").scrollTop = 0;
    if (push) history.replaceState(null, "", "#p=" + id);
  }
  function close() { if (modal.open) modal.close(); }
  modal.addEventListener("close", () => {
    if (location.hash.startsWith("#p=")) history.replaceState(null, "", location.pathname + location.search);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  });
  $("#modal-close").addEventListener("click", close);
  body.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) return close();
    const step = e.target.closest("[data-step]");
    if (!step) return;
    const g = $("#gallery", body);
    const imgs = $$("img", g);
    const current = imgs.findIndex((im) => im.offsetLeft + im.offsetWidth / 2 > g.scrollLeft + 1);
    const next = Math.max(0, Math.min(imgs.length - 1, (current < 0 ? 0 : current) + Number(step.dataset.step)));
    imgs[next].scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest", inline: "center" });
  });
  body.addEventListener("scroll", (e) => {
    const g = e.target;
    if (g.id !== "gallery") return;
    const imgs = $$("img", g);
    const mid = g.scrollLeft + g.clientWidth / 2;
    const i = imgs.findIndex((im) => im.offsetLeft + im.offsetWidth > mid);
    $("#gallery-count", body).textContent = `${(i < 0 ? imgs.length : i + 1)} / ${imgs.length}`;
  }, true);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  function openFromHash() {
    const m = location.hash.match(/^#p=([\w-]+)$/);
    if (m && byId.has(m[1])) open(m[1], false);
  }

  /* ───────── parallax: hero layers and the sky behind the page ───────── */
  const hero = $(".hero");
  const heroLayers = $$(".layer");
  const skyLayers = $$(".backdrop__layer");
  function sizeTiles() {
    // Hero tiles are 1920x1080 scaled to the hero height; the drift moves exactly one tile.
    hero.style.setProperty("--tile", Math.round(1920 * (hero.offsetHeight / 1080)) + "px");
  }
  function parallax() {
    const y = scrollY;
    if (y <= hero.offsetHeight) {
      heroLayers.forEach((l) => { l.style.transform = `translate3d(0, ${Math.round(y * l.dataset.depth)}px, 0)`; });
    }
    skyLayers.forEach((l) => { l.style.transform = `translate3d(0, ${-Math.round(y * l.dataset.depth) % 1080}px, 0)`; });
  }
  sizeTiles();
  addEventListener("resize", sizeTiles, { passive: true });

  /* ───────── nav, back to top ───────── */
  const nav = $("#nav");
  const toTop = $("#to-top");
  const navLinks = $$(".nav__links a");
  let ticking = false;
  addEventListener("scroll", () => {
    nav.classList.toggle("is-scrolled", scrollY > 40);
    toTop.hidden = scrollY < hero.offsetHeight;
    if (reduceMotion || ticking) return;
    ticking = true;
    requestAnimationFrame(() => { parallax(); ticking = false; });
  }, { passive: true });
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        navLinks.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id));
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    $$("main > section[id]").forEach((s) => io.observe(s));
  }

  /* ───────── day / night ───────── */
  const root = document.documentElement;
  let switchTimer = 0;
  $("#theme").addEventListener("click", () => {
    const next = root.dataset.theme === "night" ? "day" : "night";
    if (!reduceMotion) {
      root.classList.add("is-switching");
      clearTimeout(switchTimer);
      switchTimer = setTimeout(() => root.classList.remove("is-switching"), 1000);
    }
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ───────── music, loaded only when asked ───────── */
  const audio = $("#audio");
  const musicBtn = $("#music");
  audio.volume = 0.35;
  musicBtn.addEventListener("click", async () => {
    if (audio.paused) {
      try { await audio.play(); musicBtn.setAttribute("aria-pressed", "true"); } catch (e) { /* blocked */ }
    } else {
      audio.pause();
      musicBtn.setAttribute("aria-pressed", "false");
    }
  });

  $("#year").textContent = String(new Date().getFullYear());

  render();
  openFromHash();
  addEventListener("hashchange", openFromHash);
})();
