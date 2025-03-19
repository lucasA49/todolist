import React, { useState } from "react";
import "./Styles/Inscirption.css";
import App from "./App";
import Footer from "./Footer";

function FormInscription() {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici, tu peux ajouter ta logique d'inscription
    console.log("Pseudo:", pseudo, "Email:", email, "Mot de passe:", password);
  };

  return (
    <>
      <>
        <App />
        <div className="inscription-container">
          <h2>Inscription</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="pseudo">Pseudo</label>
              <input
                type="text"
                id="pseudo"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </>
      <Footer />
    </>
  );
}

export default FormInscription;
