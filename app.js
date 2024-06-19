// app.js
function submitQuestion() {
    const questionInput = document.getElementById('question-input');
    const questionText = questionInput.value.trim();
    if (questionText) {
        addQuestionToList(questionText);
        questionInput.value = ''; // 清空输入框
    }
}

function addQuestionToList(question) {
    const questionsList = document.getElementById('questions');
    const newQuestion = document.createElement('li');
    newQuestion.textContent = question;
    questionsList.appendChild(newQuestion);
}
