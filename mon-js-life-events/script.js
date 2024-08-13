"use strict";

let firstName = "Leeza"
let lastName = "Dinh"
let fullName = firstName+ " " + lastName;
console.log(fullName);

let age = 24
console.log (age);

let month = "May"
let day = 8
let birthday = month + " " + day;
console.log(birthday);

let pineapplePizza = true


const lifeEvents = ["Born in Grand Rapids", "I love cats", "I have 3 nieces", "I have 3 cats"]

console.log(lifeEvents);
if (pineapplePizza) { 
    console.log ("My name is " + (fullName) + " and I like pineapples on pizza. I am currently " + (age) + " years old and my birthday is on " + (birthday) + "th." );
}
else {
    console.log ("My name is " + (fullName) + " and I do not like pineapples on pizza. I am currently " + (age) + " years old and my birthday is on " + (birthday) + "th." );
}

for (let i = 0; i<4; i++){
    console.log(lifeEvents[i]);

}

