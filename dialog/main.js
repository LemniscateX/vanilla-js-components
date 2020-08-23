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

    // Create element

    const overlay = document.createElement('div');
    const dialog = document.createElement('div');
    const header = document.createElement('div');
    const body = document.createElement('div');
    const footer = document.createElement('div');
    const closeBtn = document.createElement('span');
    const okBtn = document.createElement('button');

    // Add property & Determine relationship

    closeBtn.innerHTML = '&times;';
    okBtn.innerHTML = okText;
    okBtn.classList.add(`${PREFIX}-ok-btn`);

    overlay.classList.add(`${PREFIX}-overlay`);

    dialog.classList.add(`${PREFIX}-container`);

    header.innerHTML = `<h3>${title}</h3>`;
    header.appendChild(closeBtn);
    header.classList.add(`${PREFIX}-header`);

    body.innerHTML = `<p>${content}</p>`;
    body.classList.add(`${PREFIX}-body`);

    footer.appendChild(okBtn);
    footer.classList.add(`${PREFIX}-footer`);

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
        if (this.overlay.style.display === 'block' && e.keyCode === 27) {
          this.close();
        }
      });
    }

    dialog.append(header, body, footer);
    overlay.append(dialog);
    document.body.appendChild(overlay);

    this.overlay = overlay;
  }

  open() {
    this.overlay.style.display = 'block';
  }

  close() {
    this.overlay.style.display = 'none';
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