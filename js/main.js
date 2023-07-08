const promoCodeInput = document.querySelector(".js-promo-code");

promoCodeInput.addEventListener("input", () => {
  const promoCode = promoCodeInput.value;
  localStorage.setItem("promoCode", promoCode);
});

const activatePromoCode = () => {
  const promoCode = localStorage.getItem("promoCode");

  if (promoCode && promoCode.length === 8) {
    alert(`Kodunuz qeyde alındı: ${promoCode}`);
  } else {
    alert("Belə bir promo kodu yoxdur");
  }

  promoCode = "";
};

const promoCodeButton = document.querySelector(".js-activate-promo-code");
promoCodeButton.addEventListener("click", activatePromoCode);

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const promoCode = localStorage.getItem("promoCode");
    if (promoCode && promoCode.length === 8) {
      alert(`Kodunuz qeyde alındı: ${promoCode}`);
    } else {
      alert("Belə bir promo kodu yoxdur");
    }
    promoCodeInput.value = "";
  }
});

const savedPromoCode = localStorage.getItem("promoCode");
if (savedPromoCode) {
  promoCodeInput.value = savedPromoCode;
}
