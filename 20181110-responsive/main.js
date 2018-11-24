document.addEventListener('DOMContentLoaded', function () {
    document.removeEventListener('DOMContentLoaded', () => {});
    const trigger = document.querySelector('.main_menu .trigger');
    const list = document.querySelector('.main_menu ul');

    trigger.addEventListener('click', function () {
        list.classList.toggle('expanded');
    });
});