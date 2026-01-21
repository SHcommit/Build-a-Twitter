// const devRoute = '/feed';
const devRoute = null;

const mainPageRoute = './Modules/MainPage';
const feedPageRoute = './Modules/FeedPage';
const loginPageRoute = './Modules/LoginPage';

const routes = {
  '/': {
    html: mainPageRoute + '/mainPage.html',
    js: mainPageRoute + '/mainPage.js',
  },
  '/feed': {
    html: feedPageRoute + '/feedPage.html',
    js: feedPageRoute + '/feedPage.js',
  },
  '/login': {
    html: loginPageRoute + '/loginPage.html',
    js: loginPageRoute + '/loginPage.js',
  },
};

const appContainer = document.getElementById('app');

/// url 해시에 따라서 페이지 렌더링
const renderPage = async () => {
  const path = window.location.hash.replace('#', '') || '/';

  const route = devRoute ? routes[devRoute] : routes[path];

  if (!route) {
    appContainer.innerHTML = '<h1>404 - Page Not Found...</h1>';
    return;
  }

  const response = await fetch(route.html);
  const htmlText = await response.text();

  /// DocumentFragment와 replaceChildren 사용해서 DOM 업뎃
  /// innerHTML 안 쓸거임
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlText, 'text/html');

  const fragment = document.createDocumentFragment();
  doc.body.childNodes.forEach((node) => {
    fragment.appendChild(node.cloneNode(true));
  });

  appContainer.replaceChildren(fragment);

  if (route.js) {
    try {
      const module = await import(route.js);

      if (module.init) {
        module.init();
      }
    } catch (error) {
      console.error(`'${path}' 경로 스크립트 로드 or 실행 실패`, error);
    }
  }
};

window.addEventListener('hashchange', renderPage);
window.addEventListener('load', renderPage);
