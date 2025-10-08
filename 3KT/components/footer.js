class SiteFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        footer {
          background: #333;
          color: #ccc;
          text-align: center;
          padding: 15px;
          font-size: 0.9em;
        }
      </style>
      <footer>
        © 2025 Все права защищены | Контакты: example@mail.com
      </footer>
    `;
  }
}
customElements.define("site-footer", SiteFooter);
