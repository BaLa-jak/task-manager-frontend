# Administrador de tareas - Frontend

Aplicación de página única (SPA) desarrollada con React, TypeScript,
Vite, React Router y PNPM para administrar tareas.

## Alcance actual

La aplicación administra una colección de tareas mediante
estado de React y la conserva en el navegador. Actualmente permite:

- Navegar entre secciones sin recargar la página.
- Consultar una página de inicio con el resumen.
- Consultar el detalle de una tarea mediante una ruta dinámica.
- Mostrar una página 404 para rutas o tareas inexistentes.
- Registrar tareas.
- Consultar la colección.
- Completar y reabrir tareas.
- Editar títulos.
- Cancelar una edición.
- Eliminar con confirmación.
- Eliminar todas las tareas completadas.
- Calcular el resumen automáticamente.
- Mostrar una colección vacía.
- Validar el título al registrar y editar.
- Buscar por título.
- Filtrar por estado.
- Ordenar resultados.
- Paginar los resultados visibles (5 por página).
- Persistir las tareas mediante localStorage.

Las tareas se guardan como JSON en la clave `task-manager.tasks`.
La búsqueda se conserva en la URL (`/tasks?q=texto`); filtro, orden
y página no se guardan.
La conexión con la API REST se realizará en la Actividad 10.

## Rutas

| Ruta | Página | Responsabilidad |
| --- | --- | --- |
| `/` | HomePage | Presentar la aplicación y su resumen |
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
- Web Storage (localStorage)
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
- data: colección local de tareas.
- models: tipos e interfaces.
- services: consulta y persistencia local de tareas.
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
- TaskActions
- TaskList
- TaskPagination
- TaskItem
- TaskStatusBadge

## Modelo Task

Cada tarea contiene id, title, status, createdAt y updatedAt.
