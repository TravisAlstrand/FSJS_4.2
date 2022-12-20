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
    this.activePhrase = this.getRandomPhrase();
    console.log(this.activePhrase.phrase); // ERASE LATER ~~~~~~~~~~~~~~~~~~~~~~
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
    console.log('remove life called')
  };

  checkForWin = () => {
    console.log('check win called')
  };

  gameOver = () => {

  };
};