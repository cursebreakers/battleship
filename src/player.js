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
        console.log('Human player attacking...', coordinates);
        gameState.player2.gameboard.receiveAttack(coordinates, gameState, true);
        gameState.player1.gameboard.receiveAttack(coordinates, gameState, true);
      } else {
        console.log('Computer player thinking...');
        const coordinates = this.genCoords(gameState);
   
        
        console.log('Computer player attacking...', coordinates);
        gameState.player1.gameboard.receiveAttack(coordinates, gameState, false);
        gameState.player2.gameboard.receiveAttack(coordinates, gameState, false); // Update player1's game board
      }
    }

    // Helper function for computer player to generate random legal coordinates
    genCoords(gameState) {
      const alphabet = 'ABCDEFGHIJ';
      const allCoords = [];

      gameState.usedCoordinates = gameState.usedCoordinates || [];

      for (let row of alphabet) {
        for (let col = 1; col <= 10; col++) {
          allCoords.push(`${row}${col}`);
        }
      }

      const availableCoords = allCoords.filter(coord => !gameState.usedCoordinates.includes(coord));

      if (availableCoords.length === 0) {
        gameState.usedCoordinates = [];
      }

      const randomIndex = Math.floor(Math.random() * availableCoords.length);
      const coordinates = availableCoords[randomIndex];

      return coordinates;
    }
  }


