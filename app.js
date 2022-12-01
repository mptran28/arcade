// GAME STATE to state what is in your game
let gameState = {
  players: ['X','O'],
  currentPlayer: 0,
};
let board= ['', '', '', '', '', '', '', '', ''];
let gameActive = false;
let getCurrentPlayer = () => gameState.players[gameState.currentPlayer];

// DOM SELECTOR
const boardElem = document.querySelector('#board');
const playerTurnElem = document.querySelector('#player-turn');
const nameButtonElem = document.querySelector('#enter');
const playerPlaying = document.querySelector('#playerPlaying')
const resetBtnElem = document.querySelector('#resetGame');
const player1Elem = document.querySelector('#player1')
const player2Elem = document.querySelector('#player2')


// DOM MANIPULATIONS creating HTML inside of your JS

// EVENT LISTENERS
// playerTurnElem.addEventListener('click', (event) => {playerTurn(event)})
boardElem.addEventListener('click', (event) => {playerClick(event)});
// nameButtonElem.addEventListener('click', (event) => {btnClick(event)});
// resetBtnElem.addEventListener('click', (event) => {reset(event)});

// my label 
playerPlaying.innerText = `Player: ${gameState.players[0]}'s Turn`;

const start = () => {
  gameActive = true
}

const playerClick = (event) => {
  // this if statement checks to see if the innerHTML is empty of the targeted event
  if (gameActive === true) {
    if (event.target.innerHTML === ''){
      // this if statement represent X O in the currentPlayer
      if (gameState.currentPlayer === 0) {
        event.target.innerHTML = getCurrentPlayer();
        playerPlaying.innerText = `Player: ${gameState.players[1]}s turn`;
        board[event.target.id] = 'X';
        checkWinner ();
        gameState.currentPlayer = 1;
      } 
      else {
        event.target.innerHTML = getCurrentPlayer();
        playerPlaying.innerText = `Player: ${gameState.players[0]}'s turn`;
        board[event.target.id] = 'O';
        checkWinner ();
        gameState.currentPlayer = 0;
      }
    }
  }
  console.log(checkWinner)
}

// const renderBoard = () => {
//   board.innerHTML = "";
// }

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


const checkWinner = () => {
  let roundWon = false;
  
  for(let i = 0; i < winConditions.length; i++){
    const condition = winConditions[i];
    const cellA = board[condition[0]];
    const cellB = board[condition[1]];
    const cellC = board[condition[2]];

    if (cellA == "" || cellB == "" || cellC == ""){
      continue;
    }
    if(cellA == cellB && cellB == cellC){
      roundWon = true;
      break;
    }
  }
  if (roundWon){
    playerPlaying.innerText = `${getCurrentPlayer()} wins!`;
    gameActive = false;
  }
  else if(!board.includes("")){
    playerPlaying.innerText = `Draw!`;
    gameActive = false;
  }
  return "";
}

const reset = () => {
    gameState.players = ['X','O'];
    gameState.currentPlayer = 0;
    board = ['', '', '', '', '', '', '', '', ''];
    playerPlaying.innerText = `Player: ${gameState.players[0]}'s Turn`;
    gameActive = false;
    // boardElem(document.getElementsByClassName('.cell') => playerPlaying.innerText = "")
};

// cells.forEach(cell => cell.textContent = "");