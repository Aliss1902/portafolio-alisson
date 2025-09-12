//creacion de array con productos 
const productos = [
    { nombre: "Manzana", precio: 1 },
    { nombre: "Banana", precio: 0.5 },
    { nombre: "Naranja", precio: 0.8 },
    { nombre: "Pera", precio: 1.2 },
    { nombre: "Mango", precio: 2 },
    { nombre: "Papas", precio: 3 },
    { nombre: "Arroz", precio: 3 },
    { nombre: "Frijoles", precio: 3 },
    { nombre: "Carne", precio: 3 }
];

//lectura del documento
const tbody = document.querySelector("#tabla-productos tbody");
const inputBusqueda = document.getElementById("busqueda");

// 2. Función para mostrar productos en la tabla
function mostrarProductos(lista) {
    tbody.innerHTML = ""; // limpiar tabla
    //lectura de la lista
    lista.forEach(p => {
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${p.nombre}</td><td>$${p.precio.toFixed(2)}</td>`;
        tbody.appendChild(fila);
    });
}

// Mostrar todos los productos al inicio
mostrarProductos(productos);

// 3. Filtrar productos al escribir en el input
inputBusqueda.addEventListener("input", () => {
    const texto = inputBusqueda.value.toLowerCase();
    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(texto)
    );
    mostrarProductos(filtrados);
});