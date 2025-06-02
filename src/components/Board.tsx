import Square from "./Square";
import "./Board.css";

export default function Board() {
  const totalSquares = 3 * 5;
  const tiles = Array.from({ length: totalSquares }, (_, i) =>
    i === totalSquares - 1 ? null : i + 1
  );

  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(5, 64px)` }}>
      {tiles.map((square, i) => (
        <Square key={i} value={square} />
      ))}
    </div>
  );
}
