// Задание 1

let password = 'password';

let userInput = String(prompt('Your password, please'));

(password === userInput) ? console.log('Correct password') : console.log('Incorrect password');

// Задание 2

let c = 2;
if(c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3

let d = 102;
let e = 50;
if(d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// Задание 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// Задание 5

let month = Number(prompt('Введите номер месяца'));
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Введено неправильное значение номера месяца');
}

// Задание 6

// Задание 7

let anyNumber = Number(prompt('Введите любое число'));
if(isNaN(anyNumber)) {
    console.log('Вы ввели не число!');
} else {
    (anyNumber%2 === 0) ? alert('Число четное') : alert('Число нечетное');
}

// Задание 8
// Впрочем можно даже сделать clientOS boolean, но вдруг у нас и другие OS будут? :)

let clientOS = 1;  // 0 - iOS, 1 - Android
( clientOS === 0 ) ? console.log('Установите версию приложения для iOS по ссылке') :
    console.log('Установите версию приложения для Android по ссылке');

// Задание 9

let clientDeviceYear = 2010;
let msg1 = 'Android';
let msg2 = '';
if(clientDeviceYear < 2015) {
    msg2 = 'облегченную ';
}
if(clientOS === 0){
    msg1 = 'iOS';
}
console.log(`Установите ${msg2}версию приложения для ${msg1} по ссылке`);