// - створити функцію яка обчислює та повертає площу прямокутника висотою
// function square (length, width) {
//     let res = length * width;
//     return res;
// }
// console.log(square(10,20));

// - створити функцію яка обчислює та повертає площу кола

// function circle (radius) {
//     return 2 * Math.PI * radius
//
// }
// console.log(Math.PI);
// console.log(circle(5));
// - створити функцію яка обчислює та повертає площу циліндру

// function cylinder (radius, height) {
//     return 2 * Math.PI * radius* height
//
// }
// console.log(cylinder(5,8));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let numbers = [-2, -7, -11, -25, -9, -30];
// let largestNumber= value => {
//     let largest = value[0];
//     for (let i = 0; i < value.length; i++) {
//        if (value[i]>largest){
//            largest=value [i];
//        }
//     }
//     return largest;
// }
// console.log(largestNumber(numbers));

// let numbers = [-2, -7, -11, -25, -9, -30];
//
// let minLargNumber = value => {
//     let min = value[0];
//     let max = value[0];
//     for (let i = 0; i < value.length; i++) {
//         if (value[i] < min) {
//             min = value[i];
//         }
//         if (value[i] > max) {
//             max = value[i];
//         }
//     }
//     console.log('max: ', max)
//     return min;
//
// }
// console.log(minLargNumber(numbers));

// let numbers = [2, 7, 11, 25, 9, 30];
//     numbers.sort(function (a,b)
//     {return a - b});
//
// console.log(numbers);

// let numbers = [2, 7, 11, 25, 9, 30];
// numbers.sort(function (a,b)
// {return b - a});
// console.log(numbers);

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
// function createtext (text1, text2, text3) {
//     document.write(`
//     <div>
//      <h1>${text1}</h1>
//      <h2>${text2}</h2>
//      <h3>${text3}</h3>
//      </div>
//     `)
// }
// createtext('okten', 'hello','hi')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function createtext (text) {
//     document.write(`
//     <div>
//      <ul>
//      <li>${text}</li>
//       <li>${text}</li>
//        <li>${text}</li>
//      </ul>
//      </div>
//     `)
// }
// createtext('okten' )

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let lists=['hello','okten', 'fghj'];
//
// function createtext(text) {
//     document.write(`<ol>`);
//     for (let list of text) {
//         document.write(`<li>${list}</li>`);
//     }
//     document.write(`</ol>`);
// }
//
// createtext(lists);
// function createtext (text)
// {
//     document.write(`
//     <div>
//      <ul>
//      <li>${text}</li>
//       <li>${text}</li>
//        <li>${text}</li>
//      </ul>
//      </div>
//     `)
// }
// createtext('okten' )

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arrow = ['hello', 'okten', 235, 438, true, false];
//
// function list(arr) {
//     document.write('<ol>')
//     for (let item of arr) {
//         document.write(`<li> ${item}</li>`);
//     }
//     document.write('</ol>')
// }
//
// list(arrow, 'hello');

// function createDiv(header){
//     document.write(`
//     <div>
//    <h1>${header}</h1>
//    <p>Lorem5</p>
//    </div>`
//     );
// }
// createDiv(header:'okten')
// createDiv(header:'hello')

// - створити функцію яка приймає масив та виводить його

// let block = [1, 5, 7, 9];
// let newBlock = [];
//
//     for (let i = 0; i < block.length; i++) {
//         newBlock[i]=block[i]+1;
// }
//     console.log(newBlock);


// let numbers = [5, 45, 78, 97];
// console.log(numbers);
// function n(x){
//     return x;
// }
// numbers.map(n);
// console.log(numbers);

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// - створити функцію яка повертає найбільше число з масиву
// console.log(Math.max(5, 7, 9));

// let arr = [5, 8, 9, 35, 85];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i]>=max){
//        max = arr[i];
//    }
// }
// console.log(max);

// - створити функцію яка повертає найменьше число з масиву

// let arr = [1005, -8, 9, 35, 85];
// minNum(arr)
// function minNum(array) {
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
// }
// console.log(min);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1, 5, 8, 10];
// a(arr)
//
// function a(array){
//     let c = 0;
//     for (const b of array) {
//       c = c + b;
//     }
//     console.log(c);
// }

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1, 5, 8, 10];
// let result = a(arr)
// console.log(result)
//
// function a(c) {
//     let sum = 0;
//     for (const c of arr) {
//         sum += c;
//     }
//     return sum / c.length;
// }


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// rand()
// function rand() {
//     let massive = [];
//     for (let i = 0; i < 50; i++) {
//         massive.push(Math.round(Math.random() * 100))
//     }
//     console.log(massive);
// }


// let randomNumber = Math.round(Math.random()*100);{
// }
// console.log(randomNumber);


//     Для виведення використати попередню функцію.
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// const listOfObjects = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// const allKeys = [];
//
// for (const object of listOfObjects) {
//     console.log(object);
//  for (const objectKey in object){
//     console.log(objectKey);
//      allKeys.push(object[objectKey]);
//     }
// }
// console.log(allKeys);