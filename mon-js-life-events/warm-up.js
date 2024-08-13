"use strict"





// make an array of colors (string array)
const favColors = ["pink", "green", "orange", "purple", "blue"]


console.log(favColors)
// iterate (loop) thru arr log each color to the console


// for loop - provides us with a number
// helpful with a specific start and or end
for (let index = 0; index <3; index++){
    console.log(index); // i si a number that changes cover time
    // values of 0,1,2,3, for i with each loop
// console.log(favColors[0]); //pink
console.log(favColors[index]); //
// include each color in a sentence "i love ___"
// concatenation
console.log(" I love " + favColors[index] + ".");

// template literals: (I like this one)
console.log(`I love ${favColors[index]}.`);

}

// for(let i = 0;) *initialize the variable i to 0
// delcared it with let bc i will change over time
// after thought is the increment of i ++

console.log("------------------------------->");


// for ... of loop - wanting to access EVERY single item in an arr or string
for(const favColor of favColors){
    console.log(favColor);

    
}