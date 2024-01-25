// Game state module

import { Player } from "./player";
import { Gameboard } from "./board";
import { genFleet } from "./ship";
import { loadUI, renderBoard, updateScoreboard } from "./dom";


export class GameState {
  constructor() {
    this.player1 = new Player(true); // Human player
    this.player2 = new Player(false); // Computer player
    this.currentPlayer = this.player1; // Start with player 1
    this.turnNumber = 1; // Initialize turn number
  }

  initGame(gameState) {
      console.log('Initializing...')
    // Initialize ships for each player using genFleet from the Ship module
    this.player1.gameboard.placeShips(genFleet());
    this.player2.gameboard.placeShips(genFleet());

    // Load the UI
    console.log('initGame: gameState created. ', this);
    loadUI(gameState);
  }

  // Method to take user input for attacking
  takeUserInput(coordinates, gameState) {
    // Delegate input handling to the current player
    gameState.currentPlayer.makeMove(coordinates, gameState);

    // Check if the game is over
    if (this.checkGameOver(gameState)) {
      // Handle game over logic
      console.log('Game over!');
    } else {
      // Switch to the next player for the next turn
      this.switchPlayer(gameState);
      console.log('Player after switch:', gameState);

      if (!gameState.currentPlayer.isHuman) {
          gameState.currentPlayer.makeMove(null, gameState);
          this.switchPlayer();
          console.log('Player after switch:', this.currentPlayer);
      }
    }
  }

  // Method to check if the game is over
  checkGameOver(gameState) {
    const player1GameOver = gameState.player1.gameboard.areAllShipsSunk();
    const player2GameOver = gameState.player2.gameboard.areAllShipsSunk();

    console.log('Game Over Check - Player 1:', player1GameOver, 'Player 2:', player2GameOver);

    return player1GameOver || player2GameOver;  }

  // Method to switch to the next player
  switchPlayer(gameState) {
    this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    this.turnNumber++;
    console.log('Switching player...')
  }
}

export default GameState;