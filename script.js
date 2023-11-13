const button = document.getElementById('button-menu');
const menu = document.getElementById('menu');

function menuActive(){
    button.classList.toggle('menu-active');
    menu.classList.toggle('active');
    menu.classList.toggle('disabled');
}

button.addEventListener('click', menuActive);