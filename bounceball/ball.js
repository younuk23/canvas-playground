class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    const diameter = this.radius * 2;
    this.x = this.radius + Math.random() * (stageWidth - diameter);
    this.y = this.radius + Math.random() * (stageHeight - diameter);
  }

  draw(ctx, stageWidth, stageHeight, block) {
    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow(stageWidth, stageHeight);
    this.bounceBlock(block);

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    block.draw(ctx);
  }

  bounceWindow(stageWidth, stageHeight) {
    if (this.x >= stageWidth - this.radius || this.x <= this.radius) {
      this.vx = -this.vx;
    }

    if (this.y >= stageHeight - this.radius || this.y <= this.radius) {
      this.vy = -this.vy;
    }
  }

  //TODO: 블럭 충돌했는지 판단하는 함수 구현 해야 함
  bounceBlock(block) {
    const minX = block.x - this.radius;
    const maxX = block.maxX + this.radius;
    const minY = block.y - this.radius;
    const maxY = block.maxY + this.radius;
  }
}

export { Ball };
