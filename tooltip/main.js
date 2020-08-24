class Tooltip {
  constructor({selector, title = 'Hints', placement = POSITION.TOP, color = '#404040'}) {
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

new Tooltip({
  selector: '#paragraph', 
  title: 'Hints here with top position!', 
  placement: Tooltip.POSITION.TOP, 
  color: '#4e519e'
});

// new Tooltip({
//   selector: '#paragraph', 
//   title: 'Hints here!', 
//   placement: Tooltip.POSITION.BOTTOM
// });

// new Tooltip({
//   selector: '#paragraph', 
//   title: 'Hints here with left position!',
//   placement: Tooltip.POSITION.LEFT
// });

// new Tooltip({
//   selector: '.withtip', 
//   title: 'Hints here!', 
//   placement: Tooltip.POSITION.RIGHT
// });