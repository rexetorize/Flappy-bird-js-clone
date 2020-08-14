const Sprite = new Image();
Sprite.src = "./assets/spritesheet.png";
class Bird {
  constructor() {
    this.x = 150;
    this.y = 200;
    this.vy = 0;
    this.originalHeight = 680;
    this.originalWidth = 941;
    this.width = this.originalHeight / 10;
    this.height = this.originalWidth / 20;
    this.weight = 1;
    this.Spframe = 0;
  }

  update() {
    let curve = Math.sin(angle) * 20;
    if (this.y > canvas.height - this.height * 3 + curve) {
      this.y = canvas.height - this.height * 3 + curve;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.vy *= 0.9;
      this.y += this.vy;
    }
    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      this.vy = 0;
    }
    if (spacePressed && this.y > this.height * 3) this.flap();
  }

  draw() {
    ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.8 )`;
    //ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      Sprite,
      this.Spframe * this.originalWidth,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x - 20,
      this.y - 20,
      this.width * 1.5,
      this.height * 1.5
    );
  }

  flap() {
    this.vy -= 2;
    if (this.Spframe >= 3) this.Spframe = 0;
    else if (this.Spframe % 3 === 0) this.Spframe++;
  }
}

let bird = new Bird();
