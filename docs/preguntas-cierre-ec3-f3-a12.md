# Preguntas de cierre EC3 F3 A12

Respuestas de referencia para revisar y adaptar con tus propias palabras.

## 1. ¿Qué diferencia existe entre prueba automatizada, humo y aceptación?

La prueba automatizada comprueba repetidamente unidades o componentes con resultados controlados. La prueba de humo verifica que los servicios publicados respondan en lo básico. La aceptación recorre los flujos reales con usuarios, permisos, API y datos de producción.

## 2. ¿Por qué Fetch simulado no demuestra que Atlas funciona?

El doble de Fetch evita enviar solicitudes reales: solo permite verificar cómo el cliente construye solicitudes y maneja respuestas. No atraviesa Express ni establece una conexión con MongoDB Atlas.

## 3. ¿Qué comprueba una guarda y qué seguridad continúa en el Backend?

La guarda decide qué ruta mostrar según el estado de sesión del Frontend. El Backend aún debe validar el JWT, comprobar el rol y autorizar cada operación; la interfaz no es una frontera de seguridad.

## 4. ¿Por qué VITE_API_URL es pública y JWT_SECRET no?

Vite inserta las variables `VITE_` en los archivos JavaScript que descarga el navegador, por lo que cualquier usuario puede verlas. `JWT_SECRET` firma o valida tokens y debe permanecer únicamente en la configuración privada del servidor.

## 5. ¿Por qué cambiar VITE_API_URL exige otro build?

La URL queda sustituida dentro del bundle durante la compilación. Cambiar una variable en el entorno del host no altera los archivos ya generados; hay que reconstruirlos y volver a publicarlos.

## 6. ¿Qué función cumple la reescritura hacia index.html?

Cuando se solicita directamente una ruta como `/tasks/123`, el host estático entrega `index.html`. Luego React Router interpreta la URL y decide qué página renderizar, en vez de que el host responda 404 por no encontrar un archivo físico.

## 7. ¿Qué diferencia existe entre build, deploy y release?

El build genera los archivos distribuibles; el deploy publica esos archivos en un servicio; el release identifica una versión aprobada y su commit, por ejemplo mediante la etiqueta `v1.0.0`.

## 8. ¿Por qué CORS_ORIGIN debe ser exacto?

El Backend debe permitir el origen real del navegador y no otros sitios. Se configura solo el esquema, host y puerto del Frontend, sin rutas ni diagonal final. CORS restringe lectura desde navegadores, pero no autentica ni autoriza solicitudes.

## 9. ¿Qué diferencia existe entre 401 y 403?

401 indica que la solicitud no tiene credenciales válidas o que la sesión no es válida. 403 indica que la identidad fue reconocida, pero no tiene permiso para esa operación.

## 10. ¿Por qué ocultar Eliminar no sustituye la autorización?

Un usuario puede manipular el navegador o enviar la solicitud directamente. El Backend debe rechazar con 403 una eliminación no autorizada aunque la interfaz oculte el botón.

## 11. ¿Cómo demuestras que v1.0.0 corresponde al deploy?

Comparo el hash del commit desplegado en Render con el commit de la etiqueta `v1.0.0`, verifico la etiqueta con `git show v1.0.0` y confirmo que la misma referencia está publicada en el repositorio remoto.

## 12. ¿Qué mejorarías para un sistema sensible?

Revisaría el almacenamiento de credenciales y consideraría cookies `HttpOnly`, `Secure` y `SameSite`, protección CSRF, políticas CSP, rotación y expiración de credenciales, auditoría, límites de solicitudes y autorización de propiedad de datos en el servidor. La solución concreta debe evaluarse según el modelo de amenazas.
