
  // 1. Create two variables, firstCard and secondCard.
  // Set their values to a random number between 2-11

  let firstCard = Math.floor(Math.random() * 11) + 2;
  let secondCard = Math.floor(Math.random() * 11) + 2;

  let cardsEl = document.getElementById("cards");
  let textToAdd = document.createTextNode(
    `Cards: ${firstCard} + ${secondCard}`
  );
  cardsEl.appendChild(textToAdd);

  // Create a variable, sum, and set it to the sum of the two cards
  let sum = firstCard + secondCard;
//   console.log(sum);

  let sumEl = document.getElementById("sum");
  let sumToAdd = document.createTextNode(`Sum total: ${sum}`);
  sumEl.appendChild(sumToAdd);

  let hasBlackJack = false;
  // Create a variable called isAlive and assign it to true
  let isAlive = true;
  // Declare a variable called message and assign its value to an empty string
let message = ""

let messageEl = document.getElementById("message-el");
console.log(messageEl, "<------- messageEl");
  
function startGame() {
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
};



// let resultEl = document.getElementById("result");
// let resultToAdd = document.createTextNode(`${message}`);
// resultEl.appendChild(resultToAdd);

















// console.log("Has blackjack: " + hasBlackJack);
// console.log("Player still live: " + isAlive);
// console.log(message);
