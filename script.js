function selected (event) {
  const colors = document.getElementsByClassName('color');
  event.target.className = "color selected";

  for (let element of colors) {
    if (element !== event.target) {
      element.className = "color"
    };
  };

};

const colors = document.getElementsByClassName('color');
for (let element of colors) {
  element.addEventListener('click', selected);
};



function changeColor (event) {
  let color = document.getElementsByClassName('selected');
  event.target.style.background = color[0].style.backgroundColor;
  console.log(color[0])
}

const pixels = document.getElementsByClassName('pixel');
for (let element of pixels) {
  element.addEventListener('click', changeColor);
};



function clearBoard (event) {
  const pixels = document.getElementsByClassName('pixel');
  for (let element of pixels) {
    element.style.background = 'white';
  };
}

const button = document.getElementById('clear-board');
button.addEventListener('click', clearBoard);