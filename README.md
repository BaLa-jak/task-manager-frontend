# Administrador de tareas - Frontend

Aplicación de página única (SPA) desarrollada con React, TypeScript,
Vite, React Router y PNPM para administrar tareas.

## Alcance actual

La aplicación consume la API REST de Express y MongoDB Atlas
(`task-api-express`); las tareas ya no se guardan en el navegador.
Actualmente permite:

- Navegar entre secciones sin recargar la página.
- Consultar el detalle de una tarea por su identificador (GET por id).
- Mostrar una página 404 para rutas o tareas inexistentes.
- Registrar, editar, completar, reabrir y eliminar tareas (con confirmación).
- Validar el título al registrar y editar.
- Buscar por título, filtrar por estado y ordenar en el servidor.
- Paginar los resultados con los metadatos de la API (5 por página).
- Mostrar estados de carga, vacío, error y reintento.

La búsqueda se conserva en la URL (`/tasks?q=texto`); filtro, orden
y página no se guardan.

## Rutas

| Ruta | Página | Responsabilidad |
| --- | --- | --- |
| `/` | HomePage | Presentar la aplicación |
| `/tasks` | TasksPage | Administrar la colección completa |
| `/tasks/:taskId` | TaskDetailPage | Mostrar una tarea por su ID |
| `*` | NotFoundPage | Responder ante una ruta inexistente |

React Router 7.18.4 se usa en modo declarativo: `BrowserRouter`
envuelve la aplicación en `main.tsx`, `App.tsx` declara las rutas
dentro de `AppLayout` y cada página se representa mediante `Outlet`.
Al eliminar una tarea desde su detalle se regresa a `/tasks`.

## Operaciones CRUD

- Create: registro mediante el formulario.
- Read: renderizado de la colección.
- Update: cambio de estado y edición.
- Delete: eliminación confirmada.

## Tecnologías

- React
- React Router 7.18.4
- TypeScript
- Vite
- PNPM
- CSS
- Fetch API
- Git y GitHub

## Instalación

```bash
pnpm install
```

## Ejecución

```bash
pnpm dev
```

## Validación

```bash
pnpm lint
pnpm build
```

## Estructura principal

- components: componentes visuales.
- layouts: estructura compartida (encabezado, navegación, pie).
- pages: páginas asociadas a cada ruta.
- config: lectura y validación de `VITE_API_URL`.
- hooks: consulta remota de la lista (`useTaskList`).
- models: tipos e interfaces.
- services: cliente HTTP (`http.service.ts`) y servicio de tareas (`task.api.service.ts`).
- utils: reglas de validación y formato de fechas.
- styles: estilos globales.
- docs: preguntas y documentación.

## Componentes principales

- AppHeader
- AppNavigation
- AppFooter
- TaskForm
- TaskFilters
- TaskSummary
- AsyncStatus
- TaskList
- TaskPagination
- TaskItem
- TaskStatusBadge

## Modelo Task

Cada tarea contiene id, title, status, createdAt y updatedAt.

## Integración con la API REST

La aplicación consume la API de tareas mediante Fetch API.

### Requisitos

- Backend disponible en http://localhost:3000
- Frontend ejecutado mediante Vite
- MongoDB Atlas conectado desde el Backend

### Configuración local

1. Copiar `.env.example` como `.env.local`.
2. Confirmar `VITE_API_URL=/api`.
3. Iniciar el Backend con `pnpm dev`.
4. Iniciar el Frontend con `pnpm dev`.

Durante `pnpm dev`, el proxy de `vite.config.ts` reenvía `/api` a
`http://localhost:3000`. `VITE_API_URL` es pública: nunca debe contener
credenciales de MongoDB.

### Funciones remotas

- Listado paginado.
- Búsqueda, filtro y ordenamiento.
- Creación, edición y cambio de estado.
- Eliminación con confirmación.
- Consulta de detalle por identificador.
- Estados de carga, vacío, error y reintento.

### Compilación

```bash
pnpm build
```
