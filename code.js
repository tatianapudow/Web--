class HelloUser extends HTMLElement {
  // Метод вызывается, когда элемент добавляется в DOM
  connectedCallback() {
    // Получаем значение атрибута name, если его нет — используем "гость"
    const name = this.getAttribute('name') || 'гость';
    // Вставляем приветствие внутрь элемента
    this.innerHTML = `Привет, ${name}!`;
  }
}

// Регистрируем пользовательский элемент с именем <hello-user>
customElements.define('hello-user', HelloUser);

