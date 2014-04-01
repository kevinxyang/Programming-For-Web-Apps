// Kevin Yang
// April 1st, 2014
// The Duel - Part I
// =================



// Givens
// ------

// Prompts the user for both player's names.
var playerOneName = prompt("What is Player 1's Name?", "Spiderman");
var playerTwoName = prompt("What is Player 2's Name?", "Batman");
// Sets the starting health of each player to 100.
var playerOneHealth = playerTwoHealth = 100;
// Prompts the user for the max damage of each player.
var playerOneMaxDamage = playerTwoMaxDamage = Number(prompt("How much damage do the fighters do?", 20));
// Keeps track of the round.
var round = 1;