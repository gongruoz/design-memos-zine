"use strict";

const themes = window.memoThemes;
const profiles = window.memoProfiles;
const navigation = document.querySelector("#theme-nav");
const spread = document.querySelector("#spread");
const dialog = document.querySelector("#work-dialog");
const dialogBody = document.querySelector("#dialog-body");
const closeButton = document.querySelector("#dialog-close");
let activeTheme = themes[0];
let openCase = null;
let returnFocus = null;

const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);
const pad = (number) => String(number).padStart(2, "0");
const themeHref = (theme) => "#theme/" + theme.id;
const workHref = (theme, work) => themeHref(theme) + "/" + work.id;
const position = (theme) => themes.indexOf(theme);
const themeLabel = (theme) => pad(position(theme) + 1);

function mediaLabel(work) {
  if (!work.media) return work.image ? "图像" : "作品档案";
  return work.media.type.includes("audio") ? "♫ 声音" : "▷ 影像";
}

function mediaMarkup(work, eager = false) {
  const image = work.image && `<img src="${escapeHtml(work.image)}" alt="${escapeHtml(work.alt || work.title)}" referrerpolicy="no-referrer" loading="${eager ? "eager" : "lazy"}" decoding="async">`;
  return `${image || ""}<div class="typographic" aria-hidden="true" ${image ? "hidden" : ""}><span>${escapeHtml(work.art || work.title)}</span></div>`;
}

function titleMarkup(work, dialogTitle = false) {
  const className = "case-title" + (work.en ? " en" : "");
  return `<h3 class="${className}" ${work.en ? 'lang="en"' : ""} ${dialogTitle ? 'id="dialog-title"' : ""}>${escapeHtml(work.title)}</h3>`;
}

function imageButton(work, className, eager) {
  return `<button type="button" class="${className}" data-case="${work.id}" aria-label="打开作品 ${escapeHtml(work.title)}" style="--crop:${escapeHtml(work.crop || "50% 50%")}">${mediaMarkup(work, eager)}<span class="media-label">${mediaLabel(work)}</span></button>`;
}

function renderTheme(theme) {
  activeTheme = theme;
  navigation.querySelectorAll("a").forEach((link) => {
    if (link.dataset.theme === theme.id) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  const [feature, ...otherWorks] = theme.works;
  const previous = themes[(position(theme) + themes.length - 1) % themes.length];
  const next = themes[(position(theme) + 1) % themes.length];
  spread.style.setProperty("--accent", theme.color);
  spread.style.setProperty("--tint", theme.tint);
  spread.innerHTML = `
    <div class="spread-head">
      <div>
        <p class="spread-tag"><span>${themeLabel(theme)} / ${pad(themes.length)}</span><span>${escapeHtml(theme.topic)}</span></p>
        <h2 class="spread-title" tabindex="-1">${escapeHtml(theme.name)} <em lang="en">${escapeHtml(theme.en)}</em></h2>
      </div>
      <div><p class="spread-question">${escapeHtml(theme.question)}</p><p class="spread-intro">${escapeHtml(theme.intro)}</p></div>
    </div>
    <article class="feature">
      ${imageButton(feature, "feature-image", true)}
      <div class="feature-body">
        <p class="case-meta">${escapeHtml(feature.creator)} · ${escapeHtml(feature.year)}</p>
        ${titleMarkup(feature)}
        <p class="case-copy">${escapeHtml(feature.copy)}</p>
        <button class="read-work" type="button" data-case="${feature.id}">阅读作品介绍 ↗</button>
      </div>
    </article>
    <div class="case-rail">${otherWorks.map((work) => `
      <article class="case-card">
        ${imageButton(work, "card-image", false)}
        <div class="card-copy">
          <p class="case-meta">${escapeHtml(work.creator)} · ${escapeHtml(work.year)}</p>
          ${titleMarkup(work)}
          <p class="case-copy">${escapeHtml(work.copy)}</p>
          <button class="read-work" type="button" data-case="${work.id}" aria-label="阅读作品介绍 ${escapeHtml(work.title)}">阅读作品介绍 ↗</button>
        </div>
      </article>`).join("")}</div>
    <nav class="spread-footer" aria-label="相邻主题">
      <a href="${themeHref(previous)}" data-jump="spread">← ${previous.name}</a>
      <span>${themeLabel(theme)} / ${pad(themes.length)}</span>
      <a href="${themeHref(next)}" data-jump="spread">${next.name} →</a>
    </nav>`;
}

function profileMarkup(work) {
  const profile = profiles[work.id];
  const paragraphs = profile.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  const sources = profile.sources.map((source) => `
    <li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.label)} <span aria-hidden="true">↗</span></a></li>`).join("");
  return `
    <div class="work-profile">${paragraphs}</div>
    <section class="profile-sources" aria-labelledby="sources-title">
      <h4 id="sources-title">资料来源</h4>
      <ul>${sources}</ul>
    </section>`;
}

function showWork(theme, work) {
  openCase = work;
  dialog.style.setProperty("--accent", theme.color);
  dialog.style.setProperty("--tint", theme.tint);
  document.querySelector("#dialog-kicker").textContent = `${themeLabel(theme)} / ${theme.name} · ${pad(theme.works.indexOf(work) + 1)} / ${pad(theme.works.length)}`;
  const hasPlayer = work.media && work.media.src;
  const playText = work.media?.label || (work.media?.type.includes("audio") ? "播放声音" : "播放影像");
  dialogBody.innerHTML = `
    <article>
      <header class="dialog-copy dialog-header">
        <p class="case-meta">${escapeHtml(work.creator)} · ${escapeHtml(work.year)}</p>
        ${titleMarkup(work, true)}
        ${work.originalTitle ? `<p class="original-title">${escapeHtml(work.originalTitle)}</p>` : ""}
      </header>
      <figure>
        <div class="dialog-image" style="--crop:${escapeHtml(work.crop || "50% 50%")}">${mediaMarkup(work, true)}</div>
        ${work.credit ? `<figcaption class="dialog-credit">${escapeHtml(work.credit)}</figcaption>` : ""}
      </figure>
      <div class="dialog-copy dialog-reading">
        ${work.media ? `
          <div class="dialog-actions">
            ${hasPlayer ? `<button type="button" class="play" id="play-work" aria-expanded="false" aria-controls="media-player">${escapeHtml(playText)}</button>` : ""}
            ${work.media.link ? `<a href="${escapeHtml(work.media.link)}" target="_blank" rel="noopener noreferrer">${work.media.type.includes("audio") ? "在来源页听" : "在来源页观看"} ↗</a>` : ""}
          </div>
          <div id="media-player" class="media-player"></div>` : ""}
        ${profileMarkup(work)}
      </div>
    </article>`;
  if (hasPlayer) document.querySelector("#play-work").addEventListener("click", () => togglePlayer(work, playText));
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
  closeButton.focus({ preventScroll: true });
}

function togglePlayer(work, playText) {
  const player = document.querySelector("#media-player");
  const toggle = document.querySelector("#play-work");
  if (player.firstChild) {
    player.replaceChildren();
    toggle.textContent = playText;
    toggle.setAttribute("aria-expanded", "false");
    return;
  }
  const media = work.media;
  const isEmbed = media.type.endsWith("embed");
  const element = document.createElement(isEmbed ? "iframe" : media.type);
  element.src = media.src;
  if (isEmbed) {
    element.title = work.title + " · " + playText;
    element.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
    element.allowFullscreen = true;
    if (media.type === "audio-embed") element.classList.add("audio-embed");
  } else {
    element.controls = true;
    element.preload = "metadata";
    if (media.type === "video") element.playsInline = true;
  }
  player.append(element);
  if (!isEmbed) element.play().catch(() => {});
  toggle.textContent = "关闭播放器";
  toggle.setAttribute("aria-expanded", "true");
  player.scrollIntoView({ block: "nearest" });
}

function readRoute({ jump = false, focus = false } = {}) {
  const [section, themeId, workId] = location.hash.slice(1).split("/");
  if (section !== "theme") {
    if (dialog.open) dialog.close();
    return;
  }
  const theme = themes.find((item) => item.id === themeId);
  if (!theme) return;
  if (theme !== activeTheme || !spread.children.length) renderTheme(theme);
  const work = theme.works.find((item) => item.id === workId);
  if (work) {
    if (work !== openCase || !dialog.open) showWork(theme, work);
    return;
  }
  if (dialog.open) dialog.close();
  if (jump) spread.scrollIntoView({ block: "start" });
  if (focus) spread.querySelector(".spread-title").focus({ preventScroll: true });
}

function navigate(href, options) {
  if (location.hash !== href) history.pushState(null, "", href);
  readRoute(options);
}

function goToWork(work, origin) {
  returnFocus = origin;
  navigate(workHref(activeTheme, work));
}

function closeWork() {
  history.replaceState(null, "", themeHref(activeTheme));
  dialog.close();
}

function moveWork(step) {
  const works = activeTheme.works;
  const index = works.indexOf(openCase);
  const nextWork = works[(index + step + works.length) % works.length];
  history.replaceState(null, "", workHref(activeTheme, nextWork));
  showWork(activeTheme, nextWork);
}

function watchBrokenImage(event) {
  const image = event.target;
  if (!(image instanceof HTMLImageElement)) return;
  const fallback = image.nextElementSibling;
  if (!fallback?.classList.contains("typographic")) return;
  image.hidden = true;
  fallback.hidden = false;
}

document.addEventListener("error", watchBrokenImage, true);
document.addEventListener("click", (event) => {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
  const link = event.target.closest('a[href^="#theme/"]');
  if (link) {
    event.preventDefault();
    if (link.dataset.case) returnFocus = link;
    navigate(link.getAttribute("href"), { jump: !link.dataset.case, focus: !link.dataset.case });
    return;
  }
  const button = event.target.closest("button[data-case]");
  if (button) {
    const work = activeTheme.works.find((item) => item.id === button.dataset.case);
    if (work) goToWork(work, button);
  }
});
navigation.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  const links = [...navigation.querySelectorAll("a")];
  const current = links.indexOf(document.activeElement);
  if (current === -1) return;
  event.preventDefault();
  let target = (current + (event.key === "ArrowLeft" ? -1 : 1) + links.length) % links.length;
  if (event.key === "Home") target = 0;
  if (event.key === "End") target = links.length - 1;
  links[target].focus();
});
closeButton.addEventListener("click", closeWork);
dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeWork();
});
dialog.addEventListener("click", (event) => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeWork();
});
dialog.addEventListener("close", () => {
  dialogBody.replaceChildren();
  openCase = null;
  if (returnFocus?.isConnected) returnFocus.focus({ preventScroll: true });
  returnFocus = null;
});
document.querySelector("#work-prev").addEventListener("click", () => moveWork(-1));
document.querySelector("#work-next").addEventListener("click", () => moveWork(1));
window.addEventListener("hashchange", () => readRoute());

navigation.innerHTML = themes.map((theme) => `
  <a href="${themeHref(theme)}" class="theme-tab" data-theme="${theme.id}" style="--tab-color:${theme.color}">
    <span class="number">${themeLabel(theme)}</span><span class="arrow" aria-hidden="true">↗</span>
    <span class="tab-name">${escapeHtml(theme.name)}</span>
    <span class="tab-en" lang="en">${escapeHtml(theme.en)}</span>
  </a>`).join("");
document.querySelector("#index-total").textContent = `${themes.reduce((count, theme) => count + theme.works.length, 0)} 件作品`;
document.querySelector("#index-groups").innerHTML = themes.map((theme) => `
  <div class="index-group" style="--group-color:${theme.color}">
    <h3><a href="${themeHref(theme)}">${themeLabel(theme)} · ${theme.name}</a></h3>
    <ul>${theme.works.map((work) => `<li><a href="${workHref(theme, work)}" data-case="${work.id}">${escapeHtml(work.title)}</a><span>${escapeHtml(work.year)}</span></li>`).join("")}</ul>
  </div>`).join("");
renderTheme(themes[0]);
readRoute({ jump: true });
