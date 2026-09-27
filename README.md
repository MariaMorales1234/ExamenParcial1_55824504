# ExamenParcial1_55824504
Examen parcial hecho por María José Morales López

## Requisitos

- Node.js **20.11 o superior** (`node -v`)
- npm 10+

## Puesta en marcha

```bash
git clone https://github.com/MariaMorales1234/ExamenParcial1_55824504.git
cd ExamenParcial1_55824504

node ./src/server.js          # arranca API 
```

Abre <http://localhost:3000>.

## Estructura

```
src/                     # Todo lo que corre en Node (nunca llega al navegador)
├── server.js            # Arranque: lee .env y levanta el puerto
├── routes/items.js      # Router del CRUD (/api/items)
└── data/items.json      # La "base de datos"

public/                  # Todo lo que se envía al navegador
├── index.html           # Vista de gestión (CRUD)
├── catalog.html         # Vista de catálogo (ejercicio pendiente)
├── css/styles.css       # CSS GENERADO (está en .gitignore)
└── js/
    ├── main.js          # Lógica de la vista de gestión
    ├── catalog.js       # Ejercicio: completar los TODO
    ├── services/api.js  # Llamadas a la API
    └── ui/ui.js         # Render del DOM
```
## API

Base: `/api/items`

| Método   | Ruta   | Body                      | Respuesta                                  |
| -------- | ------ | ------------------------- | ------------------------------------------ |
| `GET`    | `/`    | —                         | lista de items · Error al cargar los items |
| `GET`    | `/:id` | —                         | item · item no encontrado                  | 
| `POST`   | `/`    | `{ name, description? }`  | item creado · Error al crear item          |
| `PUT`    | `/:id` | `{ name?, description? }` | item · Error al actualizar item            |
| `DELETE` | `/:id` | —                         | Eliminado · Error al eliminar el item      |

Los errores siempre vienen como `{ "error": "mensaje" }`.