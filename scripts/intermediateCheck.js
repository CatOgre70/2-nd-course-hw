// Задание 1

function strCount(str, letter){
    return str.split('').filter(el => el === letter).length;
}

console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('',      'z'));

// Задание 2

function squareSum(numbers){
    if(numbers.length > 0) {
        return numbers.map(el => Math.pow(el, 2)).reduce((a, b) => a + b);
    } else {
        return 0;
    }
}

console.log(squareSum([1,2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));

// Задание 3

function nearestSq(n){
    let sqrtN = Math.sqrt(n);
    let beforeN = Math.floor(sqrtN);
    let afterN = Math.ceil(sqrtN);
    return n - Math.pow(beforeN, 2) >= Math.pow(afterN, 2) - n ? Math.pow(afterN, 2) : Math.pow(beforeN, 2);
}

console.log(nearestSq(1), "nearestSq(1) = 1");
console.log(nearestSq(2), "nearestSq(2) = 1");
console.log(nearestSq(10), "nearestSq(10) = 9");
console.log(nearestSq(111), "nearestSq(111) = 121");
console.log(nearestSq(9999), "nearestSq(9999) = 10000");

// Задание 4

function solution(str){
    return str.split('').reverse().join('');
}

console.log(solution('world'), 'dlrow');
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');

// Задание 5

function addLength(str) {
    return str.split(" ").map(el => el + ` ${el.length}`);
}

console.log(addLength('apple ban'));

// Задание 6

function mango(quantity, price){
    return quantity % 3 * price + Math.floor(quantity / 3) * 2 * price;
}

console.log(mango(3, 3), 6);
console.log(mango(9, 5), 30);

// Задание 7

function litres(time) {
    return Math.floor(time * 0.5);
}

console.log(litres(2), 'should return 1 litre');
console.log(litres(1.4), 'should return 0 litres');
console.log(litres(12.3), 'should return 6 litres');
console.log(litres(0.82), 'should return 0 litres');
console.log(litres(11.8), 'should return 5 litres');
console.log(litres(1787), 'should return 893 litres');
console.log(litres(0), 'should return 0 litres');

// Задание 8

function invert(array) {
    return array.map(el => el === 0 ? 0 : 0 - el);
}

console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);

// Задание 9

function powersOfTwo(n){
    const arr = [];
    for(let i = 0; i <= n; i++) {
        arr.push(2 ** i);
    }
    return arr;
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));
console.log(powersOfTwo(10));

// Задание 10

function grow(x){
    return x.reduce((a, b) => a * b);
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16);
console.log(grow([2, 2, 2, 2, 2, 2]), 64);