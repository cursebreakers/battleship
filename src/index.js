// Primary module (index.js)

import { styles } from "./style.css";
import { hello } from "./hello";

// Call hello function, passing a message
hello('Hello World!');

// Game Design Overview:

// hello() renders the initBtn
// initBtn initialzes game via state.js
// initGame creates game objects

    // Ship module:
    // CLASS/factory for ships
    // Include length, number of times hit, and whether or not they are sunk
    // Destroyer = 2, submarine = 3, cruiser = 3, battleship = 4, carrier = 5
    // hit() increases number of hits on ship
    // isSunk() calculates if ship is sunk based on length and number of hits received

    // Gameboard module:
    // CLASS/factory for gameboard
    // Create two 10x10 game grids, one per player
    // Assign ordered pairs to grid where x-axis = number and y-axis = letter
    // Place ships at specific coordinates by calling the ship factory function
    // receiveAttack() takes a pair of coordinates, 
        // determines if ship is hit 
        // Sends ‘hit’ function to ship and records coordinates of missed shot.
    // Keep track of missed attacks so they can display in UI.
    // Report whether or not all ships have been sunk.

    // Player module:
    // CLASS/factory for players
    // Take turns playing the game by attacking the enemy Gameboard
    // Player 1, human
    // Player 2, computer
        // Capable of making random plays
        // Knows whether or not the move is legal

    // Gamestate module:    
    // Game loop
        // Set up new game by creating players and gameboards
        // TESTING: use predetermined coords to test, then build a placement/selection feature
        // Methods to render the gameboards and to take user input for attacking. 
        // For attacks, let user click on coordinate in enemy Gameboard
        // Step through the game turn by turn using ONLY methods from OTHER OBJECTS
        // Game ends once one player’s ships have all been sunk

// Game objects return, triggering UI rendering via dom.js

    // DOM Module

    // via gameTray div, render:

    //  Scoreboard:
        // Player names, total hits and misses, remaining ships and health
        // Current turn number and player name
        // Scoreboard/gameboards update according to game action

    // 2x 11x11 grids:
        // With numbers/letters on edge cells (top and left) to name the x/y axis
        // Axis cells are white with dark blue letters/numbers ( black and dark red on opponent board)
        // Water cells are auqa
        // Ship cells are dark grey
        // Hit ships are red
        // miss/hit-water cells are black
        // cell clicking for attack input

        // Opponent board:
        // shows no ships unless hit, then only the hit square shows

        // Player board:
        // shows own ship locations to player

// Final specs:
    // System that allows players to place their ships:
        // type coordinates for each ship
        // button to cycle placements
        // drag and drop
    //  Polish the intelligence of the computer player:
        // Try adjacent slots after getting a ‘hit’
    // Create 2 player option
        // users take turns by passing the device back and forth
        // Usa a ‘pass device’ screen so players don’t see each others boards