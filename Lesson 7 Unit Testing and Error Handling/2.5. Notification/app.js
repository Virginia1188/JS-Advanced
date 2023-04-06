function notify(message) {
  const divMsg = document.getElementById('notification');
  divMsg.textContent = message;
  divMsg.style.display = 'block';
  divMsg.addEventListener('click', () => {
    divMsg.style.display = 'none';
  });
}
