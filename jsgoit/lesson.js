//створюємо новий (ключ або обьект) з id
//приймаємо колбек
//виводимо продукт в консоль
//знаходимо загальну сумму товару

// createProduct ({name: "apple", price: 30, quantity: 3}, logProduct);
// createProduct ({name: "lemon", price: 20, quantity: 5}, logTotalPrice);

// function createProduct(product, coolback) {
//     const id = Date.now(); //визначаємо час запуску функції
//     const newProduct = {...product, id}; //копіюєм старий обьєкт і додаємо id
//     coolback(newProduct);  //передаємо в колбек нову функцію
// };
// function logProduct(item) {
//     console.log(item);
// };
// function logTotalPrice({price, quantity}) {
//     console.log(price * quantity);
//     return price * quantity;
// } 
// logProduct;
// logTotalPrice;
//-----------------------------------------------

//метод  forEach виводимо індекс кожного елемента
// logItem (["mango", "polly", "ajax"]);
// logItem ([1, 2, 3, 4]);

// function logItem (item) {
//     item.forEach(function (item, index) {
//         console.log(`${index + 1} - ${item}`);
//     });
// };
//----------------------------------------------------------

//виводимо імя і телефон в один рядок
// coursr = html, index = 0, array = ["html", "css", "html", "js", "js"];

const allCourse = ["html", "css", "html", "js", "js"];
const uniqueCourse = allCourse.filter((course, index, array) => array.indexOf(course) === index);
uniqueCourse;
