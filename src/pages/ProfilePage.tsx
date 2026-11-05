import { useAuth } from '../hooks/useAuth';
import { formatTaskDate } from '../utils/date';

// Usa el usuario ya cargado por AuthProvider: no hace solicitudes ni lee el token.
export function ProfilePage() {
  const { user } = useAuth();

  // ProtectedRoute solo representa esta página con sesión autenticada.
  if (!user) {
    return null;
  }

  return (
    <article className="panel task-detail" aria-labelledby="profile-title">
      <p className="section-heading__eyebrow">Perfil protegido</p>
      <h2 id="profile-title">{user.name}</h2>

      <dl className="task-detail__grid">
        <div>
          <dt>Correo electrónico</dt>
          <dd>{user.email}</dd>
        </div>
        <div>
          <dt>Rol</dt>
          <dd>{user.role}</dd>
        </div>
        <div>
          <dt>Fecha de registro</dt>
          <dd>
            <time dateTime={user.createdAt}>
              {formatTaskDate(user.createdAt)}
            </time>
          </dd>
        </div>
        <div>
          <dt>Última actualización</dt>
          <dd>
            <time dateTime={user.updatedAt}>
              {formatTaskDate(user.updatedAt)}
            </time>
          </dd>
        </div>
      </dl>
    </article>
  );
}
