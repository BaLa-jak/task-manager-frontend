import { NavLink } from 'react-router';

function getLinkClassName({ isActive }: { isActive: boolean }): string {
  return isActive
    ? 'app-navigation__link app-navigation__link--active'
    : 'app-navigation__link';
}

export function AppNavigation() {
  return (
    <nav className="app-navigation" aria-label="Navegación principal">
      <ul className="app-navigation__list">
        <li>
          {/* end evita que Inicio quede activo en todas las rutas */}
          <NavLink to="/" end className={getLinkClassName}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/tasks" className={getLinkClassName}>
            Tareas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
