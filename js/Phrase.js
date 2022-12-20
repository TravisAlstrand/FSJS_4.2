class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  };

  addPhraseToDisplay = () => {
    phraseCharacters = this.phrase.split('');
    phraseCharacters.forEach(character => {
      let html;
      if (character === ' ') {
        html = `<li class="space">${character}</li>`;
      } else {
        html = `<li class="hide letter ${character}">${character}</li>`;
      };
      phraseUL.insertAdjacentHTML('beforeend', html);
    });
  };

  checkLetter = (letter) => {
    if (phraseCharacters.includes(letter)) {
      return true;
    } else {
      return false;
    };
  };

  showMatchedLetter = (letter) => {
    const phraseLIs = document.querySelectorAll('.letter');
    phraseLIs.forEach(li => {
      if (li.classList.contains(letter)) {
        li.classList.remove('hide');
        li.classList.add('show');
      };
    });
  };
};