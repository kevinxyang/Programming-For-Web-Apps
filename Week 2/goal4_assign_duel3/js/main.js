// Kevin Yang
// April 2nd, 2014
// The Duel - Part II
// ==================



// Takes two arrays and the current round as parameters.
function winnerCheck(playerOne, playerTwo, currentRound) {
    'use strict';
    // Sets the default value of result to "No Winner".
    var result = "No Winner";
    // If the fight has lasted 10 rounds, then determine a winner or call it a draw.
    if (currentRound === 10) {
        if (playerOne.health === playerTwo.health) {
            result = "Draw";
        } else if (playerOne.health > playerTwo.health) {
            result = playerOne.name + " Wins";
        } else {
            result = playerTwo.name + " Wins";
        }
    // Else if, either or both players health drops to 0 or below, determine a winner.
    } else if ((playerOne.health <= 0) && (playerTwo.health <= 0)) {
        result = "Both Die";
    } else if (playerOne.health <= 0) {
        result = playerTwo.name + " Wins";
    } else if (playerTwo.health <= 0) {
        result = playerOne.name + " Wins";
    // Else do not determine a winner yet.
    } else {
        result = "No Winner";
    }
    // Return the value of result.
    return result;
} // End of the winnerCheck() function.



// Takes two arrays as parameters.
function fight(playerOne, playerTwo) {
    'use strict';
    // Sets the starting round to 1.
    var round = 1;
    // Calculates each player's minimum damage.
    var playerOneMinDamage = playerOne.damage * .5;
    var playerTwoMinDamage = playerTwo.damage * .5;
    // For each round, recalculate each player's damage and subtract it from the other player's remaining health.
    for (var i = 0; i < 10; i++) {
        var playerOneDamage = Math.floor(Math.random() * (playerOne.damage - playerOneMinDamage) + playerOneMinDamage);
        var playerTwoDamage = Math.floor(Math.random() * (playerTwo.damage - playerTwoMinDamage) + playerTwoMinDamage);
        playerOne.health -= playerOneDamage;
        playerTwo.health -= playerTwoDamage;
        // Increment the round by 1.
        round++;
        // Alert the user about the updated information.
        alert(playerOne.name + ":" + playerOne.health + " *ROUND " + round + "* " + playerTwo.name + ":" + playerTwo.health);
        // Print the updated information to the console.
        console.log("---- Round " + round + " ----");
        console.log(playerOne.name + ":" + playerOne.health, playerTwo.name + ":" + playerTwo.health);
        // Call the winnerCheck() function, and store the result in currentResult.
        var currentResult = winnerCheck(playerOne, playerTwo, round);
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
    var spiderman = {
        name: "Spiderman",
        damage: 20,
        health: 100
    };
    var batman = {
        name: "Batman",
        damage: 20,
        health: 100
    };
    // document.getElementById("p1").innerHTML = 100;
    // Alerts the user about the starting conditions.
    alert(spiderman.name + ":" + spiderman.health + " *START* " + batman.name + ":" + batman.health);
    console.log("Begin!");
    // Calls the fight() function.
    fight(spiderman, batman);
} // End of the init() function.



window.onload = init;