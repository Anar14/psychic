const wordList = ['javascript', 'python', 'java', 'c++', 'ruby'];
let selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
let wrongGuesses = 0;
let correctGuesses = [];
let allGuesses = [];
let wins = 0;
let losses = 0;

// Show the hidden word
let word = '';
for (let i = 0; i < selectedWord.length; i++) {
  if (correctGuesses.includes(selectedWord[i])) {
    word += selectedWord[i];
  } else {
    word += '_';
  }
}
document.getElementById('word').innerHTML = word;

// Get the user's guess
const guess = prompt(`Guess a letter in the word "${word}"`);
allGuesses.push(guess);

// Check if the guess is correct
if (selectedWord.includes(guess)) {
  correctGuesses.push(guess);
} else {
  wrongGuesses++;
}

// Show the updated word
word = '';
for (let i = 0; i < selectedWord.length; i++) {
  if (correctGuesses.includes(selectedWord[i])) {
    word += selectedWord[i];
  } else {
    word += '_';
  }
}
document.getElementById('word').innerHTML = word;

// Check if the user has won or lost
if (word === selectedWord) {
  wins++;
  alert('You win!');
} else if (wrongGuesses >= 13) {
  losses++;
  alert('You lose. The word was ' + selectedWord);
}

// Display the wins, losses, guesses left, and my guesses so far
document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;
document.getElementById('guessesLeft').innerHTML = 13 - wrongGuesses;
document.getElementById('myGuesses').innerHTML = allGuesses.join(', ');