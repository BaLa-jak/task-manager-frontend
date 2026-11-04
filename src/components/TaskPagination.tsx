import type { PageMeta } from '../models/api.types';

interface TaskPaginationProps {
  meta: PageMeta;
  disabled: boolean;
  onPageChange: (page: number) => void;
}

export function TaskPagination({
  meta,
  disabled,
  onPageChange,
}: TaskPaginationProps) {
  if (meta.totalPages <= 1) {
    return null;
  }

  return (
    <nav className="pagination" aria-label="Paginación de tareas">
      <button
        type="button"
        onClick={() => onPageChange(meta.page - 1)}
        disabled={disabled || !meta.hasPreviousPage}
      >
        Anterior
      </button>

      <p aria-live="polite">
        Página {meta.page} de {meta.totalPages}
      </p>

      <button
        type="button"
        onClick={() => onPageChange(meta.page + 1)}
        disabled={disabled || !meta.hasNextPage}
      >
        Siguiente
      </button>
    </nav>
  );
}
