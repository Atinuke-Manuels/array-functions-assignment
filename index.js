/**
 * 2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
1. Add ‘Kotlin’ to the end of the array
2. Add ‘Java’ after ‘Ruby’
3. Remove the first item in the array
4. Add ’Scala’ and ‘Swift’ to the beginning of the array
5. Replace ‘PHP’ with ‘Go’ and ‘Rust’
 */

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// 1. Add ‘Kotlin’ to the end of the array
languages.push('Kotlin');
console.log(languages);

// 2. Add ‘Java’ after ‘Ruby’
languages.splice(3,0, 'Java');
console.log(languages);

// 3. Remove the first item in the array
languages.shift();
console.log(languages);

// 4. Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages);

// 5. Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);


// 3. What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}

console.log(changeFruit(fruit));   // output is ['apple', 'mango', 'orange']


// 4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10

let nums_array = [20, 3, -15, 45, 10, 58];

function maxNums(nums_array){
    let maximum = Math.max(...nums_array);
    return maximum;
}
console.log(maxNums(nums_array));   //expected output is 58


// 5. Write a function called valTimesIndex which accepts an array of 
// numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g.,
//  valTimesIndex([1,2,3]) // [0,2,6]
// 		valTimesIndex([5,10,15]) // [0,10,30]

let numbers = [5, 10, 15, 20, 25, 56];

function valTimesIndex(numbers){
    //assigning the values of the multiplication to a variable called result.
    //x represents the individual elements while i represents their index/position.
    let result = numbers.map((x, i) => x * i);
    return result;
}
console.log(valTimesIndex(numbers));
