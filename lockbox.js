const prompt = require('prompt-sync') ({sigint: true});
let pinCode = (1234);
console.log("The Lock-Box pincode has a four digit pin code");
let userInput = Number(prompt("Please enter a pincode number: "));

if(userInput === pinCode){
    console.log("Success!")
}
else{
    console.log("Failure!")
}
// test