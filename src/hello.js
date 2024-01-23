// Hello world warmup module

import { GameState } from "./state";

export function hello(message) {
    console.log(message);
    //
    const content = document.getElementById('content')

    const gameTray = document.createElement('div')
    gameTray.id = 'gameTray'
    gameTray.innerHTML = '<h2>BATTLESHIP</h2>'

    const initBtn = document.createElement('button')
    initBtn.id = 'initBtn'
    initBtn.innerHTML = 'Begin'
    
    content.appendChild(gameTray)

    gameTray.appendChild(initBtn)

    initBtn.addEventListener('click', () => {
        const gameState = new GameState();
        gameState.initGame(gameState);
    });

    console.log('Waiting...');
}