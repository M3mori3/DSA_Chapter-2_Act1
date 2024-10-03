//this function allows a prompt 
const ps = require("prompt-sync");
const prompt =ps();

//gives random number for the user to guess
const nmbr = Math.floor(Math.random() * 10) + 1;
let guess = 0;

//loop that keeps asking user to guess until the guess is right
while (guess !== nmbr) {
    guess = parseInt(prompt("Guess the number between 1 to 10:"));
    if (guess > nmbr) {
    console.log("Too high! Pick a lower number");
    }else if (guess < nmbr) {
    console.log("Too low! Pick a higher number");
    } else {
    console.log("Correct! Congratulations.");
}
}
    