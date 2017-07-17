/*// create a random number between 1 & 10
function genRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const randomNumber = genRandomNumber(1, 10);

//ask user to guess number
const userNumber = parseInt(prompt("Guess my number. Its between 1 and 10"));

// check if user input matches generated random number
if (userNumber === randomNumber) {
    alert("Good Work");
} else {
    alert("Not matched. Number was " + randomNumber);
}*/

// Date now
// count from now till dec 25