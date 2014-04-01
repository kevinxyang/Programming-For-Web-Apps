// Kevin Yang
// April 1st, 2014
// The Duel - Part I
// =================



// Givens
// ------

var playerOneName = "Kevin";
var playerTwoName = "Jason";
var playerOneHealth = playerTwoHealth = 100;
var playerOneMaxDamage = playerTwoMaxDamage = 50;



// Functions
// ---------

function fight(){

	function winnerCheck(){

		var result = "";
		if (playerOneHealth <= 0 && playerTwoHealth <= 0){
			result = "Both players have fallen, there is no winner."
			console.log("No winner.");
			return result;
		}
		else if (playerOneHealth <= 0){
			result = "Player 2 is victorious!"
			console.log("The winner is player 2.");
			return result;
		}
		else if (playerTwoHealth <= 0){
			result = "Player 1 is victorious!"
			console.log("The winner is player 1.");
			return result;
		}
		else {
			result = "The battle rages on!"
			console.log("No winner yet.");
			return result;
		}
	}

	var round = 1;
	var result = "";
	console.log(round);
	console.log(playerOneHealth);
	console.log(playerTwoHealth);
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
		alert("Round " + round + " " + currentResult);
		if (playerOneHealth <= 0 || playerTwoHealth <= 0) {
			break;
		}

	}
}



// Output
// ------

fight();

// End