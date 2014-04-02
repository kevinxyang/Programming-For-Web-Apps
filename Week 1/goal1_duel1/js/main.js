// Kevin Yang
// April 2nd, 2014
// The Duel - Part I
// =================



function fight(nameOne, nameTwo, damageOne, damageTwo, healthOne, healthTwo) {
	console.log("Hello World");
}

function init() {
	'use strict';
	var playerOne = "Spiderman";
	var playerTwo = "Batman";
	var playerOneDamage = playerTwoDamage = 20;
	var playerOneHealth = playerTwoHealth = 100;
	alert(playerOne + ":" + playerOneHealth + " *START* " + playerTwo + ":" + playerTwoHealth);
    console.log("Begin!");
    fight(playerOne, playerTwo, playerOneDamage, playerTwoDamage, playerOneHealth, playerTwoHealth);
}

window.onload = init;