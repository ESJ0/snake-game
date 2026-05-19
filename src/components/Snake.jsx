const CELL = 32; 

export default function Snake({ positions }) {
  return (
    <>
      {positions.map((seg, index) => {
        const isHead = index === 0;
        return (
          <div
            key={`${seg.x}-${seg.y}-${index}`}
            className={`snake-segment ${isHead ? 'snake-head' : ''}`}
            style={{
              left: seg.x * CELL + 2,
              top:  seg.y * CELL + 4,
            }}
          >
            {isHead && (
              <>
                <div className="eye" />
                <div className="eye" />
              </>
            )}
          </div>
        );
      })}
    </>
  );
}