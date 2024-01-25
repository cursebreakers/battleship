// DOM Module

import { Gameboard } from "./board"
import { hello } from "./hello"
import { GameState } from "./state"
import { Ship } from "./ship";

// via gameTray div, render:

export function loadUI(gameState) {
    console.log('Loading UI...');

    initBtn.classList.add('hidden');

    // Scoreboard
    const scoreBoard = document.createElement('div');
    scoreBoard.id = "scoreBoard";
    scoreBoard.innerHTML = `
        <h3>Player 1: ${gameState.player1.gameboard.getRemainingShips()} Ships Remaining</h3>
        <h3>Computer: ${gameState.player2.gameboard.getRemainingShips()} Ships Remaining</h3>
        <div id="turnInfo"><h3>Turn: ${gameState.turnNumber}, ${gameState.currentPlayer.isHuman ? 'Human' : 'Computer'}</h3></div>
        `;

    // Game action area with player and opponent boards
    const action = document.createElement('div');
    const playerBoard = document.createElement('div');
    const playerTitle = document.createElement('h4');
    const opponentBoard = document.createElement('div');
    const oppTitle = document.createElement('h4');

    // Set up player and opponent boards
    action.id = 'gameAction';
    playerBoard.id = 'playerBoard';
    playerTitle.id = 'playerTitle';
    opponentBoard.id = 'opponentBoard';
    oppTitle.id = 'oppTitle';

    playerTitle.innerHTML = 'Player'
    oppTitle.innerHTML = 'Computer'

    // Add boards to the action area
    action.appendChild(oppTitle);
    action.appendChild(opponentBoard);
    action.appendChild(playerTitle);
    action.appendChild(playerBoard);

    // Add elements to the game tray
    gameTray.appendChild(scoreBoard);
    gameTray.appendChild(action);

    // Declare grid object data for UI
    const opponentGrid = gameState.player1.gameboard.enemyGrid;
    const playerGrid = gameState.player1.gameboard.playerGrid;

    // Render player and opponent boards
    renderBoard(opponentGrid, opponentBoard, gameState);
    renderBoard(playerGrid, playerBoard, gameState);
}

// Helper function to render the game board
export function renderBoard(gameboard, boardElement, gameState) {
    boardElement.innerHTML = ''; // Clear existing content
    // Create the grid
    const grid = document.createElement('table');
    // Add letters for the x-axis
    const xAxisRow = document.createElement('tr');
    xAxisRow.appendChild(document.createElement('th')); // Empty corner cell
    for (let i = 0; i < 10; i++) {
        const cell = document.createElement('th');
        cell.textContent = i + 1;
        xAxisRow.appendChild(cell);
    }
    grid.appendChild(xAxisRow);
    // Add rows and cells for the y-axis
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        const yAxisCell = document.createElement('td');
        yAxisCell.textContent = String.fromCharCode('A'.charCodeAt(0) + i);
        row.appendChild(yAxisCell);

        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            const coordinates = `${String.fromCharCode('A'.charCodeAt(0) + i)}${j + 1}`;

            const content = gameboard[i][j].content;
    
            // Set cell color based on status
            if (content === null) {
                cell.classList.add('water-cell');
            } else if (content === 'hit') {
                cell.classList.add('hit-cell');
            } else if (content === 'miss') {
                cell.classList.add('miss-cell');
            } else if (content === 'Carrier', 'Battleship', 'Cruiser', 'Submarine', 'Destroyer') {
                cell.classList.add('ship-cell');
            }

            // Add event listener for clicking on the cell (for attack input)
            cell.addEventListener('click', function () {
                handleCellClick(coordinates, gameState);
            });

            row.appendChild(cell);
        }

        grid.appendChild(row);
    }

    // Add the grid to the board element
    console.log('Rendering...', gameState);
    boardElement.appendChild(grid);
}


// Event handler for cell click (attack input)
export function handleCellClick(coordinates, gameState) {
    console.log('Cell clicked:', coordinates);
    const playerBoard = gameState.player1.gameboard.playerGrid;
    const opponentBoard = gameState.player1.gameboard.enemyGrid;
    
    gameState.takeUserInput(coordinates, gameState); 

    renderBoard(opponentBoard, document.getElementById('opponentBoard'), gameState);
    renderBoard(playerBoard, document.getElementById('playerBoard'), gameState);
    
    updateScoreboard(gameState);
}

export function updateScoreboard(gameState) {
    const scoreBoard = document.querySelector('#scoreBoard');
    scoreBoard.innerHTML = `
        <h3>Player 1: ${gameState.player1.gameboard.getRemainingShips()} Ships Remaining</h3>
        <h3>Computer: ${gameState.player2.gameboard.getRemainingShips()} Ships Remaining</h3>
        <div id="turnInfo"><h3>Turn: ${gameState.turnNumber}, ${gameState.currentPlayer.isHuman ? 'Human' : 'Computer'}</h3></div>
        `;
}
