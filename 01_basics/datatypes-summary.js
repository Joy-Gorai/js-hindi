// premetive 

// 7 types : string, number , boolean , null , undefined , symbol , BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = ('123')
console.log( id == anotherId)

const bigNumber = 634566665645646456n    // BigInt


// Reference (non premetive)

// Array, Object, Functions

const heros = ["shaktiman", "bheem", "dorimon"];
let myObj = {
    name: "Joy",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world")
}

console.log(typeof myfunction)

