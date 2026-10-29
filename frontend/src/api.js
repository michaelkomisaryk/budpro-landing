const API = "http://127.0.0.1:3000";

async function getJson(path) {
  const res = await fetch(`${API}${path}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export const getSettings = () => getJson("/api/common");
export const getPage = () => getJson("/api/page");
