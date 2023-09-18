// Función para agregar una nueva tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== "") {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = nuevaTareaTexto;

        const botonPendiente= document.createElement("button");
        botonPendiente.textContent = "Pendiente";
        botonPendiente.className = "pendiente";
        botonPendiente.onclick = function() {
            marcarPendiente(nuevaTarea);
        };

        const botonCompletada= document.createElement("button");
        botonCompletada.textContent = "Completada";
        botonCompletada.className = "completada";
        botonCompletada.onclick = function() {
            marcarCompletada(nuevaTarea);
        };

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "delete";
        botonEliminar.onclick = function() {
            listaTareas.removeChild(nuevaTarea);
    };

        nuevaTarea.appendChild(botonEliminar);
        nuevaTarea.appendChild(botonPendiente);
        nuevaTarea.appendChild(botonCompletada);

        listaTareas.appendChild(nuevaTarea);
        nuevaTareaInput.value = "";
    }
}

//Funcion para marcar una tarea como completada
function marcarCompletada(tarea) {
    tarea.classList.toggle("completed");
}

// Agregar evento de clic a las tareas para marcarlas como completadas
document.getElementById("listaTareas").addEventListener("click", function(event) {
    if (event.target.tagName=="LI"){
        marcarCompletada(event.target);
    }
});


// Funcion para mostrar tareas completadas
function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if (tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }

    });
}

// Funcion para mostrar tareas pendientes
function mostrarPendientes() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
        if(!tarea.classList.contains("completed")) {
            tarea.style.display = "flex";
        } else {
            tarea.style.display = "none";
        }
    });
}

function marcarPendiente(tarea) {
    tarea.classList.remove("completed");
    tarea.classList.add("pendiente"); // Agrega la clase para resaltar el fondo color amarillo
}

function marcarCompletada(tarea) {
    tarea.classList.remove("pendiente"); // Elimina la clase para resaltar el fondo en amarillo cuando este como completada
    tarea.classList.add("completed");
}

//Agregar evento de clic al boton "Agregar"
document.getElementById("agregar").addEventListener("click", agregarTarea)

//Agregar evento de clic al boton "mostrar completadas"
document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);

//Agregar evento al clic al boton "mostrar pendientes"
document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);