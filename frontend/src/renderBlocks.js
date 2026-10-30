const renderers = {
  hero(b) {
    const actions = (b.buttons || [])
      .map((x) => `<a class="btn btn--${x.variant}" href="${x.link || '#projects'}">${x.label || x.text}</a>`)
      .join("");
    const stats = (b.stats || [])
      .map((s) => `<li class="hero__stat"><strong>${s.value}</strong><span>${s.label}</span></li>`)
      .join("");
    return `
      <section class="hero" id="hero">
        <div class="hero__content">
          <span class="hero__badge">${b.badge || "BudPro"}</span>
          <h1 class="hero__title">${b.title}</h1>
          <p class="hero__subtitle">${b.text || b.subtitle || ""}</p>
          <div class="hero__actions">${actions}</div>
          ${stats ? `<ul class="hero__stats">${stats}</ul>` : ""}
        </div>
        <img class="hero__image" src="${b.image?.src || "/hero.jpg"}" alt="${b.image?.alt || "Будівельний майданчик"}">
      </section>`;
  },
  features(b) {
    const items = (b.items || [])
      .map((i) => `<article class="feature"><div class="feature__icon">${i.icon}</div><h3>${i.title}</h3><p>${i.text}</p></article>`)
      .join("");
    return `<section class="features" id="features"><h2 class="section-title">${b.title}</h2><div class="features__grid">${items}</div></section>`;
  },
  projects(b) {
    const items = (b.items || [])
      .map((i) => `
        <article class="project">
          <img class="project__image" src="${i.image}" alt="${i.title}">
          <div class="project__body">
            <p class="project__type">${i.type}</p>
            <h3 class="project__title">${i.code} · ${i.title}</h3>
            <p class="project__meta">${i.address || ""}</p>
          </div>
        </article>`)
      .join("");
    return `<section class="projects" id="projects">
      <h2 class="section-title">${b.title}</h2>
      <p class="projects__subtitle">${b.subtitle || ""}</p>
      <div class="projects__grid">${items}</div>
    </section>`;
  },
  testimonials(b) {
    const items = (b.items || [])
      .map((i) => `<blockquote class="quote"><p>«${i.text}»</p><cite>${i.name}</cite></blockquote>`)
      .join("");
    return `<section class="testimonials" id="testimonials"><h2 class="section-title">${b.title}</h2><div class="testimonials__grid">${items}</div></section>`;
  },
  contacts(b) {
    return `<section class="contacts" id="contacts">
      <div><h2>${b.title}</h2><p>${b.text || "Розкажемо, як запустити контроль на вашому об’єкті."}</p></div>
      <div><p><a href="mailto:${b.email}">${b.email}</a></p><p>${b.phone}</p></div>
    </section>`;
  },
};

export function renderBlocks(blocks = []) {
  return blocks.map((b) => (renderers[b.blockType] ? renderers[b.blockType](b) : "")).join("");
}
