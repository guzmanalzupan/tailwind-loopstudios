const menuButton = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');

const toggleDisplayMenu = () => {
  menuButton.classList.toggle('open');
  menu.classList.toggle('hidden');
  menu.classList.toggle('flex');

}

menuButton.addEventListener('click', toggleDisplayMenu);