
//this function allows a prompt 
const ps = require("prompt-sync");
const prompt =ps();

//declares the correct password
const correctPassword = "memori3";
let pass;

//do while loop that repeatedly ask to enter the password until the correct password is entered.
do {
    pass = prompt("Welcome! Please enter your password: ");
    if (pass === correctPassword){
    console.log("Access Granted.");
    } else {
    console.log("Incorrect, Please try again.");
    } 
} while( pass !== correctPassword);