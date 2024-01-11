const btnOpen = document.getElementById("open");
const btnClosed = document.getElementById("close");
const container = document.querySelector(".container");

btnOpen.addEventListener("click", () => {
  container.classList.add("show-nav");
});
btnClosed.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
