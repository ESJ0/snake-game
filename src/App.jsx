// src/App.jsx
import { useSnakeGame } from './hooks/useSnakeGame';
import Board        from './components/Board';
import Score        from './components/Score';
import StartScreen  from './components/StartScreen';
import './App.css';

export default function App() {
  const {
    snake,
    food,
    score,
    highScore,
    level,
    status,
    startGame,
  } = useSnakeGame();

  return (
    <div className="app">
      <h1 className="title">🐍 Snake</h1>

      <Score score={score} highScore={highScore} level={level} />

      <div className="board-wrapper">
        <Board snake={snake} food={food} />

        {/* Overlay de inicio o game over encima del tablero */}
        {status !== 'running' && (
          <StartScreen status={status} score={score} onStart={startGame} />
        )}
      </div>

      <p className="hint">Usá las flechas o W A S D para moverte</p>
    </div>
  );
}