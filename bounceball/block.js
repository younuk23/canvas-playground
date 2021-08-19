export class Block {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.maxX = x + width;
    this.maxY = y + height;
  }

  draw(ctx) {
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}
