// Color palette
function updateSelectedColorView() {
  const selectColor = document.querySelector('.selected');
  const selectColorView = document.querySelector('#selected-color-view');
  selectColorView.style.background = selectColor.style.backgroundColor; 
}

function selectColor(event) {
  const divSelectColor = document.querySelector('.selected');
  if (divSelectColor !== null) {
    divSelectColor.className = 'color';
  }
  event.target.className = 'color selected';
  updateSelectedColorView();
}

function createColorPalette(colorList, divPalette) {
  for (let color of colorList) {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.background = color;
    div.addEventListener('click', selectColor);
    divPalette.appendChild(div);
  }
}

function createRandomColorPalette() {
  let colorList = [];
  for (let index = 0; index < 32; index += 1) {
    const color = () => Math.floor(Math.random() * 255);
    colorList.push(`rgb(${color()}, ${color()}, ${color()})`)
  }
  const divRandomColorPalette = document.querySelector('#random-color-palette');
  createColorPalette(colorList, divRandomColorPalette);
}

function createFixedColorPalette() {
  colorList = [
    'rgb(255, 255, 255)', 'rgb(135, 37, 235)',  
    'rgb(61, 68, 190)', 'rgb(221, 151, 126)', 
    'rgb(214, 81, 234)', 'rgb(91, 107, 162)',
    'rgb(114, 234, 134)', 'rgb(73, 253, 181)',
    'rgb(124, 110, 195)', 'rgb(152, 188, 184)',
    'rgb(100, 131, 236)', 'rgb(170, 111, 80)',
    'rgb(155, 186, 83)',  'rgb(232, 192, 138)',
    'rgb(76, 59, 243)',   'rgb(29, 37, 21)',
    'rgb(68, 121, 181)',  'rgb(157, 191, 41)',
    'rgb(153, 140, 132)', 'rgb(106, 250, 175)',
    'rgb(141, 232, 167)', 'rgb(123, 214, 226)',
    'rgb(82, 182, 188)', 'rgb(29, 28, 108)',
    'rgb(187, 243, 193)', 'rgb(209, 34, 76)',
    'rgb(205, 55, 5)',    'rgb(193, 231, 42)',
    'rgb(150, 214, 217)', 'rgb(194, 9, 154)',
    'rgb(171, 17, 159)',  'rgb(33, 161, 4)',
  ]
  const divFixedColorPalette = document.querySelector('#fixed-color-palette');
  createColorPalette(colorList, divFixedColorPalette);
  const colorWhite = document.querySelector('#fixed-color-palette .color');
  colorWhite.className = 'color selected';
}


// Board pixel
function paintPixel(event) {
  const color = document.querySelector('.selected');
  event.target.style.background = color.style.backgroundColor;
}

function createBoard(size) {
  const board = document.querySelector('#board');
  for (index = 0; index < size; index += 1) {
    const column = document.createElement('div');
    column.className = 'column';
    for (index1 = 0; index1 < size; index1 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', paintPixel);
      column.appendChild(pixel);
    }
    board.appendChild(column);
  }
}


// Buttons
function paintBoard(color) {
  const pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.style.background = color;
  }
}

function buttonClear() {
  paintBoard('white');
}

function buttonBucket() {
  const color = document.querySelector('.selected');
  paintBoard(color.style.background);
}


// Board Size
function changeBoardSize(size) {
  const board = document.querySelector('#board');
  board.innerHTML = '';
  createBoard(size);
}

function updateBoardSizeView(size) {
  const boardSizeView = document.querySelector('#board-size-view');
  boardSizeView.innerText = `${size}px X ${size}px`;
}

function rangeBoardSize(event) {
  changeBoardSize(event.target.value);
  updateBoardSizeView(event.target.value);
}


// Calling functions
createRandomColorPalette();
createFixedColorPalette();
createBoard(5);

// Add event listener
const btnBucket = document.querySelector('#button-bucket');
btnBucket.addEventListener('click', buttonBucket);
const btnClear = document.querySelector('#button-clear');
btnClear.addEventListener('click', buttonClear);
const rgBoardSize = document.querySelector('#range-board-size');
rgBoardSize.addEventListener('change', rangeBoardSize);