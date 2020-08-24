class Tab {
  constructor({ selector, defaultActiveKey = 0, position = Tab.POSITION.TOP }) {
    const PREFIX = 'tab';
    const container = document.querySelector(selector);
    const [pane, content] = container.children;
    let prevIndex = defaultActiveKey;

    container.classList.add(`${PREFIX}-container`);
    pane.classList.add(`${PREFIX}-pane-${position}`);
    content.classList.add(`${PREFIX}-content-${position}`);

    const paneChildren = Array.from(pane.children);
    const contentChildren = Array.from(content.children);
    paneChildren.forEach((item, index) => {
      // Add class
      item.classList.add(`${PREFIX}-pane-item`);
      // Init defaultActive pane
      if (index === defaultActiveKey) {
        item.classList.add(`${PREFIX}-pane-item-active`);
      }

      // Add event listener
      item.addEventListener('click', () => {
        // Change pane & content active state
        if(prevIndex !== index) {
          paneChildren[prevIndex].classList.remove(`${PREFIX}-pane-item-active`);
          contentChildren[prevIndex].style.display = 'none';
          prevIndex = index;
        }
        paneChildren[index].classList.add(`${PREFIX}-pane-item-active`);
        contentChildren[index].style.display = 'block';
      });
    });

    contentChildren.forEach((item, index) => {
      // Add class
      item.classList.add(`${PREFIX}-content-item`);
      // Init defaultActive content
      if (index === defaultActiveKey) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

Tab.POSITION = {
  TOP: 'top',
  LEFT: 'left'
};

const tab = new Tab({ selector: '#whole-stuff' });
// const tab = new Tab({ selector: '#whole-stuff', position: Tab.POSITION.LEFT });