import Square from "./Square";
import "./Board.css";
import { cols } from "../config";

interface BoardProps {
  squares: (number | null)[];
}

export default function Board({ squares }: BoardProps) {
  return (
    <div
      className="board"
      style={{ gridTemplateColumns: `repeat(${cols}, 64px)` }}
    >
      {squares.map((square, i) => (
        <Square key={i} value={square} />
      ))}
    </div>
  );
}
