const CELL = 32;

const TONGUE_STYLE = {
  position: 'absolute',
  display: 'flex',
  gap: '2px',
  left: '-8px',
  top: '50%',
  transform: 'translateY(-50%)',
};

const TONGUE_BASE = {
  width: '9px',
  height: '4px',
  background: '#e03060',
  borderRadius: '0 0 0 3px',
  position: 'relative',
};

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
                <div style={TONGUE_STYLE}>
                  <div style={TONGUE_BASE}>
                    <div style={{
                      position: 'absolute',
                      left: '-5px',
                      top: '-3px',
                      display: 'flex',
                      gap: '3px',
                    }}>
                      <div style={{
                        width: '4px', height: '7px',
                        background: '#e03060',
                        borderRadius: '2px 2px 0 2px',
                        transform: 'rotate(-15deg)',
                      }} />
                      <div style={{
                        width: '4px', height: '7px',
                        background: '#e03060',
                        borderRadius: '2px 2px 2px 0',
                        transform: 'rotate(15deg)',
                      }} />
                    </div>
                  </div>
                </div>

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