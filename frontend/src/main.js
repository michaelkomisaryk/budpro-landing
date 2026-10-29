import { getPage, getSettings } from "./api.js";
import { renderBlocks } from "./renderBlocks.js";

async function start() {
  const root = document.getElementById("app");
  try {
    const [settings, page] = await Promise.all([getSettings(), getPage()]);
    const menu = (settings.menu || [])
      .map((m) => `<a href="${m.link}">${m.label}</a>`)
      .join("");
    root.innerHTML = `
      <header class="top"><strong>${settings.siteName}</strong><nav>${menu}</nav></header>
      <main>${renderBlocks(page.blocks)}</main>
      <footer><p>${settings.siteName} · лендінг</p></footer>`;
  } catch (e) {
    root.innerHTML = `<section class="error"><h1>Сторінку не знайдено</h1><p>${e.message}</p></section>`;
  }
}

start();
