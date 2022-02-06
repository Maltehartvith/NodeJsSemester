// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const alienMessage = {
	message: "Hello, earthling! I bring peace."
};

// Log the message 
console.log("-------------------------------------------------\nExercise 1\n")
console.log(alienMessage.message)
// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
console.log("-------------------------------------------------\nExercise 2\n")
const malte = {
	Lastname:"Hartvith",
	Name: "Malte",
	Age: 26
}
console.log(malte)
// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true
console.log("-------------------------------------------------\nExercise 3\n")
stackOverflow.isAllowed = true
console.log(stackOverflow)
// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {
	description: "The best song in the world."
}


// remove the property "description" and add a property called "about" that should say "Just a tribute." 
console.log("-------------------------------------------------\nExercise 4\n")
delete thisSong.description
thisSong.about ="Just a tribute."
console.log(thisSong)
console.log("-------------------------------------------------")
// --------------------------------------


