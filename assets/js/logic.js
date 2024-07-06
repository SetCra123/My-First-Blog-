//Switch from dark theme to light theme
//create variables to get access HTML elements
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelectorAll('.container');

console.log(container);

// set dark as default mode

let mode = 'dark';

//create event listenter for a click 
themeSwitcher.addEventListener('click', function (event) {
    // If mode is dark, change to light
    if (mode === 'dark') {
      mode = 'light';
      container.setAttribute('class', 'light');
    }
    //If mode is light, change to dark
    else {
      mode = 'dark';
      container.setAttribute('class', 'dark');
    }
});