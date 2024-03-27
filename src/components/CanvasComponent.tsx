// src/components/CanvasComponent.tsx

import React, { useRef, useEffect } from 'react';
import Ball from '../utils/Ball';
import { calculatePhysics } from '../utils/Physics';

const CanvasComponent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const balls: Ball[] = [];

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const borderSize = 10; // Размер рамки вокруг поля
        const fieldWidth = canvas.width - 2 * borderSize;
        const fieldHeight = canvas.height - 2 * borderSize;

        // Создание нескольких шаров для отображения
        for (let i = 0; i < 5; i++) {
            balls.push(new Ball({
                x: Math.random() * fieldWidth + borderSize, // Случайные координаты в пределах игрового поля
                y: Math.random() * fieldHeight + borderSize,
                radius: 20,
                color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
                vx: Math.random() * 2 - 1, // случайная скорость по оси X
                vy: Math.random() * 2 - 1  // случайная скорость по оси Y
            }));
        }

        const render = () => {
            // Очистка холста
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Рисуем рамку
            ctx.fillStyle = 'black'; // Цвет рамки
            ctx.fillRect(0, 0, canvas.width, borderSize); // Верхняя граница
            ctx.fillRect(0, 0, borderSize, canvas.height); // Левая граница
            ctx.fillRect(canvas.width - borderSize, 0, borderSize, canvas.height); // Правая граница
            ctx.fillRect(0, canvas.height - borderSize, canvas.width, borderSize); // Нижняя граница

            // Рендеринг шаров
            balls.forEach(ball => {
                ball.draw(ctx);
            });

            // Расчет физики игры
            calculatePhysics(balls, fieldWidth, fieldHeight);

            // Запланировать следующий кадр анимации
            requestAnimationFrame(render);
        };

        // Начать анимацию
        render();
    }, []);

    return <canvas ref={canvasRef} width={800} height={600} />;
};

export default CanvasComponent;
