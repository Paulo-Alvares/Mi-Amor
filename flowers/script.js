onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const showCardButton = document.querySelector(".show-card");
const cardContainer = document.querySelector(".card");

showCardButton.addEventListener("click", () => {
  if (showCardButton.classList.contains("active")) {
    showCardButton.classList.remove("active");
    cardContainer.classList.add("show");
  } else {
    cardContainer.classList.remove("show");
    showCardButton.classList.add("active");
  }
});
