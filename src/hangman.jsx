import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

export default function Hangman({ duration = 520000 }) {
  const [confetti, setConfetti] = useState(false);
  const [word, setWord] = useState("Barcelona Kit".toUpperCase());
  const alphabets = [
    "A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z", " "
  ];
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeUp(true);
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  const maskedWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : "_").join(" ");

  const handleGuess = (alphabet) => {
    if (word.includes(alphabet)) {
      setCorrectGuesses([...correctGuesses, alphabet]);
    }

    // Check if the puzzle is solved
    if (!maskedWord.includes("_") && !timeUp) {
      setConfetti(true);
    }
  };

  return (
    <div>
      {confetti && <Confetti />} {/* Render Confetti when the puzzle is solved */}
      <p>{maskedWord}</p>
      {alphabets.map((alphabet, index) => (
        <button key={index} onClick={() => handleGuess(alphabet)}>
          {alphabet}
        </button>
      ))}
      {timeUp ? (
        <p>You lost LOL!</p>
      ) : !maskedWord.includes("_") && <p>You got it!</p>}
    </div>
  );
}
