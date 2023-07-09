const promoCodeInput = document.querySelector(".js-promo-code");
const promoText = document.querySelector(".line-default p");
const promoSpan = document.querySelector(".line-default p span");

promoCodeInput.addEventListener("fieldClass", () => {
  const promoCode = promoCodeInput.value;
  localStorage.setItem("promoCode", promoCode);
});

const checkPromoCode = () => {
  const promoCode = localStorage.getItem("promoCode");

  if (promoCode && promoCode.length === 8) {
    promoText.textContent = `Kodunuz: ${promoCode}`;
    promoSpan.textContent = "";
    promoText.style.color = "red";
  } else {
    promoText.textContent = `Promo kod ${promoCode} mövcud deyil`;
    promoText.style.color = "red";
  }

  promoCodeInput.value = "";
};

const promoCodeButton = document.querySelector(".js-activate-promo-code");
promoCodeButton.addEventListener("click", checkPromoCode);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkPromoCode();
  }
});

const savedPromoCode = localStorage.getItem("promoCode");
if (savedPromoCode) {
  promoCodeInput.value = savedPromoCode;
}

const slider = document.querySelector(".slider-items");
const slideCount = slider.children.length;
let currentPosition = 0;

function slideNext() {
  if (currentPosition === slideCount - 1) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  slider.style.transform = `translateX(${currentPosition * -100}%)`;
}

const slideInterval = setInterval(slideNext, 2000);
