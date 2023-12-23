// Задание 1
// С помощью метода массива sort отсортируйте массив people по возрастанию возраста
// и выведите их в консоль. Допишите колбэк для sort, изучите, как работает колбэк,
// в документации

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

const compareAge = (a, b) => {
    return a.age - b.age;
}

console.log(people.sort(compareAge));

// Задание 2
// Реализуйте функцию
// filter, которая должна работать аналогично методу массива filter. За основу возьмите
// функцию map, которую мы реализовывали на уроке. Чтобы из функции map сделать filter,
// нужно, в зависимости от результата вызова ruleFunction, принимать решение о том,
// добавлять в результирующий массив очередной элемент или нет.

const people1 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

const isPositive = (a) => {
    return a >= 0;
}

const isMale = (a) => {
    return a.gender === 'male';
}

const filter = (array, ruleFunction) => {
    const resultArray = [];
    for (const arrayElement of array) {
        if(ruleFunction(arrayElement)) {
            resultArray.push(arrayElement);
        }
    }
    return resultArray;
}

console.log(filter([3, -4, 1, 9], isPositive));
console.log(filter(people1, isMale));

// Задание 3
// Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить
// в консоль текущую дату. Последней строкой должно выводиться сообщение «30 секунд
// прошло».

const timer = () => {
    const interval = setInterval(() => {
        console.log(new Date());
    }, 3000);
    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд истекло!')
    }, 30 * 1000)
};

timer();

// Задание 4
// Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска. Допишите функцию
// delayForSecond так, чтобы приветствие выводилось в консоль не сразу, а спустя 1 секунду.
// Используйте setTimeout.

function delayForSecond(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}
delayForSecond(function () {
   console.log('Привет, Глеб!');
});

// Задание 5
// Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:
// Привет, Глеб!
// Прошла одна секунда
// Правильный порядок:
// Прошла одна секунда
// Привет, Глеб!
// Исправьте код, чтобы он выводил сообщения в правильном порядке:

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

function delayForSecond1(callback) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(callback) {
            callback();
        }
    }, 1000);
}

delayForSecond1(() => sayHi('Глеб'));