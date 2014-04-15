// Kevin Yang
// April 15th, 2014
// The Duel - Part III
// ===================



// Called each time the players' health is updated.
function winnerCheck(myArray, currentRound) {
    'use strict';
    // Default result is No Winner.
    var result = "No Winner";
    // If the fight has gone on for 10 rounds then determine a winner.
    if (currentRound > 9) {
        if (myArray[0].health === myArray[1].health) {
            result = "Draw";
        } else if (myArray[0].health > myArray[1].health) {
            result = myArray[0].name + " WINS!!!";
        } else {
            result = myArray[1].name + " WINS!!!";
        }
    // If both players run out of HP then set the result to they both die.
    } else if ((myArray[0].health <= 0) && (myArray[1].health <= 0)) {
        result = "You Both Die";
    // Else if player 1 dies, then set the result equal to player 2 wins.
    } else if (myArray[0].health <= 0) {
        result = myArray[1].name + " WINS!!!";
    // Else if player 2 dies, then set the result equal to player 1 wins.
    } else if (myArray[1].health <= 0) {
        result = myArray[0].name + " WINS!!!";
    } else {
   	// Else there is No Winner.
        result = "No Winner";
    }
    // Return the result.
    return result;

} // End of the winnerCheck() function.



// The fight function is called after the button has been clicked.
function fight(myArray, currentRound) {
    'use strict';
    // Calculates each player's minimum damage.
    var playerOneMinDamage = myArray[0].damage * .5;
    var playerTwoMinDamage = myArray[1].damage * .5;
    // Damage Formula.
    var playerOneDamage = Math.floor(Math.random() * (myArray[0].damage - playerOneMinDamage) + playerOneMinDamage);
    var playerTwoDamage = Math.floor(Math.random() * (myArray[1].damage - playerTwoMinDamage) + playerTwoMinDamage);
    // Subtracts each player's damage from the opposing player's health.
    myArray[0].health -= playerOneDamage;
    myArray[1].health -= playerTwoDamage;
    // Find the element in the document with ID equal to round and display the current round within the HTML.
    document.getElementById("round").innerHTML = "ROUND " + currentRound + " Complete";
    // Update each player's health.
    document.getElementsByTagName("p")[0].innerHTML = myArray[0].name + ": " + myArray[0].health;
    document.getElementsByTagName("p")[1].innerHTML = myArray[1].name + ": " + myArray[1].health;
    // Log the results in the console.
    console.log("---- Round " + currentRound + " ----");
    console.log(myArray[0].name + ":" + myArray[0].health, myArray[1].name + ":" + myArray[1].health);
    // Call winnerCheck() and store the value in the variable currentResult.
    var currentResult = winnerCheck(myArray, currentRound);
    // If a winner has been decided...
    if (currentResult !== "No Winner") {
    	// Display the results.
        document.getElementsByTagName("p")[0].innerHTML = currentResult;
        document.getElementsByTagName("p")[1].innerHTML = currentResult;
        // Disable the button.
        document.getElementsByTagName("a")[0].onclick = " ";
    }
    // Log the result in the console.
    console.log(currentResult);

} // End of the fight() function.



// The function is called after the window has loaded.
function init() {
    'use strict';
    // Players 1 and 2 are declared as objects in an array.
    var players = [];
    // Each object has properties corresponding to the player's name, health, and damage.
    players[0] = {
        name: "Spiderman",
        damage: 20,
        health: 100,
    };
    players[1] = {
        name: "Batman",
        damage: 20,
        health: 100,
    };
    // Set the default round to 0.
    var round = 0;
    // Find the paragraph tags in the document and swap the innerHTML with the player's information.
    document.getElementsByTagName("p")[0].innerHTML = players[0].name + ": " + players[0].health;
    document.getElementsByTagName("p")[1].innerHTML = players[1].name + ": " + players[1].health;
    // When the button is clicked, increment the round and call the fight function.
    document.getElementsByTagName("a")[0].onclick = function() {
        round++;
        fight(players, round);
    };
    console.log("Begin!");

} // End of the init() function.



window.onload = init;