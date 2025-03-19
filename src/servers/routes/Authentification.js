// Initialisation de la route Connexion
import express from "express";
import { gestionConnexion } from "../controleurs/Authentification.js";

const router = express.Router();

router.post("/connexion", gestionConnexion);

router.put("/connexion", (req, res) => {
  res.send("connexion test  page");
});

router.post("/logout", (req, res) => {
  res.send("Connexion page");
});

export default router;
