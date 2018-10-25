document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('ul.genere-tabs li');
    const radios = document.querySelectorAll('.genere-tabs input[type="radio"]');
    const list = document.querySelectorAll('ul.playlist li');

    [...radios].forEach(radio => {
        radio.addEventListener('change', () => {
            const genere = radio.parentNode.dataset['genere'];
            [...list].forEach(element => {
                element.style.display = (!genere || element.dataset['genere'] === genere)? 'block' : 'none';
            });
        });
    });
}, false);