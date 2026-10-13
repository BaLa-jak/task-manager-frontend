# Preguntas de cierre - EC2 F1 A6

## 1. ¿Qué función cumple la interfaz Task?

Define la forma que debe tener cada tarea: id, title, status, createdAt y updatedAt con su tipo. Así TypeScript avisa durante el desarrollo si a un objeto le falta una propiedad o tiene un tipo incorrecto, y todos los componentes trabajan con el mismo contrato.

## 2. ¿Qué diferencia existe entre Task y TaskStatus?

Task es una interfaz que describe un objeto completo con varias propiedades. TaskStatus es un tipo unión que solo admite dos valores de texto, `'pending'` o `'completed'`, y se usa como el tipo de la propiedad status dentro de Task.

## 3. ¿Qué significa declarar un arreglo como Task[]?

Que cada elemento del arreglo debe cumplir con la interfaz Task. Si se agrega un objeto incompleto o con un estado no permitido, TypeScript marca el error.

## 4. ¿Qué hace el método map?

Recorre un arreglo y devuelve un arreglo nuevo con el resultado de aplicar una función a cada elemento, sin modificar el original.

## 5. ¿Qué resultado produce map dentro de TaskList?

Convierte cada objeto Task en un elemento `<TaskItem />`. El resultado es un arreglo de elementos que React muestra dentro de la lista.

## 6. ¿Para qué utiliza React la propiedad key?

Para identificar cada elemento de una lista entre renderizados. Con la clave React sabe qué elemento se agregó, se eliminó o cambió de lugar, y actualiza solo lo necesario.

## 7. ¿Por qué se utiliza task.id y no el índice?

Porque el id pertenece a la tarea y no cambia. El índice depende de la posición, así que al eliminar, insertar u ordenar tareas la misma clave quedaría asociada a otra tarea y React podría reutilizar mal los elementos.

## 8. ¿Cómo se envía una tarea de TaskList a TaskItem?

Mediante una propiedad: `<TaskItem key={task.id} task={task} />`. TaskItem recibe el objeto completo en `task` y lo desestructura para usar title, status y updatedAt.

## 9. ¿Cómo se comunican App, TaskSummary y TaskList?

App importa la colección desde `data/tasks.ts` y la envía como propiedad `tasks` a TaskSummary y a TaskList. Los datos fluyen de padre a hijo; los hijos no se comunican entre sí, solo reciben lo que App les entrega.

## 10. ¿Qué es el renderizado condicional?

Es mostrar estructuras diferentes según una condición. En TaskList, si `tasks.length === 0` se muestra el mensaje "No hay tareas registradas"; en caso contrario se muestra la lista.

## 11. ¿Por qué el resumen se calcula a partir de la colección?

Porque así los números siempre coinciden con las tareas reales. Si se escribieran a mano habría que actualizarlos cada vez que cambie la colección y podrían quedar incorrectos.

## 12. ¿Qué dificultad encontraste durante la refactorización y cómo la resolviste?

Escribe aquí tu respuesta.
