import { TaskActions } from '../components/TaskActions';
import { TaskFilters } from '../components/TaskFilters';
import { TaskForm } from '../components/TaskForm';
import { TaskList } from '../components/TaskList';
import { TaskPagination } from '../components/TaskPagination';
import { TaskSummary } from '../components/TaskSummary';
import type { Task } from '../models/task.interface';
import type { TaskFilter, TaskSort } from '../models/task-view.types';

interface TasksPageProps {
  tasks: Task[];
  visibleCount: number;
  paginatedTasks: Task[];
  page: number;
  totalPages: number;
  completedCount: number;
  query: string;
  filter: TaskFilter;
  sortBy: TaskSort;
  emptyMessage: string;
  onAddTask: (title: string) => void;
  onQueryChange: (value: string) => void;
  onFilterChange: (value: TaskFilter) => void;
  onSortChange: (value: TaskSort) => void;
  onClearCriteria: () => void;
  onPageChange: (page: number) => void;
  onClearCompleted: () => void;
  onToggleStatus: (id: string) => void;
  onEditTask: (id: string, title: string) => void;
  onDeleteTask: (id: string) => boolean;
}

export function TasksPage({
  tasks,
  visibleCount,
  paginatedTasks,
  page,
  totalPages,
  completedCount,
  query,
  filter,
  sortBy,
  emptyMessage,
  onAddTask,
  onQueryChange,
  onFilterChange,
  onSortChange,
  onClearCriteria,
  onPageChange,
  onClearCompleted,
  onToggleStatus,
  onEditTask,
  onDeleteTask,
}: TasksPageProps) {
  return (
    <div className="page-stack">
      <section
        className="page-introduction"
        aria-labelledby="tasks-page-title"
      >
        <p className="section-heading__eyebrow">Gestión</p>
        <h2 id="tasks-page-title">Mis tareas</h2>
        <p>
          Registra, consulta y actualiza las actividades almacenadas en el
          navegador.
        </p>
      </section>

      <TaskForm onAddTask={onAddTask} />

      <TaskFilters
        query={query}
        filter={filter}
        sortBy={sortBy}
        resultCount={visibleCount}
        onQueryChange={onQueryChange}
        onFilterChange={onFilterChange}
        onSortChange={onSortChange}
        onClear={onClearCriteria}
      />

      <TaskSummary tasks={tasks} />

      <TaskActions
        completedCount={completedCount}
        onClearCompleted={onClearCompleted}
      />

      <TaskList
        tasks={paginatedTasks}
        emptyMessage={emptyMessage}
        onToggleStatus={onToggleStatus}
        onEditTask={onEditTask}
        onDeleteTask={onDeleteTask}
      />

      {totalPages > 1 && (
        <TaskPagination
          currentPage={page}
          totalPages={totalPages}
          onPrevious={() => onPageChange(page - 1)}
          onNext={() => onPageChange(page + 1)}
        />
      )}
    </div>
  );
}
