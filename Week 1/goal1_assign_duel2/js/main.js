// Kevin Yang
// April 2nd, 2014
// The Duel - Part II
// ==================



function winnerCheck(arrayOne, arrayTwo, currentRound) {
    'use strict';
    var result = "No Winner";
    if (currentRound === 10) {
        if (arrayOne[2] === arrayTwo[2]) {
            result = "Draw";
        } else if (arrayOne[2] > arrayTwo[2]) {
            result = arrayOne[0] + " Wins";
        } else {
            result = arrayTwo[0] + " Wins";
        }
    } else if ((arrayOne[2] <= 0) && (arrayTwo[2] <= 0)) {
        result = "Both Die";
    } else if (arrayOne[2] <= 0) {
        result = arrayTwo[0] + " Wins";
    } else if (arrayTwo[2] <= 0) {
        result = arrayOne[0] + " Wins";
    } else {
        result = "No Winner";
    }
    return result;
}



function fight(arrayOne, arrayTwo) {
    'use strict';
    var round = 1;
    var playerOneMinDamage = arrayOne[1] * .5;
    var playerTwoMinDamage = arrayTwo[1] * .5;
    for (var i = 0; i < 10; i++) {
        var playerOneDamage = Math.floor(Math.random() * (arrayOne[1] - playerOneMinDamage) + playerOneMinDamage);
        var playerTwoDamage = Math.floor(Math.random() * (arrayTwo[1] - playerTwoMinDamage) + playerTwoMinDamage);
        arrayOne[2] -= playerOneDamage;
        arrayTwo[2] -= playerTwoDamage;
        round++;
        alert(arrayOne[0] + ":" + arrayOne[2] + " *ROUND " + round + "* " + arrayTwo[0] + ":" + arrayTwo[2]);
        console.log("---- Round " + round + " ----");
        console.log(arrayOne[0] + ":" + arrayOne[2], arrayTwo[0] + ":" + arrayTwo[2]);
        var currentResult = winnerCheck(arrayOne, arrayTwo, round);
        if (currentResult === "No Winner") {
            console.log(currentResult);
        } else {
            alert(currentResult);
            console.log(currentResult);
            break;
        }
    }
}



function init() {
    'use strict';
    var playerOne = ["Spiderman", 20, 100];
    var playerTwo = ["Batman", 20, 100];
    alert(playerOne[0] + ":" + playerOne[2] + " *START* " + playerTwo[0] + ":" + playerTwo[2]);
    console.log("Begin!");
    fight(playerOne, playerTwo);
}



window.onload = init;