// script.js

const form = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const answers = [];
    const questions = document.querySelectorAll('.question-container');
    questions.forEach((question) => {
        const inputs = question.querySelectorAll('input[type="radio"]');
        inputs.forEach((input) => {
            if (input.checked) {
                answers.push(input.value);
            }
        });
    });
    console.log(answers);
});