const CELL = 32;

export default function Food({ position }) {
  return (
    <div
      className="food-wrapper"
      style={{
        left: position.x * CELL,
        top:  position.y * CELL,
      }}
    >
      <div className="food-leaf" />
      <div className="food-body" />
    </div>
  );
}