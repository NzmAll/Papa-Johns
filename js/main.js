const promoCodeInput = document.querySelector(".js-promo-code");
const promoText = document.querySelector(".row-default p");
const promoSpan = document.querySelector(".row-default p span");

promoCodeInput.addEventListener("input", () => {
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
