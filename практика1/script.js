// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
// let nambers=[]
// nambers [0] =Math.floor( Math.random()* 100)
// nambers [1] =Math.floor( Math.random()* 100)
// nambers [2] =Math.floor( Math.random()* 100)
// nambers [3] =Math.floor( Math.random()* 100)
// nambers [4] =Math.floor( Math.random()* 100)
// nambers [5] =Math.floor( Math.random()* 100)
// nambers [6] =Math.floor( Math.random()* 100)
// nambers [7] =Math.floor( Math.random()* 100)
// nambers [8] =Math.floor( Math.random()* 100)
// nambers [9] =Math.floor( Math.random()* 100)
// result =(nambers[0]+nambers[1]+nambers[2]+nambers[3]+nambers[4]+nambers[5]+nambers[6]+nambers[7]+nambers[8]+nambers[9])
// console.log(result)



// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// let book = {
//     name: 'Пригоди чіхуахуа',
//     numberOfPages: 0,
//     genre: 'Дитяча література'
// }
// console.log(book.genre)



// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book = {
//     name: 'Пригоди чіхуахуа',
//     numberOfPages: 800,
//     genre: 'Дитяча література',
//     authors : {
//         autor1:'Цехан Дмитро',
//         autor2:'Русакович Іван'
//     }
// }
// console.log(book.authors.autor2)



// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
// let book = [{
//     name: 'Пригоди чіхуахуа',
//     numberOfPages: 800,
//     genre: 'Дитяча література',
//     authors :{
//         autor1:'Цехан Дмитро',
//         autor2:'Русакович Іван'
//     },
//     authors2 :{
//         autor1:'Джон Сіна ',
//         autor2:'Павло Зібров'
//     }
// }]
// console.log(book[0].authors2.autor2)



// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
// let height = 23
// let width =10
// s = height*width
// console.log(s)



// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
// let heightC =10
// let dC = 4
// let v =  Math.PI*dC* heightC;
// console.log(v)



// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
// let n = 3
// let m = 4
// let k = Math.sqrt( Math.pow(n,2)+Math.pow(m,2))
// console.log(k)