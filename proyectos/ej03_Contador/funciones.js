/**se establece una variable que se inicializa en cero para poder ocuparla para incrementar y decrementar  */
let contador = 0;

/**lectura del documento especificamente del div donde se utiliza el script */
const contadorElemento = document.getElementById("contador");

/**boton de incremento */
/**seleccion del dom por medio de clases */
document.querySelector(".incrementar").addEventListener("click", () => {
    contador++;/**aumento de contador */
    contadorElemento.textContent = contador;
});

/**boton de decremento */
/**seleccion de dom por medio de clases */
document.querySelector(".decrementar").addEventListener("click", () => {
    contador--;/**decremento de contador */
    contadorElemento.textContent = contador;
});
/**Boton de reseteo */
/**seleccion de dom por medio de clases */
document.querySelector(".resetear").addEventListener("click", () => {
    contador = 0;/**devuelve a su valor original el contador */
    contadorElemento.textContent = contador;
});