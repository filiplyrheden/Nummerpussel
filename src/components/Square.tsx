import "./Square.css";

interface SquareProps {
  value: number | null;
}

export default function Square({ value }: SquareProps) {
  return (
    <div className={`square ${value === null ? "empty" : "filled"}`}>
      {value}
    </div>
  );
}
