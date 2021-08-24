const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth); 

// arrange the slides next to one another
const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
   currentSlide.classList.remove('current-slide');
   targetSlide.classList.add('current-slide');
}

// when i click left, move slides to the left
prevButton.addEventListener('click' , e => {
const currentSlide = track.querySelector('.current-slide');
const prevSlide = currentSlide.previousElementSibling; 
moveToSlide(track, currentSlide, prevSlide);
});
//when i click right move slide to th right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
   const nextSlide = currentSlide.nextElementSibling;
    
   moveToSlide(track, currentSlide, nextSlide);
});

// When i click the nav indicators, move to thet slide
dotsNav.addEventListener('click', e =>{
    // what indicator was clicked on??
    const targetDot = e.target.closest('button');
    
    if(!targetDot) return;    
    const currentSlide = track.querrySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    console.log(targetIndex);

});