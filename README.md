# Games API REST
Esta API Rest permite a los usuarios acceder a los datos de los juegos como:

- Titulo
- Descripcion
- Precio
- Imagen
- Fecha de creacion (En la que se introdujo a la API)

Esta API REST es un CRUD (Create, Read, Update, Delete)

En la ruta de inicio deberas ver el siguienter formato:

```json
{
  "name": "games",
  "author": "Roger",
  "description": "API Rest for games, created by @roger",
  "version": "1.0.0"
}
```

Las rutas a utilizar son:

- GET /
- GET /api/games
- GET /api/games/{id}
- POST /api/games/{id}
- PUT /api/games/{id}
- DELETE /api/games/{id} 

# Config

Para poder utilizar la API Rest, es necesario configurar una API Key, de MongoDB. la cual se llama
```bash
MONGODB_URI
```
