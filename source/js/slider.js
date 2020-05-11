function imageComprassion() {
  const sliderWrap = document.querySelector(".slider__wrapper");
  const imgBefore = sliderWrap.querySelector(".slider__image--before");
  const imgAfter = sliderWrap.querySelector(".slider__image--after");
  const range = sliderWrap.querySelector("#slider");
  const buttonBefore = sliderWrap.querySelector(".slider__button--before");
  const buttonAfter = sliderWrap.querySelector(".slider__button--after");
  const checkbox = sliderWrap.querySelector(".slider__checkbox");

  function _setImageWidth(event) {
    imgBefore.style.width = 100 - event.currentTarget.value + "%";
    imgAfter.style.width = event.currentTarget.value + "%";
  }

  function setImageClassHidden(event) {
    if (event.currentTarget === buttonBefore || !this.checked) {
      imgAfter.classList.add("slider__image--disabled");
      imgBefore.classList.remove("slider__image--disabled");
      imgAfter.style.width = 0 + "%";
      imgBefore.style.width = 100 + "%";
      checkbox.checked = false;
    }
    if (event.currentTarget === buttonAfter || this.checked) {
      imgBefore.classList.add("slider__image--disabled");
      imgAfter.classList.remove("slider__image--disabled");
      imgBefore.style.width = 0 + "%";
      imgAfter.style.width = 100 + "%";
      checkbox.checked = true;
    }
  }
  range.addEventListener("input", _setImageWidth);
  range.addEventListener("change", _setImageWidth);
  checkbox.addEventListener("change", setImageClassHidden);
  buttonBefore.addEventListener("click", setImageClassHidden);
  buttonAfter.addEventListener("click", setImageClassHidden);
}

window.onload = imageComprassion;
