# Administrador de tareas - Frontend

Aplicación de página única (SPA) desarrollada con React, TypeScript,
Vite, React Router y PNPM para administrar tareas.
Consume una API REST protegida con JWT Bearer.

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
- Registro, inicio y cierre de sesión con rutas públicas y protegidas.
- Restauración de sesión y permisos de usuario `user` y `admin`.
- Pruebas automatizadas de sesión, guardas de rutas y cliente HTTP.

La búsqueda se conserva en la URL (`/tasks?q=texto`); filtro, orden
y página no se guardan.

## Rutas

| Ruta | Página | Responsabilidad |
| --- | --- | --- |
| `/` | HomePage | Presentar la aplicación |
| `/login` | LoginPage | Iniciar sesión |
| `/register` | RegisterPage | Crear una cuenta |
| `/tasks` | TasksPage | Administrar la colección completa |
| `/tasks/:taskId` | TaskDetailPage | Mostrar una tarea por su ID |
| `/profile` | ProfilePage | Consultar el perfil autenticado |
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
pnpm install --frozen-lockfile
```

## Ejecución

```bash
pnpm dev
```

## Verificación

```bash
pnpm verify
```

`pnpm verify` ejecuta ESLint, nueve pruebas con Vitest y Testing Library, y
el build de producción. Las pruebas usan jsdom y Fetch simulado; no requieren
Express ni MongoDB Atlas. Para ejecutar las pruebas en modo interactivo usa
`pnpm test:watch`.

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
pnpm preview
```

### Configuración de producción

Define `VITE_API_URL` como la URL HTTPS pública del Backend terminada en
`/api` antes de compilar o en la configuración del servicio estático de Render.
Es una variable pública que queda incorporada en el JavaScript; no pongas
credenciales ni secretos en variables `VITE_`. En el Backend, configura
`CORS_ORIGIN` con el origen HTTPS exacto del Frontend, sin ruta ni diagonal
final. `render.yaml` incluye la publicación de `dist` y la reescritura SPA para
que las rutas profundas entreguen `index.html`.

Después del despliegue, ejecuta la prueba de humo con `FRONTEND_URL` y
`BACKEND_URL` apuntando a los servicios públicos:

```bash
FRONTEND_URL=https://FRONTEND.onrender.com \
BACKEND_URL=https://BACKEND.onrender.com \
pnpm smoke:production
```

La aceptación de registro, login, CRUD y roles debe realizarse además contra
la API real. Consulta `docs/deployment-configuration.md` y
`docs/release-checklist.md`; la etiqueta `v1.0.0` se crea únicamente para el
commit que haya sido desplegado y aceptado.
