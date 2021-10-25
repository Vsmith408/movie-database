const addMovieModal = document.getElementById("add-modal");
const startMovieBtn = document.querySelector("header button");
const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
};

startMovieBtn.addEventListener("click", toggleMovieModal);
