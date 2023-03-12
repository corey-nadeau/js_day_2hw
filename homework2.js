//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function parser(object) {
    console.log(`Pizza's: ${person3.pizza[0]} and ${person3.pizza[1]}`);
    console.log(`Taco's: ${person3.tacos}`);
    console.log(`Burgers: ${person3.burgers}.`);
    console.log(`Ice Cream: ${person3.ice_cream[0]}`);
    console.log(`Shakes: ${person3.shakes[0].oberwise}, ${person3.shakes[0].dunkin},
    ${person3.shakes[0].mcDonalds}, and ${person3.shakes[0].cupids_candies}`)
}
console.log(parser(person3))


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.printInfo = () => {
            console.log(`${this.name} is ${this.age} years old`)
        }
    }
    addAge = (ages) => {
        this.age += 1;
        console.log(`New age: ${this.age}`)
    };
}
let Corey = new Person('Corey',33)
let Kayleen = new Person('Kayleey',29)
Corey.printInfo();
Corey.addAge()
Kayleen.printInfo();
Kayleen.addAge()




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


string = "IsThisStringLongEnough?"

let lenChecker = new Promise((resolve, reject) => {
    if (string.length >= 10) {
        resolve("success");
     } else {
         reject("failed");
     }
});
lenChecker.then(() => {
    console.log("Big Word");
}).catch(() => {
    console.log("Small Number");
});
console.log(lenChecker)