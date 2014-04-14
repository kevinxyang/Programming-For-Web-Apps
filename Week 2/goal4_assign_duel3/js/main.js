// Kevin Yang
// April 12th, 2014
// The Duel - Part III
// ===================



function winnerCheck(myArray) {
    'use strict';
    var result = "No Winner";
    if (myArray[0].round === 10 && myArray[1].round === 10) {
        if (myArray[0].health === myArray[1].health) {
            result = "Draw";
        } else if (myArray[0].health > myArray[1].health) {
            result = myArray[0].name + " Wins";
        } else {
            result = myArray[1].name + " Wins";
        }
    } else if ((myArray[0].health <= 0) && (myArray[1].health <= 0)) {
        result = "Both Die";
    } else if (myArray[0].health <= 0) {
        result = myArray[1].name + " Wins";
    } else if (myArray[1].health <= 0) {
        result = myArray[0].name + " Wins";
    } else {
        result = "No Winner";
    }
    return result;

} // End of the winnerCheck() function.



function fight(myArray) {
    'use strict';
    var playerOneMinDamage = myArray[0].damage * .5;
    var playerTwoMinDamage = myArray[1].damage * .5;
    var playerOneDamage = Math.floor(Math.random() * (myArray[0].damage - playerOneMinDamage) + playerOneMinDamage);
    var playerTwoDamage = Math.floor(Math.random() * (myArray[1].damage - playerTwoMinDamage) + playerTwoMinDamage);
    myArray[0].health -= playerOneDamage;
    myArray[1].health -= playerTwoDamage;
    myArray[0].round++;
    myArray[1].round++;
    document.getElementById("round").innerHTML = "Round " + myArray[0].round;
    document.getElementsByTagName("p")[0].innerHTML = myArray[0].name + ": " + myArray[0].health;
    document.getElementsByTagName("p")[1].innerHTML = myArray[1].name + ": " + myArray[1].health;
    console.log("---- Round " + myArray[1].round + " ----");
    console.log(myArray[0].name + ":" + myArray[0].health, myArray[1].name + ":" + myArray[1].health);
    var currentResult = winnerCheck(myArray);

    if (currentResult !== "No Winner") {
        document.getElementById("round").innerHTML = currentResult;
        document.getElementsByTagName("a")[0].onclick = " ";
    }
    console.log(currentResult);

} // End of the fight() function.



// The function is called after the window has loaded.
function init() {
    'use strict';
    var players = [];
    players[0] = {
        name: "Spiderman",
        damage: 20,
        health: 100,
        round: 1
    };
    players[1] = {
        name: "Batman",
        damage: 20,
        health: 100,
        round: 1
    };
    document.getElementsByTagName("p")[0].innerHTML = players[0].name + ": " + players[0].health;
    document.getElementsByTagName("p")[1].innerHTML = players[1].name + ": " + players[1].health;
    document.getElementsByTagName("a")[0].onclick = function() { fight(players); };
    console.log("Begin!");

} // End of the init() function.



window.onload = init;