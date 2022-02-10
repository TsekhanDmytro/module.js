// 1 - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let min = (a, b, c) => (a < b && a < c) ? 'Число A є найменьшим' : (b < a && b < c) ? 'число B є найменьшим' : (c < a && c < b) ? 'число C є найменьшим' : 'eror'
// console.log(min(55,5,-3))

// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max = (a, b, c) => (a > b && a > c) ? 'Число A є найбільшим' : (b > a && b > c) ? 'число B є найбільшим' : (c > a && c > b) ? 'число C є найбільшим' : 'eror'
// console.log(max(533,88,-100))

// 3 - створити функцію яка повертає найбільше число з масиву
// let xxx=[5,6,11,785,11];
// let maxNamber=(array)=>{
//     let max = array[0];
//     for (let arrayElement of array) {
//        if (arrayElement>max) max =arrayElement
//     }
//     return max;
// }
// console.log(maxNamber(xxx))

// 4- створити функцію яка повертає найменьше число з масиву
// let xxx=[5,6,11,785,11];
// let minNamber=(array)=>{
//     let min= array[0];
//     for (let arrayElement of array) {
//         if (arrayElement<min) min =arrayElement
//     }
//     return min;
// }
// console.log(minNamber(xxx))

// 5 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let xxx=[5,6,11,785,11];
// let calcSum=(array)=>{
//     let arrayElement =0;
//     for (let arrayElements of array) {
//         arrayElement = arrayElements+arrayElement
//     }
//     return arrayElement;
// }
// console.log(calcSum(xxx))

// 6 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let xxx=[5,6,11,785,11];
// let calc=(array)=>{
//     let arrayElement =0;
//     for (const arrayElements of array) {
//         arrayElement = arrayElements+  arrayElement
//     }
//     return arrayElement/array.length;
// }
// console.log(calc(xxx))
// 7 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let array = [1,9,8,5];
// let minMax = (arr) => {
//     let min = arr[0];
//     let max = arr[0];
//     for (let element of arr) {
//         if (element > max)
//             max = element;
//         if (element<min )
//             min =element;
//     }
//         console.log(max);
//         return min;
// }
// console.log(minMax(array));

// 8 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let mathRandom=(x)=>{
//     let array=[];
//     for (let i = 0; i < x; i++) {
//         array.push(Math.floor(Math.random()*100))
//     }
//     return array;
// }
//
// console.log(mathRandom( 10));

// 9 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
// let mathRandom = (x,limit) => {
//     let array = [];
//     for (let i = 0; i < x; i++) {
//         array.push(Math.floor(Math.random()*limit))
//     }
//     return array;
// }
// console.log(mathRandom(10, 25));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array=[1,2,3];
//     let newArr=[];
// let arrayRevers=(arr)=>{
//     for (let i = arr.length - 1, ri=0; i>=0; i--, ri++) {
//         newArr[ri] = arr[i]
//     }
//     return newArr;
// }
// console.log(arrayRevers(array))
