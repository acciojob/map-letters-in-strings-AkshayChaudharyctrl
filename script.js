//your JS code here. If required.
function mapLetters(word) {
  const letters = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    if (!letters.hasOwnProperty(letter)) {
      letters[letter] = [];
    }

    letters[letter].push(i);
  }

  return letters;
}
