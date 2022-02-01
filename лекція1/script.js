// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// let hello = 'hello'
// let owu = 'owu'
// let com = 'com'
// let ua = 'ua'
// let number1 = 1
// let number10 = 10
// let number999 = -999
// let number123 = 123
// const PI = 3.14
// let number27 = 2.7
// let number16 = 16
// let true1 = true
// let false1 = false
// console.log(hello, owu, com, ua, number1, number10, number999, number123, PI, number27, number16, true1, false1)
//
// document.write(hello, ' ', owu, ' ', com, ' ', ua, ' ', number1, ' ', number10, ' ', number999, ' ', number123, ' ', PI,' ', number27, ' ', number16, ' ', true1, ' ', false1)
//
// alert(hello)
// alert(owu)
// alert(com)
// alert(ua)
// alert(number1)
// alert(number10)
// alert(number999)
// alert(number123)
// alert(PI)
// alert(number27)
// alert(number16)
// alert(true1)
// alert(false1)


// - Переприсвоїти кожній змінній з завдання значення на довільне.
// Вивести кожну змінну за допомогою: console.log , alert, document.write
// let hello = 'hello'
// let owu = 'owu'
// let com = 'com'
// let ua = 'ua'
// let number1 = 1
// let number10 = 10
// let number999 = -999
// let number123 = 123
// let pi = 3.14
// let number27 = 2.7
// let number16 = 16
// let true1 = true
// let false1 = false
//
// hello = 'Hello'
// owu = 'Owu'
// com = 'Com'
// ua = 'Ua'
// number1 = 2
// number10 = 11
// number999 = -1000
// number123 = 124
// pi = 3.15
// number27 = 2.8
// number16 = 17
// true1 =  false
// false1 = true
// console.log(hello, owu, com, ua, number1, number10, number999, number123, pi, number27, number16, true1, false1)
//
// document.write(hello, ' ', owu, ' ', com, ' ', ua, ' ', number1, ' ', number10, ' ', number999, ' ', number123, ' ', pi,' ', number27, ' ', number16, ' ', true1, ' ', false1)
//
// alert(hello)
// alert(owu)
// alert(com)
// alert(ua)
// alert(number1)
// alert(number10)
// alert(number999)
// alert(number123)
// alert(pi)
// alert(number27)
// alert(number16)
// alert(true1)
// alert(false1)


// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
//
// let lastName = 'Цехан'
// let firstName ='Дмитро'
// let middleName = 'Андрійович'
// let person = (lastName+' '+firstName+' '+middleName)
// alert(person)



// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let firstName = prompt('Невеличке опитування: твоє імя')
// let middleName= prompt('По батькові)')
// let age =prompt('Тепер останнє, твій вік)')
// alert('Вітаю ' + firstName+' '+middleName+'. Тобі '+age+ ' років (^ ω ^ *)')


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// let a = 100;  //number
// let b = '100'; //string
// let c = true; //boolean
// console.log( typeof a, typeof b,  typeof c)


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true
//
//
//
//
// let a = 5 < 6 //true
// let b = 5 > 6 //false
// let c = 5 >= 6 //false
// let d = 5 <=! 6 //false
// let e = 10 == 10 //true
// let f = 10 >= 10  //true
// let g = 10 > 10 //false
// let h = 10 ==! 10 //false
// let i = 10  ===!10 //false
// let j = 123 === '123' //false
// let k = 123 == '123' //true
// console.log(a,b,c,d,e,f,g,h,i,j,k)


// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;

// document.write(str + a + "<br/>");
// 205 тому що першою перемінною йде str, вона автоматично перетворить a в стрінгове знечення, "<br/>" потрібно щоб нова операція була в новому рядку

// document.write(str - a + "<br/>");
// 15, я так розумію що для тексів не існує таких значень як '-' '*' '/' тому воно обраховує його як число та переводить назад до стрінгового значення

// document.write(str * "2" + "<br/>");
// 40, пояснення в попередніх прикладах

// document.write(str / 2 + "<br/>");
// 10, пояснення в попередніх прикладах


