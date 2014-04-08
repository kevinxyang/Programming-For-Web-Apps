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
function fight(arr) {
    'use strict';
    console.log(arr);
    // Sets the starting round to 1.
    var round = 1;
    // Calculates each player's minimum damage.
    var playerOneMinDamage = arr[0].damage * .5;
    var playerTwoMinDamage = arr[1].damage * .5;
    var playerOneDamage = Math.floor(Math.random() * (arr[0].damage - playerOneMinDamage) + playerOneMinDamage);
    var playerTwoDamage = Math.floor(Math.random() * (arr[1].damage - playerTwoMinDamage) + playerTwoMinDamage);
    arr[0].health -= playerOneDamage;
    arr[1].health -= playerTwoDamage;
    // Increment the round by 1.
    round++;
    document.getElementById("round").innerHTML = "Round " + round;
    document.getElementsByTagName("p")[0].innerHTML = arr[0].name + ": " + arr[0].health;
    document.getElementsByTagName("p")[1].innerHTML = arr[1].name + ": " + arr[1].health;
    // Alert the user about the updated information.
    // alert(playerOne.name + ":" + playerOne.health + " *ROUND " + round + "* " + playerTwo.name + ":" + playerTwo.health);
    // Print the updated information to the console.
    console.log("---- Round " + round + " ----");
    console.log(arr[0].name + ":" + arr[0].health, arr[1].name + ":" + arr[1].health);
    // Call the winnerCheck() function, and store the result in currentResult.
    // var currentResult = winnerCheck(arr, round);
    return false;
    
} // End of the fight() function.



// The function is called after the window has loaded.
function init() {
    'use strict';
    // Stores the player names, damage, and health in an array.
    var players = [];
    players[0] = {
        name: "Spiderman",
        damage: 20,
        health: 100
    };
    players[1] = {
        name: "Batman",
        damage: 20,
        health: 100
    };
    document.getElementsByTagName("p")[0].innerHTML = players[0].name + ": " + players[0].health;
    document.getElementsByTagName("p")[1].innerHTML = players[1].name + ": " + players[1].health;
    // Alerts the user about the starting conditions.
    // alert(spiderman.name + ":" + spiderman.health + " *START* " + batman.name + ":" + batman.health);
    console.log("Begin!");
    document.getElementsByTagName("a")[0].onclick = fight(players);
} // End of the init() function.



window.onload = init;