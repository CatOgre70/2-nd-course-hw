// Задание 1
let a = 10;
alert(a);
a = 20;
alert(a);

// Задание 2
let iPhoneIssueDate = 2007;
console.log(iPhoneIssueDate);

// Задание 3
let jsCreator = 'Брендан Эйх (Brendan Eich)';
console.log(jsCreator);

// Задание 4
const variable1 = 10;
const variable2 = 2;
console.log(variable1+variable2, variable1-variable2, variable1*variable2, variable1/variable2);

// Задание 5
let result = 2 ** 5;
alert(result);

// Задание 6
a = 9;
let b = 2;
alert(a%b);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = Number(prompt("Введите, пожалуйста, ваш возраст"));
alert(age);

// Задание 9.0
let user = {
    name: `Иванов Иван`,
    age: 27,
    isAdmin: false
}

// Задание 9.1
user['city of residence'] = 'Moscow';

// Задание 9.2
user['age'] = 28;

// Задание 9.3
delete user['city of residence'];

// Задание 9.4
let info = prompt(`Что вы хотите узнать о пользователе?`);
alert(user[info]);

// Задание 10
let name = prompt(`Ваше имя?`);
alert(`Привет, ${name}!`);