function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var bounce = document.getElementById("bounce");
var target = document.getElementById("target");

function moveDown() {
  bounce.style.cssText = `
      top: 100%;
      left: 70%;`;
  bounce.setAttribute("data-pos", 1);
}

function moveUp() {
  bounce.style.cssText = `
      top: 50%;
      left: 70%;`;
  bounce.setAttribute("data-pos", 1);
}

console.log(target);

target.style.cssText = `
  top: 60%;
  left: 70%;`;

moveDown();
moveUp();

var dlina = parseInt(bounce.style.top) + parseInt(target.style.top);

console.log(dlina);

var radius = 50;

console.log("summa radiusov ", radius);
