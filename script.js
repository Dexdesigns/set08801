
// Mobile Menu

let menu = document.querySelector ('.bx-menu');
let navbar = document.querySelector ('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-window-close');
    navbar.classList.toggle('open');
}

// Search bar

document.querySelector('#search-input').addEventListener('input', filterList);

function filterList() {
  const searchInput = document.querySelector('#search-input');
  const filter = searchInput.value.toLowerCase();
  const listItems = document.querySelectorAll('.list-group-item');
  
  listItems.forEach((item) => {
    let text = item.textContent.toLowerCase();
    if (text.includes(filter)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}


