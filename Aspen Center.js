const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextbutton = document.querySelector('.carousel__button--right');
const previousbutton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth);
//arange the slides next to one another
const setSlidePosition = (slide, index) =>{
slide.style.left = slideWidth * index + 'px'; 
};
slides.forEach(setSlidePosition);

const moveToSlide =(track, currentSlide, targetSlide) =>{
track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
currentSlide.classList.remove('current-slide');
targetSlide.classList.add('current-slide');
}
const dotsUpdate = (currentDot,targetDot) =>{
currentDot.classList.remove('current-slide');
targetDot.classList.add('current-slide');
}
const hideShowArrows = (slides, previousbutton, nextbutton , targetIndex) =>{
    
if (targetIndex === 0){
    previousbutton.classList.add('is-hidden');
    nextbutton.classList.remove('is-hidden');
    }else if(targetIndex === slides.length -1){
    previousbutton.classList.remove('is-hidden');
    nextbutton.classList.add('is-hidden');
    } else {
    previousbutton.classList.remove('is-hidden');
    nextbutton.classList.remove('is-hidden');
    }
};
//when click left move slides to left
previousbutton.addEventListener('click', e =>{
const currentSlide = track.querySelector('.current-slide');
const previousSlide = currentSlide.previousElementSibling;
const currentDot = dotsNav.querySelector('.current-slide');
const previousDot = currentDot.previousElementSibling;
const previousIndex = slides.findIndex(slide => slide === previousSlide);
moveToSlide(track, currentSlide, previousSlide);
dotsUpdate(currentDot, previousDot);
hideShowArrows(slides, previousbutton, nextbutton, previousIndex);
});

//when i click right move slides to right
nextbutton.addEventListener('click', e =>{
const currentSlide = track.querySelector('.current-slide');
const nextSlide = currentSlide.nextElementSibling;
const currentDot = dotsNav.querySelector('.current-slide');
const nextDot =currentDot.nextElementSibling;
const nextIndex = slides.findIndex(slide => slide === nextSlide);
moveToSlide(track, currentSlide, nextSlide);
dotsUpdate(currentDot, nextDot);
hideShowArrows(slides, previousbutton, nextbutton, nextIndex);
});
//when i click the nav indicators,move to that slide

dotsNav.addEventListener('click', e =>{
//what indicator was clicked on?
const targetDot = e.target.closest('button');

if(!targetDot) return;

const currentSlide = track.querySelector('.current-slide');
const currentDot = dotsNav.querySelector('.current-slide');
const targetIndex = dots.findIndex(dot => dot === targetDot);
const targetSlide = slides[targetIndex];

moveToSlide(track, currentSlide, targetSlide);
dotsUpdate(currentDot,targetDot);
hideShowArrows(slides, previousbutton, nextbutton, targetIndex);
});