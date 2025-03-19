import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Connexion from "./Pages/Connexion";
import FormInscription from "./FormInscription";
import Home from "./Pages/Home";
// Définir les routes
const router = createBrowserRouter([
  {
    path: "/connexion",
    element: <Connexion />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/inscription",
    element: <FormInscription />,
  },
]);

// Créer la racine de l'application et rendre le composant RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
    {/* Assurez-vous que RouterProvider enveloppe tout le composant */}
  </React.StrictMode>
);
export default router;
