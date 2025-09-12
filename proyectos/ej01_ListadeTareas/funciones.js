function Agregar() {
    /**leer los dos espacios qu enecesitamso el ingreso de datoso y en el que iran los nuevos datos  */
    const lista = document.getElementById("lista-tareas");
    const input = document.getElementById("ingres");
    const dato = input.value;
    
    /**crear un li para agregarlo a nuestra lista principal */
    const nuevatarea = document.createElement("li");
    const textoTarea = document.createElement("span");
    textoTarea.textContent = dato;

    /**crear un boton que contenga nuestra funcion de eliminar */
    const boton = document.createElement("button");
    boton.textContent = "Eliminar";

    /**funcion eliminar en el boton */
    boton.onclick = function () {
        // animación antes de borrar
        nuevatarea.classList.add("desvanecer");
        setTimeout(() => {
            lista.removeChild(nuevatarea);
        }, 500); // tiempo igual al de la animación en CSS
    };

    /**llenar nuestro elemento de lista con la nueva tarea escrita  */
    nuevatarea.appendChild(textoTarea);
    lista.appendChild(nuevatarea);
    nuevatarea.appendChild(boton);


    /**limpiar el input */
    dato.value = "";
}

