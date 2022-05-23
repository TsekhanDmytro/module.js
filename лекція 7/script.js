// // - Створити функцію конструктор для
// // об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(1, 'Sendi', 'Cuper', 'sendiCuper@gmail.com', +19159969739);
// let user2 = new User(2, 'Sahsha', 'Grey', 'soroka@gmail.com', +11111111111);
// let user3 = new User(3, 'Selvestr', 'Stalone', 'baran@gmail.com', +1565487521);
// let user4 = new User(4, 'Dmytro', 'Tsechan', 'suslik123@gmail.com', +5789654123);
// let user5 = new User(5, 'Banya', 'Bulk', 'xormanist@gmail.com', +4568587425);
// let user6 = new User(6, 'Taras', 'Banan', 'libida@gmail.com', +1258796345);
// let user7 = new User(7, 'Armen', 'Marakas', 'orlandos568@gmail.com', +38025410320);
// let user8 = new User(8, 'Olya', 'Fasolya', 'bakabaka@gmail.com', +45875210362);
// let user9 = new User(9, 'Andriy', 'Polebiy', 'fsTOP@gmail.com', +78520152090);
// let user10 = new User(10, 'Santa', 'Clays', 'html/css@gmail.com', +51547865214);
// let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
// console.log(users);
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// users = (users.filter(value => {return  value.id %2===0}));
// console.log(users);

// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// users = (users.sort((a,b)=>a.id- b.id));
// console.log(users);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let client1 = new Client(1, 'Sendi', 'Cuper', 'sendiCuper@gmail.com', +19159969739,['tea', 'coffee', 'waffles', 'cola']);
// let client2 = new Client(2, 'Sahsha', 'Malik', 'soroka@gmail.com', +11111111111,['tea', 'coffee', 'cola']);
// let client3 = new Client(3, 'Selvestr', 'Stalone', 'baran@gmail.com', +1565487521,['waffles', 'cola']);
// let client4 = new Client(4, 'Dmytro', 'Tsechan', 'suslik123@gmail.com', +5789654123,[]);
// let client5 = new Client(5, 'Banya', 'Bulk', 'xormanist@gmail.com', +4568587425,['tea', 'coffee', 'waffles', 'cola', ]);
// let client6 = new Client(6, 'Taras', 'Banan', 'libida@gmail.com', +1258796345,['tea', 'coffee', 'waffles', 'cola', 'scrambled', 'eggs', 'bread', 'candy']);
// let client7 = new Client(7, 'Armen', 'Marakas', 'orlandos568@gmail.com', +38025410320, ['tea', 'coffee', 'waffles', 'cola', 'scrambled', 'eggs', 'bread', 'candy']);
// let client8 = new Client(8, 'Olya', 'Fasolya', 'bakabaka@gmail.com', +45875210362,['tea', 'coffee', 'waffles', 'cola']);
// let client9 = new Client(9, 'Andriy', 'Polebiy', 'fsTOP@gmail.com', +78520152090,['tea', 'coffee','scrambled', 'eggs', 'bread', 'candy']);
// let client10 = new Client(10, 'Santa', 'Clays', 'html/css@gmail.com', +51547865214,['tea', 'coffee', 'waffles', 'cola', 'scrambled', 'eggs', 'bread', 'candy']);
// let clients = [client1 , client2 , client3, client4, client5, client6, client7 , client8 , client9 , client10];
// console.log(clients);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// clients = (clients.sort((a,b)=>a.order.length - b.order.length))
// console.log(clients)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// function Car(model, manufacturer, yearOfManufacture, maxSpeed, capacity) {
//     this['model'] = model;
//     this['manufacturer'] = manufacturer;
//     this['yearOfManufacture'] = yearOfManufacture;
//     this['maxSpeed'] = maxSpeed;
//     this['capacity'] = capacity;
//
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function () {
//         return console.log(`Їдемо зі швидкістю ${maxSpeed} на годину`)
//     };
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function () {
//         console.log(`
// model: ${this.model}
// manufacturer: ${this.manufacturer}
// year Of Manufacture:${this.yearOfManufacture}
// maximumSpeed: ${this.maxSpeed}`)
//     };
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed += newSpeed
//     };
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         return this.yearOfManufacture = newValue
//     };
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDraiver= function (draiver){
//        return  this.driver=draiver
//     };
// }
//
// let car = new Car('BMW', 'England', 2011, 250, 3.5);
// car.drive();
// car.increaseMaxSpeed(250);
// car.changeYear(2030);
// car.info();
// car.addDraiver({name:'Dima', age:26})
// console.log(car.driver)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// class Car {
//     constructor(model, manufacturer, yearOfManufacture, maxSpeed, capacity) {
//         this['model'] = model;
//         this['manufacturer'] = manufacturer;
//         this['yearOfManufacture'] = yearOfManufacture;
//         this['maxSpeed'] = maxSpeed;
//         this['capacity'] = capacity;
//     }
//
//
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     drive() {return console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)}
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     info(){
//     console.log(
//         `model: ${this.model}
// manufacturer: ${this.manufacturer}
// year Of Manufacture:${this.yearOfManufacture}
// maximumSpeed: ${this.maxSpeed}`)
// }
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed(newSpeed) {return this.maxSpeed += newSpeed};
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear(newValue) {return this.yearOfManufacture = newValue};
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     addDraiver(driver){ this.driver=driver}
// }
//
// let car = new Car('BMW', 'England', 2011, 250, 3.5);
// car.drive()
// car.increaseMaxSpeed(250);
// car.changeYear(2030);
// car.info();
// car.addDraiver({name:'Dima', age: 26})
// console.log(car.driver)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//     constructor(name, age, size) {
//         this['name'] = name;
//         this['age'] = age;
//         this['size'] = size;
//     }
// }
// let cinderella1 = new Cinderella('Vika', 12, 34);
// let cinderella2 = new Cinderella('Tanya', 20, 35);
// let cinderella3 = new Cinderella('Olya', 18, 33);
// let cinderella4 = new Cinderella('Sasha', 16, 38);
// let cinderella5 = new Cinderella('Anna', 31, 37);
// let cinderella6 = new Cinderella('Katya', 25, 34);
// let cinderella7 = new Cinderella('Lama', 19, 35);
// let cinderella8 = new Cinderella('Rika', 20, 36);
// let cinderella9 = new Cinderella('Nadya', 18, 35);
// let cinderella10 = new Cinderella('Switlana', 16, 37);
// let cinderellas = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince extends Cinderella {
//     constructor(name, age, shoe) {
//         super();
//         this['shoe'] = shoe;
//     };
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     finderCinderellas() {
//         for (const cinderella of cinderellas) {
//             if (cinderella.size === prinse.shoe && cinderella.age >=18) {
//                 return console.log(cinderella)
//             }
//         }
//     };
//
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//     finderCinderellas2(){
//         for (const cinderella of cinderellas) {
//             if (cinderellas.find((cinderella) =>  cinderella.size=== prinse.shoe)){
//                 return console.log( cinderella)
//             }
//             }
//         };
// }
// let prinse = new Prince('Zoltan', 30, 34);
// prinse.finderCinderellas();
// prinse.finderCinderellas2();
