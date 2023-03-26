const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Load the saved theme from localStorage or set it to 'dark' by default
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggleButton.addEventListener('click', () => {
  if (body.classList.contains('dark-theme')) {
    setTheme('light');
  } else {
    setTheme('dark');
  }
});

function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark-theme');
    themeIcon.classList.replace('bi-moon', 'bi-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    themeIcon.classList.replace('bi-sun', 'bi-moon');
    localStorage.setItem('theme', 'light');
  }
}