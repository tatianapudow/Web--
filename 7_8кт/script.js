const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeBtn");

function openModal(message) {
  modalText.textContent = message;
  alert("Модальное окно открыто");
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if(e.target === modal) closeModal();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});

openModalBtn.addEventListener("click", () => openModal("Привет! Это твоё модальное окно!"));


// TO-do list 
customElements.define("todo-item", class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = `
      <li><span></span><button>Удалить</button></li>`;
  }
  connectedCallback() {
    this.shadowRoot.querySelector("span").textContent = this.getAttribute("text");
    this.shadowRoot.querySelector("button").onclick = () => {
      this.remove();
      this.dispatchEvent(new CustomEvent('item-removed', { bubbles: true }));
    };
  }
});

customElements.define("todo-list", class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = `
      <input><button>Добавить</button><ul></ul>`;
  }
  connectedCallback() {
    const input = this.shadowRoot.querySelector("input");
    const ul = this.shadowRoot.querySelector("ul");
    const saveToStorage = () => {
      const items = Array.from(ul.children).map(item => item.getAttribute("text"));
      localStorage.setItem("todo-items", JSON.stringify(items));
    };
    const addItem = () => {
      const text = input.value.trim();
      if (!text) return;
      const item = document.createElement("todo-item");
      item.setAttribute("text", text);
      ul.appendChild(item);
      input.value = "";
      saveToStorage();
    };
    this.shadowRoot.querySelector("button").onclick = addItem;
    input.onkeydown = e => {
      if (e.key === "Enter") {
        addItem();
      }
    };
    // загружаем задачи из localStorage
    const saved = JSON.parse(localStorage.getItem("todo-items") || "[]");
    saved.forEach(text => {
      const item = document.createElement("todo-item");
      item.setAttribute("text", text);
      ul.appendChild(item);
    });
    // слушаем удаление задач для обновления localStorage
    ul.addEventListener('item-removed', saveToStorage);
  }
});
  

//переключатель темы 
customElements.define("theme-button", class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).innerHTML = `
      <button style="
        padding:10px 15px;
        border:none;
        border-radius:8px;
        background: var(--bg-color);
        color: var(--text-color);
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: background 0.3s, color 0.3s;
      ">Сменить тему</button>`;
  }
  connectedCallback() {
    this.shadowRoot.querySelector("button").onclick = () => {
      const root = document.documentElement;
      const currentBg = getComputedStyle(root).getPropertyValue("--bg-color").trim();
      if (currentBg === "white") {
        root.style.setProperty("--bg-color", "black");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("background-color", "black"); 
        root.style.setProperty("color", "white");          
      } else {
        root.style.setProperty("--bg-color", "white");
        root.style.setProperty("--text-color", "black");
        root.style.setProperty("background-color", "white");
        root.style.setProperty("color", "black");
      }
    };
  }
});
