export function header(settings) {
  const menu = (settings.menu || [])
    .map((m) => `<a class="header__link" href="${m.link}">${m.label}</a>`)
    .join("");
  return `
    <header class="header">
      <a class="header__logo" href="/"><img src="/logo.svg" alt="${settings.siteName}"></a>
      <nav class="header__nav">${menu}</nav>
      <a class="btn btn--primary header__cta" href="#contacts">Зв’язатися</a>
    </header>`;
}
