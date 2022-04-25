let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;
let card = [firstCard, secondCard]; 
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el");

let cardsEl = document.getElementById("cards");

let sumEl = document.getElementById("sum");

function startGame() {
  renderGame();
}


function renderGame() {
  // 2. Refer to the cards array when rendering out the cards
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = `Cards: ${card[0]} + ${card[1]}`;

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
  let thirdCard = Math.floor(Math.random() * 11) + 2;
  // Push the card to the cards array
  card.push(thirdCard);
  sum += card[2];
  console.log(card);
  renderGame();
}

















// console.log("Has blackjack: " + hasBlackJack);
// console.log("Player still live: " + isAlive);
// console.log(message);
