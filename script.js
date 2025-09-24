class MyButton extends HTMLElement {
 connectedCallback() {
 this.innerHTML = `<button>Нажми меня</button>`;
 }
}
customElements.define('my-button', MyButton);

class UserCard extends HTMLElement {
 constructor() {
 super();
 this.attachShadow({ mode: 'open' });
 this.shadowRoot.innerHTML = `
 <style>
 .card { border: 1px solid #ccc; padding: 10px; }
 </style>
 <div class="card">
 <slot></slot>
 </div>
 `;
 }
}
customElements.define('user-card', UserCard);

const template = document.getElementById('tpl');
const content = template.content.cloneNode(true);
document.body.appendChild(content);

