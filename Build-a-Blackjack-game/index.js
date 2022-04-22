let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2; 
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el");

let cardsEl = document.getElementById("cards");

let sumEl = document.getElementById("sum");


function startGame() {
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = `Cards: ${firstCard} + ${secondCard}`;

    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
};

function newCard() {
  console.log("Drawing a new card");
  // 1. Create a card variable, and hard code its value to a number (2-11)
  let thirdCard = Math.floor(Math.random() * 11) + 2; 
  
  
  
  // 2. Add the new card to the sum variable

  sum += thirdCard;

  startGame()

 
}

















// console.log("Has blackjack: " + hasBlackJack);
// console.log("Player still live: " + isAlive);
// console.log(message);
