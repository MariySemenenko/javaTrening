//перевіряємо число яке ввів користувач на десятки , сотні і т,д,
// const userNumber = prompt('Enter user number');
// if (userNumber < 10) {
//     console.log('okey');
// } else if (userNumber > 100 && userNumber < 1000) {
//     console.log('good');
// } else {
//     console.log('bad');
// };
//переробляємо на swich
// switch(true) {  //приводимо switch до true щоб добратись до case
//     case userNumber < 10:
//         console.log('ok');
//         break;
//         case userNumber > 100 && userNumber < 1000:
//             console.log('good');
//             break;
//             default:
//                 console.log('bad');
//                 break;
// }
//-------------------------------------------------

//перевіряємо кратність чисел
// const userNumber = prompt('Enter number');
//  if (userNumber % 2 === 0) {
//     console.log('couples number');
//  } else {
//     console.log('not even');
//  }
//----------------------------------------------

//операнди і && та або ||

// if ('mango' || 'poly' && 'mango' || false) { //спочатку іде операнд && 
//     //до першої false або останнє значення ('mango' || 'poly' || false = перше 'mango')
//     //  ||до пергого true
//     console.log('a');
// } else {
//     console.log('b');
// }
//---------------------------------------
// if ('poly' && 'mango') { //до першого false або останього операнда
//         console.log('a');
//     } else {
//         console.log('b');
//     }
//--------------------------------------------
// if (null && false) { //до першого false 
//             console.log('a');
//         } else {
//             console.log('b');
//         }
//-------------------------------------------

//вивести числа які кратні двум
// for (let i = 1; i <= 10; i += 1) {
//     if (i % 2 !== 0) {
//         continue;//пропускаємо один ход в середині циклу
//     }
//     console.log(i);
// }
//--------------------------------------
//якщо умова має дорівнювати 5
// for (let i = 1; i <= 10; i += 1) {
//         if (i === 5) {
//             break;//перериваємо цикл якщо умова виконюється
//         }
//         console.log(i);
//     }
    //переписємо на swich
// for (let i = 1; i <= 10; i += 1) {
// switch (i) {
//     case 5:

// break;
// default:
// break;
// }
// console.log(i);

// }
//-------------------------------

//пишемо скрипт для відображення годин і хвилин
// const hours = 14;
// const minutes = 26;
// let timeString;
// if (hours === 0) {
//     timeString = `${hours} год`;
// } else {
//     timeString = `${hours} год ${minutes} хв`;
// }
// console.log(timeString);
//--------------------------------------------
//форматуємо хвилини в години
// const minutes = 456;
// const minutesValue = minutes % 60;
// const hours = Math.floor(minutes / 60);
// console.log(`${hours}год ${minutesValue}хв`);
//----------------------------------------------
//пишемо цикл for який виводить цифри по зростанню які кратні 5
// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 1) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }
//--------------------------------------
// const max = 100;
// const min = 20;
// for (let i = min; i <= max; i += 5) { //якщо число кругле то += 5
//     console.log(i);
// }
//-----------------------------------------
//переписуємо на while
// const max = 100;
// const min = 20;

// let i = min;
// while(i <= max) {
//     if(i % 5 === 0) {
//         console.log(i);
//     }
//     i ++;
// }

//------------------------------
//do while
// const min = 20;
// const max = 100;

//  let i = min;
//  do {
//     if(i % 5 === 0) {
//         console.log(i); 
//     }
//     i += 1;
//  } while(i <= max);
 //--------------------------------

//do while банкомат і пароль
// const password = 'admin';
// let userPassword;

// do {
//     userPassword = prompt('Enter password'); 
//         console.log(userPassword);
//     } while (userPassword !== password);
//-----------------------------------------

//функція яка виводить результат
// const result = 2 + 3;

// function add() {
//    return 2 + 3;
// }
// console.log(add());
//-------------------------

