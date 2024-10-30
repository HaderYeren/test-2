const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

const updateImageSize = (event) => {
  const sliderValue = event.target.value;
  sliderImage.style.width = `${sliderValue}%`;
};

sliderInput.addEventListener('input', _.debounce(updateImageSize, 150));


