console.log('Andrew Murray - Numbers Page Loaded');

// Interactive click counter for each number card
const numberCards = document.querySelectorAll('.number_card');

numberCards.forEach(card => {
    let clickCount = 0;
    const maxNumber = parseInt(card.getAttribute('data-number'));
    const emoji = card.getAttribute('data-emoji');
    const countDisplay = card.querySelector('.count');
    const emojiDisplay = card.querySelector('.emoji_display');

    //Data changing after grab String-Integer ^//

    card.addEventListener('click', () => {
        // Increment click count
        clickCount++;

        // Update click count display
        countDisplay.textContent = clickCount;

        // Show emojis up to the target number
        let emojiString = '';
        for (let i = 0; i < Math.min(clickCount, maxNumber); i++) {
            emojiString += emoji + ' ';
        }
        emojiDisplay.textContent = emojiString;

        // Celebrate when reaching target number
        if (clickCount === maxNumber) {
            card.style.background = 'linear-gradient(135deg, #ffd166, #ffb703)';
            setTimeout(() => {
                card.style.background = 'white';
            }, 500);
        }

        // Reset after reaching target + 2 clicks
        if (clickCount > maxNumber + 2) {
            clickCount = 0;
            countDisplay.textContent = '0';
            emojiDisplay.textContent = '';
        }
    });
});

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

console.log('Numbers page loaded successfully!');
