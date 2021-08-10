// let skills= ['java', 'js', 'html', 'msql'];
// for (let skill of skills){
//     console.log(skill);
// }

// let skills =['java', 'js', 'html', 'msql'];
// document.write(`<ol>`);
// for (let skill of skills) {
//     document.write(`<li>${skill}</li>`);
// }
// document.write(`</ol>`);

//
// let users=[{
//     name:'Vasya',
//     age:30,
//     status:false,
//     exp: ['java','js'],
//     wife:{
//         name:'Olya',
//         age:20
//     }
// }];
// document.write(`<div class="target">`);
// for (const user of users){
//     document.write(`<div>${user.name}${user.age}${user.status}`);
// }
// document.write(`</div>`);

// let numbers= [
//     [1,2,3],
//     [11,22,33],
//     [111, 222, 333]
// ];
// for (const n1 of numbers){
//     console.log(n1);
//     for (const number of n1){
//         console.log(number);
//     }
// }

// let usersWithAddress= [
//     {id: 1, name: 'Nina', age: 25, status: false, address:{city:'Lviv', street: 'Shevchenko', number: 15} },
//     {id: 2, name: 'Vasya', age: 35, status: true, address:{city:'Lviv', street: 'Shevchenko', number: 14}},
//     {id: 3, name: 'Sasha', age: 38, status: false, address:{city:'Lviv', street: 'Shevchenko', number: 25}},
//     {id: 4, name: 'Inga', age: 23, status: true, address:{city:'Lviv', street: 'Shevchenko', number: 45}},
//     {id: 5, name: 'Borya', age: 40, status: true, address:{city:'Lviv', street: 'Shevchenko', number: 57}},
// ];
// for (const user of usersWithAddress){
//     document.write(`<div>${user.name}- ${user.address.city} ${user.address.street} ${user.address.number}</div>`)
// }

// let usersWithAddress= [
//     {id: 1, name: 'Nina', age: 25, status: false, address:{city:'Lviv', street: 'Shevchenko', number: 15} },
//     {id: 2, name: 'Vasya', age: 35, status: true, address:{city:'Lviv', street: 'Shevchenko', number: 14}},
//     {id: 3, name: 'Sasha', age: 38, status: false, address:{city:'Lviv', street: 'Shevchenko', number: 25}},
//     {id: 4, name: 'Inga', age: 23, status: true, address:{city:'Lviv', street: 'Shevchenko', number: 45}},
//     {id: 5, name: 'Borya', age: 40, status: true, address:{city:'Lviv', street: 'Shevchenko', number: 57}},
// ];
// document.write(`<div class="target">`);
// for (const user of usersWithAddress){
//     if(user.age>15){
//         if(!user.status){
//             document.write(`<div>${user.name} ${user.age} ${user.status} </div>`)
//         }
//     }
// }

// let products = [
//     {tittle:'milk',price:23},
//     {tittle:'bread',price:27},
//     {tittle:'meat',price:150},
// ];
// for (let i = 0; i < products.length; i++) {
//     console.log(i);
// }

// for (let i = products.length -1; i>=0; i-- ){
//     const product=products[i];
//     document.write(`<div>${product.tittle}</div>`);
// }
// let i=0;
// while (i<products.length){
//     document.write(`<div>${products[i].tittle}</div>`)
//     i++;
// }
// do{
//     console.log('fghjkl');
// }while (false);

// let numbers = [1,2,3,4,5,'hello',6,7,8];
// numbers.unshift(100);
// console.log(numbers);
// let slice = numbers.slice(1,3);
// console.log(slice);
// console.log(numbers);
// numbers.splice(0, 3);
// console.log(numbers);
// let indexof= numbers.lastIndexOf(5);
// console.log(indexof);
//
// let b= numbers.includes('hi');
// console.log(b);
// let fruit = 'kokos';
// console.log(fruit[2]);
//
// let replaceAll= fruit.replaceAll('ko', '!');
// console.log(replaceAll);
//
// let startWith= fruit.startsWith('o');
// console.log(startWith);
//
// let b1 =fruit.endsWith('s!');
// console.log(b1);
//
// let arr = [];
// let deletedArrayElements= [];
// arr.push('hello');
// arr.push('I am cool');
// console.log(arr);
// let pop = arr.pop();
// deletedArrayElements.push(pop);
// console.log(pop);
// let shift= arr.shift();
// deletedArrayElements.push(shift);
// console.log(arr);
// console.log(deletedArrayElements);

// function minus(a, b){
//     return a -b;
// }
// console.log(minus(25, 30));
//
// let xFunc =function (x, y){
//     return x*y;
// };
// console.log(xFunc(10, 20));
// function add(a, b){
//     return a+b;
// }
// function minus (a, b){
//     return a-b;
// }
// console.log(minus(35, 22));

// function powerCalc (a, b, action){
//     if (action ==='+'){
//         return add (a+ b);
// } else if (action=== '-'){
//     return minus (a, b);
// }
// return 'error';
// }
// console.log(powerCalc(45, 70));

// function powerCalc (a, b, action) {
//     if (action === '+' || action === 'add') {
//         return a + b;
//     } else if (action === '-') {
//         return minus(a, b || action === 'minus')
//         {
//             return a - b;
//         }
//         return 'error';
//     }
// }
// console.log(powerCalc(45, 70, 'add'));

function createDiv (text1, text2, img){
    document.write(`<div>
<h1>${text1}</h1>
<p>${text2}</p>

</div>`);
}
createDiv('hello','');
createDiv('some text');