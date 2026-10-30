export function footer(settings) {
  return `
    <footer class="footer">
      <b style="color:var(--ink)">${settings.siteName}</b>
      <p>Система автоматизації планування, контролю та супроводу будівельних проєктів. Django 5.2 · MySQL · Bootstrap.</p>
      <p>Облік проєктів, працівників, завдань, матеріалів, витрат і табеля в одному кабінеті.</p>
    </footer>`;
}
