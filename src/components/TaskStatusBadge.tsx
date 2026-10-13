import type { TaskStatus } from '../models/task.interface';

interface TaskStatusBadgeProps {
  status: TaskStatus;
}

export function TaskStatusBadge({ status }: TaskStatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${status}`}>
      {status === 'completed' ? 'Completada' : 'Pendiente'}
    </span>
  );
}
