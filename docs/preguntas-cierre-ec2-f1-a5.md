# Preguntas de cierre - EC2 F1 A5

## 1. ¿Qué problema resuelve React al construir una interfaz?

Permite dividir una interfaz grande en piezas pequeñas e independientes. En lugar de manipular el DOM a mano, se describe cómo debe verse cada parte y React se encarga de mostrarla y actualizarla. Esto hace que el código sea más ordenado, fácil de mantener y reutilizable.

## 2. ¿Qué es un componente?

Es una función que devuelve TSX y representa una parte identificable de la interfaz, por ejemplo el encabezado, el formulario o una tarea. Puede recibir datos mediante propiedades y puede utilizar otros componentes.

## 3. ¿Por qué los componentes comienzan con mayúscula?

Porque React usa la mayúscula para distinguir un componente propio de una etiqueta HTML nativa. `<div>` se interpreta como elemento HTML, mientras que `<TaskForm />` se interpreta como un componente que debe ejecutarse.

## 4. ¿Qué diferencia existe entre HTML y TSX?

TSX se parece a HTML pero se escribe dentro de TypeScript. Por eso usa `className` en lugar de `class`, `htmlFor` en lugar de `for`, todas las etiquetas deben cerrarse (`<input />`) y las expresiones se insertan entre llaves, por ejemplo `{total}` o `maxLength={120}`.

## 5. ¿Para qué se utiliza className?

Para asignar clases CSS a los elementos. Se usa `className` porque `class` es una palabra reservada de JavaScript y TypeScript.

## 6. ¿Qué son las propiedades o props?

Son los datos que un componente padre envía a un componente hijo. Por ejemplo, `TaskList` envía `title` y `status` a cada `TaskItem`, y `App` envía `total`, `pending` y `completed` a `TaskSummary`.

## 7. ¿Cómo ayuda TypeScript a validar las propiedades?

Con una interfaz como `TaskSummaryProps` o `TaskItemProps` se define qué propiedades existen y de qué tipo son. Si falta una propiedad, sobra una o se envía un tipo incorrecto (por ejemplo una cadena donde se espera un número, o un estado distinto de `'pending' | 'completed'`), TypeScript marca el error antes de ejecutar la aplicación.

## 8. ¿Cuál es la responsabilidad de App.tsx?

Funciona como coordinador de la estructura general: importa los componentes principales, los organiza dentro del encabezado, el contenido principal y el pie de página, y les proporciona los datos que necesitan.

## 9. ¿Por qué la interfaz se dividió en varios componentes?

Para separar responsabilidades. Cada componente se encarga de una sola parte, lo que facilita leer el código, encontrar errores, reutilizar piezas como `TaskItem` y agregar comportamiento en actividades posteriores sin modificar todo el proyecto.

## 10. ¿Por qué los botones todavía están deshabilitados?

Porque en esta actividad solo se construye la estructura visual. El estado con `useState`, los eventos y las operaciones CRUD se incorporarán en actividades posteriores; deshabilitarlos evita que el usuario piense que ya funcionan.

## 11. ¿Qué componente consideras más reutilizable y por qué?

`TaskItem`, porque con la misma estructura representa cualquier tarea: solo cambian el título y el estado que recibe por propiedades. Ya se utiliza tres veces y en la siguiente actividad se podrá generar automáticamente a partir de un arreglo con `map`.

## 12. ¿Qué dificultad encontraste y cómo la resolviste?

La plantilla de Vite que se generó era más reciente que la de la guía: incluía archivos como `src/assets/hero.png`, `src/assets/vite.svg` y `public/icons.svg`, y no incluía `public/vite.svg`. Revisé qué archivos usaba solamente la página de demostración, los eliminé y conservé `public/favicon.svg` porque `index.html` lo utiliza. Después ejecuté `pnpm lint` y `pnpm build` para confirmar que no quedaran importaciones rotas.
