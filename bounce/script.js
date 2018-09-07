function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var i = document.getElementById("round");
toPos0(i);

function toPos0(e) {
  var l = Math.random() * 80 + 10;
  e.style.cssText = `
    top: calc(99% - 50px);
    left: calc(${l}%);`;
  e.setAttribute("data-pos", 1);
}

function toPos1(e) {
  var l = Math.random() * 80 + 10; // 10 - 90
  e.style.cssText = `
    left: calc(99% - 50px);
    top: calc(${l}%);`;
  e.setAttribute("data-pos", 2);
}

function toPos2(e) {
  var l = Math.random() * 80 + 10;
  e.style.cssText = `
    left: calc(${l}% - 50px);
    top: 0%;`;
  e.setAttribute("data-pos", 3);
}

function toPos3(e) {
  var l = Math.random() * 80 + 10;
  e.style.cssText = `
    left: 0;
    top: calc(${l}% - 50px);`;
  e.setAttribute("data-pos", 0);
}

var pos = [toPos0, toPos1, toPos2, toPos3];

setInterval(function() {
  var j = +i.getAttribute("data-pos");
  pos[j](i);
}, 1000);
