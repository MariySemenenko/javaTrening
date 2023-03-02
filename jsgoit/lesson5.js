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

 const calculator = {
    read (a, b) {
        this.a = a;
        this.b = b;
    },
    add () {
        return this.a + this.b;
    }, 
    mult () {
        return this.a * this.b;
    },
 };
   calculator.read(5, 4);
    // calculator.add();//9
    calculator.mult();//20