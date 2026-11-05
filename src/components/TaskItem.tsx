import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router';
import type { Task } from '../models/task.interface';
import { formatTaskDate } from '../utils/date';
import {
  TASK_TITLE_MAX_LENGTH,
  validateTaskTitle,
} from '../utils/task-validation';
import { TaskStatusBadge } from './TaskStatusBadge';

interface TaskItemProps {
  task: Task;
  canDelete: boolean;
  onToggleStatus: (task: Task) => Promise<boolean>;
  onEditTask: (task: Task, title: string) => Promise<boolean>;
  onDeleteTask: (task: Task) => Promise<boolean>;
}

export function TaskItem({
  task,
  canDelete,
  onToggleStatus,
  onEditTask,
  onDeleteTask,
}: TaskItemProps) {
  const { id, title, status, updatedAt } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(title);
  const [error, setError] = useState('');
  const [isBusy, setIsBusy] = useState(false);

  // Bloquea los controles mientras la API responde.
  async function runBusy(action: () => Promise<boolean>) {
    setIsBusy(true);
    const succeeded = await action();
    setIsBusy(false);
    return succeeded;
  }

  function handleStartEdit() {
    setDraftTitle(title);
    setError('');
    setIsEditing(true);
  }

  function handleCancelEdit() {
    setDraftTitle(title);
    setError('');
    setIsEditing(false);
  }

  function handleDraftChange(value: string) {
    setDraftTitle(value);

    if (error) {
      setError(validateTaskTitle(value) ?? '');
    }
  }

  async function handleEditSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationMessage = validateTaskTitle(draftTitle);

    if (validationMessage) {
      setError(validationMessage);
      return;
    }

    const wasUpdated = await runBusy(() =>
      onEditTask(task, draftTitle.trim()),
    );

    if (wasUpdated) {
      setError('');
      setIsEditing(false);
    }
  }

  return (
    <article
      className={`task-item task-item--${status}`}
      role="listitem"
      aria-busy={isBusy}
    >
      <div className="task-item__content">
        {isEditing ? (
          <form
            className="task-item__edit-form"
            onSubmit={handleEditSubmit}
            noValidate
          >
            <label className="sr-only" htmlFor={`edit-task-${id}`}>
              Editar título de la tarea
            </label>

            <input
              id={`edit-task-${id}`}
              className="task-item__edit-input"
              value={draftTitle}
              maxLength={TASK_TITLE_MAX_LENGTH}
              disabled={isBusy}
              onChange={(event) =>
                handleDraftChange(event.target.value)
              }
              aria-invalid={Boolean(error)}
              aria-describedby={
                error ? `edit-error-${id}` : undefined
              }
              autoFocus
            />

            {error && (
              <p
                id={`edit-error-${id}`}
                className="field-error"
                role="alert"
              >
                {error}
              </p>
            )}

            <div className="task-item__edit-actions">
              <button type="submit" disabled={isBusy}>
                Guardar
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                disabled={isBusy}
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <>
            <h3 className="task-item__title">{title}</h3>

            <TaskStatusBadge status={status} />

            <p className="task-item__date">
              Actualizada:{' '}
              <time dateTime={updatedAt}>
                {formatTaskDate(updatedAt)}
              </time>
            </p>
          </>
        )}
      </div>

      <div
        className="task-item__actions"
        role="group"
        aria-label={`Acciones para ${title}`}
      >
        {!isEditing && (
          <Link
            className="button-link button-link--secondary"
            to={`/tasks/${id}`}
          >
            Ver detalle
          </Link>
        )}
        <button
          type="button"
          onClick={() => void runBusy(() => onToggleStatus(task))}
          disabled={isBusy || isEditing}
        >
          {status === 'completed' ? 'Reabrir' : 'Completar'}
        </button>
        <button
          type="button"
          onClick={handleStartEdit}
          disabled={isBusy || isEditing}
        >
          Editar
        </button>
        {/* Solo ayuda visual: la API sigue respondiendo 403 a un user. */}
        {canDelete && (
          <button
            type="button"
            className="button-danger"
            onClick={() => void runBusy(() => onDeleteTask(task))}
            disabled={isBusy || isEditing}
          >
            Eliminar
          </button>
        )}
      </div>
    </article>
  );
}
