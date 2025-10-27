// Andrew Murray - Homework 4 Exercise 2

// SELECT ELEMENTS - Gallery wrapper and buttons
const cardWrapper = document.getElementById('cardWrapper');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// VARIABLE - Card width used for scrolling calculation
const cardWidth = 220 * 3; // 3 visible cards

// EVENT HANDLERS - Scroll left and right with loop behavior
btnRight.addEventListener('click', () => {
    if (cardWrapper.scrollLeft + cardWidth >= cardWrapper.scrollWidth) {
        // Loop to start when reaching end
        cardWrapper.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        // Scroll to next set of cards
        cardWrapper.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
});

btnLeft.addEventListener('click', () => {
    if (cardWrapper.scrollLeft === 0) {
        // Loop to end when scrolling left from start
        cardWrapper.scrollTo({ left: cardWrapper.scrollWidth, behavior: 'smooth' });
    } else {
        // Scroll back to previous set
        cardWrapper.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
});
