const currentAlertElement = null;

export function showAlert(message, duration = 4000) {
  if (currentAlertElement) {
    currentAlertElement.remove();
  }

  fetch('/Modules/CommonUI/alert.html')
    .then((response) => {
      if (!response.ok) throw new Error("Can't find the alert.html");
      return response.text();
    })
    .then((html) => {
      const temp = document.createElement('div');
      temp.innerHTML = html;

      const alertElement = temp.querySelector('.alert');
      const messageElement = alertElement.querySelector('.alert-message');
      const closeIcon = alertElement.querySelector('.fa-times');

      messageElement.textContent = message;

      closeIcon.addEventListener('click', () => {
        alertElement.remove();
      });

      document.body.appendChild(alertElement);
      currentAlertElement = alertElement;

      if (duration > 0) {
        setTimeout(() => {
          if (currentAlertElement === alertElement) {
            alertElement.remove();
            currentAlertElement = null;
          }
        }, duration);
      }
    })
    .catch((error) => console.log(error));
}
