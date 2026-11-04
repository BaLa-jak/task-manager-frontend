# Pruebas de API REST - EC3 F2 A10

## Entorno

- Rama: feature/api-rest-crud-remoto
- Dirección pública usada por el Frontend: /api
- Resultado de pnpm build: sin errores
- Resultado de pnpm lint: sin errores

## Casos ejecutados

| Caso | Método y ruta | Esperado | Obtenido | Resultado |
|---|---|---:|---:|---|
| Listar | GET /api/tasks | 200 | | |
| Crear | POST /api/tasks | 201 | | |
| Actualizar | PATCH /api/tasks/:id | 200 | | |
| Eliminar | DELETE /api/tasks/:id | 204 | | |
| Inexistente | GET /api/tasks/:id | 404 | | |
| API detenida | GET /api/tasks | Error de red | 502 del proxy de Vite | Correcto: mensaje de error y botón Reintentar |

## Evidencias

- Captura de la lista:
- Captura de Network:
- Captura del error y reintento:
- Observaciones: con el Backend detenido, el proxy responde 502 sin cuerpo JSON; el cliente lo convierte en `HttpError` (`HTTP_ERROR`) y la interfaz muestra el error con Reintentar. Un id con formato inválido devuelve 400 `INVALID_ID` y se muestra como "Tarea no encontrada".

No incluir URI, usuario ni contraseña de MongoDB Atlas.
