console.log('Andrew Murray - Animals Page');

// Gallery Scroller Functionality
const track = document.querySelector('.gallery_track');
const nextBtn = document.querySelector('.right_btn');
const prevBtn = document.querySelector('.left_btn');
const cards = document.querySelectorAll('.animal_card');

let currentIndex = 0;

function updateSlide() {
    const cardWidth = cards[0].offsetWidth + 20;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlide();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlide();
});

window.addEventListener('resize', updateSlide);

// To Top Button
const toTopBtn = document.getElementById('toTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }
});

toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

console.log('Animals page loaded successfully!');
