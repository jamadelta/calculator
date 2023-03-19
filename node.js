let num1;  // Создаём переменную где будет хранится значение первого числа
let num2;  // Создаём переменную где будет хранится значение второго числа
// Создаём переменную и берём элемент, куда будет выводится результат 
let out = document.getElementById('out');
 
// Создаем функцию которая запрещает вводить что либо кроме чисел
function validate(evt) {
var theEvent = evt || window.event;
var key = theEvent.keyCode || theEvent.which;
key = String.fromCharCode( key );
var regex = /[0-9\s\+\-]|\./;
if( !regex.test(key) ) {
  theEvent.returnValue = false;
  if(theEvent.preventDefault) theEvent.preventDefault();
}
}

//запрещаем вводить что либо кроме чисел в наши текствые поля
document.getElementById('n1').onkeypress = function() {
  validate(event);
}
document.getElementById('n2').onkeypress = function() {
  validate(event);
}
    
//запрещаем вставлять готовый текст в наши текствые поля
document.getElementById('n1').onpaste = function() {
  validate(event);
}
document.getElementById('n2').onpaste = function() {
  validate(event);
}


// функция сложения
function plus() {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 + num2;
}
 
// функция вычитания
function minus() {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 - num2;
}
 
// функция умножения
function multiplication() {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 * num2;
}
 
// функция деления
function division() {
 num1 = document.getElementById('n1').value; 
 num1 = parseInt(num1)
 num2 = document.getElementById('n2').value;
 num2 = parseInt(num2)
 
 out.innerHTML = num1 / num2;
}

// функция ввода в степень
function degree() {
      num1 = document.getElementById('n1').value; 
      num1 = parseInt(num1)
      num2 = document.getElementById('n2').value;
      num2 = parseInt(num2)

     out.innerHTML = num1 ** num2;
}

// функция вычисления корня
function root() {
      num1 = document.getElementById('n1').value; 
      num1 = parseInt(num1)
      
     out.innerHTML = (Math.sqrt(num1));
}

// функция вычисления процента от числа
function percent() {
      num1 = document.getElementById('n1').value; 
      num1 = parseInt(num1)
      num2 = document.getElementById('n2').value;
      num2 = parseInt(num2)
      
     out.innerHTML = num1 / 100 * num2 + "%";
}

// функция вычисления синуса
function sin() {
      num1 = document.getElementById('n1').value; 
      num1 = parseInt(num1)
      
     out.innerHTML = Math.sin(num1 * Math.PI / 180.0);
}

// функция вычисления тангенса
function fac() {
      num1 = document.getElementById('n1').value; 
      num1 = parseInt(num1)
      for(let i = 1; i<num1; i++) {
      var a = 
      }
     out.innerHTML =;
}

// функция вычисления косинуса
function cos() {
      num1 = document.getElementById('n1').value; 
      num1 = parseInt(num1)
      
     out.innerHTML = Math.cos(num1 * Math.PI / 180.0);
}