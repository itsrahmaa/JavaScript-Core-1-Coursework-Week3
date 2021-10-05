// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)


// V1

function multiple(number) {
    return number * 100;
}
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var numbersMultiple = numbers.map(multiple);

console.log(numbersMultiple);

// V2

var numbersMultiple = numbers.map(function multiple(number) {
    return number * 100;
});

console.log(numbersMultiple);

//V3

var numbers2 = [2, 4, 6, 8];
var numbersMulti = numbers2.map(numbers2 => {
return numbers2 * 100;
});
console.log(numbersMulti);

// V4

var numbers2 = [2, 4, 6, 8];
var numbersMulti = numbers2.map(numbers2 => numbers2 * 100);

console.log(numbersMulti);
