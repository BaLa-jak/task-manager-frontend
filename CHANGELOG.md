# Historial de cambios

## [Unreleased] - 2026-11-07

### Agregado

- Pruebas de sesión, guardas de autenticación y cliente HTTP con Vitest y Testing Library.
- Scripts `test`, `test:watch`, `verify` y `smoke:production`.
- Configuración de Render para publicar el build estático y resolver rutas SPA.
- Plantilla de URL de producción y documentación de despliegue y aceptación.

### Pendiente antes de liberar 1.0.0

- Configurar las URLs reales del Frontend y Backend y el CORS exacto.
- Aprobar la prueba de humo y la aceptación manual contra la API y Atlas.
- Registrar el commit desplegado y crear la etiqueta `v1.0.0`.

### Limitaciones conocidas

- El token se conserva en `sessionStorage`; no se implementan refresh tokens.
- La colección de tareas es compartida; no se incorpora propiedad por usuario.
