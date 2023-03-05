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
