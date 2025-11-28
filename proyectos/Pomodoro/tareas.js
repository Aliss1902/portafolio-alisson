// =========================
// LISTA DE TAREAS
// =========================

const inputTarea = document.getElementById("inputTarea");
const btnAgregarTarea = document.getElementById("btnAgregarTarea");
const listaTareas = document.getElementById("listaTareas");

btnAgregarTarea.addEventListener("click", () => {
    const texto = inputTarea.value.trim();
    if (texto === "") return;

    const li = document.createElement("li");
    li.classList.add("tarea-item");

    li.innerHTML = `
        <span class="texto">${texto}</span>
        <button class="btnCompletar">✔</button>
    `;

    listaTareas.appendChild(li);
    inputTarea.value = "";

    // marcar como completada
    li.querySelector(".btnCompletar").addEventListener("click", () => {
        li.classList.toggle("completada");
    });
});
