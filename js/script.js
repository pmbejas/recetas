
const handleClickMenu = (item) => {
    const mainContent = document.getElementById('main-section');
    switch (item) {
        case 'inicio':
            mainContent.innerHTML = itemInicio();
            break;
        case 'recetas':
            mainContent.innerHTML = itemRecetas();
            break;
        case 'contacto':
            mainContent.innerHTML = itemContacto();
            break;
    }
}

const itemInicio = () => {
    const contenido = `<h1> INICIO </h1>`
    return contenido;
}

const itemRecetas = () => {
    const contenido = `<h1>RECETAS</h1>`;
    return contenido;
}

const itemContacto = () => {
    const contenido = `<h1>CONTACTO</h1>`;
    return contenido;
}

document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-section');
    mainContent.innerHTML = itemInicio();
});

