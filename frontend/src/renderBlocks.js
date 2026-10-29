const renderers = {
  hero(block) {
    return `<section class="hero"><h1>${block.title}</h1><p>${block.text || ""}</p></section>`;
  },
  features(block) {
    const items = (block.items || [])
      .map((i) => `<article><strong>${i.title}</strong><p>${i.text}</p></article>`)
      .join("");
    return `<section id="features"><h2>${block.title}</h2><div class="grid">${items}</div></section>`;
  },
  projects(block) {
    const items = (block.items || [])
      .map((i) => `<article><span>${i.code}</span><h3>${i.title}</h3><p>${i.type}</p></article>`)
      .join("");
    return `<section id="projects"><h2>${block.title}</h2><div class="grid">${items}</div></section>`;
  },
  testimonials(block) {
    const items = (block.items || [])
      .map((i) => `<blockquote><p>${i.text}</p><cite>${i.name}</cite></blockquote>`)
      .join("");
    return `<section id="testimonials"><h2>${block.title}</h2>${items}</section>`;
  },
  contacts(block) {
    return `<section id="contacts"><h2>${block.title}</h2><p>${block.email}<br>${block.phone}</p></section>`;
  },
};

export function renderBlocks(blocks = []) {
  return blocks
    .map((b) => {
      const fn = renderers[b.blockType];
      return fn ? fn(b) : "";
    })
    .join("");
}
