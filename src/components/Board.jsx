import Snake from './Snake';
import Food  from './Food';
import { BOARD_SIZE } from '../constants/gameConfig';

export default function Board({ snake, food }) {
  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
        gridTemplateRows:    `repeat(${BOARD_SIZE}, 1fr)`,
      }}
    >
      <Snake positions={snake} />
      <Food  position={food}  />
    </div>
  );
}