// Задание 1

const lessNumber = (a, b) => a <= b ? a : b;

console.log(lessNumber(1, 2));
console.log(lessNumber(2, 2));
console.log(lessNumber(3, 2));

// Задание 2

const evenOrOdd = (a) => a%2 === 0 ? 'Число четное' : 'Число нечетное';

console.log(evenOrOdd(1));
console.log(evenOrOdd(2));
console.log(evenOrOdd(5.5));
console.log(evenOrOdd('False'));

// Задание 3

const square1 = (a) => console.log(a**2);
const square2 = (a) => a**2;

square1(2);
console.log(square2(2));

// Задание 4

const greeting = () => {
    let age = Number(prompt('Сколько вам лет?'));
    if(age < 0) {
        alert('Вы ввели неправильное значение!');
    } else if (age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!')
    }
}

greeting();

// Задание 5

const multiplicationWithCheck = (a, b) => Number.isNaN(Number(a)) || Number.isNaN(Number(b)) ? 'Одно или оба значения не являются числом' : a * b;

console.log(multiplicationWithCheck(2, 5));
console.log(multiplicationWithCheck(2, 'Asd'));
console.log(multiplicationWithCheck('Final', 5));
console.log(multiplicationWithCheck('Do', 'or Do not'));

// Задание 6

const cubedNumber = (a) => Number.isNaN(Number(a)) ? 'Переданный параметр не является числом' : `${a} в кубе равняется ${a**3}`;

for(let i = 0; i <= 10; i++) {
    console.log(cubedNumber(i));
}
console.log(cubedNumber("Not a number"));

// Задание 7

const pi = 3.14159265358979;
const squareOfCircle = (r) => pi * r * r;
const lengthOfCircle = (r) => pi * 2 * r;

let circle1 = {
    radius : 2,
    getArea : function() {
        return squareOfCircle(this.radius);
    },
    getPerimeter: function() {
        return lengthOfCircle(this.radius);
    }
}

let circle2 = {
    radius : 3,
    getArea : function() {
        return squareOfCircle(this.radius);
    },
    getPerimeter: function() {
        return lengthOfCircle(this.radius);
    }
}

console.log(`Круг 1: радиус ${circle1.radius}, длина окружности ${circle1.getPerimeter()}, площадь ${circle1.getArea()}`);
console.log(`Круг 2: радиус ${circle2.radius}, длина окружности ${circle2.getPerimeter()}, площадь ${circle2.getArea()}`);

// Задание 8

const seasons = () => {
    let month = Number(prompt('Введите номер месяца'));
    if(Number.isNaN(month) || month < 1 || month > 12) {
        return 'Вы ввели неправильное значение';
    }
    switch(month) {
        case 12:
        case 1:
        case 2:
            return 'Зима';
        case 3:
        case 4:
        case 5:
            return 'Весна';
        case 6:
        case 7:
        case 8:
            return 'Лето';
        case 9:
        case 10:
        case 11:
            return 'Осень';
        default:
            return 'Вы ввели неправильное значение';
    }
}

const game1 = () => {
    alert(seasons());
}