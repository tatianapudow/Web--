class MyBox extends HTMLElement {
  static get observedAttributes() { //метод указывающий какой атрибут нужно вызывать, так же это помагает вызвать attributeChangedCallback
    return ["color"]; // указываем, за какими атрибутами следить
  }

  connectedCallback() {  // метод вызывается, когда элемент добавляется в DOM
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

  attributeChangedCallback(name, oldValue, newValue) { //
    if (name === "color") this.style.background = newValue;
  }

//   disconnectedCallback() {
//     console.log("Меня удалили!");
//   }
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

redBtn.onclick = () => document.querySelectorAll("my-box").forEach(box => box.setAttribute("color", "red")); 
blueBtn.onclick = () => document.querySelectorAll("my-box").forEach(box => box.setAttribute("color", "blue"));
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

//6кт
function openModal(message) {
  modal.style.display = "flex"; // делаем модальное окно видимым
  modalText.textContent = message;// вставляем переданное сообщение 

  console.log("Модалка открыта!");
  console.log("Сообщение:", message);
}

closeBtn.onclick = () => modal.style.display = "none"; //обработчик для закрытия нашего окна 

// modal.onclick = event => {
//   if (event.target === modal) modal.style.display = "none";
// };

openModalBtn.onclick = () => {
  openModal("Привет! Это твоё модальное окно!");
}; 