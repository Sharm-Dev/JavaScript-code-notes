let playerOne = 186;
let playerTwo = 112;

function quickestRaceTime() {
    if (playerOne < playerTwo) {
        return playerOne
    }else if (playerTwo < playerOne){
        return playerTwo
    } else {
        return playerTwo
    }
}

let quickestTime = quickestRaceTime()
console.log(quickestTime);

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function getTotalRaceTime() {
    return playerOne + playerTwo;
}

let totalRaceTime = getTotalRaceTime()
console.log(totalRaceTime);