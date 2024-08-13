console.log ("Helloooo");

//  scoping - wjere we can access a variable
// var is function-scoped, not blovk scoped
// do not use var
function addNumbers(){
    var sum =  1 + 2;
console.log(sum); // referencederror: sum is not defined
}
addNumbers();
// cannot access outside of function because var is function- scoped

// let and const are block -scope

if(true === true){
    var favoriteFood = "pasta";
    let favoriteAnimal = "giraffe";
    const favNumber = 9;}

    console.log(favoriteFood);
    // console.log(favoriteAnimal);
    // console(favNumber); // ref error not defined

// let someNumber = 0
// while(someNumber < 3){
//     someNumber=someNumber +1;
//     console.log("llama");
// }

// const numbers = (3, 12, 7, 30);

var iceCream = "mint choc chip";

