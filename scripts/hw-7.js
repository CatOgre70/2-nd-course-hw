// Задание 1
// Преобразуйте строку js в верхний регистр JS.

console.log('js'.toUpperCase());

// Задание 2
// Создайте функцию, которая в качестве параметров
// принимает массив строк и строку. Возвращать данная
// функция должна новый массив, содержащий только те
// элементы переданного массива, которые начинаются с
// переданной строки. Регистр символов не должен
// влиять.

// Вариант, когда не трогаем элементы начального массива
const searchStart = (strArray, str) => {
    return strArray.filter(el => el.toLowerCase().startsWith(str.toLowerCase()));
}

// Вариант, когда преобразуем элементы начального массива к
// нижнему регистру
const searchStart1 = (strArray, str) => {
    return strArray.filter(el => el.toLowerCase().startsWith(str.toLowerCase())).map(el => el.toLowerCase());
}


console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart1(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart1(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));

console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));
console.log(searchStart1(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3
// Округлите число 32.58884:

const num = 32.58884;

// До меньшего целого

console.log(Math.floor(num));

// До большего целого

console.log(Math.ceil(num));

// До ближайшего целого

console.log(Math.round(num));

// Задание 4
// Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти
// среди этих чисел наименьшее и наибольшее числа и
// вывести их в консоль.

const array = [52, 53, 49, 77, 21, 32];
let min = array[0];
let max = array[0];
for (const item of array) {
    if(item < min) {
        min = item;
        continue;
    }
    if(item > max) {
        max = item;
    }
}

console.log(`Минимальное значение = ${min}, максимальное значение = ${max}`);

//     Задание 5
// Создайте функцию, которая будет выводить в консоль
// рандомное число от 1 до 10.

// Вариант с нецелыми числами
const randomNumber = (min, max) => {
    return min + Math.random() * (max-min);
}

// Вариант с целыми числами
const randomNumber1 = (min, max) => {
    return Math.round(min + Math.random() * (max-min));
}

console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));
console.log(randomNumber(1, 10));

console.log(randomNumber1(1, 10));
console.log(randomNumber1(1, 10));
console.log(randomNumber1(1, 10));
console.log(randomNumber1(1, 10));
console.log(randomNumber1(1, 10));

// Задание 6
// Напишите функцию, которая будет принимать на вход целое
// число, а возвращать массив случайных целых чисел от 0 до
// переданного числа. Длина массива должна быть в 2 раза
// меньше переданного числа.

const randomArray = (num) => {
    const array = [];
    for (let i = 0; i < Math.floor(num/2); i++ ) {
        array[i] = randomNumber1(0, num);
    }
    return array;
}

console.log(randomArray(11));

// Задание 7
// Напишите функцию, которая на вход принимает 2 целых числа,
// а в качестве результата возвращает случайное целое число
// в этом диапазоне.

const randomNumber2 = (min, max) => {
    if(min !== Math.round(min) || max !== Math.round(max) || min > max) {
        console.log('Неверные значения min и max');
        return NaN;
    }
    return Math.round(min + Math.random() * (max-min));
}

console.log(randomNumber2(2.5, 3));
console.log(randomNumber2(2, 3.5));
console.log(randomNumber2(2.5, 3.51));
console.log(randomNumber2(3, 2));
console.log(randomNumber2(2, 3));
console.log(randomNumber2(2, 15));

//     Задание 8
// Выведите в консоль текущую дату в стандартном режиме.
// Используйте один из трех рассмотренных в уроке способов.

let currentDate = new Date();
console.log(currentDate.toDateString());

//     Задание 9
// Создайте переменную currentDate и сохраните в нее текущую
// дату. Выведите дату, которая наступит через 73 дня после
// текущей.

let days73 = 73 * 24 * 60 * 60 * 1000;
let newDate = +currentDate + days73;
let dateAfter73days = new Date(newDate);
console.log(dateAfter73days.toDateString());

// Задание 10
// Написать функцию, которая на вход принимает дату, а
// возвращает ее отображение в виде:
// Дата: <число> <месяц на русском> <год> - это <день недели
// на русском>. Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте
// Date.

const dateToRussianString = (date) => {
    const weekDayNames = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    return `Дата: ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()} - это ${weekDayNames[date.getDay()]}. Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

console.log(dateToRussianString(new Date()));

// Задание 11 _ Работа с макетом
// Вам необходимо создать еще один блок макета «Запомни слова» (Игра 2) и сделать адаптив.
// Мобильная версия сайта должна отображаться при разрешении 375px - 767px.
// При клике на кнопку «Играть» запустить программу с функционалом, описанным ниже.
// Дан массив слов:
// ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
// Необходимо перемешать элементы массива и вывести на экран пользователю с использованием
// alert();
// Спросить у пользователя:
// Чему равнялся первый элемент массива?
// Чему равнялся последний элемент массива?
// Поздравить пользователя, если он угадал оба элемента.
// Если пользователь угадал только одно слово, сообщить: «Вы были близки к победе!»
// Если не угадал ни одного элемента, сообщить, что пользователь ответил неверно.