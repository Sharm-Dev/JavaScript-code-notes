let firstCard = getRandomCard();
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]; 
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el");

let cardsEl = document.getElementById("cards");

let sumEl = document.getElementById("sum");

// 1. Create a function, getRandomCard(), that always returns the number 5

function getRandomCard() {
  return Math.floor(Math.random() * 11) + 2;
}

function startGame() {
  renderGame();
}


function renderGame() {
  // 2. Refer to the cards array when rendering out the cards
  sumEl.textContent = `Sum: ${sum}`;
  cardsEl.textContent = "Cards: ";
  // Create a for loop that renders out all the cards instead of just two
  for (let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
  }

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
  let thirdCard = getRandomCard()
  cards.push(thirdCard);
  sum += thirdCard;
  renderGame();
}

















// console.log("Has blackjack: " + hasBlackJack);
// console.log("Player still live: " + isAlive);
// console.log(message);
