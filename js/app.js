const overlay = document.querySelector('#overlay');
const gameOverMsg = document.querySelector('#game-over-message');
const startBtn = document.querySelector('#btn__reset');
const qwerty = document.querySelector('#qwerty');
const keys = document.querySelectorAll('.key');
const phraseUL = document.querySelector('#phrase').firstElementChild;
const hearts = document.querySelectorAll('img');
let overlayActive = true;
let game;
let phraseCharacters;

// RESET / START GAME
startBtn.addEventListener('click', () => {
  if (startBtn.innerText === 'Play again?') {
    game.resetBoard();
  };
  game = new Game;
  game.startGame();
});

// ON SCREEN KEYBOARD
qwerty.addEventListener('click', (e) => {
  if (e.target.classList.contains('key')) {
    game.handleInteraction(e.target);
  };
});

// PHYSICAL KEYBOARD
document.addEventListener('keyup', (e) => {
  if (!overlayActive && e.code.startsWith('Key')) {
    keys.forEach(key => {
      if (key.textContent === e.key) {
        game.handleInteraction(key);
      };
    });
  };
});