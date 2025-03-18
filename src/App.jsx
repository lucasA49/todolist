import Connexion from "./Connexion.jsx";
import Inscription from "./FormInscription.jsx";
import "./Styles/App.css";
import "./routeur.jsx";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <div className="login">
        <NavLink className="inscri" to="/Inscription">
          Inscription
        </NavLink>
        <NavLink className="connex" to="/Connexion">
          Connexion
        </NavLink>
        </div>
    </>       
  );
}

export default App;
