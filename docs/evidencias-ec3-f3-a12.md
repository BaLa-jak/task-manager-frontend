# Evidencias EC3 F3 A12

Completa los datos de despliegue y aceptación después de ejecutar las pruebas.
No pegues tokens, contraseñas ni valores de secretos.

## Identificación

- Repositorio: task-manager-frontend
- Rama: `ec3-a12-pruebas-despliegue`
- Commit desplegado: pendiente
- Etiqueta: pendiente (`v1.0.0` se crea tras la aceptación)
- URL Frontend: pendiente
- URL Backend: pendiente
- Fecha de aceptación: pendiente

## Calidad local

- Instalación congelada: aprobada con `pnpm install --frozen-lockfile`.
- `pnpm verify`: aprobada (lint, pruebas y build).
- Pruebas aprobadas: 9 de 9.
- Build y preview: aprobados; `/tasks` sirvió HTML con el nodo `#root`.

## Producción

- `/health`: pendiente
- `/health/database`: pendiente
- Ruta profunda directa: pendiente
- Prueba de humo: pendiente

## Aceptación

| Caso | Resultado | Evidencia |
|---|---|---|
| Registro y login | Pendiente | |
| Restauración de sesión | Pendiente | |
| CRUD como user | Pendiente | |
| 403 al eliminar como user | Pendiente | |
| 204 al eliminar como admin | Pendiente | |
| Filtros, paginación y detalle | Pendiente | |
| Logout | Pendiente | |

## Seguridad

- [ ] Sin tokens.
- [ ] Sin contraseñas.
- [ ] Sin `MONGODB_URI`.
- [ ] Sin `JWT_SECRET`.
