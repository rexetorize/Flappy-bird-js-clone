const obstacleArray = [];

//for creating an obs tacle object
class Obstacle {
  constructor() {
    this.top = (Math.random() * canvas.height) / 2.1 + 20;
    this.bottom = (Math.random() * canvas.height) / 2.1 + 20;
    this.width = 20;
    this.counted = false;
    this.x = canvas.width;
    this.color = `hsl(${hue}, 100%, 20% )`;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, 0, this.width, this.top);
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
  }

  update() {
    this.x -= gamespeed;
    this.draw();
    if (!this.counted && this.x < bird.x) {
      score++;
      this.counted = true;
    }
  }
}

function handleObstacle() {
  if (frame % 70 === 0) {
    obstacleArray.unshift(new Obstacle());
  }
  for (i = 0; i < obstacleArray.length; i++) {
    obstacleArray[i].update();
  }

  // when array size reaches 200 it may coz complications so deleting some elments from the back of the array

  if (obstacleArray >= 200) {
    for (i = 0; i < 20; i++) {
      obstacleArray.pop(obstacleArray[0]);
    }
  }
}
