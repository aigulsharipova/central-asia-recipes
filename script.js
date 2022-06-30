const inputSearch = document.querySelector('.input-search');
const allRecipes = document.querySelectorAll('.recipes');

inputSearch.addEventListener('keyup', function(event) {
  const word = event.target.value.toLowerCase();
})