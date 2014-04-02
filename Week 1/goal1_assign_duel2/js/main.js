// Kevin Yang
// April 1st, 2014
// The Duel - Part II
// ==================



// Givens
// ------

var playerOne = ["Spiderman", 20, 100];
var playerTwo = ["Batman", 20, 100];
var round = 1;



// Functions
// ---------

function fight(){
    // Sets the current result to START!
    var currentResult = "*START*";
    // Sets players minimum damage.
    var playerOneMinDamage = playerOne[1] * .5;
    var playerTwoMinDamage = playerTwo[1] * .5;
    // Displays the current round
    console.log("Round " + round);
    // Displays the player's names and starting health to the console.
    console.log(playerOne[0] + ":" + playerOne[2] + " " + playerTwo[0] + ":" + playerTwo[2]);
    console.log("Fight!");
    console.log("--------------");
    // Alerts the user about the starting conditions.
    alert(playerOne[0] + ":" + playerOne[2] + " " + currentResult + " " + playerTwo[0] + ":" + playerTwo[2]);
    // For rounds 1 through 10...
    for (var i = 0; i < 10; i++){
        // Update the round.
        round++;
        // Damage formula for players 1 and 2.
        playerOneDamage = Math.floor(Math.random() * (playerOne[1] - playerOneMinDamage) + playerOneMinDamage);
        playerTwoDamage = Math.floor(Math.random() * (playerTwo[1] - playerTwoMinDamage) + playerTwoMinDamage);
        // Deducts damage from the current health.
        playerOne[2] -= playerTwoDamage;
        playerTwo[2] -= playerOneDamage;
        // Displays the current round.
        console.log("Round " + round);
        // Displays the players' current health.
        console.log(playerOne[0] + ":" + playerOne[2] + " " + playerTwo[0] + ":" + playerTwo[2]);
        // Updates the result by calling the function winnerCheck().
        currentResult = winnerCheck();
        console.log("--------------");
        // If no winner has been determined...
        if (currentResult === "No Winner") {
            // Alert the user about the current health of the players.
            alert(playerOne[0] + ":" + playerOne[2] + " *ROUND " + round + " OVER* " + playerTwo[0] + ":" + playerTwo[2]);
        }
        // Else...
        else {
            // Alert the player about the victor.
            alert(currentResult);
            // Break from the loop.
            break;
        }
    };
};

// Updates the current result of the fight and checks if there is a victor.
function winnerCheck(){
    // Sets the default result to the empty string.
    var result = "";
    // If it's been 10 rounds, then...
    if (round === 10){
        // If both players healths are equal, then its a draw.
        if (playerOne[2] === playerTwo[2]){
            // Update the result.
            result = "It's a Draw!"
            console.log("Result: It's a Draw");
        }
        // Else if, player 1 has more health then player 1 wins.
        else if (playerOne[2] > playerTwo[2]){
            // Update the result.
            result = "Player 1 Wins"
            console.log("Result: " + playerOne[0] + " Wins");
        }
        // Else, player 2 wins.
        else {
            // Update the result.
            result = "Player 2 Wins"
            console.log("Result: " + playerTwo[0] + " Wins");
        }
    }
    // Else if, both players healths are depleted then they both die.
    else if (playerOne[2] <= 0 && playerTwo[2] <= 0){
        // Update the result.
        result = "You Both Die"
        console.log("Result: You Both Die");
    }
    // Else if, player 1's health is depleted then player 2 wins.
    else if (playerOne[2] <= 0){
        // Update the result.
        result = "Player 2 Wins"
        console.log("Result: " + playerTwo[0] + " Wins");
    }
    // Else if, player 2's health is depleted then player 1 wins.
    else if (playerTwo[2] <= 0){
        // Update the result.
        result = "Player 1 Wins"
        console.log("Result: " + playerOne[0] + " Wins");
    }
    // Else, the battle continues and there is no victor yet.
    else {
        // Update the result.
        result = "No Winner"
        console.log("Result: No Winner");
    }
    // Returns the current result.
    return result;
};



// Output
// ------

// Calls the fight() function.
fight();

// End