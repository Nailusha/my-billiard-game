// src/utils/Ball.ts

interface BallOptions {
    x: number;
    y: number;
    radius: number;
    color: string;
    vx?: number; // скорость по оси X
    vy?: number; // скорость по оси Y
}

export default class Ball {
    x: number;
    y: number;
    radius: number;
    color: string;
    vx: number; // скорость по оси X
    vy: number; // скорость по оси Y

    constructor({ x, y, radius, color, vx = 0, vy = 0 }: BallOptions) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.vx = vx;
        this.vy = vy;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    updatePosition() {
        this.x += this.vx;
        this.y += this.vy;
    }

    // Дополнительные методы и свойства, такие как обработка столкновений и другие, могут быть добавлены здесь в соответствии с вашими требованиями
}
