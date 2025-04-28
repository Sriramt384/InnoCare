import React, { useState } from "react";

// Importing images
import spellbee from "../games/spellbee.png";
import squares from "../games/squares.png";
import combinations from "../games/combinations.png";
import strands from "../games/strands.png";
import connections from "../games/connections.png";
import wordsearch from "../games/wordsearch.png";
import globle from "../games/globle.png";
import sudoku from "../games/sudoku.png";
import game2048 from "../games/2048.png";
import flagle from "../games/flagle.png";
import solitaire from "../games/solitaire.png";
import mahjong from "../games/mahjong.png";
import snake from "../games/snake.png";
import blockblast from "../games/block-blast.png";
import dinosaurGame from "../games/dinosaur-game.png";

// Define a type for game details
type Game = {
  name: string;
  tagline: string;
  image: string;
  link: string;
};

const games: Game[] = [
    {
        name: "Squares",
        tagline: "New word search game",
        image: squares,
        link: "https://squares.org/",
      },
      {
        name: "Combinations",
        tagline: "Combine letters and create words",
        image: combinations,
        link: "https://combinations.org/",
      },
  {
    name: "SpellBee",
    tagline: "Make words with 7 letters",
    image: spellbee,
    link: "https://spellbee.org/",
  },
  {
    name: "Strands",
    tagline: "Solve a 6x8 letter grid",
    image: strands,
    link: "https://strands.game/",
  },
  {
    name: "Connections",
    tagline: "Group words by topic",
    image: connections,
    link: "https://connections.gg/",
  },
  {
    name: "Word Search",
    tagline: "Find words in the grid",
    image: wordsearch,
    link: "https://wordsearch.io/",
  },
  {
    name: "Globle",
    tagline: "Guess the hidden country",
    image: globle,
    link: "https://globle.org/",
  },
  {
    name: "Sudoku",
    tagline: "Solve a 9x9 Sudoku grid",
    image: sudoku,
    link: "https://sudoku-online.com/",
  },
  {
    name: "2048",
    tagline: "Play 2048 number game",
    image: game2048,
    link: "https://2048.gg/",
  },
  {
    name: "Flagle",
    tagline: "Guess the country flag",
    image: flagle,
    link: "https://flagle.gg/",
  },
  {
    name: "Solitaire",
    tagline: "Play Classic Solitaire",
    image: solitaire,
    link: "https://solitaire.online/",
  },
  {
    name: "Mahjong",
    tagline: "Free Mahjong Game",
    image: mahjong,
    link: "https://mahjong.gg/",
  },
  {
    name: "Snake Game",
    tagline: "Play Google 🐍 Snake",
    image: snake,
    link: "https://snakegame.org/",
  },
  {
    name: "Block Blast",
    tagline: "Place blocks, clear rows, and score points!",
    image: blockblast,
    link: "https://blockblast.game/",
  },
  {
    name: "Dino Game",
    tagline: "Play Google 🦕 Dinosaur",
    image: dinosaurGame,
    link: "https://dinosaur.gg/",
  },
];

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"} min-h-screen transition-colors duration-300`}>
      <header className="flex justify-between items-center p-4">
        <h1 className="text-4xl font-bold">Games for Elderly</h1>
        <label className="relative inline-block w-12 h-6">
      <input
        type="checkbox"
        className="hidden"
        onChange={() => setDarkMode(!darkMode)}
      />
      <span className="block w-full h-full bg-gray-400 rounded-full shadow-inner"></span>
      <span
        className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow transform transition-transform ${darkMode ? "translate-x-6" : "translate-x-0"}`}
      ></span>
    </label>
      </header>
      <main className="flex flex-wrap justify-center gap-6 p-6">
        {games.map((game, index) => (
          <div
            key={index}
            className={`w-60 p-4 rounded-lg shadow-lg transform transition-transform hover:-translate-y-2 cursor-pointer ${darkMode ? "bg-gray-700" : "bg-white"}`}
            onClick={() => window.open(game.link, "_blank")}
          >
            <div className="w-24 h-24 mx-auto overflow-hidden rounded-full mb-4">
              <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-lg font-semibold">{game.name}</h2>
            <p className="text-sm text-gray-500">{game.tagline}</p>
            <button className={`mt-4 px-4 py-2 font-semibold border rounded-md ${darkMode ? "border-white text-white hover:bg-white hover:text-gray-800" : "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"}`}>
              Play
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
