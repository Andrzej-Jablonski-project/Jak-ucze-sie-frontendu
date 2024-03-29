// main menu
const menuButton = document.querySelector('.menuButton');

menuButton.addEventListener('click', (e) => {
    const line = document.querySelector('.menuButton__line-js');
    const mainMenu = document.querySelector('.menu');
    if (!menuButton.classList.contains('menuButton__switch-off') & !menuButton.classList.contains('menuButton__switch-on')) {
        menuButton.classList.add('menuButton__switch-on');
        line.classList.add('switch__line-on');
        mainMenu.classList.add('menu-on');
    } else {
        line.classList.toggle('switch__line-off');
        line.classList.toggle('switch__line-on');
        menuButton.classList.toggle('menuButton__switch-on');
        menuButton.classList.toggle('menuButton__switch-off');
        mainMenu.classList.toggle('menu-on');
        mainMenu.classList.toggle('menu-off');
    }
});
const articleButton = document.querySelector('.article__button');

articleButton.addEventListener('click', (e) => {
    const articleButtonLine = document.querySelector('.article__button__line-js');
    const articleMenu = document.querySelector('.article__list');
    if (!articleButton.classList.contains('menuButton__switch-off') & !articleButton.classList.contains('menuButton__switch-on')) {
        articleButton.classList.add('menuButton__switch-on');
        articleButtonLine.classList.add('switch__line-on');
        articleMenu.classList.add('article__list-on');
    } else {
        articleButtonLine.classList.toggle('switch__line-off');
        articleButtonLine.classList.toggle('switch__line-on');
        articleButton.classList.toggle('menuButton__switch-on');
        articleButton.classList.toggle('menuButton__switch-off');
        articleMenu.classList.toggle('article__list-on');
    }
});
// main menu