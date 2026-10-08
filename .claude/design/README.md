# Diseño de referencia

Estas son las pantallas que uso como guía para construir la app. Las diseñé en **Claude Design** con la paleta "Marquesina": 12 pantallas, cada una en tema oscuro y claro.

## Cómo verlo

Abre [`index.html`](index.html) en el navegador. Es una galería con todas las pantallas y un selector de tema. También puedes abrir cualquier pantalla suelta desde [`screens/`](screens/).

Las pantallas son interactivas (chips, pestañas, favoritos, calificación y enlaces entre pantallas). Los datos son de ejemplo y los pósters son marcadores con el texto `poster_path`: en la app real vienen de la API de TMDB.

## Estructura

```
design/
  index.html     galería de las 24 vistas (12 pantallas × 2 temas)
  screens/       una página HTML por pantalla y tema, lista para abrir
    viewer.js    visor mínimo que interpreta el formato de plantilla de las pantallas
  source/        exportación original de Claude Design (.dc.html + canvas.json)
```

- `source/` es la fuente fiel tal como se exportó. Esos archivos necesitan el runtime del editor de Claude Design, así que no se ven si los abres directamente.
- `screens/` son copias de esas fuentes que apuntan a `viewer.js`, un visor propio y pequeño que implementa solo lo que usan estas pantallas (`{{ }}`, `<sc-for>`, `<sc-if>`, `onClick`, `setState`). No es el runtime oficial.

## Pantallas

| Pantalla | Archivo |
|---|---|
| Bienvenida | `Main` |
| Login (usuario y contraseña) | `LoginForm` |
| Inicio (películas / series) | `Home` |
| Buscar | `Search` |
| Explorar | `Explore` |
| Detalle de película | `MovieDetail` |
| Calificar (modal) | `RateSheet` |
| Detalle de serie | `TvDetail` |
| Temporada | `Season` |
| Persona | `Person` |
| Perfil | `Profile` |
| Perfil invitado | `ProfileGuest` |

La versión en tema claro de cada una lleva el sufijo `Light` (p. ej. `HomeLight.html`).

## Sistema de diseño

- **Colores**: tokens para tema oscuro y claro. La tabla completa está en [`CLAUDE.md`](../../CLAUDE.md#tokens-de-color).
- **Tipografía**: Bricolage Grotesque (títulos), Instrument Sans (texto), JetBrains Mono (números y calificaciones), desde Google Fonts.
- **Medidas**: gutter de 24px, botones pill de 54px, botones de ícono de 44px, tab bar con 4 tabs.

---

Este producto usa la API de TMDB, pero no está avalado ni certificado por TMDB.
