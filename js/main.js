const hambBtn = document.getElementById('nav-hamburguer-menu');
const menu = document.getElementById('menu');

const desplegarMenu = () => {
    if(menu.style.display == ''){
        menu.style.display = 'flex'
    } else {
        menu.style.display = ''
    }
}

hambBtn.addEventListener('click',desplegarMenu);