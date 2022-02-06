// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 
console.log("-----------------------------------------------------------------\nExercise 1\n")
console.log(letters.indexOf("b"))
console.log(letters[1])
// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  
console.log("-----------------------------------------------------------------\nExercise 2\n")
friends.push("Anders", "Michael", "Malte")
console.log(friends)

// --------------------------------------
// Exercise 3 - Get the index of first occurrence of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 
console.log("-----------------------------------------------------------------\nExercise 3\n")
console.log(significantMathNumbers.indexOf(1729))

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket
console.log("-----------------------------------------------------------------\nExercise 4\n")
diet.splice(2, 0, "hamburger", "soda", "pizza" )
console.log(diet)

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 
console.log("-----------------------------------------------------------------\nExercise 5\n")

diet.pop()
console.log(diet)

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  
console.log("-----------------------------------------------------------------\nExercise 6\n")
const dinnerTray = [...diet]
console.log(dinnerTray)

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];
const newLetters =[];
// log every second char in the array starting from b
console.log("-----------------------------------------------------------------\nExercise 7\n")
for(let i = 1; i <= lettersExpanded.length; i+= 2){
    console.log(lettersExpanded[i])
    newLetters.push(lettersExpanded[i])
}
console.log("Or: ", newLetters)

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers
console.log("-----------------------------------------------------------------\nExercise 8\n")
for(let i = 0; i <= numbers.length; i++){
    if(numbers[i] < 0 || numbers[i] > 6){
        console.log("Numbers above 6 or below 0: ", numbers[i])
    }
    
    
    discardedNumbers.push(i)

}
console.log("discarded numbers: ", discardedNumbers)
console.log("-----------------------------------------------------------------")
// --------------------------------------


