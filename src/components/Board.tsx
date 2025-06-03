import Square from "./Square";
import "./Board.css";
import { cols } from "../config";

interface BoardProps {
  squares: (number | null)[];
  onClick: (index: number) => void;
}

export default function Board({ squares, onClick }: BoardProps) {
  return (
    <div
      className="board"
      style={{ gridTemplateColumns: `repeat(${cols}, 64px)` }}
    >
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}
