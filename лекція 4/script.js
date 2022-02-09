// 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function areaRectangle  (a,b){
// return  a*b
// }
// console.log(areaRectangle(5,10))

// 2 - створити функцію яка обчислює та повертає площу кола з радіусом r
// function carArea(a){
//     return (2*Math.PI)*a
// }
// console.log(carArea(5))

// 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaСylinder  (h,r){
//     return (Math.PI * Math.pow(r / 2, 2) * h)
// }
// console.log(areaСylinder(10,5))

// 4 - створити функцію яка приймає масив та виводить кожен його елемент
// function get(a) {
//     for (let i = 0; i < a.length; i++) {
//        console.log(a[i])
//     }
// }
// let array =[1,'text ',3]
// get(array)

 // 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function textP(a) {
//
//         document.write(`<p>${a}</p>`)
//
// }
// textP('array')

// 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function li3(a){
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// li3('Text')


// 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function li_X(a,b) {
//         document.write(`<ul>`)
//     for (let i = 0; i < b; i++) {
//         document.write(`<li>${[a]}</li>`)
//     }
//         document.write(`</ul>`)
// }
// let array =[56]
// li_X(array,8)

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function li3(a){
//     document.write(`<ul>`)
//         for (let i = 0; i < a.length; i++) {
//     document.write(`<li>${a[i]}</li>`)
// }
//     document.write(`</ul>`)
// }
// let array =[1,'text ',true, 55,false]
// li3( array)

// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array =[
//     {id : 1, name : 'Dima', age: 26},
//     {id : 2, name : 'Ivan', age: 2},
//     {id : 3, name : 'Taras', age: 105}
// ]
// function li3(a){
//     document.write(`<ul>`)
//     for (let aElement of a) {
//     document.write(`<li>Id - ${aElement.id}; Name - ${aElement.name}; Age : ${aElement.age};</li>`)
//     }
//     document.write(`</ul>`)
// }
// li3(array)
