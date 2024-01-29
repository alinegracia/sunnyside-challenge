const iconMenu = document.getElementById('icon-menu');
const ul = document.querySelector('ul');

iconMenu.addEventListener('click', () => {
    ul.classList.toggle("active")
})