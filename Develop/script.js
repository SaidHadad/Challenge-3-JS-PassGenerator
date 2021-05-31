// Assignment Code

// global variables taken from the index.html document
var generateBtn = document.querySelector("#generate");
var paswordText = document.querySelector("#password");

// variables that include my possible characters that are going to be part of the random password
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// function that generates the password (called upon click on the Generate Password button)
function generatePass() {
// variables to store the true or false state of the diferent promps
var passwordLenght = window.prompt("Select a lenght between 8 a 128 characters");
var passwordLower = window.confirm("Would you like to include lowercase characters?");
var passwordUpper = window.confirm("Would you like to include uppercase characters?");
var passwordNum = window.confirm("Would you like to include numeric characters?");
var passwordSpecial = window.confirm("Would you like to include special characters?");
// variable to store the password that's going to be displayed
var userPassword = "";
// variable to store the strings which cotain the characters selected by the user
var PasswordSet = "";
// reset the password box to its original value
paswordText.value = "";

// chain of ifs to add the strings corresponding to each prompt onto passwordset
  if (passwordLower) {
    PasswordSet += lowercase; 
  }
  if (passwordUpper) {
    PasswordSet += uppercase;
  }
  if (passwordNum) {
    PasswordSet += number;
  }
  if (passwordSpecial) {
    PasswordSet += symbol;
  }

  // conditional to check the user selected at least 1 condition for the password and that the password is between 8 and 128 characters long
  if (PasswordSet != "" && passwordLenght > 8 && passwordLenght < 128){
  // select a random character from the passwordset string and repeat for as long as the passwordLenght
    for (let i = 0; i<passwordLenght; i++) {
      userPassword += PasswordSet.charAt(Math.floor(Math.random() * PasswordSet.length));
    }
    paswordText.value = userPassword;
  }
  else {
    window.alert("Your password don't comply with the specifications, please try again!")
  }
}

generateBtn.addEventListener("click", generatePass);
