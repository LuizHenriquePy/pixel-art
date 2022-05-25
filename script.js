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