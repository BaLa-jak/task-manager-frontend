# Administrador de tareas - Frontend

Aplicación desarrollada con React, TypeScript, Vite y PNPM
para administrar tareas.

## Alcance actual

La aplicación administra una colección de tareas mediante
estado de React y la conserva en el navegador. Actualmente permite:

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
Los criterios de búsqueda, filtro, orden y página no se guardan.
La conexión con la API REST se realizará en el EC3.

## Operaciones CRUD

- Create: registro mediante el formulario.
- Read: renderizado de la colección.
- Update: cambio de estado y edición.
- Delete: eliminación confirmada.

## Tecnologías

- React
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
- data: colección local de tareas.
- models: tipos e interfaces.
- services: consulta y persistencia local de tareas.
- utils: reglas de validación.
- styles: estilos globales.
- docs: preguntas y documentación.

## Componentes principales

- AppHeader
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
