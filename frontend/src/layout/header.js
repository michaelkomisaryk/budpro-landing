export function header(settings) {
  const menu = (settings.menu || [])
    .map((m) => `<a class="header__link" href="${m.link}">${m.label}</a>`)
    .join("");
  return `
    <header class="header">
      <a class="brand-mark" href="/" style="text-decoration:none;color:inherit">
        <b>${settings.siteName}</b>
        <span>планування · контроль · супровід</span>
      </a>
      <nav class="header__nav">${menu}</nav>
      <a class="btn btn--primary" href="#contacts">Демо Django</a>
    </header>`;
}
