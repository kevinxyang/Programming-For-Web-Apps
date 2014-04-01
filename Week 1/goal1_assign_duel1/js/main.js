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
		if (playerOneHealth <= 0 && playerTwoHealth <= 0){
			console.log("No winner.");
		}
		else if (playerOneHealth <= 0){
			console.log("The winner is player 2.");
		}
		else if (playerTwoHealth <= 0){
			console.log("The winner is player 1.");
		}
		else {
			console.log("No winner yet.");
		}
	}

	var round = 1;
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
		winnerCheck();
		if (playerOneHealth <= 0 || playerTwoHealth <= 0) {
			break;
		}

	}
}



// Output
// ------

fight();

// End