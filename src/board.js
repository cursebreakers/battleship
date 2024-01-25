// Gameboard module

import { Ship, fleet, genFleet } from "./ship";

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
  
      shipCoords.forEach(([shipType, startCoords]) => {
        const ship = this.findShipByType(shipType);
  
        if (ship) {
          const rowIndex = startCoords.charCodeAt(0) - 'A'.charCodeAt(0);
          const colIndex = parseInt(startCoords.slice(1), 10) - 1;
  
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
  
    // Method to receive an attack
    receiveAttack(coordinates, gameState, isHuman) {
      // Extract row and column indices from the attack coordinates
      const rowIndex = coordinates.charCodeAt(0) - 'A'.charCodeAt(0);
      const colIndex = parseInt(coordinates.slice(1), 10) - 1;
      
      const attackerGameboard = isHuman ? gameState.player1.gameboard : gameState.player2.gameboard;
      const targetGameboard = isHuman ? gameState.player2.gameboard : gameState.player1.gameboard;
      
      console.log('isHuman:', isHuman, 'Attacks from: ', attackerGameboard.enemyGrid);
      console.log('Attack received at cell:', coordinates, targetGameboard.playerGrid);

      // Check if there is a ship at the attacked coordinates
      const cellContent = targetGameboard.playerGrid[rowIndex][colIndex].content;

      console.log('Cell content:', cellContent);

      if (cellContent) {
        // Ship is hit
        const ship = this.findShipByType(cellContent);
        ship.hit();
        console.log('Ship: ', ship);
        targetGameboard.playerGrid[rowIndex][colIndex].content = 'hit';

        if (ship.isSunk()) {
          // Report that the ship has been sunk
          console.log(`${ship.type} sunk!`);
        }
        
      } else {
        // Record coordinates of missed shot
        this.missedAttacks.push(coordinates);
        targetGameboard.playerGrid[rowIndex][colIndex].content = 'miss';
      }

      const attackerCellContent = attackerGameboard.enemyGrid[rowIndex][colIndex].content;

      if (attackerCellContent) {
        // Ship is hit on the player's grid
        const attackerShip = targetGameboard.findShipByType(attackerCellContent);
        attackerShip.hit();
        attackerGameboard.enemyGrid[rowIndex][colIndex].content = 'hit';

        if (attackerShip.isSunk()) {
          // Report that the player's ship has been sunk
          console.log(`${attackerShip.type} on attacker's grid sunk!`);
        }
      } else {
        // Record coordinates of missed shot on the player's grid
        this.missedAttacks.push(coordinates);
        attackerGameboard.enemyGrid[rowIndex][colIndex].content = 'miss';
      }

      // Check if all ships have been sunk
      if (targetGameboard.areAllShipsSunk()) {
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
        console.error(`Ship with type ${shipType} not found.`);
        return null; // or handle the error accordingly
      }
    }

    // Helper function to check if all ships have been sunk
    areAllShipsSunk() {
      const allShips = fleet.map(({ type, length }) => new Ship(type, length));
      return allShips.every(ship => ship.isSunk());
  }
}