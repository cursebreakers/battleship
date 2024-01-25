// Gameboard module

import { Ship, fleet, genFleet } from "./ship";
import { Player } from "./player";

// CLASS/factory for gameboard
export default class Gameboard {
    constructor() {
      // Initialize game grids for player and enemy
      this.playerGrid = this.gridObjects();
      this.enemyGrid = this.gridObjects();
  
      // Place ships on the gameboard
      this.ships = genFleet();
      this.placeShips();

      this.missedAttacks = [];
    }
  
    // Create game grid objects
    gridObjects() {
      // Initialize a 10x10 grid with empty cells
      const grid = [];

      for (let rowIndex = 0; rowIndex < 10; rowIndex++) {
        const row = [];

        for (let colIndex = 0; colIndex < 10; colIndex++) {
          // Convert the x-axis (numbers) to letters for the y-axis
          const yLabel = String.fromCharCode('A'.charCodeAt(0) + rowIndex);
          // Create an object with coordinates in the format "yNumber xLetter"
          const cell = { coordinates: `${yLabel}${colIndex + 1}`, content: null };

          row.push(cell);
        }

        grid.push(row);
      }
      
      return grid;
    }
  
    // Place ships at coordinates
    placeShips() {
    // Preset coordinates for placing ships lengthwise along the top axis
    const shipCoords = [
        ['Carrier', 'A1'],
        ['Battleship', 'B1'],
        ['Cruiser', 'C1'],
        ['Submarine', 'D1'],
        ['Destroyer', 'E1']
      ];
  
      shipCoords.forEach(([shipType, coordinates]) => {
        const ship = this.findShipByType(shipType);
  
        if (ship) {
          const rowIndex = coordinates.charCodeAt(0) - 'A'.charCodeAt(0);
          const colIndex = parseInt(coordinates.slice(1), 10) - 1;
  
          // Set the ship coordinates
          ship.coordinates = [];
          for (let i = 0; i < ship.length; i++) {
            const coord = `${String.fromCharCode(rowIndex + 'A'.charCodeAt(0))}${colIndex + i + 1}`;
            ship.coordinates.push(coord);
            this.playerGrid[rowIndex][colIndex + i].content = shipType
          }
        }
      });
    }

    // Method to re-place ships randomly
    scrambleFleet() {
      console.log('Scrambling...')
      alert('This feature is not yet available');
      console.log('Scrambling failed.')

    }

    accFleet () {
      console.log('Fleet accepted.')
      alert('Player 1: Human - Begin!')
    }
    
    // Helper method to get preset ship placements
    preSets(presetNumber) {
      switch (presetNumber) {
        case 1:
          return [
            ['Carrier', ['I', 3], ['I', 4], ['I', 5], ['I', 6], ['I', 7]],
            ['Battleship', ['G', 2], ['G', 3], ['G', 4], ['G', 5]],
            ['Cruiser', ['C', 2], ['D', 2], ['E', 2]],
            ['Submarine', ['B', 9], ['C', 9], ['D', 9]],
            ['Destroyer', ['C', 6], ['C', 5]],
          ];
        case 2:
          return [
            ['Carrier', ['B', 9], ['C', 9], ['D', 9], ['E', 9], ['F', 9]],
            ['Battleship', ['B', 2], ['B', 3], ['B', 4], ['B', 5]],
            ['Cruiser', ['E', 3], ['E', 4], ['E', 5]],
            ['Submarine', ['D', 4], ['D', 5], ['D', 6]],
            ['Destroyer', ['H', 2], ['I', 2]],
          ];
        case 3:
          return [
            ['Carrier', ['A', 1], ['A', 2], ['A', 3], ['A', 4], ['A', 5]],
            ['Battleship', ['C', 9], ['D', 9], ['E', 9], ['F', 9]],
            ['Cruiser', ['D', 6], ['E', 6], ['F', 6]],
            ['Submarine', ['D', 4], ['E', 4], ['F', 4]],
            ['Destroyer', ['B', 7], ['C', 7]],
          ];
        default:
          console.error('Invalid preset number');
          return [];
      }
    }
  
    // Method to receive an attack
    receiveAttack(coordinates, gameState, isHuman) {   
      // Extract row and column indices from the attack coordinates
      const rowIndex = coordinates.charCodeAt(0) - 'A'.charCodeAt(0);
      const colIndex = parseInt(coordinates.slice(1), 10) - 1;

      // Which board is which player:
      const targetBoard = isHuman ? gameState.player2.gameboard : gameState.player1.gameboard;
      const playerBoard = isHuman ? gameState.player1.gameboard : gameState.player2.gameboard;

      // Check if there is a ship at the attacked coordinates
      const cellContent = targetBoard.playerGrid[rowIndex][colIndex].content;
      const playerCell = playerBoard.enemyGrid[rowIndex][colIndex].content;
      
      console.log('isHuman:', isHuman, 'Attacks from: ', playerBoard.enemyGrid);
      console.log('Attack received at cell:', coordinates, targetBoard.playerGrid);
      console.log('Cell content:', cellContent);

      if (cellContent !== 'hit') {
        if (cellContent) {
          // Ship is hit
          const ship = this.findShipByType(cellContent);
          if (ship) {
            ship.hit();
            console.log('Ship hit: ', ship);
            targetBoard.playerGrid[rowIndex][colIndex].content = 'hit';
            playerBoard.enemyGrid[rowIndex][colIndex].content = 'hit';

            if (ship.isSunk()) {
              // Report that the ship has been sunk
              console.log(`${ship.type} sunk!`);
              console.log('Ships on the board:', this.ships);
            }
          } else {
            console.log('No ship found at coordinates:', coordinates);
          }
          
        } else {
          // Record coordinates of missed shot
          this.missedAttacks.push(coordinates);
          playerBoard.enemyGrid[rowIndex][colIndex].content = 'miss';
          targetBoard.playerGrid[rowIndex][colIndex].content = 'miss';
        }
      }

      // Check if all ships have been sunk
      if (targetBoard.areAllShipsSunk()) {
        // Report that all ships have been sunk
        console.log('All ships have been sunk! Game over.');
      }
    }

    getRemainingShips() {
      return this.ships.filter(ship => !ship.isSunk()).length;
  }

     // Helper function to find a ship by its type
    findShipByType(shipType) {
      const ship = this.ships.find(ship => ship.type === shipType);

      if (ship) {
        return ship;
      } else {
        console.log(`Ship with type ${shipType} not found.`);
        return null; // or handle the error accordingly
      }
    }
    
    // Helper function to check if all ships have been sunk
    areAllShipsSunk() {
      return this.ships.every(ship => ship.sunk);
    }
}