const inputSearch = document.querySelector('.input-search');
const allRecipes = document.querySelectorAll('.recipes');

inputSearch.addEventListener('keyup', function(event) {
  const word = event.target.value.toLowerCase();
})
allRecipes.forEach(item => {item.querySelector(p).textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none'); })