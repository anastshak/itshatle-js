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




