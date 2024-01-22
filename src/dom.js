// DOM Module

import { Gameboard } from "./board"
import { GameState } from "./state"

// via gameTray div, render:

export function loadUI() {
    console.log('Loading UI...');

    const gameTray = document.getElementById('gameTray');

    // Scoreboard
    const scoreBoard = document.createElement('div');
    scoreBoard.innerHTML = `
        <h3>Player 1: Hits - Misses - Remaining Ships</h3>
        <h3>Computer: Hits - Misses - Remaining Ships</h3>
        <h3>Turn: </h3>
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
    const gameState = new GameState();
    const playerGameboard = gameState.player1.gameboard;
    const opponentGameboard = gameState.player2.gameboard;

    // Render player and opponent boards
    renderBoard(playerGameboard, playerBoard);
    renderBoard(opponentGameboard, opponentBoard);
}

// Helper function to render the game board
export function renderBoard(gameboard, boardElement) {
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
            cell.addEventListener('click', () => handleCellClick(coordinates));

            row.appendChild(cell);
        }

        grid.appendChild(row);
    }

    // Add the grid to the board element
    boardElement.appendChild(grid);
}

// Event handler for cell click (attack input)
function handleCellClick(coordinates) {
    console.log('Cell clicked:', coordinates);
    // Update the UI

    // Calls takeUserInput to handle the attack in the game state
    gameState.takeUserInput(coordinates);

    // Update the UI with the latest game state
    renderBoard(gameState.player1.gameboard, document.getElementById('playerBoard'));
    renderBoard(gameState.player2.gameboard, document.getElementById('opponentBoard'));
}


//  Scoreboard:
    // Player names, total hits and misses, remaining ships and health
    // Current turn number and player name
    // Scoreboard/gameboards update according to game action

// 2x 11x11 grids:
// With letters/numbers on x/y axis
    // Water cells are auqua
    // Ship cells are dark grey
    // Hit ships are red
    // miss/hit-water cells are black
    // cell clicking for attack input

    // Opponent board:
    // shows no ships unless hit, then only the hit square shows

    // Player board:
    // shows own ship locations to player