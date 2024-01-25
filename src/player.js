// Player module

// ADD:
// additional logic to validate coords are legal and havent been hit already
// Computer tries the cells adjacent to a hit ship cell (unless isSunk)

import Gameboard from "./board";

// CLASS/factory for players
export class Player {
    constructor(isHuman) {
      this.isHuman = isHuman;
      this.gameboard = new Gameboard();
    }

    // Method to make a move
    makeMove(coordinates, gameState) {
      console.log('Making move...');

      this.turnNumber++;

      if (this.isHuman) {
        // For human player, coordinates are provided as input
        console.log('Human player attacking...', coordinates);
        gameState.player2.gameboard.receiveAttack(coordinates, gameState, true);
        gameState.player1.gameboard.receiveAttack(coordinates, gameState, true);
      } else {
        // For computer player, generate random legal coordinates
        const coordinates = this.genRandomCoords();
        console.log('Computer player attacking...', coordinates);
        
        gameState.player1.gameboard.receiveAttack(coordinates, gameState, false);
        gameState.player2.gameboard.receiveAttack(coordinates, gameState, false); // Update player1's game board
      }
    }

    // Helper function for computer player to generate random legal coordinates
    genRandomCoords() {
      const alphabet = 'ABCDEFGHIJ';
      const randomRow = alphabet[Math.floor(Math.random() * 10)];
      const randomCol = Math.floor(Math.random() * 10) + 1;
      const coordinates = `${randomRow}${randomCol}`;

      return coordinates;
    }
  }


