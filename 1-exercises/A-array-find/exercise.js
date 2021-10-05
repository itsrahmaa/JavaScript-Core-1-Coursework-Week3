/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

names.find((name) => names.length > 7 && names[0] === 'A');

// var longNameThatStartsWithA = findLongNameThatStartsWithA.find(names) ;

// function findLongNameThatStartsWithA() {

// }

// console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
