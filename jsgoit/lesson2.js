//використовуємо цикл for
//виведи в консоль index елемента в масиві і його елемент 
// const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i ++) {
//     const index = i + 1; //виводимо індекс починаючи з 1
// const element = numbers[i]; //виводимо елемент
// console.log(`${index}: ${element}`);
// }
//-----------------------------
//переписуємо на for of (він приміняється тільки для масивів ++1)
// const numbers = [1, 2, 3, 4, 5];
// for (number of numbers) {//  відразу получаємо значення
//     const index = numbers.indexOf(number) + 1;//знаходимо індекс починаючи з 1
//     console.log(`${index}: ${number}`);
// }
//----------------------------------------------
//базові операції з масивами
//1 створити масив
//2 добавити ел в кінець
//3 вивести в консоль перший ел
//4 вивести в консоль останній ел код має бути довільної довжини
//5 видалити перший ел і вивести в косоль
//6 вставте 2 ел на початок масиву
// const ganres = ['jaz', 'blyz'];
// ganres.push('roc-en-rol');
// console.log(ganres[0]);
// console.log(ganres[ganres.length - 1]);
// console.log(ganres.shift());
// ganres.splice(0, 0, 'country', 'city');
// console.log(ganres);
//----------------------------------------
//рахуємо площу прямокутника, значення зберігаються у змінній
//значення розділяються пробілами
// const values = '8 11';
// const valuesArray = values.split(' ');  //робимо з рядка масив з пробілами
// const result = valuesArray[0] * valuesArray[1];//щтримуємо площу
// console.log(result);
//------------------------------------------------------
//виводимо телефон напротив імені
// const names = 'djos, mary, piter';
// const phones = '123456, 234567, 345678';
//створюємо із рядка масив через кому
// const namesArray = names.split(',');
// const phonesArray = phones.split(',');
//перебираємо через for of
// for (let name of namesArray) { //перираємо імена і отримуємо імя
// const index = namesArray.indexOf(name);//отримуємо індех імені
// console.log(`${name} - ${phonesArray[index]};`);
// //при кожній ітерації записуємо імя і індех телеф
// }
//------------------------------------------
//створюємо змінну з пести масивом
// const numbers = [];
// //створюємо функцію
// const addNumber = function (array) {
//     const number = prompt('enter numbers');
//     // пушимо номер в масив
//     array.push(number);
// };
// //викликаю функцію
// addNumber(numbers);
// console.log(numbers);
//-----------------------------------
//обчислення площі кімнати
// function roomSpace(a, b) {
//     console.log(a * b);
   
// }
// roomSpace(2, 5);
// roomSpace(3, 4);
// roomSpace(2, 4);
//----------------------------
//псевдомасив
// function arg () {
//     console.log(arguments);
// }
// arg(1);
//==============================
//рахуємо індекс маси тіла  вагу ділимо на квадрат рісту(Math.sqrt = calkIMT('59.5', '1.69');
// function calkBMI() {
//     const weight = prompt('enter weight');
//     const height = prompt('enter height');
//     const bmi = weight / Math.pow(height, 2);
//     if (bmi < 18.5) {
//         alert('litle weight');
//     } else if (bmi >= 18.5 && bmi < 24.9) {
// alert('norma');
//     } else {
//         alert('foooooo');
//     }
// }
// calkBMI();
//-------------------------------------
//розбиваємо функцію на три логіки
// function collectInfo () {
//     const weight = prompt('enter weight');
//      const height = prompt('enter height');
//      return [weight, height];
// }

// function gatBmi (array) {
//     const weight = array[0];
//     const height = array[1]
//     return weight / Math.pow(height, 2);
// }

// function showResult (bmi) {
//     if (bmi < 18.5) {
//                 alert('litle weight');
//             } else if (bmi >= 18.5 && bmi < 24.9) {
//         alert('norma');
//             } else {
//                 alert('foooooo');
//             }
//         }  


// function calculationBmi () {
//    const info = collectInfo ();
//    const result = gatBmi (info);
//    showResult(result);
// }
// calculationBmi();
//---------------------------------------------
//шукаємо найбільше число в масиві
// function findLargestNumber (numbers) {
// let maxNumbers = numbers[0];
// for (let number of numbers) {
// if (maxNumbers < number) {
//     maxNumbers = number;
// }
// } 
// return maxNumbers;
// }
// console.log(findLargestNumber([1, 2, 3, 4]));
// console.log(findLargestNumber([5, 10, 12, 12, 44]));
