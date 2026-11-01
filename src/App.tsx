import { useEffect, useState } from "react";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { TaskActions } from "./components/TaskActions";
import { TaskFilters } from "./components/TaskFilters";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { TaskPagination } from "./components/TaskPagination";
import { TaskSummary } from "./components/TaskSummary";
import { tasks as initialTasks } from "./data/tasks";
import type { Task } from "./models/task.interface";
import type { TaskFilter, TaskSort } from "./models/task-view.types";
import { getVisibleTasks } from "./services/task-query.service";
import { loadTasks, saveTasks } from "./services/task-storage.service";

const PAGE_SIZE = 5;

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks(initialTasks));
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<TaskFilter>("all");
  const [sortBy, setSortBy] = useState<TaskSort>("updated-desc");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const visibleTasks = getVisibleTasks(tasks, { query, filter, sortBy });

  const totalPages = Math.max(1, Math.ceil(visibleTasks.length / PAGE_SIZE));
  // Al eliminar la última tarea de la última página, se muestra la página anterior.
  const page = Math.min(currentPage, totalPages);
  const startIndex = (page - 1) * PAGE_SIZE;
  const paginatedTasks = visibleTasks.slice(startIndex, startIndex + PAGE_SIZE);

  const hasActiveCriteria = query.trim() !== "" || filter !== "all";

  const emptyMessage = hasActiveCriteria
    ? "No hay tareas que coincidan con la búsqueda y el filtro."
    : "Utiliza el formulario para registrar una nueva actividad.";

  const completedCount = tasks.filter(
    (task) => task.status === "completed",
  ).length;

  function handleAddTask(title: string) {
    const now = new Date().toISOString();

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  function handleToggleStatus(id: string) {
    const now = new Date().toISOString();

    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id !== id) {
          return task;
        }

        return {
          ...task,
          status: task.status === "pending" ? "completed" : "pending",
          updatedAt: now,
        };
      }),
    );
  }

  function handleEditTask(id: string, title: string) {
    const now = new Date().toISOString();

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, title, updatedAt: now } : task,
      ),
    );
  }

  function handleDeleteTask(id: string) {
    const selectedTask = tasks.find((task) => task.id === id);

    if (!selectedTask) {
      return;
    }

    const shouldDelete = window.confirm(
      `¿Eliminar la tarea "${selectedTask.title}"?`,
    );

    if (!shouldDelete) {
      return;
    }

    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id),
    );
  }

  function handleClearCompleted() {
    const shouldClear = window.confirm(
      `¿Eliminar ${completedCount} tarea(s) completada(s)?`,
    );

    if (!shouldClear) {
      return;
    }

    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.status !== "completed"),
    );
  }

  function handleQueryChange(value: string) {
    setQuery(value);
    setCurrentPage(1);
  }

  function handleFilterChange(value: TaskFilter) {
    setFilter(value);
    setCurrentPage(1);
  }

  function handleClearCriteria() {
    setQuery("");
    setFilter("all");
    setSortBy("updated-desc");
    setCurrentPage(1);
  }

  return (
    <div className="app-shell">
      <AppHeader />

      <main className="app-main">
        <TaskForm onAddTask={handleAddTask} />

        <TaskFilters
          query={query}
          filter={filter}
          sortBy={sortBy}
          resultCount={visibleTasks.length}
          onQueryChange={handleQueryChange}
          onFilterChange={handleFilterChange}
          onSortChange={setSortBy}
          onClear={handleClearCriteria}
        />

        <TaskSummary tasks={tasks} />

        <TaskActions
          completedCount={completedCount}
          onClearCompleted={handleClearCompleted}
        />

        <TaskList
          tasks={paginatedTasks}
          emptyMessage={emptyMessage}
          onToggleStatus={handleToggleStatus}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />

        {totalPages > 1 && (
          <TaskPagination
            currentPage={page}
            totalPages={totalPages}
            onPrevious={() => setCurrentPage(page - 1)}
            onNext={() => setCurrentPage(page + 1)}
          />
        )}
      </main>

      <AppFooter courseName="Diseño Frontend con Frameworks" />
    </div>
  );
}
