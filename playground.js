//Higher order functions (take )
const input = [1,2,3,4,5];
const output = input.map(multiplier)
console.log(output)

function multiplier(number){
    return number *2
}

//**********  setTimeout()  **********
//The function passed inside the setTimeout does not have ()
//1000 = 1 second
function message(){
    console.log("I am late to the console");
}

setTimeout(message, 1000)
//************************************



//**********  forEach  ****************
const numbers = [1,2,3,4,5];
numbers.forEach(number =>{
    console.log(number)
})
//*************************************


//**********  JS promises  *************
let p = new Promise((resolve, reject) => {
    let a = 1+4;
    if (a == 2){
        resolve("Success")
    } else {
        reject("Failure")
    }
})

p.then((message) => {
    console.log("This is then: " + message)
}).catch((message) => {
    console.log("This is catch: " + message)
})

//******  What is function expression  ********
// function stored in a const
const multiplier = function(number){
    return number * 2;
}