import { getPage, getSettings } from "./api.js";
import { header } from "./layout/header.js";
import { footer } from "./layout/footer.js";
import { renderBlocks } from "./renderBlocks.js";

async function start() {
  const root = document.getElementById("app");
  try {
    const [settings, page] = await Promise.all([getSettings(), getPage()]);
    document.title = `${page.title} — ${settings.siteName}`;
    root.innerHTML = `${header(settings)}<main>${renderBlocks(page.blocks)}</main>${footer(settings)}`;
  } catch (e) {
    root.innerHTML = `<section class="app-error"><h1>Сторінку не знайдено</h1><p>${e.message}</p></section>`;
  }
}
start();
