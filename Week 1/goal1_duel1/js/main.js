// Kevin Yang
// April 2nd, 2014
// The Duel - Part I
// =================



function winnerCheck(name1, name2, health1, health2, currentRound) {
    'use strict';
    var result = "No Winner";
    if (currentRound === 10) {
        if (health1 === health2) {
            result = "Draw";
        } else if (health1 > health2) {
            result = name1 + " Wins";
        } else {
            result = name2 + " Wins";
        }
    } else if ((health1 <= 0) && (health2 <= 0)) {
        result = "You Both Die";
    } else if (health1 <= 0) {
        result = name2 + " Wins";
    } else if (health2 <= 0) {
        result = name1 + " Wins";
    } else {
        result = "No Winner";
    }
    return result;
} // End of winnerCheck() function.

function fight(name1, name2, damage1, damage2, health1, health2) {
    'use strict';
    var round = 1;
    var playerOneMinDamage = damage1 * .5;
    var playerTwoMinDamage = damage2 * .5;
    for (var i = 0; i < 10; i++) {
        var playerOneDamage = Math.floor(Math.random() * (damage1 - playerOneMinDamage) + playerOneMinDamage);
        var playerTwoDamage = Math.floor(Math.random() * (damage2 - playerTwoMinDamage) + playerTwoMinDamage);
        health1 -= playerOneDamage;
        health2 -= playerTwoDamage;
        round++;
        alert(name1 + ":" + health1 + " *ROUND " + round + "* " + name2 + ":" + health2);
        console.log("---- Round " + round + " ----");
        console.log(name1 + ":" + health1, name2 + ":" + health2);
        var currentResult = winnerCheck(name1, name2, health1, health2, round);
        if (currentResult === "No Winner") {
            console.log(currentResult);
        } else {
            alert(currentResult);
            console.log(currentResult);
            break;
        }
    }
} // End of fight() function.

// Function is called after the window has loaded.
function init() {
	'use strict';
	// The givens.
	var playerOne = "Spiderman";
	var playerTwo = "Batman";
	var playerOneDamage = 20;
	var playerTwoDamage = 20;
	var playerOneHealth = 100;
	var playerTwoHealth = 100;
	// Alerts user about the starting conditions for our game.
	alert(playerOne + ":" + playerOneHealth + " *START* " + playerTwo + ":" + playerTwoHealth);
    console.log("Begin!");
    // Calls the fight() function.
    fight(playerOne, playerTwo, playerOneDamage, playerTwoDamage, playerOneHealth, playerTwoHealth);
} // End of init() function.

window.onload = init;