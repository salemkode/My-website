/* salemkode.com
   Draws the city from the articles in index.html, lights it with the real sun
   over Shibam, and dates the sheet with the current Bitcoin Cash block.
   No dependencies. To add a project, add an <article class="plot"> and a link
   in <nav class="plates">; the tower is built from that markup. */
(() => {
  'use strict';

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const root = document.documentElement;
  const calm = matchMedia('(prefers-reduced-motion: reduce)');

  const stage = $('#stage');
  const heavens = $('#heavens');
  const orb = $('#orb');
  const city = $('#city');
  const inner = $('#city-inner');
  const scene = $('#scene');
  const plates = $$('#plates a');
  const plots = $$('.plot');
  const hourEl = $('#hour');
  const nowBtn = $('#now');
  const datedEl = $('#dated');
  const visitEl = $('#visit');
  const footer = $('.titleblock');

  /* ------------------------------------------------------------ helpers */

  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    let a = seed >>> 0;
    return () => {
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  const n1 = (v) => Math.round(v * 10) / 10;
  const pts = (arr) => arr.map(([x, y]) => `${n1(x)},${n1(y)}`).join(' ');
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

  /* ------------------------------------------------------------ the projects */

  const projects = plates.map((plate) => {
    const id = plate.getAttribute('href').slice(1);
    const plot = document.getElementById(id);
    const floors = $$('.floors li', plot);
    floors.forEach((li, i) => { li.dataset.floor = String(floors.length - i); });
    return {
      id, plate, plot,
      floors: floors.length,
      cols: Number(plot.dataset.cols) || 3,
      live: plot.hasAttribute('data-live'),
      old: plot.hasAttribute('data-old'),
    };
  });
  const byId = new Map(projects.map((p) => [p.id, p]));

  for (const name of $$('.plot-name')) {
    if (name.textContent.trim().length > 14) name.classList.add('is-long');
  }

  /* ------------------------------------------------------------ drawing the city
     All measurements are in drawing units; the SVG is scaled to the city's height. */

  const G = { H: 400, base: 326, wall: 24, floor: 26, ground: 34, parapet: 10, col: 17, pad: 16, margin: 64, gapMin: 30, gapMax: 96 };

  function towerGeometry(x, w, floors, old) {
    const fh = old ? 23 : G.floor;
    const gh = old ? 28 : G.ground;
    const top = G.base - gh - floors * fh - G.parapet;
    const taper = Math.min(7, w * 0.055);
    const lean = (y) => taper * ((G.base - y) / (G.base - top));
    return {
      x, w, top, fh, gh, floors,
      xl: (y) => x + lean(y),
      xr: (y) => x + w - lean(y),
    };
  }

  function outline(g, horns = true) {
    const { top, xl, xr, x, w } = g;
    const a = [[x, G.base], [xl(top), top]];
    if (horns) a.push([xl(top), top - 7], [xl(top) + 6, top]);
    if (horns) a.push([xr(top) - 6, top], [xr(top), top - 7]);
    a.push([xr(top), top], [x + w, G.base]);
    return pts(a);
  }

  function drawTower(p, x) {
    const w = p.cols * G.col + G.pad;
    const g = towerGeometry(x, w, p.floors, p.old);
    const { top, xl, xr, fh, gh } = g;
    const rand = rng(hash(p.id));
    const sw = w * 0.17;                                  // width of the shaded return
    const band = top + G.parapet + fh * 0.6;              // lower edge of the whitewash
    let s = `<g class="tower solid${p.live ? ' is-live' : ''}" data-id="${p.id}">`;

    s += `<polygon class="t-body" points="${outline(g, p.live)}"/>`;
    s += `<polygon class="t-shade shade-l" points="${pts([[x, G.base], [xl(top), top], [xl(top) + sw, top], [x + sw, G.base]])}"/>`;
    s += `<polygon class="t-shade shade-r" points="${pts([[x + w, G.base], [xr(top), top], [xr(top) - sw, top], [x + w - sw, G.base]])}"/>`;

    for (let f = 1; f <= p.floors; f++) {
      const y = G.base - gh - (f - 1) * fh;
      s += `<line class="t-course" x1="${n1(xl(y))}" y1="${n1(y)}" x2="${n1(xr(y))}" y2="${n1(y)}"/>`;
    }

    if (p.live) {
      s += `<polygon class="t-white" points="${pts([[xl(top), top], [xl(top), top - 7], [xl(top) + 6, top], [xr(top) - 6, top], [xr(top), top - 7], [xr(top), top], [xr(band), band], [xl(band), band]])}"/>`;
      s += `<polygon class="t-white-shade shade-l" points="${pts([[xl(top), top], [xl(top) + sw, top], [xl(band) + sw, band], [xl(band), band]])}"/>`;
      s += `<polygon class="t-white-shade shade-r" points="${pts([[xr(top), top], [xr(top) - sw, top], [xr(band) - sw, band], [xr(band), band]])}"/>`;
      s += `<line class="t-course" x1="${n1(xl(top + G.parapet))}" y1="${n1(top + G.parapet)}" x2="${n1(xr(top + G.parapet))}" y2="${n1(top + G.parapet)}"/>`;
    } else {
      // unfinished: a ragged top course and a scaffold on the east side
      const sx = x + w + 5;
      const sTop = top - 12;
      s += `<path class="t-scaf" d="M${n1(sx)} ${G.base}V${n1(sTop)}M${n1(sx + 9)} ${G.base}V${n1(sTop + 6)}`;
      for (let y = G.base - gh; y > sTop + 8; y -= fh) s += `M${n1(sx - 6)} ${n1(y)}H${n1(sx + 12)}`;
      s += `"/>`;
    }

    const ww = 7, wh = 11.5;
    for (let f = 1; f <= p.floors; f++) {
      const yTop = G.base - gh - f * fh;
      const y = yTop + (fh - wh) / 2 + 1;
      const left = xl(y) + 7, right = xr(y) - 7;
      for (let c = 0; c < p.cols; c++) {
        const cx = left + (right - left) * ((c + 0.5) / p.cols);
        if (p.live && y > band) s += `<rect class="t-frame" x="${n1(cx - ww / 2 - 1.3)}" y="${n1(y - 1.6)}" width="${ww + 2.6}" height="${wh + 2.9}" rx="1"/>`;
        const lit = rand() < 0.42 ? ' lit' : '';
        s += `<rect class="w${lit}" data-f="${f}" x="${n1(cx - ww / 2)}" y="${n1(y)}" width="${ww}" height="${wh}" rx="0.8"/>`;
      }
    }

    // ground floor: a door and no windows, as in Shibam
    const dx = x + w / 2 + (rand() - 0.5) * w * 0.25;
    if (p.live) s += `<rect class="t-frame" x="${n1(dx - 7)}" y="${G.base - 22}" width="14" height="22"/>`;
    s += `<rect class="t-door" x="${n1(dx - 5.2)}" y="${G.base - 20}" width="10.4" height="20"/>`;

    const fx = x + w / 2;
    s += `<g class="flag"><line x1="${n1(fx)}" y1="${n1(top)}" x2="${n1(fx)}" y2="${n1(top - 26)}"/><path d="M${n1(fx)} ${n1(top - 26)}l15 5l-15 5z"/></g>`;
    s += `<polygon class="t-haze" points="${outline(g, p.live)}"/>`;
    s += '</g>';
    return { svg: s, cx: x + w / 2, w, top };
  }

  function drawFiller(rand, x, w, floors, baseY) {
    const fh = 21;
    const top = baseY - 22 - floors * fh;
    const t = Math.min(5, w * 0.06);
    let s = `<polygon class="f-body" points="${pts([[x, baseY], [x + t, top], [x + w - t, top], [x + w, baseY]])}"/>`;
    if (rand() < 0.62) s += `<polygon class="f-white" points="${pts([[x + t, top], [x + w - t, top], [x + w - t * 0.9, top + 14], [x + t * 0.9, top + 14]])}"/>`;
    const cols = Math.max(2, Math.floor((w - 8) / 13));
    for (let f = 0; f < floors; f++) {
      const y = top + 22 + f * fh;
      for (let c = 0; c < cols; c++) {
        if (rand() < 0.2) continue;
        const cx = x + 6 + (w - 12) * ((c + 0.5) / cols);
        s += `<rect class="f-w" x="${n1(cx - 2.2)}" y="${n1(y)}" width="4.4" height="8"/>`;
      }
    }
    return s;
  }

  function drawMesa(rand, width, yMin, yMax, cls) {
    let x = -20;
    let y = yMin + (yMax - yMin) * rand();
    let d = `M-20 ${G.H}V${n1(y)}`;
    while (x < width + 20) {
      x += 70 + rand() * 170;
      d += `H${n1(x)}`;
      const ny = clamp(y + (rand() - 0.5) * 44, yMin, yMax);
      x += 8 + rand() * 16;
      d += `L${n1(x)} ${n1(ny)}`;
      y = ny;
    }
    return `<path class="${cls} solid" d="${d}V${G.H}Z"/>`;
  }

  function drawPalm(rand, x, h) {
    const lean = (rand() - 0.5) * 9;
    const tx = x + lean, ty = G.H - 5 - h;
    let s = `<path class="palm-trunk" d="M${n1(x)} ${G.H - 3}Q${n1(x + lean * 0.2)} ${n1(G.H - 5 - h * 0.5)} ${n1(tx)} ${n1(ty)}"/>`;
    let d = '';
    for (let i = 0; i < 7; i++) {
      const a = Math.PI * (1.08 - (i / 6) * 1.16);      // fan from left to right, over the top
      const r = 11 + rand() * 5;
      const ex = tx + Math.cos(a) * r, ey = ty - Math.sin(a) * r * 0.7 + 3;
      d += `M${n1(tx)} ${n1(ty)}Q${n1(tx + Math.cos(a) * r * 0.6)} ${n1(ty - Math.sin(a) * r * 0.95 - 2)} ${n1(ex)} ${n1(ey)}`;
    }
    return s + `<path class="palm-frond" d="${d}"/>`;
  }

  let layout = [];

  function build() {
    const pxH = city.clientHeight || 400;
    const scale = pxH / G.H;
    const widths = projects.map((p) => p.cols * G.col + G.pad);
    const sum = widths.reduce((a, b) => a + b, 0);
    const need = sum + (projects.length - 1) * G.gapMin + G.margin * 2;
    const avail = city.clientWidth / scale;
    const W = Math.max(avail, need);
    const gap = clamp((W - sum - G.margin * 2) / (projects.length - 1), G.gapMin, G.gapMax);
    const used = sum + gap * (projects.length - 1);
    let x = (W - used) / 2;

    const rand = rng(20261124);
    let s = '';
    s += drawMesa(rand, W, 196, 226, 'mesa-far');
    s += drawMesa(rand, W, 168, 206, 'mesa');
    s += drawMesa(rand, W, 246, 262, 'mesa-low');

    // the rest of the city, behind the projects
    let fx = -10;
    while (fx < W + 10) {
      const w = 34 + rand() * 30;
      const floors = 3 + Math.floor(rand() * 5);
      s += drawFiller(rand, fx, w, floors, G.base);
      fx += w * (0.62 + rand() * 0.5);
    }

    layout = [];
    let towers = '';
    projects.forEach((p, i) => {
      const t = drawTower(p, x);
      towers += t.svg;
      layout.push({ p, cx: t.cx, w: t.w, top: t.top });
      x += widths[i] + gap;
    });
    s += towers;

    // the wall the towers stand behind, and the wadi in front
    s += `<rect class="wall solid" x="-20" y="${G.base}" width="${n1(W + 40)}" height="${G.wall}"/>`;
    s += `<rect class="wall-top" x="-20" y="${G.base}" width="${n1(W + 40)}" height="2.5"/>`;
    let seams = '';
    for (let sx = 12 + rand() * 30; sx < W; sx += 38 + rand() * 46) seams += `M${n1(sx)} ${G.base + 3}V${G.base + G.wall}`;
    s += `<path class="wall-seam" d="${seams}"/>`;
    s += `<rect class="sand solid" x="-20" y="${G.base + G.wall}" width="${n1(W + 40)}" height="${G.H - G.base - G.wall + 2}"/>`;
    for (let px = 18 + rand() * 40; px < W - 10; px += 26 + rand() * 120) {
      s += drawPalm(rand, px, 20 + rand() * 13);
    }

    s += '<g id="grove"></g>';

    scene.setAttribute('viewBox', `0 0 ${n1(W)} ${G.H}`);
    scene.setAttribute('width', String(Math.round(W * scale)));
    scene.setAttribute('height', String(Math.round(pxH)));
    scene.innerHTML = s;
    inner.style.setProperty('--s', scale.toFixed(3));
    root.style.setProperty('--s', scale.toFixed(3));

    for (const { p, cx } of layout) {
      p.plate.style.left = `${Math.round(cx * scale)}px`;
      p.plate.style.top = `${Math.round((G.base + 3) * scale)}px`;
      p.tower = $(`.tower[data-id="${p.id}"]`, scene);
    }
    scene.classList.toggle('sun-east', light.east);
    scene.classList.toggle('sun-west', !light.east);
    sceneWidth = W;
    mark(current, false);
    drawGrove();
  }

  /* ------------------------------------------------------------ the visitor's grove
     Borrowed from Focus Garden: stay and a palm grows, leave and it withers. */

  let sceneWidth = 0;
  const grove = [];            // { at: 0..1 across the sheet, grown: 0..1, withered }
  const GROVE_MAX = 24;
  let awaySince = 0;

  function palmScale(grown) { return 0.16 + 0.84 * grown; }

  function drawGrove() {
    const holder = $('#grove', scene);
    if (!holder) return;
    holder.innerHTML = grove.map((palm, i) => {
      const k = palmScale(palm.grown);
      return `<g class="mine${palm.withered ? ' is-withered' : ''}" style="transform:scale(${k.toFixed(3)})">${drawPalm(rng(977 + i * 131), palm.at * sceneWidth, 37)}</g>`;
    }).join('');
  }

  function plant() {
    if (grove.length >= GROVE_MAX) return;
    // put it where the visitor can see it
    const scale = (city.clientHeight || 400) / G.H;
    const from = city.scrollLeft / scale, span = city.clientWidth / scale;
    const at = clamp((from + span * (0.12 + Math.random() * 0.76)) / sceneWidth, 0.02, 0.98);
    grove.push({ at, grown: 0, withered: false });
    drawGrove();
  }

  function visitLine(note) {
    const grown = grove.filter((palm) => palm.grown >= 1 && !palm.withered).length;
    const base = grown === 0 ? 'A palm for every minute you stay' : grown === 1 ? '1 palm grown' : `${grown} palms grown`;
    visitEl.textContent = note || base;
  }

  function growTick(force) {
    if (document.hidden && force !== true) return;
    let young = grove.find((palm) => palm.grown < 1 && !palm.withered);
    if (!young) { plant(); young = grove[grove.length - 1]; if (!young || young.grown >= 1) return; }
    young.grown = Math.min(1, young.grown + 1 / 60);
    const el = $$('.mine', scene)[grove.indexOf(young)];
    if (el) el.style.transform = `scale(${palmScale(young.grown).toFixed(3)})`;
    if (young.grown >= 1) visitLine();
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { awaySince = Date.now(); return; }
    const young = grove.find((palm) => palm.grown < 1 && !palm.withered);
    if (awaySince && Date.now() - awaySince > 10e3 && young) {
      young.withered = true;
      drawGrove();
      visitLine('You left, and a palm withered');
    }
    awaySince = 0;
  });

  /* ------------------------------------------------------------ picking a tower */

  let current = 'intro';

  function mark(id, move) {
    const picked = byId.get(id);
    scene.classList.toggle('has-pick', Boolean(picked));
    for (const p of projects) {
      if (p.tower) p.tower.classList.toggle('is-pick', p === picked);
      if (p === picked) p.plate.setAttribute('aria-current', 'true');
      else p.plate.removeAttribute('aria-current');
    }
    if (picked && move) {
      const entry = layout.find((l) => l.p === picked);
      const scale = (city.clientHeight || 400) / G.H;
      const target = entry.cx * scale - city.clientWidth / 2;
      city.scrollTo({ left: target, behavior: calm.matches ? 'auto' : 'smooth' });
    }
  }

  function open(id, { move = true } = {}) {
    if (!document.getElementById(id) || !(id === 'intro' || byId.has(id))) id = 'intro';
    const changed = id !== current;
    current = id;
    for (const plot of plots) plot.classList.toggle('is-open', plot.id === id);
    mark(id, move);
    if (changed) {
      const name = $('.plot.is-open .plot-name');
      if (name && !calm.matches && name.animate) {
        name.animate(
          [
            { fontVariationSettings: '"ELGR" 1, "ELSH" 14', opacity: 0.4 },
            { fontVariationSettings: '"ELGR" 1, "ELSH" 2', opacity: 1 },
          ],
          { duration: 620, easing: 'cubic-bezier(.2,.7,.2,1)' },
        );
      }
      if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: calm.matches ? 'auto' : 'smooth' });
    }
  }

  function fromHash() {
    open(decodeURIComponent(location.hash.slice(1)) || 'intro');
  }

  scene.addEventListener('click', (e) => {
    const tower = e.target.closest('.tower');
    if (tower) location.hash = tower.dataset.id;
  });

  // The list and the tower are the same thing: point at a floor, its windows light.
  function heat(li, on) {
    const p = byId.get(current);
    if (!p || !p.tower) return;
    li.classList.toggle('is-hot', on);
    for (const w of $$(`.w[data-f="${li.dataset.floor}"]`, p.tower)) w.classList.toggle('hot', on);
  }
  for (const li of $$('.floors li')) {
    li.addEventListener('pointerenter', () => heat(li, true));
    li.addEventListener('pointerleave', () => heat(li, false));
  }
  scene.addEventListener('pointerover', (e) => {
    const w = e.target.closest('.is-pick .w');
    for (const li of $$('.plot.is-open .floors li')) li.classList.toggle('is-hot', Boolean(w) && li.dataset.floor === w.dataset.f);
  });
  scene.addEventListener('pointerleave', () => {
    for (const li of $$('.floors li.is-hot')) li.classList.remove('is-hot');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && current !== 'intro') location.hash = 'intro';
    const plate = e.target.closest && e.target.closest('#plates a');
    if (plate && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      const i = plates.indexOf(plate) + (e.key === 'ArrowRight' ? 1 : -1);
      if (plates[i]) { e.preventDefault(); plates[i].focus(); }
    }
  });

  /* ------------------------------------------------------------ the sun over Shibam */

  const SHIBAM = { lat: 15.927, lon: 48.627, tz: 3 };
  const rad = Math.PI / 180;

  function shibamNow() {
    const d = new Date(Date.now() + SHIBAM.tz * 3600e3);
    const minutes = d.getUTCHours() * 60 + d.getUTCMinutes() + d.getUTCSeconds() / 60;
    const doy = Math.floor((d - Date.UTC(d.getUTCFullYear(), 0, 0)) / 864e5);
    return { minutes, doy };
  }

  // NOAA's short solar position formula; good to a fraction of a degree.
  function sunElevation(doy, minutes) {
    const g = ((2 * Math.PI) / 365) * (doy - 1 + (minutes / 60 - 12) / 24);
    const eq = 229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
    const decl = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) + 0.000907 * Math.sin(2 * g) - 0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
    const solar = minutes + eq + 4 * SHIBAM.lon - 60 * SHIBAM.tz;
    const ha = (solar / 4 - 180) * rad;
    const cosZen = Math.sin(SHIBAM.lat * rad) * Math.sin(decl) + Math.cos(SHIBAM.lat * rad) * Math.cos(decl) * Math.cos(ha);
    return 90 - Math.acos(clamp(cosZen, -1, 1)) / rad;
  }

  function riseAndSet(doy) {
    let rise = 360, set = 1080;
    for (let m = 1; m < 1440; m++) {
      const a = sunElevation(doy, m - 1) + 0.83, b = sunElevation(doy, m) + 0.83;
      if (a < 0 && b >= 0) rise = m;
      if (a >= 0 && b < 0) set = m;
    }
    return { rise, set };
  }

  // Colours at six heights of the sun, in degrees above the horizon.
  const STOPS = [-18, -6, 0, 8, 30, 90];
  const KEYS = {
    skyTop:  ['#060a22', '#0f1846', '#243377', '#164d98', '#114c96', '#0f4792'],
    skyMid:  ['#0d1640', '#30306f', '#7a5690', '#2f6fb4', '#1f6cba', '#1b66b3'],
    skyLow:  ['#1d2a63', '#b0607c', '#f6ab68', '#c4deeb', '#a9d2ea', '#a6d0ea'],
    mud:     ['#2c2946', '#5d4459', '#b9774c', '#c2925f', '#c79a68', '#c99d6b'],
    shade:   ['#1c1a33', '#3f2f47', '#804c38', '#946b45', '#a27a50', '#a98157'],
    plaster: ['#8990b8', '#cbb6c6', '#ffe0ba', '#f6eedd', '#fbf6e9', '#fdf8ec'],
    mesa:    ['#151a41', '#6e4a6e', '#dc9b69', '#cfb492', '#d3bd9f', '#d6c1a4'],
    ground:  ['#131128', '#3a2b44', '#8c5b3c', '#a88255', '#b48f60', '#b89363'],
    palm:    ['#0d1828', '#22343c', '#3c5a36', '#2f6b3a', '#2e7039', '#2d7238'],
    win:     ['#0b0a1b', '#221a2e', '#48291f', '#523623', '#553a26', '#563b27'],
    earth:   ['#0b0a1a', '#1c1528', '#3c2519', '#4a3120', '#4e3422', '#503623'],
    orb:     ['#e6ebff', '#e6ebff', '#ffb869', '#ffe7a8', '#fff3c4', '#fff6d6'],
  };
  const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const css = (c) => `rgb(${c.map((v) => Math.round(v)).join(' ')})`;
  const mix = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
  const RGB = Object.fromEntries(Object.entries(KEYS).map(([k, list]) => [k, list.map(hex)]));
  const LAMP = hex('#ffc76a');

  function at(key, e) {
    const list = RGB[key];
    if (e <= STOPS[0]) return list[0];
    for (let i = 1; i < STOPS.length; i++) {
      if (e <= STOPS[i]) return mix(list[i - 1], list[i], (e - STOPS[i - 1]) / (STOPS[i] - STOPS[i - 1]));
    }
    return list[list.length - 1];
  }

  const light = { live: true, minutes: 720, doy: 180, rise: 360, set: 1080, east: true };

  function paint() {
    const e = sunElevation(light.doy, light.minutes);
    const c = Object.fromEntries(Object.keys(KEYS).map((k) => [k, at(k, e)]));
    const dark = clamp((2 - e) / 8, 0, 1);               // 0 by day, 1 once the lamps are lit
    const set = (k, v) => root.style.setProperty(k, css(v));
    set('--sky-top', c.skyTop);
    set('--sky-mid', c.skyMid);
    set('--sky-low', c.skyLow);
    set('--mud', c.mud);
    set('--mud-shade', c.shade);
    set('--plaster', c.plaster);
    set('--plaster-shade', mix(c.plaster, c.shade, 0.3));
    set('--win', c.win);
    set('--win-lit', mix(c.win, LAMP, dark));
    set('--mud-far', mix(c.mud, c.skyLow, 0.32));
    set('--plaster-far', mix(c.plaster, c.skyLow, 0.2));
    set('--win-far', mix(c.win, mix(c.mud, c.skyLow, 0.32), 0.5));
    set('--mesa', c.mesa);
    set('--mesa-far', mix(c.mesa, c.skyLow, 0.55));
    set('--mesa-low', mix(c.mesa, c.mud, 0.4));
    set('--ground', c.ground);
    set('--palm', c.palm);
    set('--earth', c.earth);
    set('--wall', mix(c.shade, c.earth, 0.62));
    set('--orb', c.orb);
    root.style.setProperty('--stars', clamp((-2 - e) / 8, 0, 1).toFixed(2));
    const theme = $('meta[name="theme-color"]');
    if (theme) theme.content = css(c.skyTop);

    // where the sun or the moon hangs: east is on the right, we are looking north
    const day = light.minutes >= light.rise && light.minutes < light.set;
    const span = day ? light.set - light.rise : 1440 - (light.set - light.rise);
    const since = day ? light.minutes - light.rise : (light.minutes - light.set + 1440) % 1440;
    const p = since / span;
    const box = heavens.getBoundingClientRect();
    // a low arc: the sun stays in the band of sky just above the roofs
    const horizon = box.height - city.clientHeight * 0.5;
    const peak = box.height - city.clientHeight * 0.8;
    orb.style.left = `${(box.width * (0.9 - 0.8 * p)).toFixed(1)}px`;
    orb.style.top = `${(horizon - Math.sin(Math.PI * p) * (horizon - peak)).toFixed(1)}px`;
    orb.classList.toggle('is-moon', !day);

    const east = p < 0.5;
    if (east !== light.east || !scene.classList.contains('sun-east') && !scene.classList.contains('sun-west')) {
      light.east = east;
      scene.classList.toggle('sun-east', east);
      scene.classList.toggle('sun-west', !east);
    }

    const hh = String(Math.floor(light.minutes / 60) % 24).padStart(2, '0');
    const mm = String(Math.floor(light.minutes % 60)).padStart(2, '0');
    hourEl.textContent = `${hh}:${mm}`;
    orb.setAttribute('aria-valuenow', String(Math.round(light.minutes)));
    orb.setAttribute('aria-valuetext', `${hh}:${mm} in Shibam`);
    orb.setAttribute('aria-label', `Hour in Shibam. Drag the ${day ? 'sun' : 'moon'}, or use the arrow keys.`);
    nowBtn.hidden = light.live;
  }

  function tick() {
    if (!light.live) return;
    const now = shibamNow();
    if (now.doy !== light.doy) Object.assign(light, riseAndSet(now.doy));
    light.minutes = now.minutes;
    light.doy = now.doy;
    paint();
  }

  function setHour(minutes) {
    light.live = false;
    light.minutes = ((minutes % 1440) + 1440) % 1440;
    paint();
  }

  // Dragging runs the day forward as the sun goes west, then hands over to the moon.
  let drag = null;
  let frame = 0;
  function phaseOf(minutes) {
    const dayLen = light.set - light.rise;
    const day = minutes >= light.rise && minutes < light.set;
    return day ? (minutes - light.rise) / dayLen : 1 + ((minutes - light.set + 1440) % 1440) / (1440 - dayLen);
  }
  function minutesOf(phase) {
    const dayLen = light.set - light.rise;
    const ph = ((phase % 2) + 2) % 2;
    return ph < 1 ? light.rise + ph * dayLen : light.set + (ph - 1) * (1440 - dayLen);
  }
  orb.addEventListener('pointerdown', (e) => {
    try { orb.setPointerCapture(e.pointerId); } catch { /* a synthetic pointer cannot be captured */ }
    drag ={ x: e.clientX, phase: phaseOf(light.minutes) };
    e.preventDefault();
  });
  orb.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const width = heavens.getBoundingClientRect().width * 0.8;
    const next = minutesOf(drag.phase - (e.clientX - drag.x) / width);
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => setHour(next));
  });
  const drop = () => { drag = null; };
  orb.addEventListener('pointerup', drop);
  orb.addEventListener('pointercancel', drop);
  orb.addEventListener('keydown', (e) => {
    const step = { ArrowLeft: 10, ArrowUp: 10, ArrowRight: -10, ArrowDown: -10, PageUp: 60, PageDown: -60 }[e.key];
    if (!step) return;
    e.preventDefault();
    setHour(light.minutes + step);
  });
  nowBtn.addEventListener('click', () => { light.live = true; tick(); orb.focus({ preventScroll: true }); });

  /* ------------------------------------------------------------ stars */

  function stars() {
    const rand = rng(1553);                                // the city's walls date from the 1500s
    let s = '<svg aria-hidden="true" viewBox="0 0 1000 400" preserveAspectRatio="none">';
    for (let i = 0; i < 110; i++) {
      const y = Math.pow(rand(), 1.5) * 400;
      s += `<circle cx="${n1(rand() * 1000)}" cy="${n1(y)}" r="${n1(0.5 + rand() * 0.9)}" opacity="${n1(0.35 + rand() * 0.65)}"/>`;
    }
    const holder = document.createElement('div');
    holder.innerHTML = s + '</svg>';
    heavens.prepend(holder.firstChild);
  }

  /* ------------------------------------------------------------ the date of the sheet
     The same public Chaingraph server the Explorer uses by default. */

  const CHAIN = 'https://gql.chaingraph.pat.mn/v1/graphql';
  const tip = { height: 0, time: 0 };

  function dateLine() {
    if (!tip.height) return;
    const mins = Math.max(0, Math.round((Date.now() / 1000 - tip.time) / 60));
    const ago = mins < 1 ? 'just found' : mins < 120 ? `${mins} min ago` : `${Math.round(mins / 60)} h ago`;
    datedEl.textContent = `BCH block ${tip.height.toLocaleString('en-US')}, ${ago}`;
  }

  function layBrick() {
    const dark = $$('.tower .w:not(.lit)', scene);
    const w = dark[Math.floor(Math.random() * dark.length)];
    if (w) { w.classList.add('brick'); setTimeout(() => w.classList.remove('brick'), 2600); }
    datedEl.classList.remove('is-new');
    void datedEl.offsetWidth;
    datedEl.classList.add('is-new');
  }

  async function readChain() {
    try {
      const res = await fetch(CHAIN, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ query: '{ block(limit: 1, order_by: { height: desc }) { height timestamp } }' }),
      });
      const block = (await res.json()).data.block[0];
      const height = Number(block.height);
      if (!Number.isFinite(height)) return;
      const fresh = tip.height && height > tip.height;
      tip.height = height;
      tip.time = Number(block.timestamp);
      dateLine();
      if (fresh) layBrick();
    } catch {
      /* offline or the server is away: the sheet keeps its last date */
    }
  }

  function plainDate() {
    const d = new Date(Date.now() + SHIBAM.tz * 3600e3);
    datedEl.textContent = d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  }

  /* ------------------------------------------------------------ start */

  function measure() {
    // Keep the title block inside the first screen when there is room for it.
    const roomy = innerWidth >= 900 && innerHeight >= 620 && footer.offsetHeight < 130;
    root.style.setProperty('--tb', roomy ? `${footer.offsetHeight}px` : '0px');
  }

  let resizeTimer = 0;
  let lastW = innerWidth, lastH = innerHeight;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // phones fire resize when the address bar slides; only rebuild for a real change
      if (innerWidth === lastW && Math.abs(innerHeight - lastH) < 120) { paint(); return; }
      lastW = innerWidth; lastH = innerHeight;
      measure();
      build();
      paint();
    }, 120);
  });
  addEventListener('hashchange', fromHash);

  stars();
  measure();
  const start = shibamNow();
  Object.assign(light, start, riseAndSet(start.doy));
  build();
  paint();
  fromHash();
  plainDate();
  readChain();
  setInterval(tick, 30e3);
  setInterval(readChain, 60e3);
  setInterval(dateLine, 30e3);
  setInterval(growTick, 1000);
  growTick();
  document.addEventListener('visibilitychange', () => { if (!document.hidden) { tick(); readChain(); } });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); paint(); });

  // For screenshots and curiosity: salemkode.hour(18.5) sets half past six in the evening.
  window.salemkode = {
    hour: (h) => setHour(h * 60),
    now: () => { light.live = true; tick(); },
    stay: (seconds) => { for (let i = 0; i < seconds; i++) growTick(true); },
    measure: () => ({ tb: getComputedStyle(root).getPropertyValue('--tb'), stage: stage.offsetHeight, footer: footer.offsetHeight, sky: $('#sky').offsetHeight, top: $('.top').offsetHeight, city: city.offsetHeight, page: root.scrollHeight }),
  };
})();
