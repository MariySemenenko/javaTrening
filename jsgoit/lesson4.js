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
//знайдемо унікальні ел  
// coursr = html, index = 0, array = ["html", "css", "html", "js", "js"];

// const tweets = [
//     {id: "000", lines: 5, tags: ["js", "css"]},
//     {id: "001", lines: 2, tags: ["html", "css"]},
//     {id: "002", lines: 17, tags: ["react", "c++"]},
//     ];
//     const uniqueTags = [];

//     tweets.forEach(tweet => {
//       tweet.tags.forEach(tag => {
//         if (uniqueTags.indexOf(tag) === -1) {
//           uniqueTags.push(tag);
//         }
//       });
//     });
    
  //  console.log(uniqueTags);
  //-----------------------------------------------------

  // const cars = [
  //   {make: "honda", model: "husio", type: "suv", amount: 19, price: 24045, onSale: true},
  //   {make: "mazda", model: "huo", type: "truk", amount: 5, price: 30045, onSale: false},
  //   {make: "honda", model: "io", type: "suv", amount: 10, price: 45045, onSale: true},
  //   {make: "sitroen", model: "us", type: "sedan", amount: 14, price: 10045, onSale: false},
  //   ];

    // повертаємо масив моделів усіх автомобілів
    // const getModel = cars => cars.map(({model}) => model);
    // console.table(getModel(cars));

    //функція повертає новий масив зі зміненим свойством прайс залежно від скидки
    // const makeCarsWithDiscount = (cars, discount) => 
    // cars.map((car) => ({...car, price: car.price * (1 - discount)}));
    // console.table(makeCarsWithDiscount(cars, 0.2));
    // console.table(makeCarsWithDiscount(cars, 0.4));
    
    //функція повертає ціну автомобіля ціна якої менша за параметр threshold
    // const filterByPrice = (cars, threshold) => 
    // cars.filter(({price}) => price < threshold);
    // console.table(filterByPrice (cars, 30000));
    // console.table(filterByPrice (cars, 30000));

//повертаємо масив автомобілів які sale true
// const getCarSale = (cars) =>
// cars.filter(({onSale}) => onSale ===true);
// console.table(getCarSale(cars));

//функція повертає машини тип яких співпадає з параметром type
// const getCarType = (cars, type) => 
// cars.filter(({make}) => make === type);
// console.table(getCarType(cars, 'honda'));
// console.table(getCarType(cars, 'mazda'));

//знаходимо машину по моделі
// const getCarByModel = (cars, model) =>
// cars.find((car) => car.model === model);
// console.table(getCarByModel(cars, 'io'));
// console.table(getCarByModel(cars, 'us'));

//знаходимо машину що попадає в діапазон від 25000 до 35000
// const getCarPrice = (cars, minPrice, maxPrice) => 
// cars.filter((car) => car.price >= minPrice && car.price <= maxPrice);
// console.table(getCarPrice(cars, 25000, 35000));

//знаходимо машину що попадає в діапазон від 25000 до 35000
// const getCarPriceAndModel = (cars, price, model) => 
// cars.filter((car) => car.price <= price && car.model === model);
// console.table(getCarPriceAndModel(cars, 25000, 'us'));

//получи машину за прайсом і моделями
// const getCarByPriceAndModel = (cars, minPrice, maxPrice, model) => 
// cars.filter(({price, model}) =>
//  price <= maxPrice && price >= minPrice && model.includes(model));
// console.table(getCarByPriceAndModel(cars, 10000, 30000, ['honda', 'mazda', 'sitroen']));

// //вертаємо масив автомобілів відсортований за зростанням (a, b) по значенню свойства amount
// const sortByAscending = (cars) => [...cars].sort((a, b) => a.amount - b.amount);
// console.table(sortByAscending(cars));

//вертаємо масив автомобілів відсортований в алфавітному порядку(localeCompare) і по моделі
// const sortByModelAndAlphavit = (cars) => 
// [...cars].sort((a, b) => a.model.localeCompare(b.model));
// console.table(sortByModelAndAlphavit(cars));

//знаходимо загальну сумму полів amount(reduce якщо працюємо з масивом обьєктів)
// const getTotalAmount = (cars) => 
// cars.reduce((acc, {amount}) => acc + amount, 0);
// console.table(getTotalAmount(cars));
//або
// let getTotalAmount = 0;
// for (let car of cars) {
//     getTotalAmount += car.amount;
// };
// console.log(getTotalAmount);

//------------------------------------------------------------------
//виведемо все в один масив
// const tags = [
//   ["html", "css", "pyton", "sas", "js"],
//   ["html", "css", "node", "js", "js"],
//   ["c++", "css", "html", "react", "js"],
// ];
// console.log(tags.reduce((acc, tags) => acc.concat(tags), []));


