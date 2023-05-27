let recetas = [];

const cargaInicial = () => {
    const getRecetas = async () => {
        await fetch('../data/recetas.json')
            .then(response => response.json())
            .then(data => {
                for(receta of data) {
                    recetas.push(receta)
                }
            })
            .catch (err => {
                console.log(err);
            });
    }
    getRecetas();
}

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
        <div class="main__inicio__titulo">
            <h1>Recetas Fáciles y Ricas</h1>
            <h3>
                <p>Si hoy toca cenar en el sofá necesitas dar un vistazo a estas recetas rápidas y fáciles de cocinar.</p>
                <p>¿Con cuál de todas te quedas?</p>
            </h3>
            <section class="main__inicio__links">
                <div class="main__inicio__links__card" onclick="handleClickMenu('recetas')">
                    <h4>Nuestras Recetas</h4>
                </div>
                <div class="main__inicio__links__card" onclick="handleClickMenu('contacto')">
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
    const contenido = `
        <div class="main__consulta">
            <div class="main__consulta__titulo">
                <h1>Dejanos Tu Consulta</h1>
            </div>
            <p>Complete este Formulario de Consulta para obtener información adicional sobre nuestros productos o servicios. Lo contactaremos a la brevedad por teléfono o email. </p>
            <form id="contact-form" action="">
                <div class="main__form__fieldGroup">
                    <div class="main__form__fieldGroup__line width48">
                        <label for="nombre">Nombre:</label>
                        <input class="main__form__fieldGroup__line__field" type="text" id="nombre" name="nombre" required>
                    </div>
                    <div class="main__form__fieldGroup__line width48">
                        <label for="apellido">Apellido:</label>
                        <input class="main__form__fieldGroup__line__field" type="text" id="apellido" name="apellido" required>
                    </div>
                </div>
                <div class="main__form__fieldGroup__line">
                    <label for="email">Correo electrónico:</label>
                    <input class="main__form__fieldGroup__line__field" type="email" id="email" name="email" required>
                </div>
                <div class="main__form__fieldGroup__line">
                    <p>Por favor, sea específico acerca de la duda que quiere enviar a través de este Formulario de Consulta, de forma tal que podamos contactarlo rápidamente con la información que necesita. Le agradecemos su tiempo.</p>
                </div>
                <div class="main__form__fieldGroup__line">
                    <label for="tipoConsulta">Motivo de la Consulta</label>
                    <select class="main__form__fieldGroup__line__field" name="tipoConsulta" id="tipoConsulta">
                        <option value="1">Enviarnos una Sugerencia</option>
                        <option value="2">Solicitarnos una Receta</option>
                        <option value="3">Mejorar alguna receta publicada</option>
                        <option value="4">Otros</option>
                    </select>
                </div>
                <div class="main__form__fieldGroup__line">
                    <label for="mensaje">Mensaje:</label>
                    <textarea class="main__form__fieldGroup__line__field textarea-field" id="mensaje" name="mensaje" required></textarea>
                </div>
                <div class="main__form__fieldGroup__line">
                    <label for="opcionTelefono">¿Desea ser contactado telefónicamente?</label>
                    <div class="main__form__fieldGroup justify-start">
                        <div class="option-form">
                            <input type="radio" id="opcion1" name="opcionTelefono" value="1">
                            <label for="opcion1">Si</label><br>
                        </div>
                        <div class="option-form">
                            <input type="radio" id="opcion2" name="opcionTelefono" value="2">
                            <label for="opcion2">No</label><br>
                        </div>
                    </div>
                </div>
                <div class="main__form__fieldGroup__line">
                    <label for="telefono">Teléfono</label>
                    <input class="main__form__fieldGroup__line__field" type="number" id="telefono" name="telefono" required>
                </div>
                <div class="main__form__fieldGroup__line">
                    <button class="form-button btnAgregar" type="submit">Enviar consulta</button>
                </div>
            </form>
        </div>
    `;
    return contenido;
}

document.addEventListener('DOMContentLoaded', () => {
    cargaInicial();
    const mainContent = document.getElementById('main-section');
    mainContent.innerHTML = itemInicio();
});

