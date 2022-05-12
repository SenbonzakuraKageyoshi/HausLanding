const mainContent = document.querySelector('main');
const menu = document.querySelector('.menu')

window.addEventListener('click', (e) => {
    if(e.target.className === 'burger-btn'){
        mainContent.style.display = 'none';
        menu.style.display = 'block';
    };
});

window.addEventListener('click', (e) => {
    if(e.target.className === 'close-menu'){
        mainContent.style.display = 'block';
        menu.style.display = 'none';
    };
});

