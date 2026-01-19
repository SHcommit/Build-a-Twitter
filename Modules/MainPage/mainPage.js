export function init() {
  const goToFeedPage = document.getElementById('goFeed');
  if (!goToFeedPage) {
    return;
  }

  goToFeedPage.addEventListener('click', () => {
    window.location.hash = '/feed';
  });
}
