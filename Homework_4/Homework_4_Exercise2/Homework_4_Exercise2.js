// GALLERY NAVIGATION - Scroll through cards 3 at a time
const gallery = document.getElementById('gallery');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// Each card is about 300px wide including margin
const scrollAmount = 900;

// Move right
btnRight.addEventListener('click', () => {
    if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth) {
        gallery.scrollTo({ left: 0, behavior: 'smooth' }); // loop back to start
    } else {
        gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
});

// Move left
btnLeft.addEventListener('click', () => {
    if (gallery.scrollLeft === 0) {
        gallery.scrollTo({ left: gallery.scrollWidth, behavior: 'smooth' }); // loop to end
    } else {
        gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
});
