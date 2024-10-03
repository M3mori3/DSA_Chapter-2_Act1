//this function allows a prompt 
const ps = require("prompt-sync");
const prompt =ps();

//prompt which allows user to enter their score
let grade=prompt("Enter your score:");

//else if statements wherein it logs the respective grade based on their score
if (grade>=90){
    console.log("Your Grade is: Excellent!");
} else if (grade>=80 && grade <=89){
    console.log("Your Grade is: Good");
} else if (grade>=70 && grade <=79){
    console.log("Your Grade is: Fair");
} else if (grade<70){
    console.log("Your Grade Needs Improvement");
} else {
    console.log("Invalid input please enter a number");
}