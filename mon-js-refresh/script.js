"use strict";


console.log ("Helloooo");

// declarative words: var, let, and const

const firstName = "Sarah";
const lastName = "Barker"
const fullName = firstName + " " +  lastName; 
console.log(fullName);

let population = 620376;
population = population * 3;
console.log(population);

let javaScriptIsCool = true;
console.log(javaScriptIsCool); //true

// array of strings
// arrays are collections of data
// best practice: keep data type consistent within one array
const color = ["redorange", "blue", "green" ];
console.log(color);
// index always starts with 0
// index "blue" is 1
// to access index, attach [] with a number between an arr variable
console.log(color[1]); // accessing index 1 of colos: "blue"
console.log(color[0]); //redorange
console.log(color[2]); //green
console.log(color[3]); // undefined - we dont have a 4th item
console.log(color[-1]); //undefined - out of bounds

for(let i = 1; i <= 5; i = i + 1){
    console.log("i")
}