class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('greatest phrase of all time'),
      new Phrase('never seen a better phrase'),
      new Phrase('i hate coming up with phrases'),
      new Phrase('worst phrase ever'),
      new Phrase('this phrase is alright i guess')
    ];
    this.activePhrase = null;
  };

  getRandomPhrase = () => {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  };

  startGame = () => {
    overlay.style.display = 'none';
    overlayActive = false;
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  };

  handleInteraction = (letterBtn) => {
    letterBtn.disabled = true;
    const correctGuess = this.activePhrase.checkLetter(letterBtn.textContent);
    // IF SELECTED BUTTON IS IN PHRASE
    if (correctGuess) {
      letterBtn.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letterBtn.textContent);
      this.checkForWin();
    } else { // IF NOT IN PHRASE
      letterBtn.classList.add('wrong');
      this.removeLife();
    };

  };

  removeLife = () => {
    hearts[this.missed].src = './images/lostHeart.png';
    this.missed++;
    if (this.missed === 5) {
      this.gameOver(false);
    };
  };

  checkForWin = () => {
    const hiddenLetters = document.querySelectorAll('.hide');
    if (!hiddenLetters.length) {
      this.gameOver(true);
    };
  };

  gameOver = (won) => {
    if (won) {
      gameOverMsg.innerText = 'Congrats, you won!';
      overlay.className = 'win';
    } else {
      gameOverMsg.innerText = 'Bummer, you lost!';
      overlay.className = 'lose';
    };
    startBtn.innerText = 'Play again?';
    overlay.style.display = 'inherit';
    overlayActive = true;
  };

  resetBoard = () => {
    // RESET HEARTS
    hearts.forEach(heart => {
      heart.src = './images/liveHeart.png';
    });
    // RESET KEYBOARD
    keys.forEach(key => {
      key.disabled = false;
      key.className = 'key';
    });
    // RESET PHRASE BOARD
    phraseUL.innerHTML = '';
  };
};