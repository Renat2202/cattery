export class Slider {
    constructor(
        sliderSelector,
        sliderWrapperSelector,
        sliderItemsSelector,
        sliderButtonPrevSelector,
        sliderButtonNextSelector
    ) {
        this._slider = document.querySelector(sliderSelector);
        this._sliderWrapper = this._slider.querySelector(sliderWrapperSelector);
        this._sliderItems = this._slider.querySelectorAll(sliderItemsSelector);
        this._prev = this._slider.parentNode.querySelector(sliderButtonPrevSelector);
        this._next = this._slider.parentNode.querySelector(sliderButtonNextSelector);
        this._position = 0;
    }

    _checkStylesPresence() {
        return document.head.querySelector('style#slider-style');
    }

     _addStyles() {
         if (!this._checkStylesPresence()) {
            const style = document.createElement('style');
            style.id = 'slider-style';
            style.textContent = `
            .slider {
                overflow: hidden;
            }

            .slider__wrapper {
                display: flex;
                transition: transform .5s;
                will-change: transform;
            }

            .slider__item {
                flex: 0 0 100%;
                margin: auto 0;    
            }
            `
            document.head.append(style);
        }
    }

    setEventListeners() {
        this._prev.addEventListener('click', this._prevSlide.bind(this));
        this._next.addEventListener('click', this._nextSlide.bind(this));
    }

    _prevSlide() {
        if (this._position > 0) {
        --this._position;
        console.log(this._position);
        this._sliderWrapper.style.transform = `translateX(-${this._position * 100}%)`
        }
    }

    _nextSlide() {
        if (this._position < this._sliderItems.length - 1) {
        ++this._position;
        console.log(this._position);
        this._sliderWrapper.style.transform = `translateX(-${this._position * 100}%)`
        }
    }

    _cancelTransform() {
        if (this._position > 0 && window.matchMedia('(min-width: 1071px)')) {
            this._sliderWrapper.style.transform = `translateX(${(this._position) * 100})`
        }
    }

    sliderInit() {
        this._addStyles();
        this.setEventListeners();
    }



}