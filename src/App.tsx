import "./App.css";
import Board from "./components/Board";
import { shuffleArray } from "./utils/shuffle";
import { useState } from "react";
import { cols, rows } from "../src/config";

const totalSquares = rows * cols;

const shuffledSquares = () => {
  const squares = Array.from({ length: totalSquares }, (_, i) =>
    i === totalSquares - 1 ? null : i + 1
  );
  return shuffleArray(squares);
};

function moveIfPossible(
  squares: (number | null)[],
  cols: number,
  clickedIndex: number
): (number | null)[] {
  const emptyIndex = squares.indexOf(null);

  const rowClicked = Math.floor(clickedIndex / cols);
  const colClicked = clickedIndex % cols;
  const rowEmpty = Math.floor(emptyIndex / cols);
  const colEmpty = emptyIndex % cols;

  const newSquares = [...squares];

  if (rowClicked === rowEmpty) {
    const dir = colClicked < colEmpty ? 1 : -1;
    for (let i = emptyIndex; i !== clickedIndex; i -= dir) {
      newSquares[i] = newSquares[i - dir];
    }
    newSquares[clickedIndex] = null;
    return newSquares;
  }

  if (colClicked === colEmpty) {
    const dir = rowClicked < rowEmpty ? 1 : -1;
    for (let i = emptyIndex; i !== clickedIndex; i -= dir * cols) {
      newSquares[i] = newSquares[i - dir * cols];
    }
    newSquares[clickedIndex] = null;
    return newSquares;
  }

  return squares;
}

function App() {
  const [squares, setSquares] = useState<(number | null)[]>(shuffledSquares);

  const reshuffle = () => {
    setSquares(shuffledSquares());
  };

  const handleClick = (index: number) => {
    const newSquares = moveIfPossible(squares, cols, index);
    setSquares(newSquares);
  };

  return (
    <>
      <Board squares={squares} onClick={handleClick} />
      <button onClick={reshuffle}>Slumpa</button>
    </>
  );
}

export default App;
