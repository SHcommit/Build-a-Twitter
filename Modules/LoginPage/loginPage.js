import { showAlert } from './../CommonUI/alert.js';

const routes = {
  feed: '/feed',
};

const navigate = (path) => {
  if (path === undefined) {
    console.log('You should enter a path : (');
    return;
  }
  window.location.hash = path;
};

const isValidatedUser = (id, pw) => {
  return id !== '' && pw !== '';
};

const handleLogin = () => {
  const inputUserInfo = document.querySelector('.user-info');
  const inputPassword = document.querySelector('.password');

  if (!isValidatedUser(inputUserInfo.value, inputPassword.value)) {
    showAlert(
      'The username and password you entered did not match our records.\n Please double-check and try again.',
    );
    return;
  }

  navigate(routes.feed);
};

const bind = () => {
  document
    .querySelector('.login-form-button')
    .addEventListener('click', handleLogin);
};

export function init() {
  bind();
}
