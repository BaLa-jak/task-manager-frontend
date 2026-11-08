# Configuración de despliegue EC3 F3 A12

Completa los marcadores después de publicar los servicios. No incluyas
`MONGODB_URI`, `JWT_SECRET`, contraseñas ni tokens en este archivo.

## Frontend

- Repositorio: URL_FRONTEND
- Rama de preparación: `ec3-a12-pruebas-despliegue`
- Servicio Render: `task-manager-frontend` (confirmar disponibilidad al crear el Blueprint)
- URL: `https://FRONTEND.onrender.com`
- Build: `pnpm install --frozen-lockfile && pnpm verify`
- Publicación: `dist`
- `VITE_API_URL`: `https://BACKEND.onrender.com/api`
- Rewrite SPA: `/*` hacia `/index.html`

`VITE_API_URL` es pública y se incorpora al bundle durante el build. Al cambiarla,
se debe generar y publicar un build nuevo.

## Backend relacionado

- Repositorio: URL_BACKEND
- URL: `https://BACKEND.onrender.com`
- `CORS_ORIGIN`: `https://FRONTEND.onrender.com`
- Salud: `/health`
- Salud de Atlas: `/health/database`
- Documentación: `/api-docs`

`CORS_ORIGIN` debe ser el origen exacto del Frontend, sin `/api`, otra ruta ni
diagonal final. CORS no sustituye autenticación ni autorización en el Backend.

## Estado

Las URLs anteriores son marcadores, no servicios verificados. Completa los datos,
confirma las rutas profundas y ejecuta `pnpm smoke:production` antes de marcar la
liberación como aceptada.
