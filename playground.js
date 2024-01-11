//Higher order functions (take )
const input = [1,2,3,4,5];
const output = input.map(multiplier)
console.log(output)

function multiplier(number){
    return number *2
}

//The same that is above can be in this case done with .map()
const input_2 = [1,2,3,4,5];
const new_2 = input_2.map(i => i*2)
console.log("Map function input: " + input_2 + "Map function output* " + new_2)

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


//**********  Stack  ****************
class Stack {
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item);
    }

    pop(){
        this.items.pop(item);
    }
}


const capitals = new Stack();
capitals.push("Yerevan")
capitals.push("Ouagadougou");
console.log("This is the stack: " + JSON.stringify(capitals.items));

//*********************  Functions  *********************
/*
The main difference between Function declaration and Function expression is we can invoke the function add(2,3) before its declaration also, 
but the function addition(2,3) needs to invoke after it is defined.
*/

//****** Function declaration ******
function add(a,b){
    return a+b;
}

//****************  Function expression  ****************
const addition = function(a,b){
    return a+b;
}

//**********   Arrow function expression  ********** 
const arrow_add = (a,b) =>{
    return a+b;
}

//**********  Arrow function expression --> shorter ********** 
const arrow_add_short = (a,b) => a+b;

//**********  Object Oriented Programming  ****************

//Creating a class Person 
function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
}

//*******  Initializing a class   *******

const person_one = new Person("경은", "김", 23);
const person_two = new Person("Lu", "Ga", 60);

document.getElementById("demo").innerHTML = "第一人の年齢: " + person_one.age + ". 第二人の年齢:  " + person_two.age + "."; 