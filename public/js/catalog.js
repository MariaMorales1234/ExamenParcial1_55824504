import { getItems, getItem, createItem, updateItem, deleteItem } from "./services/api.js";
import { renderItems, resetForm, fillForm } from "./ui/ui.js";

// Constante con la URL base de la API
const API_URL = "/api/items";

// TODO: Seleccionar el contenedor donde se mostrarán los items
const catalogContainer = document.getElementById("catalogContainer");

// Función principal para cargar los items desde la API
async function loadCatalog() {
    try {
        const res = await fetch(API_URL);
        const items = await res.json();
        catalogContainer.innerHTML = "";
        items.forEach(item => {
            renderItem(item);
        });
    } catch (err) {
        console.error("Error cargando catálogo:", err);
        alert("No se pudo cargar los items");
    }
}

// Función para renderizar un item en el catálogo
function renderItem(item) {
    const row = document.createElement("div");
    row.innerHTML = `
        <div class = "card">
            <div class = "card-container">
                <h1 class = "name">${item.name}</h1>
                <p class = "description">${item.description}</p>
            </div>
        </div>
    `;
    catalogContainer.appendChild(row)
}

// Inicializar el catálogo cuando cargue la página
loadCatalog();