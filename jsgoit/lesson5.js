// const user = {
//     name: 'Josh',
//     age: 30,
//     seyHello: function () {
//         console.log(`hello my name is ${this.name}`);
//     },
// };
// console.log(user.seyHello());
//-----------------------------------------

// 'use strict';
// const foo = () => console.log(this);

// foo();

//----------------------------------------------------

//привязка контукста user до bind
// function showThis () {
//     console.log(this);
// }
// const user = {
//     name: 'Josh',
//     age: 30,
// }
// const showThisBind = showThis.bind(user);
// console.log(showThisBind());
//-------------------------------------------------------

//привязуємо контекст за рахунок метода bind

// const customer = {
//     name: 'Josh',
//          age: 30,
//          getFullName () {
//              console.log(`this`, this) 
//                 return `${this.name} ${this.age}`
//              },
//          } ;  
// function makeMassege(callback) {
//     console.log(`обробляємо заявку від ${callback()}.`);
// };
// const binderCallback = customer.getFullName.bind(customer); 
// // binderCallback();
// makeMassege(binderCallback);
//----------------------------------------------------------

//напиши свій bind руками в джава скрипті
// const somePeople = {
//     name: 'Maria',
//     prof: 'IT',
// };
// function helloMyFriend(args) {
//     console.log(`hello ${this.name} + args`);
// };
// const myBind = function(fn) {
//     //this
//     const context = this;
//     return function(...args) {
//         //this
//         return fn.apply(context, args);
//     };
// };
// Object.prototype.myBindProto = myBind;
// const testMySelfBind = somePeople.myBindProto.helloMyFriend;
// // testMySelfBind(', my dear ftiend');
// helloMyFriend();
//----------------------------------------------

// const chopShop = {
//     stone: [
//     {name: 'topaz', price: 1300, quantity: 2},
//     {name: 'emerald', price: 2000, quantity: 4},
//     {name: 'diamond', price: 2700, quantity: 9},
//     {name: 'ruby', price: 800, quantity: 8},
//     ],

//     calculatorTotalPrice(stoneName) {
// const stone = this.stone.find(({name}) => name === stoneName);
// return stone.price * stone.quantity;
//     },
// };
// console.log(chopShop.calculatorTotalPrice('topaz'));//2600
// console.log(chopShop.calculatorTotalPrice('emerald'));//8000
// console.log(chopShop.calculatorTotalPrice('diamond'));//24300
// console.log(chopShop.calculatorTotalPrice('ruby'));//6400
//---------------------------------------------------------------

//створи обьект калькулятор з 3-ма методами
//read принімає значення та зберігає як свойства обьекта
// аdd вертає сумму збережених значень
//mult множить і вертає результат

//  const calculator = {
//     read (a, b) {
//         this.a = a;
//         this.b = b;
//     },
//     add () {
//         return this.a + this.b;
//     }, 
//     mult () {
//         return this.a * this.b;
//     },
//  };
//     console.log(calculator.read(5, 4));
//     console.log(calculator.add(5, 4));//9
//     console.log(calculator.mult(5, 4));//20
//-----------------------------------------

//функція конструктор , створи три ключа , 3 динамічних, 1 фіксований(спільних)
// зберігаємо спільну властивість в prototype
// function User(name, age, status) {
//     this.name = name;
//     this.age = age;
//     this.status = 'active';
// }
//     User.prototype.sayHello = function () {
//         console.log(`hello i am ${this.name}`);
//     };
    

// const Maria = new User('Masha', 20);//name: 'Masha', age: 20, status: 'active'
// Maria.sayHello();
// Bob.sayHello();
// console.log(Maria);

//передаємо обьект як аргумент в іншу функцію
// function Student(user) {
//     this.user = user;
// }
// const student = new Studen(Bob);
//------------------------------------------
//переписуємо верхню функцію на класи

// class User {
//     constructor(name, age, status) {
//         this.name = name;
//         this.age = age;
//         this.status = 'active';
//     }
//     sayHello() {
//         console.log(`Hello i am ${this.name}`);
//     }
// };
// const Bob = new User('Bob', 20, 'active');
// console.log(Bob);
// Bob.sayHello();
//------------------------------------------------

//створюємо класи для зберігання пошти регістрації користувача
// class User {
//     static #takenEmail = [];//створюємо приватний статік де буде зберігатися
//     // уся зареєстрована почта
//     static isEmailTaken(email) {//створюємо isEmailTaken який перевіряє чи є така почта
//         // при реєстрації
//         return User.#takenEmail.includes(email);
//     }
//     #email;//створюємо приватний емаіл який записуємо вобьєкт і пушимо в масив #takenEmail 
//     constructor({email}) {
//         this.#email = email;
//         User.#takenEmail.push(email);
//     }
// };
// const mango = new User({ email: 'mango@mail.com' });//реєструємо нову почту
// console.log(User.isEmailTaken('mango@mail.com'));//якщо хтось інший напише такий логін
// //буде true користувач не зареєструється
// console.log(User.isEmailTaken('polli@mail.com'));//якщо почта не співпадає з mango@mail.com
// // під капотом буде false, користувач зареєструється
//-----------------------------------------------------

// class Notes {
//     static Prioritet = {
// LOW: low,
// NORMAL: normal,
// HIGH: high,
//     };
//     constructor(item = []) {//створюємо конструктор з item де буде зберігатись пустий масив
//         this.item = item;//в пустий масив записуємо нотатки item

//     }
//     addItem(item) {//створюємо метод додавання і пушимо той item 
//         //який буде прилітати у вигляді аргументу
//         this.item.push(item);
//     }
// }