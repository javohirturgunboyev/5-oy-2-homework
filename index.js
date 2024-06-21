// 1-masala


// function a (arr) {
//     const b = arr.length;
//     if (b < 3) {
//         return null;
//     }
//     const x = Math.floor(b / 2); 
//     const s = x - 1; 
//     const d = x + 2;
//     const m = arr.slice(s, d);
//     return m;
// }
// const array1 = [1, 2, 3, 4, 40, 100, 200];
// console.log(a(array1)); 

// 2- masalla

// function a(arr, n, index) {
//     const l = arr.length;
//     function g() {
//         return Math.floor(Math.random() * 50 ); 
//     }
//     for (let i = 0; i < n; i++) {
//         const random = g();
//         arr.splice(index + i, 0, random);
//     }
//     return arr;
// }
// const array = [1, 2, 3, 4, 5];
// const k = 3;
// const s = 2;
// console.log(a(array, k, s));


// 3- masalla

// function a(arr1, arr2, arr3) {
//     const b = [ arr2, arr3, arr1,];
//     return b;
// }

// const a1 = [1, 2, 3];
// const a2 = [4, 5, 6];
// const a3 = [7, 8, 9];

// console.log(a(a1, a2, a3));



// 4-masalla

// function a(m, q) {
//     const index = m.indexOf(q);
//     if (index == 1) {
//         return Math.pop(index, 3);
//     } else {
//         return false;
//     }
// }
// let n = [1, 2, 3, 4, 5];
// let v = 3;
// let d = a(n, v);
// console.log(d); 
// d = a(n, v);
// console.log(d); 

// 5- masalla

// function a(arr, t) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === t) {
//             return i;
//         }
//     }
// }
// const arr = [2, 12, 6, 4, 10, 8];
// const b = 8;
// const d = a(arr, b);
// console.log(d);


// 6- masalla

// function a(massiv1, massiv2, element) {
//     const m = massiv1.includes(element);
//     const b = massiv2.includes(element);
//     if (m && b) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const massiv1 = [1, 2, 3, 4, 5];
// const massiv2 = [6, 7, 8, 9, 10];
// const element = 3;
// const natija = a(massiv1, massiv2, element);
// console.log(natija); 


// 7- masalla

// function a(b, e) {
//     return b.includes(e);
// }
// let test = [1, 2, 3, 4, 5];
// let tests = 3;
// console.log(a(test, tests));

// 8- masala

// function a(arr) {
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0 && arr[i] >= 100 ) {
//             sum += arr[i];
//             count++;
//         }
//     }
//     if (count === 0) {
//     }
//     return sum / count;
// }
// const javob = [123, 456, 789, 555, 321];
// console.log(a(javob));

// 9-masalla


// function a(massiv) {
//     let javob = [];
//     for (let i = 0; i < massiv.length; i++) {
//         if (i % 2 === 0) {
//             javob.push(massiv[i] * massiv[i]);
//         }
//     }
//     return javob;
// }
// let b = [1, 2, 3, 4, 5, 6, 7, 8];
// let t = a(b);
// console.log(t);

// 10- masalla

// function a(massiv) {
//     return massiv.map(yozuv => yozuv.slice(-1));
// }
// const t = ["salom", "kurishguncha", "xop"];
// const b = a(t);
// console.log(b);

// 11- masalla

// function a(arr) {
//     return arr.filter(array => array.length < 4);
// }
// const c = ["behi", "banana", "ot", "tok", "soat", "oqish"];
// const d = a(c);
// console.log(d);

// 12-masalla


// function a(arr) {
//     return arr.some(obj => obj.age > 18);
//   }
//   const c = [
//     { name: 'Jamshid', age: 25 },
//     { name: 'Abos', age: 20 },
//     { name: 'Javohir', age: 17 }
//   ];
  
//   console.log(a(c));


// 13- masalla

// function a(b) {
//     return b.every( b => ("jon"));
//   }
//   const ismlar1 = ["Azamat", "shaxlo", "Rustam", "Shoxijaxon"];
  
//   console.log(a(ismlar1));

// 14- masalla


// function a(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= 100 && arr[i] % 5 === 0) {
//         return arr[i];
//       }
//     }
//   }
//   const array = [235, 120, 375, 430, 240];
//   const b = a(array);
//   console.log(b);



// 15- masalla


// function a(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].includes('bek')) {
//             return i;
//         }
//     }
//     return -1; 
// }
// const c = ["alisher", "holmurod", "azamat", "lazizbek", "omad"];
// const index = a(c);
// console.log(index);

// IIFE ga oid 4 ta misol tuzing hamda ularning qanday ishlashini, IIFE ning nega kerakligini izohlang



// 1-masala

// (function() {
//     let message = "Salom, dunyo!";
//     console.log(message); 
// })();


// 2-masala

// (function(name) {
//     console.log("Salom, " + name + "!");
// })("Ali");


// 3-masalalet result = (function(a, b) {
//     return a + b;
// })(5, 10);

// console.log(result); 



// 4-masala

// (function() {
//     let counter = 0;

//     function increment() {
//         counter++;
//         console.log("Counter:", counter);
//     }

//     increment();
//     increment();
// })();

