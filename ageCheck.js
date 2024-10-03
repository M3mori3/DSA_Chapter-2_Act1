//Conditional statements

//this function allows a prompt 
const ps = require("prompt-sync");
const prompt =ps();

//prompt where the user can enter their age
let age = prompt("Please enter your age:");

//if else statements wherein it prints the statement when the condition is met
if (age<13){  
    console.log("You are a child");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager");
} else if (age>=20){
    console.log("You are an adult");
} else { 
    console.log("Invalid ouput");
}
