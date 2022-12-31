import anime from '/node_modules/animejs/lib/anime.es.js';

const Bay = document.getElementById('profile');
const hey = document.getElementById('avatar');
console.log(hey);

anime({
    targets: Bay,
    translateX:270,
    duration: 5000,
    easing: 'easeInOutExpo',
    autoplay: true
 });