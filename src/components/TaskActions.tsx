interface TaskActionsProps {
  completedCount: number;
  onClearCompleted: () => void;
}

export function TaskActions({
  completedCount,
  onClearCompleted,
}: TaskActionsProps) {
  return (
    <section className="panel" aria-labelledby="task-actions-title">
      <div className="section-heading">
        <div>
          <p className="section-heading__eyebrow">Mantenimiento</p>
          <h2 id="task-actions-title">Acciones generales</h2>
        </div>

        <button
          type="button"
          className="button-danger"
          onClick={onClearCompleted}
          disabled={completedCount === 0}
        >
          Eliminar completadas ({completedCount})
        </button>
      </div>
    </section>
  );
}
