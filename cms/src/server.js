const http = require("http");
const path = require("path");
const fs = require("fs");

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
      badge: "Система для девелоперів і генпідрядників",
      title: "Контроль будівельних проєктів без хаосу в журналах",
      text: "Планування етапів, одне активне завдання супроводу на об’єкт і кабінет для замовника, менеджера й адміністратора.",
      image: { src: "/hero.jpg", alt: "Будівельний майданчик" },
      buttons: [
        { variant: "primary", label: "Дивитись проєкти", link: "#projects" },
        { variant: "secondary", label: "Як це працює", link: "#features" },
      ],
      stats: [
        { value: "1 активне", label: "завдання на проєкт" },
        { value: "3 ролі", label: "замовник · менеджер · адмін" },
        { value: "MySQL", label: "облік у Django" },
      ],
    },
    {
      blockType: "features",
      title: "Що дає BudPro",
      items: [
        { icon: "01", title: "Планування", text: "Портфель об’єктів: житло, комерція, інфраструктура — з бюджетом і фото." },
        { icon: "02", title: "Контроль", text: "Поки є активне завдання супроводу, друге на той самий проєкт не відкривається." },
        { icon: "03", title: "Супровід", text: "Замовник бачить свої заявки, менеджер веде журнал, адміністратор керує своїми проєктами." },
      ],
    },
    {
      blockType: "projects",
      title: "Приклади об’єктів",
      subtitle: "Фрагмент портфеля, з яким працює облікова система BudPro.",
      items: [
        { code: "BP-2401", title: "ЖК Сонячний", type: "Житлове", address: "м. Львів, вул. Стрийська 100", image: "/p1.jpg" },
        { code: "BP-2402", title: "Офіс Центр", type: "Комерційне", address: "м. Львів, пр. Чорновола 7", image: "/p2.jpg" },
        { code: "BP-2403", title: "Розв’язка Південна", type: "Інфраструктура", address: "м. Львів, кільцева", image: "/p3.jpg" },
      ],
    },
    {
      blockType: "testimonials",
      title: "Відгуки",
      items: [
        { name: "Олена К., замовник", text: "Зникли подвійні завдання на одному об’єкті — у журналі все однозначно." },
        { name: "Ігор М., менеджер", text: "Зручно вести один журнал супроводу й одразу бачити статуси." },
      ],
    },
    {
      blockType: "contacts",
      title: "Готові показати на вашому об’єкті",
      text: "Напишіть — розкажемо про демо Django-сайту і лендінг на Payload-архітектурі.",
      email: "hello@budpro.local",
      phone: "+380 67 000 00 00",
    },
  ],
};

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url === "/api/common") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(common));
    return;
  }
  if (req.url === "/api/page" || (req.url || "").startsWith("/api/page?")) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(page));
    return;
  }
  if (req.url === "/admin") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end("<h1>BudPro CMS /admin</h1><p>Payload editor placeholder for Pages & blocks.</p>");
    return;
  }
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ error: "not_found" }));
});

server.listen(3000, () => console.log("CMS API http://127.0.0.1:3000"));
