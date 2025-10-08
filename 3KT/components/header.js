class SiteHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        header {
          background: #007BFF;
          color: white;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        nav a {
          margin-left: 15px;
          text-decoration: none;
          color: white;
          font-weight: bold;
        }
        nav a:hover {
          text-decoration: underline;
        }
      </style>
      <header>
        <div class="logo">🌐 Мой сайт</div>
        <nav>
          <a href="#home">Главная</a>
          <a href="#projects">Проекты</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </header>
    `;
  }
}
customElements.define("site-header", SiteHeader);
