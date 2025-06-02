import "./App.css";
import Board from "./components/Board";
import { shuffleArray } from "./utils/shuffle";
import { useState } from "react";

const totalSquares = 3 * 5;

const shuffledSquares = () => {
  const squares = Array.from({ length: totalSquares }, (_, i) =>
    i === totalSquares - 1 ? null : i + 1
  );
  return shuffleArray(squares);
};

function App() {
  const [squares, setSquares] = useState<(number | null)[]>(shuffledSquares);

  const reshuffle = () => {
    setSquares(shuffledSquares());
  };

  return (
    <>
      <Board squares={squares} />
      <button onClick={reshuffle}>Slumpa</button>
    </>
  );
}

export default App;
