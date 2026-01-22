// MARK: - Helpers
const querySelector = (selectors) => {
  return document.querySelector(selectors);
};

const changeModalPostButtonsOpacity = (x) => {
  modalPostButton.style.opacity = x;
  modalPostPlusButton.style.opacity = x;
};

const handlePostModalInputStream = (e) => {
  console.log(e.target.value);
  const text = e.target.value;

  if (text.trim() !== '') {
    enableModalPostButtons();
    return;
  }
  disableModalPostButtons();
};

const handlePostButton = () => {
  querySelector('.modal').style.display = 'block';
  querySelector('.post-modal-wrapper').classList.add(
    'post-modal-wrapper-display',
  );
};

const handlePostModelCloseButton = () => {
  if (modalInput.value !== '') {
    modalInput.value = '';
    disableModalPostButtons();
  }

  querySelector('.modal').style.display = 'none';
  querySelector('.post-modal-wrapper').classList.remove(
    'post-modal-wrapper-display',
  );
};

// MARK: - Properties
const modalPostButton = querySelector('.modal-header button');
const modalPostPlusButton = querySelector('.modal-footer span');
const modalInput = querySelector('.modal-input');

const enableModalPostButtons = () => changeModalPostButtonsOpacity(1);
const disableModalPostButtons = () => changeModalPostButtonsOpacity(0.65);

// MARK: - bind
function bind() {
  querySelector('.post-btn').addEventListener('click', handlePostButton);
  querySelector('.modal-header i').addEventListener(
    'click',
    handlePostModelCloseButton,
  );
  querySelector('.modal-input').addEventListener(
    'input',
    handlePostModalInputStream,
  );

  modalInput.addEventListener('blur', (e) => {
    if (e.target.value.trim() === '') {
      disableModalPostButtons();
    }
  });
}

// MARK: - Entry
export function init() {
  bind();
}
