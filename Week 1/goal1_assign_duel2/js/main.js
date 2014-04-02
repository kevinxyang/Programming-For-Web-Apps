// Kevin Yang
// April 2nd, 2014
// The Duel - Part II
// ==================



function init() {
    'use strict';
    var playerOne = ["Spiderman", 20, 100];
    var playerTwo = ["Batman", 20, 100];
    alert(playerOne[0] + ":" + playerOne[2] + " *START* " + playerTwo[0] + ":" + playerTwo[2]);
    console.log("Begin!");
    fight(playerOne, playerTwo);
}



window.onload = init;