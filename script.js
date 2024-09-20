import { foodSpawner, grow } from "./func.js";

let direction = "r";
document.addEventListener("keydown", () => {
  switch (event.key) {
    case "w":
      direction = "u";
      break;
    case "s":
      direction = "d";
      break;
    case "a":
      direction = "l";
      break;
    case "d":
      direction = "r";
  }
});

let head = document.querySelector("#head");
let foodbox = document.querySelector("#foodbox");

let x,
  y,
  len = 2;
let { X, Y } = foodSpawner(0, 0);
x = y = 0;
let locs = [[0, 0]];

const mover = setInterval(() => {
  if (
    (x === 990 && direction === "r") ||
    (x === 0 && direction === "l") ||
    (y === 0 && direction === "u") ||
    (y === 570 && direction === "d") ||
    locs.slice(1).some((coords) => coords[0] === x && coords[1] === y)
  ) {
    clearTimeout(mover);
    return;
  }
  switch (direction) {
    case "l":
      x -= 30;
      break;
    case "r":
      x += 30;
      break;
    case "u":
      y -= 30;
      break;
    case "d":
      y += 30;
  }

  locs.unshift([x, y]); // insert values at head
  if (locs.length > len) locs.pop(); // remove from end
  let bodyParts = document.getElementsByClassName("body");
  for (let i = 0; i < bodyParts.length; i++) {
    bodyParts[i].style.transform = `translate(${locs[i][0]}px,${locs[i][1]}px)`;
  }

  if (x === X && y === Y) {
    len++;
    grow(locs);
    ({ X, Y } = foodSpawner(X, y, x, y));
  }
}, 100);
