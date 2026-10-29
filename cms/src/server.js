const http = require("http");
// hero aligned with practice report

const common = {
  siteName: "BudPro",
  menu: [
    { label: "Можливості", link: "#features" },
    { label: "Проєкти", link: "#projects" },
    { label: "Відгуки", link: "#testimonials" },
    { label: "Контакти", link: "#contacts" },
  ],
};

const page = {
  path: "/",
  title: "Планування і супровід будівельних проєктів",
  blocks: [
    {
      blockType: "hero",
      title: "BudPro — планування, контроль і супровід будівельних проєктів",
      text: "Планування, контроль етапів і супровід об’єктів в одній системі.",
      buttons: [{ variant: "primary", label: "Дивитись можливості" }],
    },
    {
      blockType: "features",
      title: "Що дає система",
      items: [
        { icon: "1", title: "Планування", text: "Портфель об’єктів, типи робіт і бюджети." },
        { icon: "2", title: "Контроль", text: "Одне активне завдання супроводу на проєкт." },
        { icon: "3", title: "Супровід", text: "Журнал для менеджера і кабінет замовника." },
      ],
    },
    {
      blockType: "projects",
      title: "Приклади об’єктів",
      items: [
        { code: "BP-2401", title: "ЖК Сонячний", type: "Житлове" },
        { code: "BP-2402", title: "Офіс Центр", type: "Комерційне" },
        { code: "BP-2403", title: "Розв’язка Південна", type: "Інфраструктура" },
      ],
    },
    {
      blockType: "testimonials",
      title: "Відгуки",
      items: [
        { name: "Олена К.", text: "Зникли подвійні завдання на одному об’єкті." },
        { name: "Ігор М.", text: "Менеджеру зручно вести один журнал супроводу." },
      ],
    },
    {
      blockType: "contacts",
      title: "Контакти",
      email: "hello@budpro.local",
      phone: "+380 67 000 00 00",
    },
  ],
};

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  if (req.url === "/api/common") {
    res.end(JSON.stringify(common));
    return;
  }
  if (req.url === "/api/page" || req.url.startsWith("/api/page?")) {
    res.end(JSON.stringify(page));
    return;
  }
  if (req.url === "/admin") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>BudPro CMS /admin</h1><p>Тут у повній версії — Payload редактор Pages і блоків.</p>");
    return;
  }
  res.statusCode = 404;
  res.end(JSON.stringify({ error: "not_found" }));
});

server.listen(3000, () => console.log("CMS API http://127.0.0.1:3000"));
