# LFP_Practica1_202401166
# Pokémon USAC — Analizador Léxico

Proyecto académico desarrollado en **TypeScript** que implementa un analizador léxico para procesar archivos y texto con información de jugadores y Pokémon.

La aplicación incluye una interfaz web para cargar o escribir contenido, analizarlo, visualizar los tokens generados y consultar reportes de errores.

## Tecnologías

- TypeScript
- Node.js
- Express
- EJS
- HTML
- CSS
- JavaScript

## Características

- Analizador léxico implementado manualmente.
- Generación y visualización de tokens.
- Reporte de errores léxicos.
- Editor de texto integrado en la aplicación web.
- Carga y guardado de archivos `.pklfp`.
- Procesamiento de información de jugadores y Pokémon.
- Visualización individual de la información asociada a cada jugador.

## Estructura principal

```text
src/
├── Analyzer/       # Analizador léxico y definición de tokens
├── Player/         # Modelos de jugadores y Pokémon
├── controllers/    # Lógica de la aplicación
├── routes/         # Rutas de Express
└── index.ts        # Punto de entrada del servidor

views/              # Vistas EJS
public/             # Archivos estáticos
