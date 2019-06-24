// main menu
const button = document.querySelector('.menuButton');

button.addEventListener('click', () => {
    const line = document.querySelector('.menuButton__line-js');
    const mainMenu = document.querySelector('.main__menu');
    if (!button.classList.contains('menuButton__switch-off') & !button.classList.contains('menuButton__switch-on')) {
        button.classList.add('menuButton__switch-on');
        line.classList.add('switch__line-on');
        mainMenu.classList.add('main__menu-on');
    } else {
        line.classList.toggle('switch__line-off');
        line.classList.toggle('switch__line-on');
        button.classList.toggle('menuButton__switch-on');
        button.classList.toggle('menuButton__switch-off');
        mainMenu.classList.toggle('main__menu-on');
        mainMenu.classList.toggle('main__menu-off');
    }
});
// main menu