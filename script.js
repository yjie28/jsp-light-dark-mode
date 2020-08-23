const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Dark or Light Images
const imageMode = (color) => {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
};

const toggleDarkLightMode = (theme) => {
  // background
  nav.style.backgroundColor =
    theme === 'dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';

  // text
  textBox.style.backgroundColor =
    theme === 'dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';

  // light mode or dark mode text
  toggleIcon.children[0].textContent = 'dark' ? 'Dark Mode' : 'Light Mode';

  // icon
  theme === 'dark'
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');

  // image
  theme === 'dark' ? imageMode('dark') : imageMode('light');
};

// Switch Theme Dynamically
switchTheme = (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    toggleDarkLightMode(DARK_THEME);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(LIGHT_THEME);
  }
};

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  toggleSwitch.checked = true;
  toggleDarkLightMode(DARK_THEME);
}

/* Cleaned Up Code. 
 
// Dark Mode Styles
const darkMode = () => {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  //   toggleIcon.children[1].classList.remove('fa-sun');
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  imageMode('dark');
};

// Light Mode Styles
const lightMode = () => {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  imageMode('light');
};

 */
