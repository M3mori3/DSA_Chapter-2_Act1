let grade = 95;
let input = "Your grade is: " + grade;
console.log(input);
if (grade>=90){
    console.log("Excellent");
} else if (grade>=80 && grade <=89){
    console.log("Good");
} else if (grade>=70 && grade <=79){
    console.log("Fair");
} else if (grade<70){
    console.log("Needs Improvement");
} else {
    console.log("Invalid Input");
}