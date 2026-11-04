import type { Task } from '../models/task.interface';

interface TaskSummaryProps {
  tasks: Task[];
  total: number;
}

// La API no entrega totales por estado: pendientes y completadas son de la página actual.
export function TaskSummary({ tasks, total }: TaskSummaryProps) {
  const pendingOnPage = tasks.filter(
    ({ status }) => status === 'pending',
  ).length;

  const completedOnPage = tasks.length - pendingOnPage;

  return (
    <section className="summary-grid" aria-label="Resumen de tareas">
      <article className="summary-card">
        <span>Resultados en la consulta</span>
        <strong>{total}</strong>
      </article>

      <article className="summary-card">
        <span>Pendientes en esta página</span>
        <strong>{pendingOnPage}</strong>
      </article>

      <article className="summary-card">
        <span>Completadas en esta página</span>
        <strong>{completedOnPage}</strong>
      </article>
    </section>
  );
}
