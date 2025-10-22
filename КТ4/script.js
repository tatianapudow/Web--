//метод выводит данные из свойства info
const box = document.getElementById('box');
box.info = { color: "синий", size: 100 };
box.showInfo = function() {
  alert(`Цвет: ${this.info.color}, Размер: ${this.info.size}`);
};

box.showInfo();
//работа с атрибутами 
const fruit = document.getElementById('fruit');
alert(fruit.getAttribute('data-category'));

fruit.setAttribute('data-category', 'овощи'); //меняем атрибут 
alert(fruit.getAttribute('data-category'));


const input = document.getElementById('myInput');
input.value = "Пока";
alert(`Атрибут value: ${input.getAttribute('value')}`); 


input.setAttribute('value', 'Hello');
alert(`Свойство value: ${input.value}`); 
const Status = document.getElementById('status');


Status.dataset.orderState = "в процессе";



Element.prototype.highlight = function() {
  this.style.border = "3px solid orange";
  this.style.backgroundColor = "lightyellow";
};


box.highlight();
