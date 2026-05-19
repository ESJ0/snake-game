# 🐍 Snake Game

Implementación del juego clásico Snake construido con **React + Vite**.

## Tecnologías

- React 18 (JSX, useState, useEffect, hooks personalizados)
- Vite

## Instalación y uso

```bash
npm install
npm run dev
```

Abrí http://localhost:5173 en tu navegador.

## Cómo jugar

| Tecla   | Acción |
|---------|------------------------|
| ↑ ↓ ← → | Mover la serpiente     |
| W A S D | Alternativa al teclado |

- Comé la comida roja para crecer y sumar puntos
- Cada 5 puntos subís de nivel (la serpiente se mueve más rápido)
- El juego termina si chocás con la pared o con vos mismo

## Niveles

| Nivel | Velocidad |
|-------|-----------|
| 1     | Lenta     |
| 2     | Normal    |
| 3     | Rápida    |
| 4     | Muy rápida|
| 5     | Máxima    |

## Estructura del proyecto

```
src/
├── components/
│   ├── Board.jsx
│   ├── Snake.jsx
│   ├── Food.jsx
│   ├── Score.jsx
│   └── StartScreen.jsx
├── hooks/
│   └── useSnakeGame.js
├── constants/
│   └── gameConfig.js
└── App.jsx
```