import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize);
    this.resize();

    this.ball = new Ball(this.stageWidth, this.stageHeight, 50, 5);
    this.block = new Block(120, 300, 500, 250);
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    this.ctx.scale(2, 2);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);

    window.requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
