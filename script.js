// Assignment Code
var generateBtn = document.querySelector("#generate");
var click= document.getElementById("click");
var count = document.getElementById("count");
const password = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";

//Sets password length
var characterCount = document.getElementById("characterCount");
//Writes the random password
const writePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};
//adds the created password to the card body text box
document.getElementById.apply("card-body").value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
