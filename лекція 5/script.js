// Всі функції повинні бути описані стрілочним типом!!!!

// 1 - створити функцію яка обчислює та повертає площу прямокутника висотою
// let calc=(a,b)=>a*b
// console.log(calc(5,8))

// 2 - створити функцію яка обчислює та повертає площу кола
// let area=(a)=>(2*Math.PI)*a
// console.log(area(5))

// 3 - створити функцію яка обчислює та повертає площу циліндру
// let area=(r,h)=>(Math.PI * Math.pow(r / 2, 2) * h)
// console.log(area(5,20))

// 4 - створити функцію яка приймає масив та виводить кожен його елемент
// let array=(arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// let xxx=[5,'text',6,true,1]
// array(xxx)

// 5 - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let textP=(p)=>`<p>${p}</p>`
// document.write(textP('Цей текст має бути в параграфі'))

// 6 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let li3=(a)=>{
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// li3('assass')

// 7 - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let liX=(a,b)=>{
//         document.write(`<ul>`)
//     for (let i = 0; i < b; i++) {
//         document.write(`<li>${[a]}</li>`)
//     }
//         document.write(`</ul>`)
// }
// let array =['Текст один на всіх']
// liX(array,3)

// 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let takeElement=(a)=>{
//     document.write(`<ul>`)
//         for (let i = 0; i < a.length; i++) {
//     document.write(`<li>${a[i]}</li>`)
// }
//     document.write(`</ul>`)
// }
// let array =[1,'text ',true, 55,false]
// takeElement( array)

// 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array=[
//     {id: 1,name: 'Dima',Age : 26 },
//     {id: 2,name: 'Volodya',Age : 55 },
//     {id: 3,name: 'Olya',Age : 15 }
// ]
// let li3=(a)=>{
//     document.write(`<ul>`)
//     for (let aElement of a) {
//         document.write(`<li>ID- ${aElement.id}. Name - ${aElement.name}. Age - ${aElement.Age}</li> `)
//     }
//     document.write(`</ul>`)
// }
// li3(array)