const overlay = document.querySelector('#overlay');
const startBtn = document.querySelector('#btn__reset');
const qwerty = document.querySelector('#qwerty');
const phraseUL = document.querySelector('#phrase').firstElementChild;
let game;
let phraseCharacters;

// RESET / START GAME
startBtn.addEventListener('click', () => {
  game = new Game;
  game.startGame();
});

// ON SCREEN KEYBOARD
qwerty.addEventListener('click', (e) => {
  if (e.target.classList.contains('key')) {
    game.handleInteraction(e.target);
  };
});