// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");

// Create two variables (name & greeting) that contains your name
let greeting = "Hi, nice to meet you";
let name = "Sam";

let greetingB = "Hi, nice to meet you ";
let nameB = "Paul";

// and the greeting we want to render on the page
// Render the welcome message using welcomeEl.innerText
// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

//answers

// welcomeEl.innerText = greetingB + nameB;
// welcomeEl.innerText = welcomeEl.innerText +" "+ "👋";

//or

// welcomeEl.innerText = greetingB + nameB;
// welcomeEl.innerText += "👋";

//or 

welcomeEl.innerText = `${greeting} ${name}`;
welcomeEl.innerText += "👋";

