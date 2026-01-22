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

  const sidebar = querySelector('.sidebar');
  const sidebarWrapper = querySelector('.sidebar-wrapper');

  const userProfileSideMenu = querySelector('.user-profile');
  userProfileSideMenu.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
  });

  const sidebarCloseButton = querySelector('.sidebar-header i');
  sidebarCloseButton.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
  });

  const darkModeToggle = querySelector('.dark-mode-toggle');
  const darkModeConverter = querySelector('.circle');
  darkModeToggle.addEventListener('click', () => {
    /// 없으면 추가, 있으면 제거(토글느낌)
    darkModeConverter.classList.toggle('move');
  });
}

// MARK: - Entry
export function init() {
  bind();
}
