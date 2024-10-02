const password = "memori3";
pass = "memori3";
do {
    console.log("Welcome! Please enter your password: " + pass);
    if (pass === password){
    console.log("Access Granted.");
    } else {
    console.log("Incorrect, Try again");
    }
} while( pass !== password);