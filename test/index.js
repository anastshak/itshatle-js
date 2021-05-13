'use strict'

/* 27-28 */
console.log('hello');

let oNumber;
oNumber = 5;
console.log(oNumber);

let human = { //объект
    name: "ueivuslf",
    lastname: "jmsxnmdnj"
};

function logger(obj) {
    console.log(`${obj.name} ${obj.lastname}`)
}

logger(human);


let count = 5;

if (count <= 10 || count >= 25) {
    console.log("vne diapazona")
}


function check(num) {
    if (num <= 10 || num >= 25) {
        console.log("vne diapazona")
    } else(console.log("v diapazone"))
}

check(15);
check(5);




/* 03-04 */


//приведение числа в двоичную систему
let toBin = function (num) {
    let str = "";
    let arr = [];
    for (; num !== 0;) {
        if (num % 2 === 1) {
            arr.push(1) //добавляет элемент в конец массива
        } else {
            arr.push(0)
        }
        num = (num - num % 2) / 2;
    }
    for (let i = arr.length - 1; i > -1; i--) { //берем и записываем элементы с конца и идем к первому
        str += arr[i];
    }
    return str;
}

console.log(toBin(21));




for (let i = 0; i < 5; i++) {
    console.log(`number ${i}`);
}

/* let i=0;
while(i<5){
    console.log(`number ${i}`);
    i++;
} */


/* 04 */


var counter = 0;

function plus(counter) { //функция для счетчика
    counter++;
}

/* замыкание */
function getCounter() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
        return counter;
    }
}

let obj = getCounter();
obj();


/* массивы */

let arr = [5, 7, 100, 3, 9, 1, 17, 4, 76, 6];

function bubbleSort() { //сортировка пузырьком
    let p = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            let t = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = t;
            p = true;
        }
    }
    if (p) { // p - false
        bubbleSort()
    }
}
bubbleSort(arr);
console.log(arr);


let arrarrarr = []; //двумерный массив
for (let i = 0; i < 10; i++) {
    var arr_i = [];
    for (let j = 0; j < 10; j++) {
        arr_i[j] = i * 10 + j;
    }
    arrarrarr[i] = arr_i;
}

console.log(arrarrarr);


/* 10 */

//стрелочные функции
let sayHello = (name) => {
    return console.log(name === "Mark" ? "Hi, Mark!" : `Hello, ${name}`)
}

sayHello("Nastya");
sayHello("Mark");


let pow = (x, n) => {
    (n >= 1 && Number.isInteger(n) === true) ? console.log(x ** n): console.log("no")
}

pow(2, 10);
pow(2, 1.56);
pow(2, 1);


document.getElementById("button").onclick = function () {
    alert("Hello, " + document.getElementById("input").value)
}


/* 11 */

let flag = "false";

document.getElementById("btn").onclick = function () {
    /* document.getElementById("img").classList.toggle("img-none") */
    flag ?
        document.getElementById("img").style.display = "none" :
        document.getElementById("img").style.display = "inline";
    flag = !flag; //меняет на противоположное значение
}.bind(this) // ???

/* document.body.appendChild(img); //выводит элемент img в конец body*/



document.getElementById("newB").onclick = function () {
    let img = document.createElement('img');

    let imgArr = [{
            "key": "width",
            "val": "250px"
        },
        {
            "key": "height",
            "val": "250px"
        },
        {
            "key": "src",
            "val": "./img.jpg"
        }
    ];

    for (let i = 0; i < imgArr.length; i++) {
        img.setAttribute(imgArr[i].key, imgArr[i].val)
    }
    let clone = document.getElementById("newB").cloneNode(true);
    document.body.appendChild(clone);
    clone.onclick = document.getElementById("newB").onclick;
    img.onclick = () => {
        img.replaceWith(document.getElementById("newB"));
    }
    document.getElementById("newB").replaceWith(img);
}


/* 17 */

/* 18 */

let form = document.forms[0];

let btn = form.elements['submit-btn'];

btn.onclick = function () {
    btn.disabled = "true";
    form.reset();
}


/* 24 */


let person = {
    name: "gnsgrs",
    age: 15,
    sayIntro() {
        console.log(`Name: ${this.name}, age: ${this.age}`);
    }
}

person.sayIntro();

/* 1 */
let car = {
    age: 5,
    model: "svsbefa",
    vyvod() {
        for (let key in car) {
            if (typeof this[key] !== "function") // чтобы вывелись только поля age и model
                console.log(` ${key} : ${this[key]}`)
        }
    }
}

car.vyvod();


/* 2 */
let newUser = {};

let user = {
    name: "fjbvsnejfv",
    email: "sfgnabfgsba",
    phone: 644654545,
    id: 155
};

console.log(Object.assign(newUser, user));


/* 3 */

let circle = {
    radius: 15,
    color: "red",
    calculateCircle() {
        console.log(2 * Math.PI * this.radius)
    }
}

circle.calculateCircle();


/* 4 */

let message = {
    text: "234",
    getMessage(str) {
        this.text += str;
    },
    showMessage() {
        console.log(this.text)
    }
}

message.getMessage("sgbsrgbt");
message.showMessage();

/* 5 */

let rectangle = {
    width: "15",
    height: "2",
    getArea() {
        console.log(this.width * this.height)
    }
}

rectangle.getArea();


/* 6 */

let obj1 = {};

let obj2 = {
    name: "vfsbvzdf"
}

function isEmpty(obj) {
    console.log(Object.keys(obj).length === 0 ? "true" : "false")
}

isEmpty(obj1); // выводит true, т.к. у объекта нет свойств
isEmpty(obj2); // false, т.к. есть свойства объекта




/* 25 */


/* 4 */
let product = {
    name: "John",
    price: 30,
    sold: false
};

let {
    name: productName,
    price: productPrice,
    sold: productSold
} = product;
console.log(productName, productPrice, productSold)


/* 5 */
let [name, lastname, ...other] = ['Tony', 'Stark', 1, 43, 1, 2, 3];

let sum = 0;

for (let i = 0; i < other.length; i++) {
    sum += other[i];
}

/* other.forEach(element => sum+=element); */

console.log(name, lastname, sum)

/*  */

function User(name, lastname) {
    this.name = name;
    this.lastname = lastname;
}

let user1 = new User("bfvjfbvo", "fvsdfb");
let user2 = new User("srgbs", "jru");
let user3 = new User("ws5yh", "ymu");

console.log(user2)
console.log(typeof JSON.stringify(user1))


/* 1 */


let date = new Date(2019, 11, 18, 12, 20);
/* date.setFullYear(2019, 11, 18) */

console.log(date);





/* 01 */


function* generateSequence() {
    yield 1;
    yield 2;
}

let generator = generateSequence();
/* console.log (generator.next());
console.log (generator.next());
console.log (generator.next());
console.log (generator.next()); */


/*  */
function* fib() {
    yield 0;
    let last = 0;
    let cur = 1;
    while (true) {
        yield cur;
        [last, cur] = [cur, last + cur];
    }
}

let genFib = fib();
/* console.log (genFib.next());
console.log (genFib.next());
console.log (genFib.next());
console.log (genFib.next());
console.log (genFib.next());
console.log (genFib.next());
console.log (genFib.next());
console.log (genFib.next()); */


/*  */
function* gen(from, to) {
    for (let i = from; i < to; i++) {
        if (i % 2 == 0) {
            yield i;
        }
    }
}


let ch = gen(5, 15);
console.log(ch.next());
console.log(ch.next());
console.log(ch.next());
console.log(ch.next());
console.log(ch.next());
console.log(ch.next());


/*  */
let user = {
    name: "fgnxfgn",
    lastname: "fbsrgbs"

}

let user1 = {
    age: 24
}

user.__proto__ = user1;
console.log(user.__proto__);

for (let prop in user) console.log(prop);

/*  */
let h = {
    name: "fgnxfgn",
    lastname: "fbsrgbs",
    getName: function () {
        console.log(user.name)
    }
}

console.log(h);
console.log(JSON.stringify(h))




/*  */




/* 02 */


class Car {
    constructor(name,year,color) {
        this._name = name;
        this._year = year;
        this._color = color;
    }
    changeColor(newColor) {
        this._color = newColor;
    }
}

let car1 = new Car ("BMW", 2012, "red");
console.log (car1);
car1.changeColor("black");
console.log (car1);


/*  */
class Person {
    constructor(name,age) {
        this._name = name;
        this._age = age;
    }
    getInfo() {
        return `${this._name} age ${this._age}`;
    }
}

let person1 = new Person ("fdbzdnbs", 1515);
console.log (person1.getInfo());

/*  */
class Animal {
    constructor(name) {
        this._name = name;
    }
    speak() {
        return `${this._name} says hi`;
    }
}

class Cat extends Animal {
    constructor(name){
        super(name);
    }
    speak(){
        return `${this._name} meows.`;
    }
}

let cat1 = new Cat("snsrs");
console.log (cat1.speak());


/*  */
try{
    thisIsNotFunction();
}
catch(error){
    console.log(error);
}



