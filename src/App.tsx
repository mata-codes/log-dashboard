import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';
import { LogPage } from './features/logs/LogPage';
import { LoginPage } from './features/auth/LoginPage';
import { SignupPage } from './features/auth/SignupPage';
import { AnalyticsPage } from './features/analytics/AnalyticsPage';
import './assets/styles/main.css';

// Componente Layout que envuelve la aplicación
const AppLayout = () => {
  return (
    <div>
      <nav style={{ background: 'var(--bg-surface)', padding: '1rem 2rem', borderBottom: 'var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0 }}>LogMaster</h3>
        <div className="flex-gap">
          <Link to="/" className="btn">Logs</Link>
          <Link to="/analytics" className="btn">Analytics</Link>
          <Link to="/settings" className="btn">Settings</Link>
          <Link to="/login" className="btn btn-primary">Log In</Link>
        </div>
      </nav>
      <main>
        {/* Aquí se renderiza la vista activa */}
        <Outlet /> 
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <LogPage /> },
      { path: "/analytics", element: <AnalyticsPage /> },
      // Aquí agregaremos Settings cuando lo necesites
    ]
  },
  // Vistas sin el menú de navegación (Layout independiente)
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
