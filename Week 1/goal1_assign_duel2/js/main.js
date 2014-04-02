// Kevin Yang
// April 2nd, 2014
// The Duel - Part II
// ==================



// Takes two arrays and the current round as parameters.
function winnerCheck(arrayOne, arrayTwo, currentRound) {
    'use strict';
    // Sets the default value of result to "No Winner".
    var result = "No Winner";
    // If the fight has lasted 10 rounds, then determine a winner or call it a draw.
    if (currentRound === 10) {
        if (arrayOne[2] === arrayTwo[2]) {
            result = "Draw";
        } else if (arrayOne[2] > arrayTwo[2]) {
            result = arrayOne[0] + " Wins";
        } else {
            result = arrayTwo[0] + " Wins";
        }
    // Else if, either or both players health drops to 0 or below, determine a winner.
    } else if ((arrayOne[2] <= 0) && (arrayTwo[2] <= 0)) {
        result = "Both Die";
    } else if (arrayOne[2] <= 0) {
        result = arrayTwo[0] + " Wins";
    } else if (arrayTwo[2] <= 0) {
        result = arrayOne[0] + " Wins";
    // Else do not determine a winner yet.
    } else {
        result = "No Winner";
    }
    // Return the value of result.
    return result;
} // End of the winnerCheck() function.



// Takes two arrays as parameters.
function fight(arrayOne, arrayTwo) {
    'use strict';
    // Sets the starting round to 1.
    var round = 1;
    // Calculates each player's minimum damage.
    var playerOneMinDamage = arrayOne[1] * .5;
    var playerTwoMinDamage = arrayTwo[1] * .5;
    // For each round, recalculate each player's damage and subtract it from the other player's remaining health.
    for (var i = 0; i < 10; i++) {
        var playerOneDamage = Math.floor(Math.random() * (arrayOne[1] - playerOneMinDamage) + playerOneMinDamage);
        var playerTwoDamage = Math.floor(Math.random() * (arrayTwo[1] - playerTwoMinDamage) + playerTwoMinDamage);
        arrayOne[2] -= playerOneDamage;
        arrayTwo[2] -= playerTwoDamage;
        // Increment the round by 1.
        round++;
        // Alert the user about the updated information.
        alert(arrayOne[0] + ":" + arrayOne[2] + " *ROUND " + round + "* " + arrayTwo[0] + ":" + arrayTwo[2]);
        // Print the updated information to the console.
        console.log("---- Round " + round + " ----");
        console.log(arrayOne[0] + ":" + arrayOne[2], arrayTwo[0] + ":" + arrayTwo[2]);
        // Call the winnerCheck() function, and store the result in currentResult.
        var currentResult = winnerCheck(arrayOne, arrayTwo, round);
        // If no winner has been determined then stay in the loop, else exit the loop.
        if (currentResult === "No Winner") {
            console.log(currentResult);
        } else {
            alert(currentResult);
            console.log(currentResult);
            break;
        }
    }
} // End of the fight() function.



// The function is called after the window has loaded.
function init() {
    'use strict';
    // Stores the player names, damage, and health in an array.
    var playerOne = ["Spiderman", 20, 100];
    var playerTwo = ["Batman", 20, 100];
    // Alerts the user about the starting conditions.
    alert(playerOne[0] + ":" + playerOne[2] + " *START* " + playerTwo[0] + ":" + playerTwo[2]);
    console.log("Begin!");
    // Calls the fight() function.
    fight(playerOne, playerTwo);
} // End of the init() function.



window.onload = init;