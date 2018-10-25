const button = document.querySelector('button');
const footer = document.querySelector('footer');
const list_items = document.querySelectorAll('ol > li');

button.addEventListener('click', () => {
    let sum = 0;
    [...list_items].forEach(x => {
        sum += +x.dataset['price'];
    });
    footer.innerText = sum;
});