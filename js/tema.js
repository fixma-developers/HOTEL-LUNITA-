// Obtener el botón
const themeSwitchBtn = document.getElementById('theme-switch-btn');

// Escuchar el evento click en el botón
themeSwitchBtn.addEventListener('click', () => {
  // Obtener el body
  const body = document.body;

  // Cambiar la clase del body
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
});
