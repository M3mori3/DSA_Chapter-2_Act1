//this function allows a prompt 
const ps = require("prompt-sync");
const prompt =ps();

let day = prompt("Enter a day of the week: ");

//helps switch to different potential outcomes
switch(day){ 
    case "Monday":
        console.log("Your task for Monday is: to Clean the house");
        break; //breaks the switch block
    case "Tuesday":
        console.log("Your task for Tuesday is: to Code a program");
        break;
    case "Wednesday":
        console.log("Your task for Wednesday is: to Rest");
        break;
    case "Thursday":
        console.log("Your task for Thursday is: to Write in the Journal");
        break;
    case "Friday":
        console.log("Your task for Friday is: to Learn Japanese");
        break;
    case "Saturday":
        console.log("Your task for Saturday is: to Wash Clothes");
        break;
    case "Sunday":
        console.log("Your task for Sunday is: to Rest");
        break;
    default: 
        console.log("Your input is invalid please enter a day of the week.");
}  