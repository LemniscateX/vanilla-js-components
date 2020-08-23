class Dialog {
  constructor({
    title = 'Hint',
    content = 'Default Content',
    type = Dialog.TYPE.MESSAGE,
    maskClosable = true,
    keyboard = true,
    options: {
      okText = 'OK',
      cancelText = 'Cancel',
      handleOk = this.close,
      handleCancel = this.close
    } = {} } = {}) {
    const PREFIX = 'dialog';

    // Create element & variable
    const overlay = document.createElement('div');
    this.element = overlay;
    overlay.classList.add(`${PREFIX}-overlay`);
    overlay.innerHTML = `
      <div class="${PREFIX}-container">
        <div class="${PREFIX}-header">
          <h3>${title}</h3>
          <span class="${PREFIX}-close-btn">&times</span>
        </div>
        <div class="${PREFIX}-body">
          <p>${content}</p>
        </div>
        <div class="${PREFIX}-footer">
          <button class="${PREFIX}-ok-btn">${okText}</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    const footer = document.querySelector(`.${PREFIX}-footer`);
    const closeBtn = document.querySelector(`.${PREFIX}-close-btn`);
    const okBtn = document.querySelector(`.${PREFIX}-ok-btn`);

    // Bind event
    closeBtn.addEventListener('click', () => {
      this.close();
    });
    okBtn.addEventListener('click', () => {
      handleOk.apply(this);
      this.close();
    });

    // Deal with confirm-typed dialog
    if (type === Dialog.TYPE.CONFIRM) {
      const cancelBtn = document.createElement('button');
      cancelBtn.innerHTML = cancelText;
      cancelBtn.classList.add(`${PREFIX}-cancel-btn`);
      footer.insertBefore(cancelBtn, okBtn);
      cancelBtn.addEventListener('click', () => {
        handleCancel.apply(this);
        this.close();
      });
    }

    // Deal with closable mask
    if (maskClosable) {
      overlay.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
          this.close();
        }
      });
    }

    // Deal with esc keypress
    if (keyboard) {
      document.addEventListener('keydown', (e) => {
        if (this.element.style.display === 'block' && e.keyCode === 27) {
          this.close();
        }
      });
    }
  }

  open() {
    this.element.style.display = 'block';
  }

  close() {
    this.element.style.display = 'none';
  }
}

Dialog.TYPE = {
  MESSAGE: 'message',
  CONFIRM: 'confirm'
};

const dialog = new Dialog({
  title: '提示',
  content: '请前往9¾月台乘坐霍格沃兹特快列车。',
  type: Dialog.TYPE.CONFIRM,
  options: {
    okText: '确定',
    cancelText: '取消'
  }
});

// const dialog = new Dialog({
//   content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum, massa sit amet volutpat mattis, diam urna lobortis mauris, ut venenatis turpis nisl at enim. Integer ullamcorper nulla tristique tortor mattis pharetra. Vestibulum vel mi vitae erat finibus bibendum sit amet et purus. ',
//   maskClosable: false,
//   keyboard: false,
//   options: {
//     handleOk: () => {
//       alert('handling ok');
//     }
//   }
// });

document.querySelector('#show-modal-btn').addEventListener('click', () => {
  dialog.open();
});