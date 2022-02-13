//This is possible because of hoisting
//functions are hoisted 
console.log(add(2,8))

function add(x, y){
    return x + y;
}
//Anonymous function after the equal sign
const addInAVariable = function (x, y){
    return x + y;
}

console.log(add(2,8))


function doActionWithSomeone(anyFunctionReference, name){
    //Something might happen
    anyFunctionReference(name);
}

const running = (name) => console.log(`${name} is running`);

//
doActionWithSomeone(running, "Anders");

//with return
function doActionWithSomeoneWithReturn(anyFunctionReference, name){
    //Something might happen
    return anyFunctionReference(name);
}

const fishing = name => `${name} is running`;

console.log(doActionWithSomeoneWithReturn(fishing, "Mikkel"));


//

const passing = (name) => console.log(`${name} is passing his memes to his friends`)

function sharingIsCaring(callback, name){
    callback(name)
}

sharingIsCaring(passing, "Malte")

doActionWithSomeone(name => console.log(`${name} is eating`), "Malte");
