
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
    const contenido = `
        <div class="titulo-inicio">
            <h1>Recetas Fáciles y Ricas</h1>
            <h3 class="subtitulo-inicio">
                <p>Si hoy toca cenar en el sofá necesitas dar un vistazo a estas recetas rápidas y fáciles de cocinar.</p>
                <p>¿Con cuál de todas te quedas?</p>
            </h3>
            <section class="seccion-links">
                <div class="card-links" onclick="handleClickMenu('recetas')">
                    <h4>Nuestras Recetas</h4>
                </div>
                <div class="card-links" onclick="handleClickMenu('contacto')">
                    <h4>Dejanos un mensaje</h4>
                </div>
            </section>
        </div>

    `
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


