# 🐍 Snake Game

Implementación del juego clásico Snake construido con **React + Vite**.

## Tecnologías

- React 18 (JSX, useState, useEffect, hooks personalizados)
- Vite
- Docker

## Instalación y uso

```bash
npm install
npm run dev
```

Abrí http://localhost:5173 en tu navegador.

##  Instalación y uso con Docker

### Configuración inicial

Copiar el archivo de variables de entorno:

```bash
cp .env.example .env
```

Ajustar los valores en `.env` si es necesario (por defecto funciona sin cambios).

### Producción

Construir la imagen y levantar el contenedor:

```bash
docker compose up --build
```

El juego estará disponible en **http://localhost:3000**

Para correrlo en segundo plano:

```bash
docker compose up --build -d
```

### Desarrollo con Docker

Si querés correr el servidor de desarrollo de Vite dentro de un contenedor (con hot reload):

```bash
docker compose --profile dev up snake-dev
```

El juego estará disponible en **http://localhost:5173**

### Otros comandos útiles

| Comando                                     | Descripción                        |
|---------------------------------------------|------------------------------------|
| `docker compose up --build`                 | Construir y levantar en producción |
| `docker compose up -d`                      | Levantar en segundo plano          |
| `docker compose down`                       | Detener y eliminar contenedores    |
| `docker compose logs -f`                    | Ver logs en tiempo real            |
| `docker compose --profile dev up snake-dev` | Modo desarrollo con hot reload     |

### Variables de entorno

| Variable          | Default      | Descripción          |
|-------------------|--------------|----------------------|
| `NODE_ENV`        | `production` | Entorno de ejecución |
| `APP_PORT`        | `3000`       | Puerto de producción |
| `DEV_PORT`        | `5173`       | Puerto de desarrollo |
| `VITE_APP_TITLE`  | `Snake Game` | Título de la app     |
| `VITE_BOARD_SIZE` | `20`         | Tamaño del tablero   |

## Cómo jugar

| Tecla   | Acción                 |
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