class Tooltip {
  constructor({selector, title = 'Hints', placement = Tooltip.POSITION.TOP, color = '#404040'}) {
    const PREFIX = 'tooltip';
    const element = document.querySelector(selector);
    const tooltip = document.createElement('span');

    element.classList.add(`${PREFIX}-el`);
    element.style.setProperty('--bg-color', color);
    tooltip.classList.add(`${PREFIX}-text`, `${PREFIX}-${placement}`);
    tooltip.innerHTML = title;

    element.appendChild(tooltip);
  }
}

Tooltip.POSITION = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right'
};

const tooltip = new Tooltip({
  selector: '#paragraph', 
  title: 'Hints here with top position!', 
  placement: Tooltip.POSITION.TOP, 
  color: '#4e519e'
});

// const tooltip = new Tooltip({
//   selector: '#paragraph', 
//   title: 'Hints here!', 
//   placement: Tooltip.POSITION.BOTTOM
// });

// const tooltip = new Tooltip({
//   selector: '#paragraph', 
//   title: 'Hints here with left position!',
//   placement: Tooltip.POSITION.LEFT
// });

// const tooltip = new Tooltip({
//   selector: '.withtip', 
//   title: 'Hints here!', 
//   placement: Tooltip.POSITION.RIGHT
// });