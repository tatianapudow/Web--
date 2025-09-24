class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    const title = document.createElement('h3');
    const button = document.createElement('button');

    title.textContent = this.getAttribute('name') || 'Неизвестный';
    button.textContent = 'Привет';

    container.appendChild(title);
    container.appendChild(button);

    
    this.shadowRoot.appendChild(container);

    button.addEventListener('click', () => {
      alert('Привет, ' + title.textContent + '!');
    });
  }
}

customElements.define('user-card', UserCard);

class ProductCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    
    const container = document.createElement('div');

    
    const titleElem = document.createElement('h3');
    titleElem.textContent = this.getAttribute('title') || 'Товар';

    
    const buyButton = document.createElement('button');
    buyButton.textContent = 'Купить';

    
    buyButton.addEventListener('click', () => {
      alert('Вы купили: ' + titleElem.textContent);
    });

    
    container.appendChild(titleElem);
    container.appendChild(buyButton);

    
    this.shadowRoot.appendChild(container);
  }
}


customElements.define('product-card', ProductCard);
