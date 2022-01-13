// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");

// Create two variables (name & greeting) that contains your name
let greeting = "Hi, nice to mee you";
let name = "Sam";

// and the greeting we want to render on the page
let completedGreeting = `${greeting} ${name}`;

// Render the welcome message using welcomeEl.innerText

welcomeEl.innerText = completedGreeting;
