function changeColorPixel (event) {
  let color = document.getElementsByClassName('selected');
  event.target.style.background = color[0].style.backgroundColor;
  console.log(color[0])
}


function clearBoard (event) {
  const pixels = document.getElementsByClassName('pixel');
  for (let element of pixels) {
    element.style.background = 'white';
  };
}


function createBoard (value) {
  const pixelsBoard = document.getElementById('pixel-board');
  for (let index = 0; index < value; index += 1) {
    let div = document.createElement('div');
    pixelsBoard.appendChild(div);
    for (let index = 0; index < value; index += 1) {
      let pixel = document.createElement('div');
      pixel.addEventListener('click', changeColorPixel);
      pixel.className = 'pixel';
      div.appendChild(pixel);
    };
  }
}


function selectedColor (event) {
  const colors = document.getElementsByClassName('color');
  event.target.className = "color selected";

  for (let element of colors) {
    if (element !== event.target) {
      element.className = "color";
    };
  };

}


function changeBoardSize (event) {
  const input = document.getElementById('board-size');
  const pixelsBoard = document.getElementById('pixel-board');

  if (parseInt(input.value) >= 5 && parseInt(input.value) <= 50) {
    pixelsBoard.innerText = '';
    createBoard(input.value);
  } else if (parseInt(input.value) < 5 && parseInt(input.value) !== 0) {
    pixelsBoard.innerText = '';
    createBoard(5);
  } else if (parseInt(input.value) > 50) {
    pixelsBoard.innerText = '';
    createBoard(50);
  } else {
    alert('Board inválido!');
  };
};



// Selected color
const colors = document.getElementsByClassName('color');
for (let element of colors) {
  element.addEventListener('click', selectedColor);
}

// Button clear board
const buttonClearBoard = document.getElementById('clear-board');
buttonClearBoard.addEventListener('click', clearBoard);

// Button change board size
const buttonChangeBoardSize = document.getElementById('generate-board');
buttonChangeBoardSize.addEventListener('click', changeBoardSize);

createBoard(5);