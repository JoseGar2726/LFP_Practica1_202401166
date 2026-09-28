# Pokémon USAC — Analizador Léxico

Proyecto académico desarrollado en **TypeScript** que implementa un analizador léxico para procesar archivos con información de jugadores y Pokémon.

La aplicación incluye una interfaz web que permite escribir o cargar contenido, analizarlo, visualizar los tokens generados y consultar los errores léxicos encontrados.

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
- Identificación y clasificación de tokens.
- Detección y reporte de errores léxicos.
- Editor de texto integrado en la aplicación.
- Carga de archivos `.pklfp`.
- Visualización de fila, columna, lexema y tipo de token.
- Procesamiento de información de jugadores y Pokémon.
- Visualización individual de información asociada a cada jugador.

## Estructura del proyecto

```text
src/
├── Analyzer/       # Analizador léxico y definición de tokens
├── Player/         # Modelos de jugadores y Pokémon
├── controllers/    # Lógica de la aplicación
├── routes/         # Rutas de Express
└── index.ts        # Punto de entrada del servidor

views/
└── pages/          # Vistas EJS

public/             # CSS, JavaScript y recursos estáticos
```

## Ejecución

### Requisitos

- Node.js
- npm

### Instalación

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

Ejecutar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación se ejecuta en el puerto:

```text
http://localhost:3000
```

## Funcionamiento

El usuario puede ingresar contenido directamente desde el editor o cargar un archivo `.pklfp`.

Al realizar el análisis, la aplicación genera una tabla que muestra:

- Número de token
- Fila
- Columna
- Lexema
- Tipo de token

La aplicación también permite consultar un reporte de los errores encontrados durante el análisis y visualizar información individual de los jugadores procesados.

## Autor

**José Antonio García Roca**  
Ingeniería en Ciencias y Sistemas  
Universidad de San Carlos de Guatemala
