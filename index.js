const menuButton = document.querySelector('#menu-button');
const sideNav = document.querySelector('.Side');
const taskContainer = document.querySelector('.task-container');
const modalTriggers = document.querySelectorAll('.modal-trigger');
const formContainer = document.querySelector('.form-container');

menuButton.addEventListener('click', () => {
    sideNav.classList.toggle('active');
}
);

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        formContainer.classList.toggle('active');
    })
}
);