import Square from "./Square";
import "./Board.css";

interface BoardProps {
  squares: (number | null)[];
}

export default function Board({ squares }: BoardProps) {
  return (
    <div className="board" style={{ gridTemplateColumns: `repeat(5, 64px)` }}>
      {squares.map((square, i) => (
        <Square key={i} value={square} />
      ))}
    </div>
  );
}
