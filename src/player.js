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
    makeMove(coordinates) {
      console.log('Making move:', coordinates);
      console.log('Before receiveAttack - Game state:', this.gameboard);

      if (this.isHuman) {
        // For human player, coordinates are provided as input
        this.gameboard.receiveAttack(coordinates);
      } else {
        // For computer player, generate random legal coordinates
        const randomCoords = this.genRandomCoords();
        this.gameboard.receiveAttack(randomCoords);
      }

      console.log('After receiveAttack - Game state:', this.gameboard);

    }

    // Helper function for computer player to generate random legal coordinates
    genRandomCoords() {
      const alphabet = 'ABCDEFGHIJ';
      const randomRow = alphabet[Math.floor(Math.random() * 10)];
      const randomCol = Math.floor(Math.random() * 10) + 1;
      const randomCoords = `${randomRow}${randomCol}`;

      return randomCoords;
    }
  }


