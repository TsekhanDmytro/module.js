// 1 --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let users = [
//     {name:'Dima', rating: 100,  education: true},
//     {name:'Ivan', rating: 80,  education: true},
//     {name:'Ivo', rating: 55,  education: false},
//     {name:'Olya', rating: 90,  education: true},
//     {name:'Max', rating: 75,  education: false}
// ]
// console.log(users)


// 2 -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let text =[]
// text[0] ='text1'
// text[1] ='text2'
// text[2] ='text3'
// for (let i = 0; i < text.length; i++) {
// console.log(text[i])
// }

// 3.1 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// let users = [
//     {name:'Dima', rating: 100,  education: true},
//     {name:'Ivan', rating: 80,  education: true},
//     {name:'Ivo', rating: 55,  education: false},
//     {name:'Olya', rating: 90,  education: true},
//     {name:'Max', rating: 75,  education: false},
//     {name:'Oleg', rating: 100,  education: true},
//     {name:'Ivan', rating: 80,  education: true},
//     {name:'Kolya', rating: 55,  education: false},
//     {name:'Olya', rating: 90,  education: true},
//     {name:'Anya', rating: 75,  education: false}
// ]
// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     document.write(`<div>${user.name} ${i}</div>`)
// }

// 3.2- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.\
// let users = [
//     {name:'Dima', rating: 100,  education: true},
// ]
// let i = 0
// while (i <=10 ){
//     document.write(`<div><h1>`)
//     document.write(`Name- ${users[0].name} (${i});   Rating- ${users[0].rating} (${i})`)
//     document.write(`</h1></div>`)
//     i++
// }


// 4.1- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let num = [1,2,3,4,5,6,7,8,9,10]
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }
// let text = ['text1' ,'text2' ,'text3' ,'text4' ,'text5', 'text6', 'text7', 'text8', 'text9', 'text10']
// for (let i = 0; i < text.length; i++) {
//    console.log(text[i])
// }
// let users = ['Dima',100, true, false,'Orest',100500,'bobo',[],{}, 'finis']
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }

// 4.2- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let users = ['Dima',100, true, false,'Orest',100500,'bobo',[],{}, 'finis']
// for (let i = 0; i < users.length; i++)
//  if (typeof users[i]==='boolean'){
//     document.write(users[i])
// }

// 4.3- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let users = ['Dima',100, true, false,'Orest',100500,'bobo',[],{}, 'finis']
// for (let i = 0; i < users.length; i++)
//     if (typeof users[i]==='number'){
//         document.write(users[i])
//     }

// 4.4- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let users = ['Dima',100, true, false,'Orest',100500,'bobo',[],{}, 'finis']
// for (let i = 0; i < users.length; i++)
//     if (typeof users[i]==='string'){
//         document.write(users[i])
//     }

// 5.1 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = []
// array[0] = 'Dima'
// array[1] = 26
// array[2] = true
// array[3] = false
// array[4] = []
// array[5] = {}
// array[6] = 'asd'
// array[7] = 564
// array[8] = true
// array[9] = []
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

//5.2 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(`Цикл в 1 крок: ${i}`)
//     document.write(`<div>Цикл в 1 крок: ${i} </div>`);
// }

// 5.3- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//  for (let i = 0; i < 100; i++) {
//     console.log(`Цикл в 1 крок: ${i}`)
//     document.write(`<div>Цикл в 1 крок: ${i} </div>`);
// }

// 5.4- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//  for (let i = 0; i < 100; i+=2) {
//     console.log(`Цикл в 2 кроки: ${i}`)
//     document.write(`<div>Цикл в 2 кроки: ${i} </div>`);
// }

// 5.5- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//  for (let i = 0; i < 100; i++) {
//      if (i % 2 === 0){
//     console.log(`Тільки парні кроки: ${i}`)
//     document.write(`<div>Тільки парні кроки ${i} </div>`);
// }}


//5.6 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1){
//         console.log(`Тільки парні кроки: ${i}`)
//         document.write(`<div>Тільки парні кроки ${i} </div>`);
//     }}
