//
// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// rand()
// function rand() {
//     let massive = [];
//     for (let i = 0; i < 100; i++) {
//         massive.push(Math.round(Math.random() * 100))
//     }
//     console.log(massive);
// }

// - Змінити попередню функцію, щоб діапазон можна було визначити через аргументи.

// getRand()
// function getRand (min, max){
//     return Math.random()* (max-min)+min;
// }
// console.log(getRand(10,30));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let massive = [23, 56, 123, 75, 89, 42, 150];
// massive.sort(function (a,b){
//     return a - b;
// });
// console.log(massive);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа

// rand()
// function rand() {
//     let massive = [];
//     for (let i = 0; i < 10; i++) {
//         massive.push(Math.round(Math.random()*10))
//         function rand (num){
//             return(num % 2 == 0)
//     }
//     massive = massive.filter(rand);
//     console.log(massive);
// }}

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
//

// function rand() {
//     let massive = [];
//     for (let i = 0; i < 10; i++) {
//         massive.push(Math.round(Math.random() * 10))
//     }
//     return massive;
// }
// const arr = rand()
// const newArr = arr.map(value => value.toString())
// console.log(newArr);

// const arr = ['aaaa', 'bbb', 'ccc', 5, 34, 333,true]
//
// arr.forEach((value, key, map) => console.log(value, key, map))

// arr.forEach(function call(value,key, map){console.log(value,key,map)})
//
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
//
// class Client {
//     constructor(id, name, surname, email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//     }
// }
//     let clients = [
//     new Client(1, 'Tamara', 'Petrovna', 'tamarke@gmail.com', '098765446'),
//     new Client(3, 'Tamxdvara', 'Petrfgfhghvna', 'tamarke@gmail.com', '098765446'),
//     new Client(2, 'Tara', 'Petrovna', 'tamarke@gmail.com', '098765446'),
//     new Client(4, 'Tamara', 'Pvna', 'tamarke@gmail.com', '098765446'),
//     new Client(7, 'Tamara', 'Petrovna', 'tamarke@gmail.com', '098765446'),
//     new Client(6, 'Ta', 'Pna', 'tamarke@gmail.com', '098765446'),
//     new Client(5, 'Dir', 'Petrovna', 'tamarke@gmail.com', '098765446'),
//     new Client(8, 'Valeron', 'Petrovna', 'tamarke@gmail.com', '098765446')
// ]
//
// let arr = [...clients].filter((client) => client.id % 2==0)
// console.log(arr);
//
// let arr1 = [...clients].sort((client1, client2) => client1.id - client2.id)
// console.log(arr1);


// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// // Взяти масив (Client []).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// // class Client {
// //     constructor(id, name, surname, email, phone, order) {
// //         this.id = id;
// //         this.name = name;
// //         this.surname = surname;
// //         this.email = email;
// //         this.phone = phone;
// //         this.order = order;
// //     }
// //
// // }
//
// const clients = [
//     new Client(1, 'Tamara', 'Petrovna', 'tamarke@gmail.com', '098765446', ['milk', 'ggg', 'ddddd']),
//     new Client(2, 'Tamxdvara', 'Petrfgfhghvna', 'tamarke@gmail.com', '098765446', ['milk', 'ggg',]),
//     new Client(3, 'Tara', 'Petrovna', 'tamarke@gmail.com', '098765446', ['milk']),
//     new Client(4, 'Tamara', 'Pvna', 'tamarke@gmail.com', '098765446', ['milk', 'ggg']),
//     new Client(5, 'Tamara', 'Petrovna', 'tamarke@gmail.com', '098765446', ['milk', 'ggg']),
//     new Client(6, 'Ta', 'Pna', 'tamarke@gmail.com', '098765446', ['milk', 'ggg']),
//     new Client(7, 'Dir', 'Petrovna', 'tamarke@gmail.com', '098765446', ['milk', 'ggg', 'ffff', 'fff']),
//     new Client(8, 'Valeron', 'Petrovna', 'tamarke@gmail.com', '098765446', ['milk', 'ggg'])
// ]
//
// console.log(clients)
// const arr = [...clients].sort((client1, client2) => client1.order.length - client2.order.length)
// console.log(arr)
