const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("scoreValue");

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let score = 0;
let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let dx = 0;
let dy = 0;
let changingDirection = false;

// Start the game loop
setInterval(drawGame, 100);

document.addEventListener("keydown", changeDirection);

function drawGame() {
  // Move snake first
  if (dx !== 0 || dy !== 0) {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    // Check if ate food
    if (head.x === food.x && head.y === food.y) {
      score++;
      scoreElement.innerText = score;
      generateFood();
    } else {
      snake.pop();
    }
  }

  checkCollision();

  // Clear and Redraw
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawFood();
  drawSnake();

  changingDirection = false;
}

function generateFood() {
  food.x = Math.floor(Math.random() * tileCount);
  food.y = Math.floor(Math.random() * tileCount);

  // Prevent food from spawning on snake body
  snake.forEach((part) => {
    if (part.x === food.x && part.y === food.y) {
      generateFood();
    }
  });
}

function drawFood() {
  ctx.fillStyle = "#ff5252";
  ctx.fillRect(
    food.x * gridSize,
    food.y * gridSize,
    gridSize - 2,
    gridSize - 2
  );
}

function drawSnake() {
  ctx.fillStyle = "#4caf50";
  snake.forEach((part) => {
    ctx.fillRect(
      part.x * gridSize,
      part.y * gridSize,
      gridSize - 2,
      gridSize - 2
    );
  });
}

function checkCollision() {
  const head = snake[0];

  // Wall collision
  if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
    resetGame();
  }

  // Self collision
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }
}

function resetGame() {
  snake = [{ x: 10, y: 10 }];
  dx = 0;
  dy = 0;
  score = 0;
  scoreElement.innerText = score;
  generateFood();
}

function changeDirection(event) {
  if (changingDirection) return;
  changingDirection = true;

  const keyPressed = event.keyCode;
  const LEFT = 37,
    UP = 38,
    RIGHT = 39,
    DOWN = 40;

  if (keyPressed === LEFT && dx !== 1) {
    dx = -1;
    dy = 0;
  }
  if (keyPressed === UP && dy !== 1) {
    dx = 0;
    dy = -1;
  }
  if (keyPressed === RIGHT && dx !== -1) {
    dx = 1;
    dy = 0;
  }
  if (keyPressed === DOWN && dy !== -1) {
    dx = 0;
    dy = 1;
  }
}
