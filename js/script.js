const button = document.getElementById('button-menu');
const menuMob = document.getElementById('menu-mobile');

function menuActive(){
    button.classList.toggle('menu-active');
    menuMob.classList.toggle('active');
    menuMob.classList.toggle('disabled');
}

button.addEventListener('click', menuActive);


// Para realizar o efeito de transição do scroll de maneira suave
// Utilizando jquery

//Comentado para testes no scroll-behavior: smooth; 

/*
var $doc = $('html, body');
$('.scroll').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});*/