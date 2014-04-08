// Kevin Yang
// April 8th, 2014
// The Duel - Part II
// ==================



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