onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const showCardButton = document.querySelector(".show-card");
const cardContainer = document.querySelector(".card");

showCardButton.addEventListener("click", () => {
  if (cardContainer.style.display === "block") {
    cardContainer.style.display = "none";
  } else {
    cardContainer.style.display = "block";
  }
});
