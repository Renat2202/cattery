const questionTitle = document.querySelectorAll('.question__title');
const questionsList = document.querySelectorAll('.question');




class Question {
    constructor(questionSelector) {
        this._questionTitle = this.querySelector('.question__title');
        this._questionAnswer = this.querySelector('.question__answer');
    }

    _showAnswer() {
        this._questionAnswer.classList.toggle('.hidden');
    }

    addEventListners() {
        this._questionTitle.addEventListner('click', () => {
            this._showAnswer();
        })
    }
}

questionsList.forEach(item => {
    item = new Question();
    item.addEventListners();
})