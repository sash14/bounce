function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var bounce = document.getElementById("bounce");
var target = document.getElementsByClassName("target");

// change position

console.log(target);

function targetPos() {
  for (var i = 0; i < target.length; i++) {
    target[i].style.cssText = `
    top: 47%;
    left: 55%;
    background: #${randNum(11, 99)}${randNum(11, 99)}${randNum(11, 99)}`;
  }
  //   target.style.cssText = `
  //     top: 95%;
  //     left: 10%;`;
}

targetPos();

function changePos(i) {
  for (var i = 0; i < target.length; i++) {
    target[i].style.cssText = `
    top: ${randNum(11, 99)}%;
    left: ${randNum(11, 99)}%;
    background: #${randNum(11, 99)}${randNum(11, 99)}${randNum(11, 99)}`;
  }
}

function moveDown() {
  bounce.style.cssText = `
    top: 95%;
    left: ${randNum(10, 80)}%;`;
  bounce.setAttribute("data-pos", 1);
}

moveDown();

function moveRight() {
  bounce.style.cssText = `
      top: 47%;
      left: 50%;`;
  bounce.setAttribute("data-pos", 2);
}

moveRight();

function moveUp() {
  bounce.style.cssText = `
        top: 0%;
        left: ${randNum(10, 80)}%;`;
  bounce.setAttribute("data-pos", 3);
}

moveUp();

function moveLeft() {
  bounce.style.cssText = `
        top: ${randNum(10, 80)}%;
        left: 0%;`;
  bounce.setAttribute("data-pos", 0);
}

moveLeft();

// console.log(bounce.style.top, target.style.top);

// if (target.style.top == bounce.style.top) {
//   changePos();
// }

var pos = [moveDown, moveRight, moveUp, moveLeft];

setInterval(function() {
  var j = +bounce.getAttribute("data-pos");
  pos[j](bounce);
  for (var i = 0; i < target.length; i++) {
    if (target[i].style.top == bounce.style.top || target[i].style.left == bounce.style.left) {
      setTimeout(() => {
        changePos(i);
      }, 1000);
    }
  }
}, 1000);
