class CardComponent extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById('card-template').content;
      this.attachShadow({mode: 'open'}).appendChild(template.cloneNode(true));
    }
  }
customElements.define('my-card', CardComponent);
