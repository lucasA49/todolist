import React, { useState } from "react";
import "./Styles/Logiin.css";

function Logiin() {
  // Modifier async function en function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    //Ajout de async ici
    event.preventDefault();
    try {
      fetch("http://localhost:3000/Connexion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Définit le type de contenu
        },
        body: JSON.stringify({ email, password }), // Convertit l'objet JavaScript en JSON pour l'envoyer
      })
        .then((response) => response.json()) // Convertit la réponse en JSON
        .then((data) => {
          console.log("Réponse du serveur :", data);
        })
        .catch((error) => {
          console.error("Erreur lors de la requête :", error);
        });

      console.log("Réponse du serveur:", data);
      // Traiter la réponse du serveur ici (par exemple, redirection, message de succès)
    } catch (error) {
      console.error("Erreur lors de la requête:", error);
    }
    console.log("Email:", email, "Mot de passe:", password);
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Logiin;
