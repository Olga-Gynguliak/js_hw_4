// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
// -- отримує текст з блоку з id "rules"
// -- замініть текст параграфа з id 'content' на будь-який інший
// -- замініть текст параграфа з id 'rules' на будь-який інший
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
// -- поміняти колір тексту у всіх елементів fc_rules на червоний

// let greenDiv = document.getElementById ('divka');
// let pElse = document.getElementsByTagName('p');
// let bolds = document.getElementsByClassName('boldText');


// console.log(greenDiv);
// console.log(pElse);
// console.log(bolds);

// greenDiv.style.backgroundColor = '#834834';
// // greenDiv.innerText = '<h1> Text </h1>';
// greenDiv.innerHTML = '<h1> Text </h1>';

const students = [
    {name: 'Sergey', age: 20},
    {name: 'Vova', age: 25},
    {name: 'Dima', age: 28},
];
localStorage.setItem('rty',JSON.stringify(students));