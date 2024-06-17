// Massiv metodlariga oid masalalar

// 1-masalasi


// function extractMiddleThree(arr) {
   
//     let len = arr.length;

//     if (len < 3) {
//         return null;
//     }
  
//     let startIndex = Math.floor(len / 2) - 1;
//     let endIndex = startIndex + 3;
//     let middleThree = arr.slice(startIndex, endIndex);

//     return middleThree;
// }

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(extractMiddleThree(myArray)); 



// 2-masala


// function addValuesAtIndex(arr, numValues, startIndex) {
  
//     var randomNum = Math.floor(Math.random() * 90 + 10);

//     for (let i = 0; i < numValues; i++) {
//         arr.splice(startIndex + i, 0, randomNum);
//     }

//     return arr;
// }

// let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArray = addValuesAtIndex(myArray, 2, 3);

// console.log(newArray); 



// 3-masalasi


// function mergeArrays(arr1, arr2, arr3) {
   
//     let mergedArray = arr1.concat(arr3, arr2);

//     return mergedArray;
// }


// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];


// let mergedResult = mergeArrays(array1, array2, array3);


// console.log(mergedResult); 



// 4-masala



// function findIndexCube(arr, value) {
  
//     let index = arr.indexOf(value);

//     if (index !== -1) {
//         return index ** 3;
//     } else {
//         return false;
//     }
// }

// let myArray = [1, 4, 9, 16, 25];

// let result1 = findIndexCube(myArray, 16);
// let result2 = findIndexCube(myArray, 8); 

// console.log(result1); 
// console.log(result2); 



// 5-masala


// function findLastIndex(arr, value) {

//     let lastIndex = arr.lastIndexOf(value);

//     return lastIndex;
// }

// let myArray = [1, 2, 3, 4, 3, 2, 1];

// let result1 = findLastIndex(myArray, 3); 
// let result2 = findLastIndex(myArray, 5); 


// console.log(result1); 
// console.log(result2); 


// 6-masala


// function checkValueInArrays(arr1, arr2, value) {
    
//     let combinedArray = arr1.concat(arr2);

    
//     let isInBothArrays = combinedArray.indexOf(value) !== -1;

//     return isInBothArrays;
// }


// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let valueToFind = 3;


// let result1 = checkValueInArrays(array1, array2, valueToFind); 


// let result2 = checkValueInArrays(array1, array2, 8); 

// console.log(result1);
// console.log(result2);



// 7-masala


// function checkIfValueExists(arr, value) {
    
//     let exists = arr.includes(value);

//     return exists;
// }


// let myArray = [1, 2, 3, 4, 5];


// let result1 = checkIfValueExists(myArray, 3);
// let result2 = checkIfValueExists(myArray, 6); 

// console.log(result1); 
// console.log(result2); 



// 8-masala


// function findAverageOfThreeDigitNumbers(arr) {
//     let count = 0;
//     let sum = 0; 


//     arr.forEach(function(number) {

//         if (number >= 100 && number <= 999) {
//             count++;
//             sum += number;
//         }
//     });

//     let average = sum / count;

//     return average;
// }

// let myArray = [123, 45, 678, 321, 987, 234, 567];

// let result = findAverageOfThreeDigitNumbers(myArray);

// console.log(result);



// 9-masala


// function transformArray(arr) {

//     let transformedArray = [];

    
//     transformedArray = arr.map(function(number) {
//         if (number % 2 === 0) {
            
//             return number ** 2;
//         } else {
            
//             return number ** 3;
//         }
//     });

//     return transformedArray;
// }


// let myArray = [1, 2, 3, 4, 5];


// let result = transformArray(myArray);


// console.log(result); 



// 10-masala


// function getLastCharacters(arr) {
    
//     let lastCharacters = [];


//     lastCharacters = arr.map(function(text) {
//         return text.slice(-1); 
//     });

//     return lastCharacters;
// }


// let myArray = ["apple", "banana", "cherry", "date"];


// let result = getLastCharacters(myArray);


// console.log(result); 



// 11-masala


// function filterShortWords(arr) {
   
//     let filteredArray = [];

 
//     filteredArray = arr.filter(function(word) {
//         return word.length >= 4; 
//     });

//     return filteredArray;
// }


// let myArray = ["apple", "pear", "banana", "kiwi", "orange", "fig"];


// let result = filterShortWords(myArray);


// console.log(result);


// 12-masala


// function checkAdult(arr) {
 
//     let hasAdult = arr.some(function(person) {
//         return person.age >= 18;
//     });

//     return hasAdult;
// }


// let people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 17 },
//     { name: "Doe", age: 20 }
// ];

// let result = checkAdult(people);


// console.log(result);


// 13-masala


// function checkAllNamesEndWithJon(arr) {
    
//     let allEndWithJon = arr.every(function(name) {
//         return name.endsWith("jon"); 
//     });

//     return allEndWithJon;
// }


// let names = ["Marjon", "Anvarjon", "Sarvinoz", "Farruxjon"];


// let result = checkAllNamesEndWithJon(names);


// console.log(result); 


// 14-masala


// function findThreeDigitMultipleOfFive(arr) {
//     let foundNumber = arr.find(function(number) {
//         return number >= 100 && number <= 999 && number % 5 === 0;
//     });

//     return foundNumber;
// }

// let numbers = [245, 132, 510, 879, 305, 724];

// let result = findThreeDigitMultipleOfFive(numbers);

// console.log(result); 


// 15-masala


// function findIndexContainingBek(arr) {
 
//     let index = arr.findIndex(function(name) {
//         return name.includes("bek"); 
//     });

//     return index;
// }


// let names = ["Abdulloh", "Bekzod", "Sarvarbek", "Bektur", "Murod"];


// let result = findIndexContainingBek(names);


// console.log(result); 


// let noBekNames = ["Abdulloh", "Sarvar", "Murod"];
// let noBekResult = findIndexContainingBek(noBekNames);
// console.log(noBekResult); 


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
