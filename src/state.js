// Game state module

import { Player } from "./player";
import { Gameboard } from "./board";
import { genFleet } from "./ship";
import{ loadUI } from "./dom"

export class GameState {
  constructor() {
    this.player1 = new Player(true); // Human player
    this.player2 = new Player(false); // Computer player
    this.currentPlayer = this.player1; // Start with player 1
    this.turnNumber = 1; // Initialize turn number
  }

  initGame() {
      console.log('Initializing...')
      // Set up players and gameboards
      this.player1 = new Player(true);
      this.player2 = new Player(false);
      this.currentPlayer = this.player1;
      this.turnNumber = 1;

    // Initialize ships for each player using genFleet from the Ship module
    this.player1.gameboard.placeShips(genFleet());
    this.player2.gameboard.placeShips(genFleet());

    // Log player boards and ships
    console.log('Player 1 Board:', this.player1.gameboard.playerGrid);
    console.log('Player 1 Ships:', this.player1.gameboard.ships);

    console.log('Player 2 Board:', this.player2.gameboard.playerGrid);
    console.log('Player 2 Ships:', this.player2.gameboard.ships);
   
    // Load the UI
    loadUI();
  }

  // Method to take user input for attacking
  takeUserInput(coordinates) {
    // Delegate input handling to the current player
    this.currentPlayer.takeUserInput(coordinates);

    // Check if the game is over
    if (this.checkGameOver()) {
      // Handle game over logic
      console.log('Game over!');
    } else {
      // Switch to the next player for the next turn
      this.switchPlayer();
      this.turnNumber++;
    }
  }

  // Method to check if the game is over
  checkGameOver() {
    // Use the areAllShipsSunk function from the Gameboard module
    return this.player1.gameboard.areAllShipsSunk() || this.player2.gameboard.areAllShipsSunk();
  }

  // Method to switch to the next player
  switchPlayer() {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
  }
}

export default GameState;