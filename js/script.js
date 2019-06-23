// main menu
const button = document.querySelector('.menuButton');

const pullOutMenu = () => {
    const line = document.querySelector('.menuButton__line-js');
    if (!button.classList.contains('menuButton__switch-off') & !button.classList.contains('menuButton__switch-on')) {
        button.classList.add('menuButton__switch-on');
        line.classList.add('switch__line-on');
    } else {
        line.classList.toggle('switch__line-off');
        line.classList.toggle('switch__line-on');
        button.classList.toggle('menuButton__switch-on');
        button.classList.toggle('menuButton__switch-off');
    }
}
button.addEventListener('click', pullOutMenu);
// main menu
console.log(`Witaj na stronie!`);

let age; - 'zmienna zadeklarowana'
let name = 'Andrzej Jabłoński'; - 'zmienna z przypisaną zawartością (zainicjalizowana)'
console.log(`Nazywam się ${name}`);

const hello = (name, age) => console.log(`Na strone serdecznie zaprasza cię ${name} administrator ${age} letni.`);
hello('Andrzej', 30);