const FormElement = document.getElementById('FormElement');
const NameElement = document.getElementById('NameElement');
const AutorElement = document.getElementById('AutorElement');
const message = document.getElementById('message');

let valueName = '';
let valueauthor = '';

// Listeners
FormElement.addEventListener('submit', enviarDatos);
NameElement.addEventListener('input', nombre);
AutorElement.addEventListener('input', autor);

function enviarDatos(evento) {
    evento.preventDefault();

    if (valueName === '' && valueauthor === '') {
        message.style.display = 'block';
        return;
    } else {
        message.style.display = 'none';
    }
    
    const datos = { nameTask: valueName, authorname: valueauthor };

    valordato(datos);
    limpiarCampos();
}

function nombre(evento) {
    valueName = evento.target.value;
}

function autor(evento) {
    valueauthor = evento.target.value;
}

function valordato(data){
    console.log(data);
}

function limpiarCampos() {
    NameElement.value = '';
    AutorElement.value = '';
}
