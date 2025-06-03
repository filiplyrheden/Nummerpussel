import "./Square.css";

interface SquareProps {
  value: number | null;
  onClick: () => void;
}

export default function Square({ value, onClick }: SquareProps) {
  return (
    <div
      className={`square ${value === null ? "empty" : "filled"}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
}
