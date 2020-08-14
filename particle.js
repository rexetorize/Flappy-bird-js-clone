const particleArray = [];

class Particle {
  constructor() {
    this.x = bird.x;
    this.y = bird.y;
    this.size = Math.random() * 7 + 3;
    this.SpeedY = Math.random() * 1 - 0.5;
    this.color = `hsla(${hue}, 100%, 50%, 0.8 )`;
  }

  update() {
    this.x -= gamespeed;
    this.y += this.SpeedY;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function HandleParticle() {
  particleArray.unshift(new Particle());

  for (i = 0; i < particleArray.length; i++) {
    particleArray[i].update();
    particleArray[i].draw();
  }

  // when array size reaches 200 it may coz complications so deleting some elments from the back of the array

  if (particleArray >= 200) {
    for (i = 0; i < 20; i++) {
      particleArray.pop(particleArray[0]);
    }
  }
}
