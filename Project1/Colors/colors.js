console.log('Andrew Murray - Colors Page');

// Color information data
const colorInfo = {
    red: {
        name: 'Red',
        color: '#ff0000',
        description: '🍎 Red is the color of apples, fire trucks, and strawberries! Red means STOP at traffic lights!'
    },
    blue: {
        name: 'Blue',
        color: '#0000ff',
        description: '🌊 Blue is the color of the sky and the ocean! Blueberries are blue too!'
    },
    yellow: {
        name: 'Yellow',
        color: '#ffff00',
        description: '☀️ Yellow is the color of the sun and bananas! It’s a very bright and happy color!'
    },
    green: {
        name: 'Green',
        color: '#00ff00',
        description: '🌳 Green is the color of grass, leaves, and frogs! Plants love the color green!'
    },
    orange: {
        name: 'Orange',
        color: '#ffa500',
        description: '🍊 Orange is the color of oranges and pumpkins! It’s a warm and fun color!'
    },
    purple: {
        name: 'Purple',
        color: '#800080',
        description: '🍇 Purple is the color of grapes and eggplants! It’s made by mixing red and blue!'
    },
    pink: {
        name: 'Pink',
        color: '#ffc0cb',
        description: '🌸 Pink is the color of flamingos and cherry blossoms! It’s a soft and pretty color!'
    },
    brown: {
        name: 'Brown',
        color: '#8b4513',
        description: '🐻 Brown is the color of chocolate, teddy bears, and tree bark! Bears are brown!'
    },
    black: {
        name: 'Black',
        color: '#000000',
        description: '🐧 Black is the color of penguins and the night sky! It’s the darkest color!'
    },
    white: {
        name: 'White',
        color: '#ffffff',
        description: '☁️ White is the color of clouds, snow, and milk! It’s the brightest color!'
    }
};

// Modal logic
const modal = document.getElementById('colorModal');
const closeBtn = document.querySelector('.close_btn');
const colorCards = document.querySelectorAll('.color_card');

// Open modal
colorCards.forEach(card => {
    card.addEventListener('click', function() {
        const colorKey = this.getAttribute('data-color');
        const info = colorInfo[colorKey];

        document.getElementById('modalTitle').textContent = info.name;
        document.getElementById('modalColorBox').style.backgroundColor = info.color;
        document.getElementById('modalDescription').textContent = info.description;

        modal.style.display = 'block';
    });
});

// Close modal
closeBtn.addEventListener('click', () => modal.style.display = 'none');

// Close modal when clicking outside
window.addEventListener('click', event => {
    if (event.target === modal) modal.style.display = 'none';
});

// To Top Button
const toTopBtn = document.getElementById('toTopBtn');
window.addEventListener('scroll', () => {
    toTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

console.log('Colors page loaded successfully!');
