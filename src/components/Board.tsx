import Square from "./Square";
import "./Board.css";
import { shuffleArray } from "../utils/shuffle";

export default function Board() {
  const totalSquares = 3 * 5;
  const square = Array.from({ length: totalSquares }, (_, i) =>
    i === totalSquares - 1 ? null : i + 1
  );

  const shuffledSquares = shuffleArray(square);

  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(5, 64px)` }}>
      {shuffledSquares.map((square, i) => (
        <Square key={i} value={square} />
      ))}
    </div>
  );
}
