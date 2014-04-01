// Kevin Yang
// April 1st, 2014
// The Duel - Part I
// =================



// Givens
// ------

var playerOneName = "Kevin";
var playerTwoName = "Jason";
var playerOneHealth = playerTwoHealth = 1000;
var playerOneMaxDamage = playerTwoMaxDamage = 50;
var round = 1;



// Functions
// ---------

function fight(){

	function winnerCheck(){

		var result = "";
		if (round == 10){
			if (playerOneHealth == playerTwoHealth){
				result = "It's a draw!"
				console.log("Draw!");
			}
			else if (playerOneHealth > playerTwoHealth){
				result = "Player 1 is victorious!"
				console.log("The winner is player 1.");
			}
			else {
				result = "Player 2 is victorious!"
				console.log("The winner is player 2.");
			}
		}
		else if (playerOneHealth <= 0 && playerTwoHealth <= 0){
			result = "Both players have fallen, there is no winner."
			console.log("No winner.");
		}
		else if (playerOneHealth <= 0){
			result = "Player 2 is victorious!"
			console.log("The winner is player 2.");
		}
		else if (playerTwoHealth <= 0){
			result = "Player 1 is victorious!"
			console.log("The winner is player 1.");
		}
		else {
			result = "The battle rages on!"
			console.log("No winner yet.");
		}

		return result;
	}

	var currentResult = "Let the fight commence!";
	console.log(round);
	console.log(playerOneHealth);
	console.log(playerTwoHealth);
	alert("Round " + round + " Player One HP: " + playerOneHealth + " Player Two HP: " + playerTwoHealth + " " + currentResult);
	for (var i = 9; i > 0; i--){
		round++;
		playerOneDamage = Math.floor(Math.random() * 25 + 25);
		playerTwoDamage = Math.floor(Math.random() * 25 + 25);
		playerOneHealth -= playerTwoDamage;
		playerTwoHealth -= playerOneDamage;
		console.log(round);
		console.log(playerOneHealth);
		console.log(playerTwoHealth);
		currentResult = winnerCheck();
		alert("Round " + round + " Player One HP: " + playerOneHealth + " Player Two HP: " + playerTwoHealth + " " + currentResult);
		if (playerOneHealth <= 0 || playerTwoHealth <= 0) {
			break;
		}
	}
}



// Output
// ------

fight();

// End