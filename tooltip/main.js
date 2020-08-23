class Tooltip {
  constructor(selector, title, placement = POSITION.TOP, color = '#404040') {
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

new Tooltip('#paragraph', 'Hints here with top position!', Tooltip.POSITION.TOP, '#4e519e');
// new Tooltip('#paragraph', 'Hints here!', Tooltip.POSITION.BOTTOM);
// new Tooltip('#paragraph', 'Hints here with left position!', Tooltip.POSITION.LEFT);
// new Tooltip('.withtip', 'Hints here!', Tooltip.POSITION.RIGHT);