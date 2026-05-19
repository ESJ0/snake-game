// src/components/StartScreen.jsx
export default function StartScreen({ status, score, onStart }) {
  const isGameOver = status === 'gameover';

  return (
    <div className="overlay">
      <div className="overlay-box">
        {isGameOver ? (
          <>
            <h2 className="overlay-title">💀 Game Over</h2>
            <p className="overlay-score">Puntaje final: {score}</p>
          </>
        ) : (
          <>
            <h2 className="overlay-title">🐍 Snake</h2>
            <p className="overlay-subtitle">¿Listo para jugar?</p>
          </>
        )}
        <button className="btn-start" onClick={onStart}>
          {isGameOver ? '🔄 Jugar de nuevo' : '▶ Iniciar juego'}
        </button>
      </div>
    </div>
  );
}