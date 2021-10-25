const addMovieModal = document.getElementById("add-modal");
const startMovieBtn = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieBtn = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieBtn = addMovieModal.querySelector(".btn--success");
const userInputs = addMovieModal.querySelectorAll("input");

const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};
const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};
const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInputs();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5)");
    return;
  }
  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInputs();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startMovieBtn.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBtn.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieBtn.addEventListener("click", addMovieHandler);
