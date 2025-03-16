import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Connexion from './Connexion';
import Inscription from './Inscription';
import App from './App';

// Définir les routes
const router = createBrowserRouter([
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/inscription",
    element: <Inscription />,
  }
]);

// Créer la racine de l'application et rendre le composant RouterProvider
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Assurez-vous que RouterProvider enveloppe tout le composant */}
  </React.StrictMode>
);
export default router;