import express from 'express';

// require("dotenv").config();
// const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { collectionRouter } from "./app/routers/index.js";

// app.use("/admin" /*,security*/, routerAdmin);
app.use("/collection", collectionRouter);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});