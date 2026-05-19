export const BOARD_SIZE = 20;

export const DIRECTIONS = {
    UP: { x: 0, y: -1 },
    DOWN: { x: 0, y: 1 },
    LEFT: { x: -1, y: 0 },
    RIGHT: { x: 1, y: 0 },
};

export const KEY_MAP = {
    ArrowUp: 'UP',
    ArrowDown: 'DOWN',
    ArrowLeft: 'LEFT',
    ArrowRight: 'RIGHT',
    w: 'UP',
    s: 'DOWN',
    a: 'LEFT',
    d: 'RIGHT',
};

export const LEVEL_SPEEDS = {
    1: 200,
    2: 150,
    3: 110,
    4: 80,
    5: 55,
};

export const POINTS_PER_LEVEL = 5;

export const INITIAL_SNAKE = [
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
];

export const INITIAL_DIRECTION = 'RIGHT';