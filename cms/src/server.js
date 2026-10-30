const http = require("http");

const common = {
  siteName: "БудПроєкт",
  menu: [
    { label: "Можливості", link: "#features" },
    { label: "Об’єкти", link: "#projects" },
    { label: "Відгуки", link: "#testimonials" },
    { label: "Контакти", link: "#contacts" },
  ],
};

const page = {
  path: "/",
  title: "Система планування та супроводу будівельних проєктів",
  blocks: [
    {
      blockType: "hero",
      badge: "Django · MySQL · ролі директор / працівник",
      title: "БудПроєкт тримає майданчик під контролем",
      text: "Планування проєктів, завдання, матеріали, витрати, табель і зарплати. Директор бачить свої об’єкти, працівник — свій кабінет /my/.",
      image: { src: "/hero.jpg", alt: "Будівельний майданчик" },
      buttons: [
        { variant: "primary", label: "Що вміє система", link: "#features" },
        { variant: "secondary", label: "Приклади об’єктів", link: "#projects" },
      ],
      stats: [
        { value: "CRUD", label: "проєкти й завдання" },
        { value: "2 ролі", label: "директор · працівник" },
        { value: "Звіти", label: "бюджет і CSV" },
      ],
    },
    {
      blockType: "features",
      title: "Можливості облікової системи",
      items: [
        { icon: "01", title: "Проєкти", text: "Картка об’єкта, бюджет, статус і контроль витрат на одному екрані." },
        { icon: "02", title: "Завдання й працівники", text: "Призначення робіт, кабінет працівника /my/ з годинами та зарплатою." },
        { icon: "03", title: "Матеріали й витрати", text: "Каталог матеріалів, облік закупівель і фактичні витрати без подвійного рахунку." },
        { icon: "04", title: "Табель і звіти", text: "WorkLog, payroll і фінансові звіти з експортом CSV для директора." },
      ],
    },
    {
      blockType: "projects",
      title: "Типи об’єктів у демо",
      subtitle: "У Django-застосунку після seed_demo з’являються демо-проєкти з працівниками, завданнями та витратами.",
      items: [
        { code: "ПР-01", title: "Житловий комплекс", type: "Житлове", address: "Планування · контроль бюджету", image: "/p1.jpg" },
        { code: "ПР-02", title: "Офісна забудова", type: "Комерційне", address: "Завдання · матеріали · табель", image: "/p2.jpg" },
        { code: "ПР-03", title: "Інфраструктура", type: "Інфраструктура", address: "Витрати · звіти · супровід", image: "/p3.jpg" },
      ],
    },
    {
      blockType: "testimonials",
      title: "Як цим користуються",
      items: [
        { name: "Директор", text: "Бачу лише свої проєкти, витрати й зарплати — чужі записи система не показує." },
        { name: "Працівник", text: "У /my/ є мої завдання, години й нарахування без доступу до чужих даних." },
      ],
    },
    {
      blockType: "contacts",
      title: "Локальне демо",
      text: "Django: http://127.0.0.1:8001/ · логін admin / admin12345 після seed_demo.",
      email: "noreply@budproject.local",
      phone: "БудПроєкт · навчальний проєкт",
    },
  ],
};

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.url === "/api/common") {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.end(JSON.stringify(common));
  }
  if (req.url === "/api/page" || (req.url || "").startsWith("/api/page?")) {
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.end(JSON.stringify(page));
  }
  if (req.url === "/admin") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.end("<h1>БудПроєкт CMS /admin</h1><p>Payload-стиль редактор сторінок і блоків.</p>");
  }
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ error: "not_found" }));
});

server.listen(3000, () => console.log("CMS API http://127.0.0.1:3000"));
