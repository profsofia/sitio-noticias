console.log("Hola mundo");

document.querySelector('.menu-btn').addEventListener('click', () =>{
    console.log("boton funcionando");
    document.querySelector('.nav-menu').classList.toggle('show');
});
//srcoll reveal para el efecto de aparecer
ScrollReveal().reveal('.showCase', {delay: 500});
ScrollReveal().reveal('.newsCards', {delay: 400});
ScrollReveal().reveal('.cards-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
ScrollReveal().reveal('.social', {delay: 500});
ScrollReveal().reveal('.footer-links', {delay: 500});