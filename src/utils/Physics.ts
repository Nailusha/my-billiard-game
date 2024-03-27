// src/utils/Physics.ts

import Ball from './Ball';

export function calculatePhysics(balls: Ball[], width: number, height: number) {
    balls.forEach(ball => {
        // Обновление позиции шара
        ball.updatePosition();

        // Обработка столкновений со стенами
        if (ball.x - ball.radius < 0 || ball.x + ball.radius > width) {
            ball.vx = -ball.vx;
        }
        if (ball.y - ball.radius < 0 || ball.y + ball.radius > height) {
            ball.vy = -ball.vy;
        }
    });

    // Обработка столкновений между шарами
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            const ball1 = balls[i];
            const ball2 = balls[j];
            if (detectBallCollision(ball1, ball2)) {
                resolveBallCollision(ball1, ball2);
            }
        }
    }
}

function detectBallCollision(ball1: Ball, ball2: Ball): boolean {
    const dx = ball1.x - ball2.x;
    const dy = ball1.y - ball2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < ball1.radius + ball2.radius;
}

function resolveBallCollision(ball1: Ball, ball2: Ball) {
    // Обработка упругого соударения шаров
    // Можно использовать формулы для упругого соударения шаров
    // Например, обмен скоростями
    const tempVx = ball1.vx;
    const tempVy = ball1.vy;
    ball1.vx = ball2.vx;
    ball1.vy = ball2.vy;
    ball2.vx = tempVx;
    ball2.vy = tempVy;
}
