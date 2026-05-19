import { useState, useEffect, useCallback, useRef } from 'react';
import {
    BOARD_SIZE,
    DIRECTIONS,
    KEY_MAP,
    LEVEL_SPEEDS,
    POINTS_PER_LEVEL,
    INITIAL_SNAKE,
    INITIAL_DIRECTION,
} from '../constants/gameConfig';

function randomFood(snake) {
    let pos;
    do {
        pos = {
            x: Math.floor(Math.random() * BOARD_SIZE),
            y: Math.floor(Math.random() * BOARD_SIZE),
        };
    } while (snake.some(seg => seg.x === pos.x && seg.y === pos.y));
    return pos;
}

export function useSnakeGame() {
    // ── Estado ──────────────────────────────────────────────
    const [snake, setSnake] = useState(INITIAL_SNAKE);
    const [food, setFood] = useState(() => randomFood(INITIAL_SNAKE));
    const [direction, setDirection] = useState(INITIAL_DIRECTION);
    const [status, setStatus] = useState('idle'); 
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [level, setLevel] = useState(1);

    const directionRef = useRef(direction);
    const snakeRef = useRef(snake);
    const scoreRef = useRef(score);

    useEffect(() => { directionRef.current = direction; }, [direction]);
    useEffect(() => { snakeRef.current = snake; }, [snake]);
    useEffect(() => { scoreRef.current = score; }, [score]);

    // ── Reiniciar ────────────────────────────────────────────
    const startGame = useCallback(() => {
        const initialSnake = INITIAL_SNAKE;
        setSnake(initialSnake);
        setFood(randomFood(initialSnake));
        setDirection(INITIAL_DIRECTION);
        setScore(0);
        setLevel(1);
        setStatus('running');
    }, []);

    // ── Teclado ──────────────────────────────────────────────
    useEffect(() => {
        if (status !== 'running') return;

        const handleKey = (e) => {
            const newDir = KEY_MAP[e.key];
            if (!newDir) return;

            const cur = directionRef.current;
            
            const opposites = { UP: 'DOWN', DOWN: 'UP', LEFT: 'RIGHT', RIGHT: 'LEFT' };
            if (opposites[newDir] === cur) return;

            setDirection(newDir);
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [status]);

    // ── Game loop ────────────────────────────────────────────
    useEffect(() => {
        if (status !== 'running') return;

        const speed = LEVEL_SPEEDS[level] ?? 55;

        const interval = setInterval(() => {
            const currentSnake = snakeRef.current;
            const { x: dx, y: dy } = DIRECTIONS[directionRef.current];

            const head = currentSnake[0];
            const newHead = { x: head.x + dx, y: head.y + dy };

            const hitWall =
                newHead.x < 0 || newHead.x >= BOARD_SIZE ||
                newHead.y < 0 || newHead.y >= BOARD_SIZE;

            const hitSelf = currentSnake.some(
                seg => seg.x === newHead.x && seg.y === newHead.y
            );

            if (hitWall || hitSelf) {
                setStatus('gameover');
                setHighScore(prev => Math.max(prev, scoreRef.current));
                return;
            }

            setSnake(prev => {
                const ate = newHead.x === prev[0].x + dx && 
                    false; 
                return [newHead, ...prev.slice(0, -1)]; 
            });

            setFood(prevFood => {
                const eats = newHead.x === prevFood.x && newHead.y === prevFood.y;

                if (eats) {
                    setSnake([newHead, ...currentSnake]);
                    setScore(prev => {
                        const next = prev + 1;
                        setLevel(Math.min(5, Math.floor(next / POINTS_PER_LEVEL) + 1));
                        return next;
                    });
                    return randomFood([newHead, ...currentSnake]);
                }

                setSnake([newHead, ...currentSnake.slice(0, -1)]);
                return prevFood;
            });
        }, speed);

        return () => clearInterval(interval);
    }, [status, level]);

    // ── API pública del hook ─────────────────────────────────
    return { snake, food, score, highScore, level, status, startGame };
}