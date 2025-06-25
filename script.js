document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    if (quizForm) {
        const submitButton = quizForm.querySelector('.button');
        submitButton.addEventListener('click', submitQuiz);
    }
});

function submitQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const questions = quizForm.querySelectorAll('.quiz-question');
    
    questions.forEach(question => {
        const qId = question.id;
        const feedbackEl = document.getElementById(`feedback-${qId}`);
        const selected = quizForm.querySelector(`input[name=${qId}]:checked`);
        
        if (selected) {
            const correctAnswer = question.dataset.correctAnswer;
            const correctFeedback = question.dataset.correctFeedback;
            const incorrectFeedback = question.dataset.incorrectFeedback;

            if (selected.value === correctAnswer || correctAnswer.includes(selected.value)) { // Handle multiple correct answers
                feedbackEl.textContent = correctFeedback;
                feedbackEl.className = 'feedback correct';
            } else {
                feedbackEl.textContent = incorrectFeedback;
                feedbackEl.className = 'feedback incorrect';
            }
            feedbackEl.style.display = 'block';
        }
    });
}