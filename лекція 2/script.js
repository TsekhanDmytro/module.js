// 1 - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = prompt('скільки зараз хвилин на годиннику?')
// if (time >= 0 && time <= 14) {
//     alert('перша частина')
// }
// if (time >= 15 && time <= 30) {
//     alert('друга частина')
// }
// if (time >= 31 && time <= 45) {
//     alert('третя частина')
// }
// if (time >= 46 && time <= 59) {
//     alert('четверта частина')
// }
//
// else{
//     alert('не існує стількох хвилин в годинах (-_-)')}


// 2 - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let dey = prompt('Визачення декади місяця за числом')
// if (dey >=0 && dey <=10 ){
//     alert('Перша Декада')
// }
// if (dey >=11 && dey <=20 ){
//     alert('Друга Декада')
// }
// if (dey >21 && dey <=31 ){
//     alert('Третя Декада')
// }
// else {
//     alert('В місяці відсутня така кількість днів.')}



// 3 - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test;
// if(confirm('В одноокого бандита тільки одне око: true or false?')){
//     test = 'Вірно'
// }
// else  {
//     test = 'Неправильно'
// }
// console.log(test)

// let test =confirm('В одноокого бандита тільки одне око: true or false?' ) ? 'Вірно' : 'Неправильно'
// alert(test)

// let test =confirm('В одноокого бандита тільки одне око: true or false?' ) || 'false'
// alert(test)



// 4 - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let namber = prompt('Введіть число 1,0, або -3')
// if (namber === 0 ){
//     console.log('Вірно')
// }
// else {console.log('Невірно')
// }



// 5 - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let week = prompt('To-do list for tomorrow, what day is tomorrow?(1-7)')
// switch (week){
//     case '1':
//         alert(' to-list from manday')
//         break
//     case '2':
//         alert('to-list from tuesday')
//         break
//     case '3':
//         alert(' to-list from wednesday ')
//         break
//     case '4':
//         alert(' to-list from thursday ')
//         break
//     case '5':
//         alert(' to-list from friday ')
//         break
//     case '6':
//         alert(' to-list from saturday ')
//         break
//     case '7':
//         alert(' to-list from sunday')
//         break
//     default:
//         alert('??? O_O');
// }


// 6 - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = prompt('скільки днів у році?')
// if (year  %4=== 0 ){
//     alert('Рік високосний')
// }
// else {
//     alert('Рік не високосний')
// }


// 7 - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let answerQuestion =prompt('Яка «офіційна» назва JavaScript?')
// if ( answerQuestion ==='ECMAScript'){
//     alert('Правильно!')}
// else {
//     alert('Не знаєте? ECMAScript!')
// }