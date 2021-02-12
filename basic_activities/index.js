// Create a new file called index.js and create a new function that will accept an array as a parameter.

// What this function will do is take the parameter passed in and loop over it.

// As it looks through the numbers, it will add up all of the numbers in the array, and return the sum of all of the numbers.

// After you finish, call the new function 5 times, passing in a different array each time.

let sum = 0;
const array1 = [1,2,3,4]
const array2 = [1,2,3,4]
const array3 = [1,2,3,4]


const newFunction = function(array){
    for(let i=0; i < array.length; i++){
        let sum = sum + array[i];
    }
    console.log(sum);
}

newFunction(array1);
newFunction(array2);
newFunction(array3);