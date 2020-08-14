// import Paddle from "./paddle";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

let hue = 0;
let spacePressed = false;
let angle = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

const background = new Image();
background.src = "./assets/BG.png";

BG = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

function HandleBG() {
  if (BG.x1 <= -BG.width + gamespeed + 1) BG.x1 = BG.width;
  else BG.x1 -= gamespeed;
  if (BG.x2 <= -BG.width + gamespeed + 1) BG.x2 = BG.width;
  else BG.x2 -= gamespeed;
  ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bird.update();
  HandleBG();
  bird.draw();
  ctx.fillStyle = "black";

  ctx.font = "sans serif";
  ctx.strokeText(score, 450, 70);
  ctx.fillText(score, 450, 70);
  HandleParticle();
  handleObstacle();
  HandleCollision();
  if (HandleCollision()) return;
  requestAnimationFrame(animate);
  angle += 0.12;
  hue++;
  frame++;
}

animate();

window.addEventListener("keydown" || "ontouchstart", (e) => {
  if (e.code === "Space" || "TouchEvent") spacePressed = true;
});

window.addEventListener("keyup" || "ontouchend", (e) => {
  if (e.code === "Space" || "TouchEvent") spacePressed = false;
  bird.Spframe = 0;
});

const bang = new Image();
bang.src = "./assets/bang.png";
function HandleCollision() {
  for (let i = 0; i < obstacleArray.length; i++) {
    //Collision LOGIC
    if (
      bird.x < obstacleArray[i].x + obstacleArray[i].width &&
      bird.x + bird.width > obstacleArray[i].x &&
      ((bird.y < 0 + obstacleArray[i].top && bird.y + bird.height > 0) ||
        bird.y > canvas.height - obstacleArray[i].bottom)
    ) {
      //Collision DETECTED
      ctx.drawImage(bang, bird.x, bird.y, 100, 100);
      ctx.font = "25px Georgia";
      ctx.fillStyle = "black";
      ctx.fillText(
        "GAME OVER, Your Score is : " + score,
        120,
        canvas.height / 2
      );
      return true;
    }
  }
}

document.querySelector(".btn").addEventListener("click", () => {
  location.reload();
});
