//server backend
import express from "express";
import ConnexionRoutes from './routes/Authentification.js'; // AVEC .js à la fin
import bodyParser from "body-parser"; 
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = 3000;
// Middleware pour analyser les données du corps des requêtes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();

const corsOptions = {
    origin: process.env.FRONT_URL_FOR_CORS,
    methods: 'HEAD,GET, PUT, POST, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    optionsSuccessStatus: 204
};
// Utiliser le middleware CORS
app.use(cors(corsOptions));

// Appel de la route Connexion
app.use('/', ConnexionRoutes);

app.listen(3000, () => {
    console.log('Server is running on URL http://localhost:${PORT}');
});