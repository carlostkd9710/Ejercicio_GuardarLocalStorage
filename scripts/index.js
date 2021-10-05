let nombre , apellido, telefono, direccion, ciudad;

let lista = document.getElementById('listar')
let btnEnviar = document.getElementById('btnEnviar')
let form = document.getElementById('form')

form.addEventListener('submit',formSubmit)

function formSubmit(e){
    e.preventDefault()
}

btnEnviar.addEventListener('click',capturarDatos)

function capturarDatos(){

    /* class Persona {
        constructor(nombre, apellido, telefono, direccion, ciudad){
            this.nombre = nombre;
            this.apellido = apellido;
            this.telefono = telefono;
            this.direccion = direccion;
            this.ciudad = ciudad;
        }
    } */

    nombre = document.getElementById('inputNombre').value;
    apellido = document.getElementById('inputApellido').value;
    telefono = document.getElementById('inputTelefono').value;
    direccion = document.getElementById('inputDireccion').value;
    ciudad = document.getElementById('inputCiudad').value;
    guardarLocalStorage(nombre, apellido, telefono, direccion, ciudad)
    listarDatos()
    /* let usuario = new Persona(nombre, apellido, telefono, direccion, ciudad) */
    console.log(nombre, apellido, telefono, direccion, ciudad);
}

function guardarLocalStorage(nombre, apellido, telefono, direccion, ciudad){
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem('Apellido',apellido)
    localStorage.setItem('Telefono',telefono)
    localStorage.setItem('Direccion',direccion)
    localStorage.setItem('Ciudad',ciudad)
}

function listarDatos(){
   let nom = localStorage.getItem('Nombre')
   let ape = localStorage.getItem('Apellido')
   let tel = localStorage.getItem('Telefono')
   let dir = localStorage.getItem('Direccion')
   let ciud = localStorage.getItem('Ciudad')

    lista.innerHTML = `<table class="table">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
            <th>Direccion</th>
            <th>Ciudad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${nom}</td>
            <td>${ape}</td>
            <td>${tel}</td>
            <td>${dir}</td>
            <td>${ciud}</td>
        </tr>
    </tbody>
</table>
`
}