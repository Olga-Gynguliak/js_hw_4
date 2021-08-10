// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"


// -- отримує текст з блоку з id "rules"
// const aaa = document.getElementById('rules');
// console.log(aaa.innerText)

// **************************************************************************************

// -- замініть текст параграфа з id 'content' на будь-який інший
// document.getElementById("content").ondblclick = function () {changeText()};
// function changeText(){
//   document.getElementById("content").innerHTML = "New text Lorem ipsum";
// }

// *****************************************************************************************

// // -- замініть текст параграфа з id 'rules' на будь-який інший
// document.getElementById("rules").ondblclick = function () {changeText()};
// function changeText(){
//   document.getElementById("rules").innerHTML = "New Первое правило Бойцовского клуба";
// }

// **********************************************************************************************

// -- змініть кожному елементу колір фону на червоний

// function changeColor(){
//    let x = document.getElementsByTagName("*");
//    let i;
//    for (i = 0; i < x.length; i++){
//        x [i].style.backgroundColor = "red";
//    }
// }

// ********************************************************************************************************************************************

// -- змініть кожному елементу колір тексту на синій

// function changeColorText(){
//    let x = document.getElementsByTagName("*");
//    let i;
//    for (i = 0; i < x.length; i++){
//        x [i].style.color = "blue";
//    }
// }

// ********************************************************************************************************************************************

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// const el = document.getElementById('rules');
// console.log(el);

// ********************************************************************************************************************************************

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь

// function changeText(newText) {
//     let element = document.getElementsByClassName("fc_rules");
//     let i;
//    for (i = 0; i < element.length; i++){
//        element[i].textContent = newText;
//    }
// }

// ***********************************************************************************************************************************************

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
// myFunction()
// function myFunction(){
//   let y = document.getElementsByClassName('fc_rules');
//   let i;
//   for (i = 0; i < y.length; i++){
//     y[i].style.color = "red";
//   }
// }