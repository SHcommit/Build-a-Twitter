export function init() {
  const goToFeedPage = document.getElementById('goFeed');
  const goToSignUpPage = document.getElementById('gotoSignUp');

  if (!goToFeedPage) {
    return;
  }

  goToFeedPage.addEventListener('click', () => {
    window.location.hash = '/feed';
  });

  goToSignUpPage.addEventListener('click', () => {
    window.location.hash = '/signup';
  });
}