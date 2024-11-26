const menuHamburguer = document.querySelector('.nav');
menuHamburguer.addEventListener ('click', () => {
        togglesMenu();
});

function togglesMenu() {
    const nav = documento.querySelector ('.nav');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
}
