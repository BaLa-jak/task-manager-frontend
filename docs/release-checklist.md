# Lista de liberación Frontend 1.0.0

Marca un criterio únicamente cuando exista evidencia verificable.

## Calidad

- [x] Instalación congelada aprobada (`pnpm install --frozen-lockfile`).
- [x] `pnpm verify` aprobado.
- [x] Nueve pruebas aprobadas.
- [x] Build y preview local aprobados; `/tasks` sirvió `index.html`.

## Producción

- [ ] `VITE_API_URL` usa HTTPS y termina en `/api`.
- [ ] `CORS_ORIGIN` coincide exactamente con el origen del Frontend.
- [ ] `render.yaml` está sincronizado con el servicio.
- [ ] Rewrite SPA funciona al abrir rutas directamente.
- [ ] Salud del Backend y salud de Atlas responden 200.
- [ ] Prueba de humo aprobada.

## Aceptación

- [ ] Registro, login, restauración y logout.
- [ ] CRUD, filtros, paginación y detalle como `user`.
- [ ] `DELETE` como `user` responde 403.
- [ ] `DELETE` como `admin` responde 204.
- [ ] 401 invalida la sesión local.
- [ ] Ruta inexistente muestra la página 404 de React.

## Seguridad y versión

- [ ] No existen secretos en Git ni en las evidencias.
- [ ] README y CHANGELOG actualizados.
- [ ] Evidencias y preguntas de cierre completadas.
- [ ] `v1.0.0` apunta al mismo commit que el despliegue aprobado.
