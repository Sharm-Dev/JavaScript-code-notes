// 1. Create two variables, firstCard and secondCard.
// Set their values to a random number between 2-11

let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;

// let firstCard = 10;
// let secondCard = 10;

// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard;
console.log(sum);
// 1. Create a variable called isAlive and assign it to true
let isAlive = true;


if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂");
    isAlive = false
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳");
} else {
    console.log("You're out of the game! 😭");
    isAlive = false;
}

console.log(isAlive);
