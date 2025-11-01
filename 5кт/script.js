class MyBox extends HTMLElement {
  static get observedAttributes() {
    return ["color"];
  }

  connectedCallback() {
    this.textContent = "Я появился!";
    this.style.background = "green";
    this.style.color = "white";
    this.style.display = "flex";
    this.style.alignItems = "center";
    this.style.justifyContent = "center";
    this.style.width = "200px";
    this.style.height = "100px";
    this.style.borderRadius = "10px";
    this.style.fontSize = "18px";
    this.style.transition = "0.3s";
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "color") this.style.background = newValue;
  }

  disconnectedCallback() {
    console.log("Меня удалили!");
  }
}

customElements.define("my-box", MyBox);

const container = document.getElementById("container");
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const delBtn = document.getElementById("delete");
const addBtn = document.getElementById("add");
const openModalBtn = document.getElementById("openModal");

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const modalText = document.getElementById("modal-text");

let created = false;

redBtn.onclick = () => document.querySelectorAll("my-box").forEach(b => b.setAttribute("color", "red"));
blueBtn.onclick = () => document.querySelectorAll("my-box").forEach(b => b.setAttribute("color", "blue"));
delBtn.onclick = () => {
  const boxes = container.querySelectorAll("my-box");
  if (boxes.length > 0) {
    boxes[boxes.length - 1].remove();
  }
};

addBtn.onclick = () => {
  const box = document.createElement("my-box");
  container.append(box);
};


function openModal(message) {
  modal.style.display = "flex";
  modalText.textContent = message;

  // создаём и отправляем кастомное событие
  const event = new CustomEvent("modal-open", {
    detail: { message }
  });
  modal.dispatchEvent(event);
}
modal.addEventListener("modal-open", e => {
  console.log("Модалка открыта!");
  console.log("Сообщение:", e.detail.message);
});

// закрытие по кнопке ×
closeBtn.onclick = () => modal.style.display = "none";

// закрытие по клику вне контента
modal.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

// кнопка "Открыть модалку"
openModalBtn.onclick = () => {
  openModal("Привет, Татьяна! 👋 Это твоё модальное окно!");
};