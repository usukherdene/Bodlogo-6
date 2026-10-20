// for (let i = 0; i <=10; i++) {
//     console.log(i);
    
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
    
// }

// const fruits = ["Алим", "Банана", "Жүрж"]
// for (let i = 0; i <=2; i++) {
//     console.log(fruits[i]);
    
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
        
//     }
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
        
//     }
// }

// const word = "hello"
// for (let i = 0; i <= word.length; i++) {
//     console.log(word[i]);
    
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum = sum + i
// }
// console.log(sum)

// let sum = 0
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sum = sum + i
//     }
// }
// console.log(sum);

// const squares = []
// for (let i = 1; i <= 10; i++) {
//     squares.push(i*i)
// } 
// console.log(squares);

// const numbers = [5, 10, 15, 20];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i]
// }
// console.log(sum);

// const numbers = [10, 20, 30, 40]
// let avg = 0
// for (let i = 0; i < numbers.length; i++) {
//     avg = avg + numbers[i]
// }
// console.log(avg / numbers.length);

// const word = "school"
// let count = 0;
// for (let i = 0; i < 10; i++) {
//     if (word[i] === undefined) {
//         break;
//     }
//     console.log(word[i]);
//     count++;
// }
// console.log(count);

// const numbers = [3, 8, 12, 5, 6, 7]
// let count = 0
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         ++count;
//     }
// }
// console.log(count);

// for (let i = 0; i <= 50; ++i) {
//     if (i % 3 == 0) {
//     console.log(i);
//     }
// }

// for (let i = 1; i <= 100; ++i) {
//     if (i % 3 == 0 && i % 5 == 0) {
//     console.log(i);
//     }
// }

// const word = "hello"
// const reverse = []
// for (let i = -1; i > -10; i--) {
//     reverse.push(word[word.length + i])
//     if (word[-i] === undefined){
//         break;
//     }
// }
// console.log(reverse.join(""));

// const word = "banana"
// const letter = "a"
// let count = 0
// for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//         ++count;
//     }
// }
// console.log(count);

// for (let i = 5; i <= 50; i += 5) {
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// const sentence = "Би JavaScript сурч байна"
// let count = 0
// for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] === " ") {
//         ++count;
//     }
// }
// console.log(count);

// let a = 2;
// const b = 5;
// let c = 1
// for (let i = 0; i < b; i++) {
//     c *= a;
// }
// console.log(c);

// const n = 5
// let result = 1
// if (Math.abs(n) === n) {
//     for (let i = 1; i <= n; i++) {
//         result = result * i
//     }
// }
// console.log(result);

// const n = 10
// const a = 5
// for (let i = 1; i <= n; i++) {
//     console.log(`${a} x ${i} = ${a * i}`);
    
// }

// const numbers = [4, 7, 2, 7, 9]
// let target = 7
// let result = 0
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == target) {
//         result = i
//         break
//     }else {
//         result = -1
//     }
// }
// console.log(result);

// const word = "JavaScript"
// let asciiCode = 0
// for (let i = 0; i < word.length; i++) {
//     if (word.charCodeAt(i) <= 90 && word.charCodeAt(i) >= 65) {
//         ++asciiCode;
//     }
// }
// console.log(asciiCode);

// const number = 12
// let result = 0
// for (let i = 1; i <= number; i++) {
//     if (number % i == 0) {
//         console.log(i);
        
//     }
// }

// for (let i = 1; i <= 5; i++) {
//     console.log("*".repeat(i));
    
// }

// const numbers = [5, 12, 20, 8]
// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = numbers[i] + 10
    
// }
// console.log(numbers);

// const booleans = [false, false, true, true]
// for (let i = 0; i < booleans.length; i++) {
//     if (booleans[i] == false) {
//         booleans[i] = true
//     }
// }
// console.log(booleans);

// const products = [{ title: "Уут", price: 500 }, { title: "Сав", price: 800 }];
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 600) {
//         console.log(products[i]);
//         break;
//     }
// }

// const employees = [{ name: "Амгалан", department: "IT" }, { name: "Номин", department: "HR" }]
// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i].name);
    
// }

// const students = [{ name: "Бат", score: 85 }, { name: "Сара", score: 92 }]
// for (let i = 0; i < students.length; i++) {
//     if (students[i].score > 90) {
//         console.log(students[i].name);
//     }
// }

// const products = [{ title: "Уут", stock: 5 }, { title: "Сав", stock: 0 }] 
// for (let i = 0; i < products.length; i++) {
//     if (products[i].stock !== 0) {
//         console.log(products[i]);
        
//     }
// }

// const books = [{ title: "Монгол түүх", year: 2000 }, { title: "Газар зүй", year: 2010 }]
// for (let i = 0; i < books.length; i++) {
//     if (books[i].year > 2005) {
//         console.log(books[i]);
        
//     }
// }

// const students = [{ name: "Бат", age: 20 }, { name: "Сара", age: 22 }]
// let total = 0
// for (let i = 0; i < students.length; i++) {
//     total = total + students[i].age
// }
// console.log(total / students.length);

// const products = [{ title: "Уут", price: 500 }, { title: "Сав", price: 800 }]
// for (let i = 0; i < products.length; i++) {
//     products[i].price = products[i].price / 100 * 10 +  products[i].price
// }
// console.log(products);

// let employees = [
//   { name: "Амгалан", salary: 1000, active: true, department: "IT" },
//   { name: "Номин", salary: 1500, active: false, department: "HR" },
//   { name: "Баяр", salary: 1200, active: true, department: "IT" }
// ];
// let total = 0
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].active == true) {
//         total = total + employees[i].salary
//     }
// }
// console.log(Math.floor(total / 2));
