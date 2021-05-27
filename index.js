import { Question } from "./components/Question.js";
import { Slider } from "./components/Slider.js";
import { questionsContent } from './utils/questions-content.js';

const template = document.querySelector(".question-template");
const questionsList = document.querySelector('.questions__list');



function createQuestion(questionInfo, questionNumber) {
    const question = new Question(questionInfo, questionNumber, template);

    const newQuestion = question.generateQuestion();

    return newQuestion;
}

function renderQuestions() {
    questionsContent.forEach((item, index) => {
        const questionItem = createQuestion(item, index);
        
        questionsList.append(questionItem);
    })
}

renderQuestions();




const newSlider = new Slider (
    '.slider',
    '.slider__wrapper',
    '.slider__item',
    '.slider__prev',
    '.slider__next'
    );

newSlider.sliderInit();   