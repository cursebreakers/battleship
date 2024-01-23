// DOM Module

import { Gameboard } from "./board"
import { GameState } from "./state"
import { Ship } from "./ship";

// via gameTray div, render:

export function loadUI(gameState) {
    console.log('Loading UI...');
    console.log('Game state at UI load:', gameState);

    const gameTray = document.getElementById('gameTray');
    const initBtn = document.getElementById('initBtn');
    initBtn.innerHTML = 'Reset'

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

    // Initialize game state and boards
    const playerGameboard = gameState.player1.gameboard;
    const opponentGameboard = gameState.player2.gameboard;

    // Render player and opponent boards
    renderBoard(playerGameboard, playerBoard, gameState);
    renderBoard(opponentGameboard, opponentBoard, gameState);
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
        cell.textContent = String.fromCharCode('A'.charCodeAt(0) + i);
        xAxisRow.appendChild(cell);
    }
    grid.appendChild(xAxisRow);
    // Add rows and cells for the y-axis
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        const yAxisCell = document.createElement('td');
        yAxisCell.textContent = i + 1;
        row.appendChild(yAxisCell);

        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            const coordinates = `${String.fromCharCode('A'.charCodeAt(0) + i)}${j + 1}`;
            
            const content = gameboard.playerGrid[i][j].content;
            // Set cell color based on content
            if (content === null) {
                cell.classList.add('water-cell');
            } else if (content === 'hit') {
                cell.classList.add('hit-cell');
            } else if (content === 'miss') {
                cell.classList.add('miss-cell');
            } else {
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
    boardElement.appendChild(grid);
}

// Event handler for cell click (attack input)
function handleCellClick(coordinates, gameState) {
    console.log('Cell clicked:', coordinates);
    // Calls takeUserInput to handle the attack in the game state
    gameState.takeUserInput(coordinates, gameState); 

    // Update the UI with the latest game state
    renderBoard(gameState.player1.gameboard, document.getElementById('playerBoard'));
    renderBoard(gameState.player2.gameboard, document.getElementById('opponentBoard'));

    updateScoreboard(gameState);
    console.log('Updated gameState:', gameState);
}

function updateScoreboard(gameState) {
    const scoreBoard = document.querySelector('#scoreBoard');
    scoreBoard.innerHTML = `
        <h3>Player 1: ${gameState.player1.gameboard.getRemainingShips()} Ships Remaining</h3>
        <h3>Computer: ${gameState.player2.gameboard.getRemainingShips()} Ships Remaining</h3>
        <div id="turnInfo"><h3>Turn: ${gameState.turnNumber}, ${gameState.currentPlayer.isHuman ? 'Human' : 'Computer'}</h3></div>
        `;
}
