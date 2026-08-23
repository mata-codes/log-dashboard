import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LogPage } from './features/logs/LogPage';
import './assets/styles/main.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogPage />,
  },
  // Aquí agregaremos luego /login, /analytics, /settings
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
