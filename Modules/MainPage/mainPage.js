const routes = {
  feed: '/feed',
  signUp: '/',
  logIn: '/login',
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

const handleMiddleContent = (e) => {
  const shouldGoToLoginPage = e.target.classList[0] === 'log-in';
  // TODO: - sign-up 이거도 해야함

  if (shouldGoToLoginPage) {
    navigate(routes.logIn);
    return;
  }
};

const handleLogin = () => {
  const inputUserInfo = document.querySelector('.user-info');
  const inputPassword = document.querySelector('.password');

  if (!isValidatedUser(inputUserInfo.value, inputPassword.value)) {
    navigate(routes.logIn);
    return;
  }

  navigate(routes.feed);
};

export function init() {
  const middleContentElement = document.querySelector('.middle-content');
  const upperLoginButton = document.querySelector('.btn-top');

  upperLoginButton.addEventListener('click', handleLogin);

  middleContentElement.addEventListener('click', handleMiddleContent);
}
