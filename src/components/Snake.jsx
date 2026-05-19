import { BOARD_SIZE } from '../constants/gameConfig';

export default function Snake({ positions }) {
  return (
    <>
      {positions.map((seg, index) => (
        <div
          key={`${seg.x}-${seg.y}-${index}`}
          className={`snake-segment ${index === 0 ? 'snake-head' : ''}`}
          style={{
            gridColumn: seg.x + 1,
            gridRow:    seg.y + 1,
          }}
        />
      ))}
    </>
  );
}