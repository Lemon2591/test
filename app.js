const menu = document.getElementById("1");
const nav = document.getElementById("2");
const close = document.getElementById("3");

menu.addEventListener("click", () => {
  nav.style.transform = "translateX(0%)";
});

close.addEventListener("click", () => {
  nav.style.transform = "translateX(-100%)";
});
