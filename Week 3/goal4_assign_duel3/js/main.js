// Kevin Yang
// April 15th, 2014
// The Duel - Part III
// ===================



// The function is called after the window has loaded.
function init() {
    'use strict';
    var players = [];
    players[0] = {
        name: "Spiderman",
        damage: 20,
        health: 100,
    };
    players[1] = {
        name: "Batman",
        damage: 20,
        health: 100,
    };
    var round = 0;
    document.getElementsByTagName("p")[0].innerHTML = players[0].name + ": " + players[0].health;
    document.getElementsByTagName("p")[1].innerHTML = players[1].name + ": " + players[1].health;
    document.getElementsByTagName("a")[0].onclick = function() {
        round++;
        fight(players, round);
    };
    console.log("Begin!");

} // End of the init() function.



window.onload = init;