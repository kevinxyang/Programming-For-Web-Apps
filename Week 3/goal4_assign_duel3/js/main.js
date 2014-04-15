// Kevin Yang
// April 15th, 2014
// The Duel - Part III
// ===================



// The function is called after the window has loaded.
function init() {
    'use strict';
    // Players 1 and 2 are declared as objects in an array.
    var players = [];
    // Each object has properties corresponding to the player's name, health, and damage.
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
    // Set the default round to 0.
    var round = 0;
    // Find the paragraph tags in the document and swap the innerHTML with the player's information.
    document.getElementsByTagName("p")[0].innerHTML = players[0].name + ": " + players[0].health;
    document.getElementsByTagName("p")[1].innerHTML = players[1].name + ": " + players[1].health;
    // When the button is clicked, increment the round and call the fight function.
    document.getElementsByTagName("a")[0].onclick = function() {
        round++;
        fight(players, round);
    };
    console.log("Begin!");

} // End of the init() function.



window.onload = init;