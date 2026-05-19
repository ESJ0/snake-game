export default function Score({ score, highScore, level }) {
  return (
    <div className="score-panel">
      <div className="score-item">
        <span className="score-label">Puntaje</span>
        <span className="score-value">{score}</span>
      </div>
      <div className="score-item">
        <span className="score-label">Nivel</span>
        <span className="score-value">{level}</span>
      </div>
      <div className="score-item">
        <span className="score-label">Récord</span>
        <span className="score-value">{highScore}</span>
      </div>
    </div>
  );
}