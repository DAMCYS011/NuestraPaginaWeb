document.addEventListener("DOMContentLoaded", function() {
    const boton = document.getElementById("cargarDatos");
    const resultado = document.getElementById("resultado");

    function obtenerDatos() {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then (response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then (data => {
            resultado.textContent = JSON.stringify(data, null, 2);
        })
        .catch (error => {
            console.error ("Error al obtener los datos:", error);
            resultado.textContent = "Hubo un error al obtener los datos.";
        });
    }
    boton.addEventListener("click", obtenerDatos);
});