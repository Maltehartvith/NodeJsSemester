// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------
console.log("-----------------------------------\nExercise 1\n")
console.log("First, we change the string to a float, and then whe check its type")
const newNumberOne = parseFloat(numberOne)
console.log(newNumberOne)
console.log(typeof(newNumberOne))
console.log("And then we do it with the other string aswell")
const newNumberTwo = parseFloat(numberTwo)
console.log("\n", newNumberTwo)
console.log(typeof(newNumberTwo))

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";


// --------------------------------------
console.log("-----------------------------------\nExercise 2\n ")
console.log("First we change the string to a float, and then we plus them together")
const anotherNumberOneFloat = parseFloat(anotherNumberOne)
const anotherNumberTwoFloat = parseFloat(anotherNumberTwo)

const totalAnotherNumber = anotherNumberTwoFloat + anotherNumberOneFloat
console.log(totalAnotherNumber)
console.log("Afterwards we test the type: ",typeof(totalAnotherNumber))

const fixedDecimal = totalAnotherNumber.toFixed(2)
console.log("Lastly we can use toFixed, which turn it into a string, but displays two decimals.: ", totalAnotherNumber)



// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals


console.log("-----------------------------------\nExercise 3\n")
const oneTwoThree = (one + two + three) / 3
console.log("First we plus the three numbers together, and then we devide it with 3 to get the avg.\nSince the result is an integer, we use toFixed and add 5 deciamls to be shown")
console.log(oneTwoThree.toFixed(5))




// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

console.log("-----------------------------------\nExercise 4\n\nSince we know that the c is on the last char, we can count the way to it, \nand since strings are 0 indexed just as array, it will be at index 2")

console.log(letters.charAt(2))

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
console.log("-----------------------------------\nExercise 5")

console.log("\nSince there's only one J, we can easily replace all j's to J's. If there were more j's, \nwe would simply use the replace method and replace \"javascript\" with \"Javascript\"\n")
const edit = fact.replace("j", "J")
console.log(edit)
console.log("-----------------------------------")

// --------------------------------------



