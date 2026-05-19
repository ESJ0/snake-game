import Snake from './Snake';
import Food  from './Food';
import { BOARD_SIZE } from '../constants/gameConfig';

const cells = [];
for (let y = 0; y < BOARD_SIZE; y++) {
  for (let x = 0; x < BOARD_SIZE; x++) {
    cells.push({ x, y, light: (x + y) % 2 === 0 });
  }
}

export default function Board({ snake, food }) {
  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
        gridTemplateRows:    `repeat(${BOARD_SIZE}, 1fr)`,
      }}
    >
      {cells.map(cell => (
        <div
          key={`${cell.x}-${cell.y}`}
          className={`board-cell ${cell.light ? 'light' : 'dark'}`}
        />
      ))}

      <Snake positions={snake} />
      <Food  position={food}  />
    </div>
  );
}