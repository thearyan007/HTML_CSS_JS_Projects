const progress = document.getElementById("progress");
const nxt = document.getElementById("next");
const pre = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

var currentElement = 1;

nxt.addEventListener("click", () => {
  currentElement++;
  if (currentElement > circles.length) {
    currentElement = circles.length;
  }
  update();
});

pre.addEventListener("click", () => {
  currentElement--;
  if (currentElement < 1) {
    currentElement = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, indx) => {
    if (indx < currentElement) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentElement == 1) {
    pre.disabled = true;
  } else if (currentElement == circles.length) {
    next.disabled = true;
  } else {
    pre.disabled = false;
    next.disabled = false;
  }
}
