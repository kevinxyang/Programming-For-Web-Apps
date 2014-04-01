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

function fight(){
    // Sets the current result to START!
    var currentResult = "*START*";
    // Sets players minimum damage.
    var playerOneMinDamage = playerOneMaxDamage * .5;
    var playerTwoMinDamage = playerTwoMaxDamage * .5;
    // Displays the current round
    console.log("Round " + round);
    // Displays the player's names and starting health to the console.
    console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);
    console.log("Fight!");
    console.log("--------------");
    // Alerts the user about the starting conditions.
    alert(playerOneName + ":" + playerOneHealth + " " + currentResult + " " + playerTwoName + ":" + playerTwoHealth);
    // For rounds 1 through 10...
    for (var i = 0; i < 10; i++){
        // Update the round.
        round++;
        // Damage formula for players 1 and 2.
        playerOneDamage = Math.floor(Math.random() * (playerOneMaxDamage - playerOneMinDamage) + playerOneMinDamage);
        playerTwoDamage = Math.floor(Math.random() * (playerTwoMaxDamage - playerTwoMinDamage) + playerTwoMinDamage);
        // Deducts damage from the current health.
        playerOneHealth -= playerTwoDamage;
        playerTwoHealth -= playerOneDamage;
        // Displays the current round.
        console.log("Round " + round);
        // Displays the players' current health.
        console.log(playerOneName + ":" + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);
        // Updates the result by calling the function winnerCheck().
        currentResult = winnerCheck();
        console.log("--------------");
        // If no winner has been determined...
        if (currentResult === "No Winner") {
            // Alert the user about the current health of the players.
            alert(playerOneName + ":" + playerOneHealth + " *ROUND " + round + " OVER* " + playerTwoName + ":" + playerTwoHealth);
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