export class Question {
    constructor(questionContent, questionIndex, questionTemplate) {
        this._questionTemplate = questionTemplate;
        this._questionContent = questionContent;
        this._questionIndex = questionIndex;
        this._title = this._questionContent.title;
        this._text = this._questionContent.text;
    }

    generateQuestion() {
        this._element = this._getTemplate();
        this._questionNumber = this._element.querySelector('.question__number');
        this._questionTitle = this._element.querySelector('.question__title');
        this._buttonText = document.createElement('span');
        this._questionAnswer = this._element.querySelector('.question__answer');

        this._buttonText.textContent = this._title;
        this._questionTitle.append(this._buttonText);
        
        // this._questionTitle.textContent = this._title;
        this._questionNumber.textContent = `0${this._questionIndex + 1}`;
        
        this._text.forEach(element => {
            let questionParagraph = document.createElement('p');
            this._questionAnswer.append(questionParagraph);
            questionParagraph.textContent = element;
        });
        

        this._setEventListeners();
        return this._element;
    }

    _checkQuestionStatus() {
        return this._questionTitle.classList.contains('question__title_active');
    }

    _toogleAnswerVisability() {
        if(this._checkQuestionStatus()) {
            this._questionAnswer.classList.remove('hidden');
        } else {
            this._questionAnswer.classList.add('hidden');
        }
    }

    _toogleVisability() {
        this._questionTitle.classList.toggle('question__title_active');
        this._toogleAnswerVisability();
    }

    _setEventListeners() {
        this._questionTitle.addEventListener('click', () => {
            this._toogleVisability();
        })
    }

    _getTemplate() {
        const questionTemplate = this._questionTemplate.content.querySelector('.question').cloneNode(true);

        return questionTemplate;
    }
}