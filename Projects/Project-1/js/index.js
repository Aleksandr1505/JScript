const input = document.querySelector("search-form__field");
const first_button = document.querySelector(".first-button");
const modalform = document.querySelector('.modal-form');
const overlay = document.querySelector('.modal-overlay');
console.log(first_button);
console.log(modalform);
first_button.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);


function openModal(e) {
  e.preventDefault();
  modalform.classList.add('is-open');
  overlay.classList.add('is-open');
}

function closeModal() {
  modalform.classList.remove('is-open');
  overlay.classList.remove('is-open');
  window.removeEventListener('keydown', handleButtonPress)
}

// function handleClose (e) {
//   if(e.target === lbImage) {
//       return;
//   }

//   closeModal();
// }

function handleButtonPress(e) {
  if(e.code !== 'Escape') {
  return;
  }

  closeModal();
}





fetch('https://api.themoviedb.org/3/movie/64/recommendations?api_key=1d42ad8865a0c243bfacfcefa347033e&language=ru&page=1')
  .then(response => response.json())
  .then(data => {
  console.log(data);
  })
  .catch(error => {
    console.log('Error :', error);
  });