// 1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let x = 'hello world';
// console.log(x.length);
// let y = 'lorem ipsum';
// console.log(y.length);
// let z = 'javascript is cool';
// console.log(z.length);

// 2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let x = 'hello world';
// let xUp= x.toUpperCase();
// console.log(xUp);
// let y = 'lorem ipsum';
// let yUp= y.toUpperCase();
// console.log(yUp);
// let z = 'javascript is cool';
// let zUp= z.toUpperCase();
// console.log(zUp);

// 3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let x = 'HELLO WORLD';
// let xSm= x.toLowerCase();
// console.log(xSm);
// let y = 'LOREM IPSUM';
// let ySm= y.toLowerCase();
// console.log(ySm);
// let z = 'JAVASCRIPT IS COOL';
// let zSm= z.toLowerCase();
// console.log(zSm);

// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let strClear = str.trim();
// console.log(strClear);

// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let stringToarray =str=>{
//     return str.split(' ')
// };
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr);
// console.log(arr);

// 6 - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let delete_characters = (str, length) => {
//     return str.substr(0, length)
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));

// 7 - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let string = "HTML JavaScript PHP";
// console.log(insert_dash(string));
// document.write(insert_dash(string)); // 'HTML-JAVASCRIPT-PHP'
//
//
//
// let str = "HTML JavaScript PHP";
// let insert_dash=(str)=>{
//     let splitJoinUpper= str.split(' ').join('-').toUpperCase();
//     return splitJoinUpper;
// };
// console.log(insert_dash(string));
// document.writeln(insert_dash(str));

// 8 - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let Up = (string) => {
//     return string[0].toUpperCase() + string.slice(1)
// };
// console.log(Up('перевірка перевірка'));

// 9 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     return str.split(' ').map(text=>text.charAt(0).toUpperCase()+text.slice(1)).join(' ')
// };
// console.log(capitalize('перевірка написана маленькими буквами'));


