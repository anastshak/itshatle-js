'use strict'

/* 1 - числа Фибоначчи*/

function fib(number) {
    if (number <= 1) {
        return number
    } else {
        return fib(number - 1) + fib(number - 2)
    }
}

console.log(fib(7)); // 13


function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(3)); // 2

//правильный вариант
function fib(n) {
    let a = 1; // fib(1)
    let b = 1; // fib(2)
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(7));


/* 2 */

function rand(min, max) { //фунция выбора случайного числа из диапазона
    return Math.floor(Math.random * (max - min)) + min;
}

/*  
Math.floor - округление в меньшую сторону, .ceil - в большую сторону, .round - до ближайшего целого
*/

let zadanie2 = function (min, max, div) {
    let x = rand(min, max)
    if (x % div === 0) {
        console.log(x);
    } else {
        console.log("no");
    }
}

console.log(zadanie2(10, 20, 3));


/* 3 */

function prov() {

    let password = prompt('Enter your password: ', '');
    let currentPassword = "123asd";

    if (password == currentPassword) {
        alert("Пароль верный")
    } else {
        alert("Пароль не верный")
    }

    if (password == '' || password == null) {
        alert("Отмена")
    }
}

/* prov(); */


/* 4 */

function uravnenie(a, b, c) { //ax2 + bx + c = 0

    let D = b * b - 4 * a * c;
    console.log('D = ' + D);

    if (D < 0) {
        console.log("Корней нет")
    }

    if (D == 0) {
        let x = (-b + Math.sqrt(D)) / (2 * a);
        console.log(x);
    }

    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log(x1 + ", " + x2);
    }
}

uravnenie(2, -14, 24);