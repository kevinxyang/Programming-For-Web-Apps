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



// Functions
// ---------

// The fight function updates each player's health after every attack.
function fight(){
	// The winnerCheck function updates the current result and returns that as a value. It also checks
	// to see if there is a victor.
	function winnerCheck(){
		// Sets the default result to the empty string.
		var result = "";
		// If it's been 10 rounds, then...
		if (round == 10){
			// If both players healths are equal, then its a draw.
			if (playerOneHealth == playerTwoHealth){
				result = "It's a Draw!"
				console.log("Result: It's a Draw");
			}
			// Else if, player 1 has more health then player 1 wins.
			else if (playerOneHealth > playerTwoHealth){
				result = "Player 1 Wins"
				console.log("Result: " + playerOneName + " Wins");
			}
			// Else, player 2 wins.
			else {
				result = "Player 2 Wins"
				console.log("Result: " + playerTwoName + " Wins");
			}
		}
		// Else if, both players healths are depleted then they both die.
		else if (playerOneHealth <= 0 && playerTwoHealth <= 0){
			result = "You Both Die"
			console.log("Result: You Both Die");
		}
		// Else if, player 1's health is depleted then player 2 wins.
		else if (playerOneHealth <= 0){
			result = "Player 2 Wins"
			console.log("Result: " + playerTwoName + " Wins");
		}
		// Else if, player 2's health is depleted then player 1 wins.
		else if (playerTwoHealth <= 0){
			result = "Player 1 Wins"
			console.log("Result: " + playerOneName + " Wins");
		}
		// Else, the battle continues and there is no victor yet.
		else {
			result = "The Battle Rages On!"
			console.log("Result: No Winner");
		}
		// Returns the current result.
		return result;
	}

	var currentResult = "*START*";
	console.log("Round " + round);
	console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);
	console.log("Fight!");
	console.log("--------------");
	alert(playerOneName + ":" + playerOneHealth + " " + currentResult + " " + playerTwoName + ":" + playerTwoHealth);
	for (var i = 0; i < 10; i++){
		round++;
		playerOneDamage = Math.floor(Math.random() * (playerOneMaxDamage / 2) + (playerOneMaxDamage / 2));
		playerTwoDamage = Math.floor(Math.random() * (playerTwoMaxDamage / 2) + (playerOneMaxDamage / 2));
		playerOneHealth -= playerTwoDamage;
		playerTwoHealth -= playerOneDamage;
		console.log("Round " + round);
		console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);
		currentResult = winnerCheck();
		console.log("--------------");
		if (playerOneHealth <= 0 || playerTwoHealth <= 0 || round == 10) {
			alert(currentResult);
			break;
		}
		else {
			alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
		}
	}
}



// Output
// ------

fight();

// End