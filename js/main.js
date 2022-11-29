// MENU DE HAMBURGUESA NAV BAR
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

//ABOUT --> VER PDF BTN

const aboutContainer = document.getElementById('about-img');
const btn = document.getElementById('btn-pdf');
const mostrarBtn = () => {
        btn.style.display = 'block';
}
const ocultarBtn = () => {
    btn.style.display = 'none';
}

aboutContainer.addEventListener('mouseover', mostrarBtn);
btn.addEventListener('mouseover',mostrarBtn)
aboutContainer.addEventListener('mouseleave', ocultarBtn);