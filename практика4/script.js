// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNam(a,b,c) {
// return (a<b && a<c )? 'Число a найменьше':(b<a && b<c)? 'Число b найменьше'  :(c<a && c<b)? 'Число c найменьша': 'eror'
// }
// document.write(minNam( 522,-999,3))

// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.min!)
// function minNam(a,b,c) {
//     (a>b && a>c )? 'Число a найбільше':(b>a && b>c)? 'Число b найбільше'  :(c>a && c>b)? 'Число c найбільше': 'eror'
// }
// document.write(minNam( 5, 8, 13))

// 3 - створити функцію яка повертає найбільше число з масиву
// let array =[5,56,54,9,280,152,0]
// function maxNamber(arrays){
//     let max = arrays[0]
//     for (let number of arrays) {
//         if (number>max) max = number
//     }
//     return max
// }
// document.write(maxNamber(array))

// 4 - створити функцію яка повертає найменьше число з масиву
// debugger
// let array =[5,56,54,9,280,152,3]
// function minNamber(arrays){
//     let min = arrays[0]
//     for (let number of arrays) {
//         if (number<min) min = number
//     }
//     return min
// }
// document.write(minNamber(array))

// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array =[5,56,54,9,280,153,3]
// function calcSum(array){
//    let  arrayElement = 0
//     for (let arrayElements of array) {
//         arrayElement = arrayElements + arrayElement
//     }
//     return arrayElement
// }
// console.log(calcSum(array))

// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array =[5,56,54,9,280,153,3]
// function midlCalc(array){
//     let arrayElement = 0
//     for (let arrayElements of array) {
//         arrayElement = arrayElements + arrayElement
//     }
//     return  arrayElement/array.length
// }
// console.log(midlCalc(array))

// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minMax(array) {
//     let min = arguments[0]
//     let max = arguments[0]
//     for (let element of arguments) {
//         if (element> max){
//             max =element
//         }
//         if (element< min)
//             min = element
//     }
//     console.log('Максимальним значенням являєтся',max)
//     return min
// }
// document.write('Мінімальне число являєтсья' +minMax(5,50,77,511,-6,5))

// 8 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function mathRandom(array) {
//     let namber = []
//     for (let i = 0; i < array; i++) {
//         namber.push(Math.floor(Math.random() * 100))
//     }
//     return namber
// }
// document.write(mathRandom(10))

// 9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function mathRandom(nambers,limit) {
//     let namber = []
//     for (let i = 0; i < nambers; i++) {
//         namber.push(Math.floor(Math.random() * limit))
//     }
//     return namber
// }
// document.write(mathRandom(10, 20))

// 10 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function arrayRevers(arr) {
//     let newArr = []
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = arr[i]
//     }
//     return newArr
// }
//
// document.write(arrayRevers([1, 2, 3, 1, 5]))


