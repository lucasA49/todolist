//server backend

import express from "express";

const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send("Ma reponse test !")
});
app.listen(3000, () => {
    console.log('Server is running on URL httjp://localhost:${PORT}');
});