const PREFIX = 'tooltip';
const POSITION = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right'
};

class Tooltip {
  constructor(el, title, placement = POSITION.TOP, color = '#404040') {
    const element = document.querySelector(`#${el}`);
    const tooltip = document.createElement('span');

    element.classList.add(`${PREFIX}-el`);
    element.style.setProperty('--bg-color', color);
    tooltip.classList.add(`${PREFIX}-text`, `${PREFIX}-${placement}`);
    tooltip.innerHTML = title;

    element.appendChild(tooltip);
  }
}

new Tooltip('paragraph', 'Hints here with top position!', POSITION.TOP, '#4e519e');
// new Tooltip('paragraph', 'Hints here!', POSITION.BOTTOM);
// new Tooltip('paragraph', 'Hints here with left position!', POSITION.LEFT);
// new Tooltip('paragraph', 'Hints here!', POSITION.RIGHT);