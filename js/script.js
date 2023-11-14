const button = document.getElementById('button-menu');
const menuMob = document.getElementById('menu-mobile');

function menuActive(){
    button.classList.toggle('menu-active');
    menuMob.classList.toggle('active');
    menuMob.classList.toggle('disabled');
}

button.addEventListener('click', menuActive);