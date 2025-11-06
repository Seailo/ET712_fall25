/*
   Andrew Murray
   Pre-K Learning Website - JavaScript
   November 2025
*/

console.log('Andrew Murray - Pre-K Learning Website');

// ========== IMAGE SCROLLER FUNCTIONALITY ==========
const track = document.querySelector('.image_track');
const nextBtn = document.querySelector('.right_btn');
const prevBtn = document.querySelector('.left_btn');
const cards = document.querySelectorAll('.learning_card');

let currentIndex = 0;

// Function to update slide position
function updateSlide() {
    const cardWidth = cards[0].offsetWidth + 20; // card width + gap
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Next button click event
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSlide();
});

// Previous button click event
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSlide();
});

// Update on window resize
window.addEventListener('resize', updateSlide);

// ========== TO TOP BUTTON FUNCTIONALITY ==========
const toTopBtn = document.getElementById('toTopBtn');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

