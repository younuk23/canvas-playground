class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    const diameter = this.radius * 2;
    this.x = this.radius + Math.random() * (stageWidth - diameter);
    this.y = this.radius + Math.random() * (stageHeight - diameter);
  }

  draw(ctx, stageWidth, stageHeight) {
    this.x += this.vx;
    this.y += this.vy;

    this.bounce(stageWidth, stageHeight);

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  bounce(stageWidth, stageHeight) {
    if (this.x >= stageWidth - this.radius || this.x <= this.radius) {
      this.vx = -this.vx;
    }

    if (this.y >= stageHeight - this.radius || this.y <= this.radius) {
      this.vy = -this.vy;
    }
  }
}

export { Ball };
