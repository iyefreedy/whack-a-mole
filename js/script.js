const grounds = document.querySelectorAll(".ground");
const moles = document.querySelectorAll(".mole");
const scoreboard = document.querySelector(".score-board");

let groundBefore;
let score;
let stop;

function randomGround(grounds) {
  const g = Math.floor(Math.random() * grounds.length);
  const gRandom = grounds[g];

  if (gRandom == groundBefore) {
    randomGround(grounds);
  }

  groundBefore = gRandom;

  return gRandom;
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function showMole() {
  const gRandom = randomGround(grounds);
  const tRandom = randomTime(300, 1500);

  gRandom.classList.add("show");

  setTimeout(() => {
    gRandom.classList.remove("show");
    if (!stop) {
      showMole();
    }
  }, tRandom);
}

function start() {
  stop = false;
  score = 0;
  scoreboard.textContent = score;
  showMole();
  setTimeout(() => {
    stop = true;
  }, 10000);
}

function punch() {
  score++;
  console.log(score);
  this.parentNode.classList.remove("show");
  scoreboard.textContent = score;
}

moles.forEach((m) => {
  m.addEventListener("click", punch);
});
