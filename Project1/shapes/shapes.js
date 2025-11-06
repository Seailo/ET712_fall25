console.log('Andrew Murray - Shapes Page');

// Quiz Data
const shapes = [
    { name: 'circle', html: '<div class="circle"></div>' },
    { name: 'square', html: '<div class="square"></div>' },
    { name: 'triangle', html: '<div class="triangle"></div>' },
    { name: 'rectangle', html: '<div class="rectangle"></div>' },
    { name: 'star', html: '<div class="star">⭐</div>' },
    { name: 'heart', html: '<div class="heart">❤️</div>' },
    { name: 'oval', html: '<div class="oval"></div>' },
    { name: 'diamond', html: '<div class="diamond"></div>' },
    { name: 'pentagon', html: '<div class="pentagon">⬟</div>' },
    { name: 'hexagon', html: '<div class="hexagon">⬢</div>' }
];

let currentShape = null;

// Random Shape Loader
function loadRandomShape() {
    const randomIndex = Math.floor(Math.random() * shapes.length);
    currentShape = shapes[randomIndex];
    document.getElementById('quizShapeDisplay').innerHTML = currentShape.html;
}
loadRandomShape();

// Quiz Logic
const answerInput = document.getElementById('shapeAnswer');
const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('quizFeedback');
const quizForm = document.getElementById('shapeQuizForm');

answerInput.addEventListener('input', () => {
    const value = answerInput.value.trim();
    if (value.length >= 3) {
        answerInput.classList.add('input_valid');
        answerInput.classList.remove('input_invalid');
        submitBtn.disabled = false;
    } else {
        answerInput.classList.add('input_invalid');
        answerInput.classList.remove('input_valid');
        submitBtn.disabled = true;
    }
});

quizForm.addEventListener('submit', e => {
    e.preventDefault();
    const userAnswer = answerInput.value.trim().toLowerCase();

    if (userAnswer === currentShape.name) {
        feedback.textContent = '🎉 Correct! Great job!';
        feedback.className = 'quiz_feedback feedback_correct';
        feedback.style.display = 'block';
        setTimeout(() => {
            loadRandomShape();
            answerInput.value = '';
            answerInput.classList.remove('input_valid', 'input_invalid');
            submitBtn.disabled = true;
            feedback.style.display = 'none';
        }, 2000);
    } else {
        feedback.textContent = `❌ Not quite! Try again! Hint: It's a ${currentShape.name}`;
        feedback.className = 'quiz_feedback feedback_incorrect';
        feedback.style.display = 'block';
        answerInput.value = '';
        answerInput.classList.remove('input_valid', 'input_invalid');
        submitBtn.disabled = true;
    }
});

// To Top Button
const toTopBtn = document.getElementById('toTopBtn');
window.addEventListener('scroll', () => {
    toTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

console.log('Shapes page loaded successfully!');
