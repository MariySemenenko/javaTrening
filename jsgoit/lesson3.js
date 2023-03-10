//перебираємо обьєкт 
//отримуємо доступ до значень
// const books = [
//     {
//         title: 'Every thing is good',
//     },
//     {
//         title: 'Good morning',
//     },
//     {
//         title: 'I improve',
//     },
// ];
// const bookName = [];
// for (let book of books) {
//     bookName.push(book['title']);
// };
// console.log(bookName);
//----------------------------------

//перебираємо обьєкт
//додати поле
//замінити два знвчення
//вивести ключ значення for of
// const user = {
//     name: 'Maria',
//     age: 40,
//     hobbe: 'html',
//     premium: false,
// };
// user.mood = 'happy';
// user.hobbe = 'skydiving';
// user.premium = true;
// //дістаємо ключі
// const keys = Object.keys(user);
// for (let key of keys) {
//     console.log(`${key}: ${user[key]}`)
// }
// console.log(keys);
//============================================
//знаходимо сумму зарплат 
//якщо буде пусто то = 0
// const total = {
//     Maria: 1000,
//     Serhii: 2000,
//     Anton: 500,
// };
// const total1 = {};

// const salaries = function (parametrSalaries) {
//     const values = Object.values(parametrSalaries);
//     console.log(values);
//     if (values.length === 0) {
//         return 0;
//     }
// let totalSalaries = 0;
// for (let value of values) {
// totalSalaries += value;
// }
// return totalSalaries;
// };
// console.log(salaries(total));
// //---------------------------------
//або через for in
// //-------------------------------
//масив камінців
//знаходимо вартість товару
// const stones = [
//     {name: 'sapfir', price: 1300, quantity: 4},
//     {name: 'diamont', price: 2300, quantity: 6},
//     {name: 'izumryd', price: 3300, quantity: 10},
// ];
// function calculeitStoned (stones, stonesName) {
//     let targetStone = null;
//     for (const stone of stones) {
//         if (stone.name === stonesName) {
// targetStone = stone;
//         }
//     }
//     return targetStone.price * targetStone.quantity
// }
// console.log(calculeitStoned(stones, 'izumryd'));

//--------------------------------------------------

//КОМПЛЕКСНА ЗАДАЧА
//БАНКІВСЬКИЙ 
 
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// const acaunt = {
//     //баланс рахунку
//     balance: 0,

//     //список операцій
// transactions: [],

// //метод створює і вертає сумму і тип транзакції
// createTransaction(amount, type) {
//     return {
//         amount, //amount: amount,
//         type,
//         id: this.transactions.length,
//     };
// },


// deposit(amount) {
//     //поповнення рахунку, прийняття сумми, добавляє
//     // сумму до балансу
//     //визиваємо createTransaction для створення транзакції
//      this.balance += amount;
    
//      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//      console.log(transaction);
//     this.transactions.push(transaction);

// },


// withdraw(amount) {
//     //зняття коштів
//     //якщо баланс менший за сумму зняття виводимо дин рядок
//     if (amount > this.balance) {
//         return 'not enought money';
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(transaction);
// },


// getbalance() {
//     //повертає общий баланс
//     return this.balance;
// },


// getTransactionDetails(id) {
//     //шукає дані про операцію
//     for (const transaction of this.transactions) {
//         if (transaction.id === id) {
//             return transaction;
//         }
        
//     }
// },



// getTransaction(type) {
//     //знаходимо сумму депозитів або зняття
//     let total = 0;
//     for ( const transaction of this.transactions) {
//         if (transaction.type === type) {
//             total += transaction.amount;
//         }
        
//     }
//     return total;
// },


// };
//  console.log(acaunt.getbalance()); //0
// acaunt.deposit(150); //+150
// acaunt.withdraw(50);
// acaunt.deposit(250);
// acaunt.deposit(350);
// acaunt.deposit(450); //-50
// //  console.log(acaunt.getbalance());
// //  console.log(acaunt.getTransactionDetails);
// // console.log(acaunt.getTransactionDetails(3));
// console.log(acaunt.getTransaction(Transaction.DEPOSIT));
// console.log(acaunt.getTransaction(Transaction.WITHDRAW))
//---------------------------------------------------------

//деструктитизація BMI
// function calckBmi(clientParams) {
// const { weight, height } = clientParams;
// const numberWeight = Number(weight.replace(',', '.'));
// const numberHeighy = Number(height.replace(',', '.'));
// return Number(numberWeight / numberHeighy ** 2).toFixed((1));
// }
//або так

// function calckBmi({ weight, height }) {
//     const numberWeight = Number(weight.replace(',', '.'));
//     const numberHeighy = Number(height.replace(',', '.'));
//     return Number(numberWeight / numberHeighy ** 2).toFixed((1));
//     };

// console.log(calckBmi({ weight: '1,69', height: '88.3' }));
//---------------------------------------------------------
// виводимо телефон напротив імені ДЕСТРУКТИТИЗАЦІЯ


//створюємо із рядка масив через кому
// function contact({names, phones}) {
// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
// //перебираємо через for of
// for (let name of namesArray) { //перираємо імена і отримуємо імя
// const index = namesArray.indexOf(name);//отримуємо індех імені
// console.log(`${name} - ${phonesArray[index]};`);
// //при кожній ітерації записуємо імя і індех телеф
// }
// };

// contact({names: 'djos, mary, piter',
// phones: '123456, 234567, 345678',});

 //або так

//створюємо із рядка масив через кому
// function contact(name) {
//     const {names, phones} = name;
// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
// //перебираємо через for of
// for (let name of namesArray) { //перираємо імена і отримуємо імя
// const index = namesArray.indexOf(name);//отримуємо індех імені
// console.log(`${name} - ${phonesArray[index]};`);
// //при кожній ітерації записуємо імя і індех телеф
// }
// };
// contact({names: 'djos, mary, piter',
// phones: '123456, 234567, 345678',});
//----------------------------------------------
//ДЕСТРУКТУРИЗАЦІЯ
// function getBot(companiaInfo) {
//     const {companianame, bots} = companiaInfo;
//     const {repeir: repeirBots, defence: defenceBot} = bots;
//     return `${companianame} has ${repeirBots + defenceBot}`;

// };
// console.log(getBot({companianame: 'Kibervan sistem',
// bots: {
//     repeir: 50,
//     defence: 100,
// },
// })
// );
//--------------------------------------------
//ДЕСТРУКТУРИЗАЦІЯ
// const user = {
//     name: 'Cergii',
//     age: 40
// };
// const {name, age} = user;
//-----------------------------------
//SPREAD і обьєкти
//ОНОВЛЕННЯ
// const setting = {
//     theme: 'light',
//     fontFamile: 'default',
//     navbar: 'fixed',
//     markDawn: 'basic',
// };
// const updateSetting = {
//     theme: 'dark',
//     fontFamile: 'monospace',
//     navbar: 'static',
//     markDawn: 'basic',
// };
// const siteSetting = {
//     //оновляємо налаштування сайта
//     ...setting,
//     ...updateSetting,
// };

//--------------------------------
//spread і масиви

// const technologi = ['html', 'css'];
// const program = ['js', 'python', 'c++'];
// const frameWork = ['reakt', 'next'];
// const fulstek = [
//     ...technologi,
//     ...program,
//     ...frameWork,
// ];
//-------------------------------------
//операція ...rest
// function getArray (...arg) {
// console.log(arg);
// };

// getArray(12);
// getArray(12, 15);
//--------------------------------
//операція ...rest
// function getInfoUser (name, age, address, ...props) {
//     return { name, age, address, props};
// };
// console.log(getInfoUser('Masha', 25, 'london', '0672583698', 'user@mail.ru'));
//----------------------------------------------