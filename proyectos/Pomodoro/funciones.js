// =========================
// VARIABLES PRINCIPALES
// =========================

// Inputs
const pomodoroInput = document.getElementById("pomodoroInput");
const shortBreakInput = document.getElementById("shortBreakInput");
const longBreakInput = document.getElementById("longBreakInput");

// Botones
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const guardarConfigBtn = document.getElementById("guardarConfigBtn");

// Pantallas
const displayTiempo = document.getElementById("displayTiempo");
const modoActual = document.getElementById("modoActual");
const contadorCiclos = document.getElementById("contadorCiclos");

// Audio
const audioFin = document.getElementById("audioFin");

// Animación
const animacion = document.getElementById("animacion");

// Variables de control
let tiempoActual = pomodoroInput.value * 60;
let intervalo = null;
let modo = "pomodoro"; // pomodoro | short | long
let ciclos = 0;



// =========================
// FUNCIONES UTILES
// =========================

// Formatear minutos y segundos
function formatearTiempo(segundos) {
    const m = Math.floor(segundos / 60);
    const s = segundos % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// Actualiza el display
function actualizarDisplay() {
    displayTiempo.textContent = formatearTiempo(tiempoActual);
}



// =========================
// CONFIGURAR TIEMPOS
// =========================

guardarConfigBtn.addEventListener("click", () => {
    if (modo === "pomodoro") {
        tiempoActual = pomodoroInput.value * 60;
        modoActual.textContent = "Pomodoro";
    } else if (modo === "short") {
        tiempoActual = shortBreakInput.value * 60;
        modoActual.textContent = "Descanso corto";
    } else {
        tiempoActual = longBreakInput.value * 60;
        modoActual.textContent = "Descanso largo";
    }

    actualizarDisplay();
});



// =========================
// TEMPORIZADOR
// =========================

function iniciarTemporizador() {
    if (intervalo) return; // evitar múltiples intervalos

    animacion.classList.add("activo");

    intervalo = setInterval(() => {
        tiempoActual--;

        actualizarDisplay();

        if (tiempoActual <= 0) {
            clearInterval(intervalo);
            intervalo = null;
            audioFin.play();
            animacion.classList.remove("activo");

            // Agregar ciclo solo si está en modo pomodoro
            if (modo === "pomodoro") {
                ciclos++;
                contadorCiclos.textContent = ciclos;
            }

            cambiarModo();
        }
    }, 1000);
}

function pausarTemporizador() {
    clearInterval(intervalo);
    intervalo = null;
    animacion.classList.remove("activo");
}

function resetTemporizador() {
    pausarTemporizador();

    if (modo === "pomodoro") tiempoActual = pomodoroInput.value * 60;
    if (modo === "short") tiempoActual = shortBreakInput.value * 60;
    if (modo === "long") tiempoActual = longBreakInput.value * 60;

    actualizarDisplay();
}


// =========================
// MODO OSCURO
// =========================

const modoOscuroBtn = document.getElementById("modoOscuroBtn");

modoOscuroBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Cambiar icono del botón
    if (document.body.classList.contains("dark")) {
        modoOscuroBtn.textContent = "☀️";
    } else {
        modoOscuroBtn.textContent = "🌙";
    }
});



// =========================
// CAMBIAR ENTRE MODOS
// =========================

function cambiarModo() {
    if (modo === "pomodoro") {
        modo = "short";
        tiempoActual = shortBreakInput.value * 60;
        modoActual.textContent = "Descanso corto";
    } else if (modo === "short") {
        modo = "long";
        tiempoActual = longBreakInput.value * 60;
        modoActual.textContent = "Descanso largo";
    } else {
        modo = "pomodoro";
        tiempoActual = pomodoroInput.value * 60;
        modoActual.textContent = "Pomodoro";
    }

    actualizarDisplay();
}



// =========================
// EVENTOS BOTONES
// =========================

startBtn.addEventListener("click", iniciarTemporizador);
pauseBtn.addEventListener("click", pausarTemporizador);
resetBtn.addEventListener("click", resetTemporizador);



// =========================
// INICIAR DISPLAY
// =========================

actualizarDisplay();
