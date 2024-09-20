const foodSpawner = (X, Y, x = 0, y = 0) => {
  do {
    X = Math.round(Math.random() * 34) * 30;
    Y = Math.round(Math.random() * 21) * 30;
  } while ((x === X && y === Y) || X > 990 || Y > 570);
  foodbox.style.transform = `translate(${X}px,${Y}px)`;
  return { X, Y };
};

const grow = (locs) => {
  let playArea = document.querySelector("#playArea");
  let body = document.createElement("div", { className: "body" });
  body.setAttribute("class", "body");
  body.style.transform = `translate(${locs[locs.length - 1][0]}px,${
    locs[locs.length - 1][1]
  }px)`;
  playArea.appendChild(body);
};

export { foodSpawner, grow };
