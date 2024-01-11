const menuButton = document.querySelector('#menu-button');
const sideNav = document.querySelector('.Side');

menuButton.addEventListener('click', () => {
    sideNav.classList.toggle('active');
}
);