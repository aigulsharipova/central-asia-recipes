const inputSearch = document.querySelector('.search');
const allRecipes = document.querySelectorAll('.photo');

inputSearch.addEventListener('keyup', function(event) {
  const word = event.target.value.toLowerCase();

  allRecipes.forEach(item => {item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'block') : (item.style.display = 'none'); })
})