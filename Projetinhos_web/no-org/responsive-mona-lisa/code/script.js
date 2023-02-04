let current = "0";
let currentClass = ".skin";

function update(e) {
  current = e.value;
  if(current == "0") currentClass = ".skin";
  if(current == "1") currentClass = ".clothes";
  if(current == "2") currentClass = ".hair";
}

function applyColor(color, id) {
  let children = document.querySelector(currentClass).children;
  for(let i=0;i<children.length;i++) {
    if(children[i].className.indexOf("shoulder-in") != -1) continue;
    if(children[i].className.indexOf(color) === -1) {
      children[i].classList.add(color);
    } else {
      children[i].classList.remove(color);
    }
  }
}

function reset() {
  let classes = [".reddish", ".blueish", ".greenish", ".yellowish"];
  for(let i=0;i<classes.length;i++) {
    try {
      document.querySelectorAll(classes[i]).forEach(function (item) {
        item.classList.remove(classes[i].substring(1, classes[i].length));
      })
    }catch(e) {}
  }
}