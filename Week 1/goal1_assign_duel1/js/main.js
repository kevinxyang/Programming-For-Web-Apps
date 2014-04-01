// Kevin Yang
// April 1st, 2014
// The Duel - Part I
// =================



// Givens
// ------

var playerOneName = prompt("What is Player 1's Name?", "Spiderman");
var playerTwoName = prompt("What is Player 2's Name?", "Batman");
var playerOneHealth = playerTwoHealth = 100;
var playerOneMaxDamage = playerTwoMaxDamage = Number(prompt("How much damage do the fighters do?", 20));
var round = 1;



// Functions
// ---------

function fight(){

	function winnerCheck(){

		var result = "";
		if (round == 10){
			if (playerOneHealth == playerTwoHealth){
				result = "It's a Draw!"
				console.log("Result: It's a Draw");
			}
			else if (playerOneHealth > playerTwoHealth){
				result = "Player 1 Wins"
				console.log("Result: " + playerOneName + " Wins");
			}
			else {
				result = "Player 2 Wins"
				console.log("Result: " + playerTwoName + " Wins");
			}
		}
		else if (playerOneHealth <= 0 && playerTwoHealth <= 0){
			result = "You Both Die"
			console.log("Result: You Both Die");
		}
		else if (playerOneHealth <= 0){
			result = "Player 2 Wins"
			console.log("Result: " + playerTwoName + " Wins");
		}
		else if (playerTwoHealth <= 0){
			result = "Player 1 Wins"
			console.log("Result: " + playerOneName + " Wins");
		}
		else {
			result = "The Battle Rages On!"
			console.log("Result: No Winner");
		}

		return result;
	}

	var currentResult = "*START*";
	console.log("Round " + round);
	console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);
	console.log("Fight!");
	console.log("--------------");
	alert(playerOneName + ":" + playerOneHealth + " " + currentResult + " " + playerTwoName + ":" + playerTwoHealth);
	for (var i = 10; i > 0; i--){
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