import Connexion from "./Connexion.jsx";
import Inscription from "./Inscription.jsx";
import "./Styles/App.css";
import "./routeur.jsx";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <>
    
      <NavLink className="inscri" to="/Inscription">Inscription</NavLink>
      <NavLink className="connex" to="/Connexion">Connexion</NavLink>
     <div className="prsweboite">
      {/* <p className="presweb">Présentation du site </p> */}
     </div>
    </>
  );
}

export default App;
